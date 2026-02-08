"use client";

import React, { useState, useEffect } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import { chatService } from '@/services/chatService';
import { useAuth } from '@/components/auth/AuthProvider';
import { createChatBotMessage } from 'react-chatbot-kit';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface ChatInterfaceProps {
    onAction?: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onAction }) => {
    const { user, isAuthenticated, isLoading } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [conversationId, setConversationId] = useState<string | undefined>(undefined);

    const userId = user?.id;

    const [isLoadingHistory, setIsLoadingHistory] = useState(false);

    useEffect(() => {
        if (userId) {
            loadRecentHistory();
        }
    }, [userId]);

    const loadRecentHistory = async () => {
        try {
            setIsLoadingHistory(true);
            const { conversations } = await chatService.getConversations(userId!);
            if (conversations.length > 0) {
                const latest = conversations[0];
                setConversationId(latest.id);
                // We don't necessarily load all messages into the widget's initial state here 
                // because react-chatbot-kit handles its own message state.
                // However, we can fetch them and inject them into the initial state if we wanted.
                // For now, setting the ID is enough to continue the same session.
            }
        } catch (err) {
            console.error('Failed to load chat history:', err);
        } finally {
            setIsLoadingHistory(false);
        }
    };

    if (isLoading || !isAuthenticated || !userId) return null;

    const config = {
        initialMessages: [createChatBotMessage(`Hi! I'm your Todo AI assistant. You can ask me to add, list, complete, or delete tasks. How can I help?`, {})],
        botName: 'TodoAssistant',
        customStyles: {
            botMessageBox: {
                backgroundColor: '#3b82f6',
            },
            chatButton: {
                backgroundColor: '#3b82f6',
            },
        },
    };

    const MessageParser = ({ children, actions }: any) => {
        const parse = (message: string) => {
            actions.handleUserMessage(message);
        };

        return (
            <div>
                {React.Children.map(children, (child) => {
                    return React.cloneElement(child, {
                        parse: parse,
                        actions,
                    });
                })}
            </div>
        );
    };

    const ActionProvider = ({ createChatBotMessage, setState, children }: any) => {
        const handleUserMessage = async (message: string) => {
            try {
                const response = await chatService.sendMessage(userId, message, conversationId);

                if (response.conversation_id && !conversationId) {
                    setConversationId(response.conversation_id);
                }

                const botMessage = createChatBotMessage(response.response, {});

                setState((prev: any) => ({
                    ...prev,
                    messages: [...prev.messages, botMessage],
                }));

                // If tools were called, it's likely something changed. Trigger refresh.
                if (response.tool_calls && response.tool_calls.length > 0) {
                    if (onAction) onAction();
                    // Also trigger a global event for other components to refresh
                    window.dispatchEvent(new CustomEvent('todo-refresh-tasks'));
                }
            } catch (error) {
                console.error('Chat error:', error);
                const errorMessage = createChatBotMessage("Sorry, I encountered an error. Please try again.", {});
                setState((prev: any) => ({
                    ...prev,
                    messages: [...prev.messages, errorMessage],
                }));
            }
        };

        return (
            <div>
                {React.Children.map(children, (child) => {
                    return React.cloneElement(child, {
                        actions: {
                            handleUserMessage,
                        },
                    });
                })}
            </div>
        );
    };

    return (
        <div className="fixed bottom-6 right-24 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 shadow-2xl rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 w-[350px] sm:w-[400px]"
                    >
                        <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
                            <div className="flex items-center gap-2">
                                <ChatBubbleLeftRightIcon className="w-6 h-6" />
                                <span className="font-bold">Todo AI Chat</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 p-1 rounded-full transition-colors">
                                <XMarkIcon className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="bg-white dark:bg-gray-800 chatbot-container">
                            <Chatbot
                                config={config}
                                messageParser={MessageParser}
                                actionProvider={ActionProvider}
                                placeholderText="Type your request here..."
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
            >
                {isOpen ? <XMarkIcon className="w-8 h-8" /> : <ChatBubbleLeftRightIcon className="w-8 h-8" />}
            </motion.button>

            <style jsx global>{`
        .react-chatbot-kit-chat-container {
          width: 100% !important;
          border-radius: 0 0 1rem 1rem;
          overflow: hidden;
        }
        .react-chatbot-kit-chat-inner-container {
          background-color: transparent !important;
          display: flex;
          flex-direction: column;
        }
        .react-chatbot-kit-chat-message-container {
          padding: 15px !important;
          height: 380px !important; /* Slightly reduced to avoid clipping */
          overflow-y: auto !important;
          background-color: #ffffff;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        .react-chatbot-kit-chat-message-container::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
        .dark .react-chatbot-kit-chat-message-container {
          background-color: #0f172a !important; /* matches slate-900 */
        }
        .react-chatbot-kit-chat-bot-message {
          background-color: #3b82f6 !important;
          color: white !important;
          margin-left: 0 !important;
        }
        .react-chatbot-kit-user-chat-message {
          background-color: #e5e7eb !important;
          color: #1f2937 !important;
        }
        .dark .react-chatbot-kit-chat-bot-message {
          background-color: #3b82f6 !important;
          color: #ffffff !important;
        }
        .dark .react-chatbot-kit-user-chat-message {
          background-color: #334155 !important; /* matches slate-700 */
          color: #f8fafc !important;
        }
        .react-chatbot-kit-chat-input-container {
          border-top: 1px solid #e5e7eb !important;
          padding: 10px !important;
          background-color: #f9fafb !important;
        }
        .dark .react-chatbot-kit-chat-input-container {
          border-top: 1px solid #334155 !important;
          background-color: #1e293b !important;
        }
        .react-chatbot-kit-chat-input {
          padding: 10px 15px !important;
          border-radius: 12px !important;
          border: 1px solid #d1d5db !important;
          font-size: 0.9rem !important;
        }
        .dark .react-chatbot-kit-chat-input {
          background-color: #0f172a !important;
          color: white !important;
          border: 1px solid #334155 !important;
        }
        .react-chatbot-kit-chat-btn-send {
          border-radius: 10px !important;
          margin-left: 8px !important;
        }
      `}</style>
        </div>
    );
};

export default ChatInterface;
