"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { chatService, ChatMessage, Conversation } from '@/services/chatService';
import { useAuth } from '@/components/auth/AuthProvider';
import ProtectedRoute from '@/components/ui/ProtectedRoute';
import LoadingSkeleton from '@/components/ui/LoadingSkeleton';
import ErrorMessage from '@/components/ui/ErrorMessage';
import { motion } from 'framer-motion';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

const ChatDetailPage = () => {
    const params = useParams();
    const router = useRouter();
    const { user } = useAuth();
    const userId = user?.id;
    const conversationId = params.id as string;

    const [conversation, setConversation] = useState<Conversation | null>(null);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (userId && conversationId) {
            loadConversation();
        }
    }, [userId, conversationId]);

    const loadConversation = async () => {
        try {
            setLoading(true);
            const data = await chatService.getConversationDetails(userId!, conversationId);
            setConversation(data.conversation);
            setMessages(data.messages);
        } catch (err: any) {
            setError(err.message || 'Failed to load conversation');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <LoadingSkeleton />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <ProtectedRoute>
            <div className="max-w-4xl mx-auto px-4 py-8 mt-20">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors mb-6"
                >
                    <ChevronLeftIcon className="w-5 h-5" />
                    Back to Dashboard
                </button>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div className="bg-blue-600 p-6 text-white">
                        <h1 className="text-2xl font-bold">{conversation?.title || 'Chat History'}</h1>
                        <p className="opacity-80 text-sm">Started on {conversation ? new Date(conversation.created_at).toLocaleDateString() : ''}</p>
                    </div>

                    <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
                        {messages.map((msg, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`max-w-[80%] p-4 rounded-2xl ${msg.role === 'user'
                                    ? 'bg-blue-600 text-white rounded-tr-none'
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-none'
                                    }`}>
                                    <p className="whitespace-pre-wrap">{msg.content}</p>
                                    <span className="text-[10px] opacity-50 block mt-2">
                                        {msg.created_at ? new Date(msg.created_at).toLocaleTimeString() : ''}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default ChatDetailPage;
