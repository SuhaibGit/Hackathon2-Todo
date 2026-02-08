"use client";

import React, { useEffect, useState } from 'react';
import { chatService, Conversation } from '@/services/chatService';
import { useAuth } from '@/components/auth/AuthProvider';
import ProtectedRoute from '@/components/ui/ProtectedRoute';
import LoadingSkeleton from '@/components/ui/LoadingSkeleton';
import ErrorMessage from '@/components/ui/ErrorMessage';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChatBubbleLeftRightIcon, CalendarIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const ConversationsPage = () => {
    const { user } = useAuth();
    const userId = user?.id;

    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (userId) {
            loadConversations();
        }
    }, [userId]);

    const loadConversations = async () => {
        try {
            setLoading(true);
            const data = await chatService.getConversations(userId!);
            setConversations(data.conversations);
        } catch (err: any) {
            setError(err.message || 'Failed to load conversations');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <LoadingSkeleton />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <ProtectedRoute>
            <div className="max-w-4xl mx-auto px-4 py-8 mt-20">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-black text-gray-800 dark:text-white">Chat History</h1>
                        <p className="text-gray-500 dark:text-gray-400">Your past conversations with the AI</p>
                    </div>
                    <Link
                        href="/dashboard"
                        className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 flex items-center gap-2"
                    >
                        <ChatBubbleLeftRightIcon className="w-5 h-5" />
                        New Chat
                    </Link>
                </div>

                {conversations.length === 0 ? (
                    <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 text-center shadow-xl border border-dashed border-gray-200 dark:border-gray-700">
                        <ChatBubbleLeftRightIcon className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                        <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200">No conversations yet</h3>
                        <p className="text-gray-500 mt-2">Start a new chat from the dashboard!</p>
                        <Link href="/dashboard" className="mt-6 inline-block text-blue-600 font-bold hover:underline">
                            Go to Dashboard
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-4">
                        {conversations.map((conv) => (
                            <Link key={conv.id} href={`/chat/${conv.id}`}>
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 flex justify-between items-center hover:border-blue-500 transition-all"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl text-blue-600">
                                            <ChatBubbleLeftRightIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-800 dark:text-white">{conv.title}</h3>
                                            <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <CalendarIcon className="w-4 h-4" />
                                                    {new Date(conv.updated_at).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </ProtectedRoute>
    );
};

export default ConversationsPage;
