const getApiBaseUrl = () => {
    if (typeof window !== 'undefined') {
        // Client-side: use environment variable or fallback
        return process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8001';
    }
    // Server-side: return a placeholder (API calls should only happen client-side)
    return process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8001';
};

export interface ChatMessage {
    role: 'user' | 'assistant' | 'tool';
    content: string;
    id?: string;
    created_at?: string;
}

export interface ChatResponse {
    response: string;
    conversation_id: string;
    tool_calls?: any[];
}

export interface Conversation {
    id: string;
    title: string;
    user_id: string;
    created_at: string;
    updated_at: string;
}

const getAuthToken = () => {
    if (typeof window !== 'undefined') {
        return window.localStorage.getItem('todo_auth_token');
    }
    return null;
};

export const chatService = {
    sendMessage: async (userId: string, message: string, conversationId?: string): Promise<ChatResponse> => {
        const API_BASE_URL = getApiBaseUrl();
        const url = new URL(`${API_BASE_URL}/api/${userId}/chat`);
        if (conversationId) {
            url.searchParams.append('conversation_id', conversationId);
        }

        const token = getAuthToken();

        const response = await fetch(url.toString(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ message }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.detail || 'Failed to send message');
        }

        return response.json();
    },

    getConversations: async (userId: string): Promise<{ conversations: Conversation[], total: number }> => {
        const API_BASE_URL = getApiBaseUrl();
        const token = getAuthToken();
        const response = await fetch(`${API_BASE_URL}/api/${userId}/conversations`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch conversations');
        }

        return response.json();
    },

    getConversationDetails: async (userId: string, conversationId: string): Promise<{ conversation: Conversation, messages: ChatMessage[] }> => {
        const API_BASE_URL = getApiBaseUrl();
        const token = getAuthToken();
        const response = await fetch(`${API_BASE_URL}/api/${userId}/conversations/${conversationId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch conversation details');
        }

        return response.json();
    }
};
