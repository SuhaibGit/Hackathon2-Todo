module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiClient",
    ()=>ApiClient,
    "apiClient",
    ()=>apiClient
]);
// Configuration for API endpoints
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:8001") || 'http://localhost:8001';
const AUTH_TOKEN_KEY = 'todo_auth_token';
// Helper function to get JWT token from localStorage
const getAuthToken = ()=>{
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    // Check if it's a mock token and clear it if so
    if (token && token.startsWith('mock.')) {
        console.log('Found mock token, clearing it');
        localStorage.removeItem(AUTH_TOKEN_KEY);
        return null;
    }
    return token;
};
// Helper function to get user ID from token
const getCurrentUserId = ()=>{
    const token = getAuthToken();
    if (!token) return null;
    try {
        // Decode JWT payload (second part after the dot)
        const tokenParts = token.split('.');
        if (tokenParts.length !== 3) return null;
        const payload = tokenParts[1];
        const decodedPayload = atob(payload);
        const parsed = JSON.parse(decodedPayload);
        return parsed.sub || parsed.userId;
    } catch (e) {
        console.error('Error parsing token:', e);
        // If there's an error parsing the token, remove it from storage
        localStorage.removeItem(AUTH_TOKEN_KEY);
        return null;
    }
};
// Generic API request helper
const apiRequest = async (endpoint, options = {})=>{
    const token = getAuthToken();
    const headers = {
        'Content-Type': 'application/json',
        ...token ? {
            'Authorization': `Bearer ${token}`
        } : {},
        ...options.headers
    };
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers
    });
    if (!response.ok) {
        const errorData = await response.json().catch(()=>({}));
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
    }
    return response.json();
};
class ApiClient {
    loadingStates = new Map();
    isLoading(operation) {
        return this.loadingStates.get(operation) || false;
    }
    setLoading(operation, loading) {
        this.loadingStates.set(operation, loading);
    }
    // Authentication methods
    async signup(email, password) {
        this.setLoading('signup', true);
        try {
            // Clear any existing mock tokens before signing up
            localStorage.removeItem(AUTH_TOKEN_KEY);
            const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const result = await response.json();
            if (response.ok && result.token) {
                localStorage.setItem(AUTH_TOKEN_KEY, result.token);
                return {
                    success: true,
                    user: result.user,
                    token: result.token
                };
            } else {
                return {
                    success: false,
                    error: result.detail || 'Signup failed'
                };
            }
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        } finally{
            this.setLoading('signup', false);
        }
    }
    async signin(email, password) {
        this.setLoading('signin', true);
        try {
            // Clear any existing mock tokens before signing in
            localStorage.removeItem(AUTH_TOKEN_KEY);
            const response = await fetch(`${API_BASE_URL}/api/auth/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const result = await response.json();
            if (response.ok && result.token) {
                localStorage.setItem(AUTH_TOKEN_KEY, result.token);
                return {
                    success: true,
                    user: result.user,
                    token: result.token
                };
            } else {
                return {
                    success: false,
                    error: result.detail || 'Signin failed'
                };
            }
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        } finally{
            this.setLoading('signin', false);
        }
    }
    async signout() {
        this.setLoading('signout', true);
        try {
            // Remove token from localStorage
            localStorage.removeItem(AUTH_TOKEN_KEY);
            // In a real app, we might also call a backend logout endpoint
            return {
                success: true,
                message: 'Successfully signed out'
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        } finally{
            this.setLoading('signout', false);
        }
    }
    getCurrentUser() {
        const token = getAuthToken();
        if (!token) return null;
        try {
            const tokenParts = token.split('.');
            if (tokenParts.length !== 3) return null;
            const payload = tokenParts[1];
            const decodedPayload = atob(payload);
            const parsed = JSON.parse(decodedPayload);
            return {
                id: parsed.sub || parsed.userId,
                email: parsed.email,
                createdAt: new Date(parsed.iat * 1000),
                lastLoginAt: new Date()
            };
        } catch (e) {
            console.error('Error getting current user:', e);
            return null;
        }
    }
    isAuthenticated() {
        const token = getAuthToken();
        if (!token) return false;
        try {
            const tokenParts = token.split('.');
            if (tokenParts.length !== 3) {
                // If the token format is wrong, remove it
                localStorage.removeItem(AUTH_TOKEN_KEY);
                return false;
            }
            const payload = tokenParts[1];
            const decodedPayload = atob(payload);
            const parsed = JSON.parse(decodedPayload);
            const now = Math.floor(Date.now() / 1000);
            const isValid = parsed.exp > now; // Check if token is not expired
            // If token is expired, remove it
            if (!isValid) {
                localStorage.removeItem(AUTH_TOKEN_KEY);
            }
            return isValid;
        } catch (e) {
            // If there's an error parsing the token, remove it
            localStorage.removeItem(AUTH_TOKEN_KEY);
            return false;
        }
    }
    // Task methods
    async getTasks() {
        this.setLoading('getTasks', true);
        try {
            if (!this.isAuthenticated()) {
                return {
                    success: false,
                    error: 'Unauthorized'
                };
            }
            const userId = getCurrentUserId();
            if (!userId) {
                return {
                    success: false,
                    error: 'No user ID found'
                };
            }
            const tasks = await apiRequest(`/api/${userId}/tasks/`);
            this.cacheTasks(tasks);
            return {
                success: true,
                data: tasks
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        } finally{
            this.setLoading('getTasks', false);
        }
    }
    async getTask(taskId) {
        this.setLoading('getTask', true);
        try {
            if (!this.isAuthenticated()) {
                return {
                    success: false,
                    error: 'Unauthorized'
                };
            }
            const userId = getCurrentUserId();
            if (!userId) {
                return {
                    success: false,
                    error: 'No user ID found'
                };
            }
            const task = await apiRequest(`/api/${userId}/tasks/${taskId}`);
            this.cacheTask(task);
            return {
                success: true,
                data: task
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        } finally{
            this.setLoading('getTask', false);
        }
    }
    async createTask(title, description) {
        this.setLoading('createTask', true);
        try {
            if (!this.isAuthenticated()) {
                return {
                    success: false,
                    error: 'Unauthorized'
                };
            }
            if (!title || title.trim().length < 1 || title.trim().length > 200) {
                return {
                    success: false,
                    error: 'Title must be between 1 and 200 characters'
                };
            }
            const userId = getCurrentUserId();
            if (!userId) {
                return {
                    success: false,
                    error: 'No user ID found'
                };
            }
            const taskData = {
                title: title.trim(),
                description: description?.trim(),
                completed: false
            };
            const newTask = await apiRequest(`/api/${userId}/tasks/`, {
                method: 'POST',
                body: JSON.stringify(taskData)
            });
            this.cacheTask(newTask);
            return {
                success: true,
                data: newTask
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        } finally{
            this.setLoading('createTask', false);
        }
    }
    addToCache(task) {
        this.cacheTask(task);
    }
    async refreshTasks() {
        return await this.getTasks();
    }
    async updateTask(taskId, updates) {
        this.setLoading('updateTask', true);
        try {
            if (!this.isAuthenticated()) {
                return {
                    success: false,
                    error: 'Unauthorized'
                };
            }
            const userId = getCurrentUserId();
            if (!userId) {
                return {
                    success: false,
                    error: 'No user ID found'
                };
            }
            const updatedTask = await apiRequest(`/api/${userId}/tasks/${taskId}`, {
                method: 'PUT',
                body: JSON.stringify(updates)
            });
            this.cacheTask(updatedTask);
            return {
                success: true,
                data: updatedTask
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        } finally{
            this.setLoading('updateTask', false);
        }
    }
    async toggleTask(taskId) {
        this.setLoading('toggleTask', true);
        try {
            if (!this.isAuthenticated()) {
                return {
                    success: false,
                    error: 'Unauthorized'
                };
            }
            const userId = getCurrentUserId();
            if (!userId) {
                return {
                    success: false,
                    error: 'No user ID found'
                };
            }
            // Optimistic update: temporarily flip the completed status
            const tempTask = {
                id: taskId,
                completed: !this.getCachedTaskCompletionStatus(taskId)
            };
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const toggledTask = await apiRequest(`/api/${userId}/tasks/${taskId}/toggle`, {
                method: 'PATCH'
            });
            // Remove optimistic update marker
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return {
                success: true,
                data: toggledTask
            };
        } catch (error) {
            // Revert optimistic update if there was an error
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return {
                success: false,
                error: error.message
            };
        } finally{
            this.setLoading('toggleTask', false);
        }
    }
    optimisticUpdates = new Map();
    taskCache = new Map();
    getCachedTaskCompletionStatus(taskId) {
        const cached = this.taskCache.get(taskId);
        if (cached) return cached.completed;
        const optimistic = this.optimisticUpdates.get(taskId);
        if (optimistic) return !!optimistic.completed;
        return false; // default value
    }
    cacheTask(task) {
        this.taskCache.set(task.id, task);
    }
    cacheTasks(tasks) {
        tasks.forEach((task)=>this.cacheTask(task));
    }
    removeCachedTask(taskId) {
        this.taskCache.delete(taskId);
    }
    getCachedTask(taskId) {
        return this.taskCache.get(taskId);
    }
    getAllCachedTasks() {
        return Array.from(this.taskCache.values());
    }
    async deleteTask(taskId) {
        this.setLoading('deleteTask', true);
        try {
            if (!this.isAuthenticated()) {
                return {
                    success: false,
                    error: 'Unauthorized'
                };
            }
            const userId = getCurrentUserId();
            if (!userId) {
                return {
                    success: false,
                    error: 'No user ID found'
                };
            }
            await apiRequest(`/api/${userId}/tasks/${taskId}`, {
                method: 'DELETE'
            });
            this.removeCachedTask(taskId);
            return {
                success: true,
                message: 'Task deleted successfully'
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        } finally{
            this.setLoading('deleteTask', false);
        }
    }
}
const apiClient = new ApiClient();
}),
"[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/auth/AuthProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/lib/api.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useAuth = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
const AuthProvider = ({ children })=>{
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Check authentication status on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkAuthStatus = async ()=>{
            setIsLoading(true);
            // We'll use our centralized API client to check auth status
            const currentUser = window.localStorage.getItem('todo_auth_token') ? JSON.parse(atob(window.localStorage.getItem('todo_auth_token').split('.')[1])) : null;
            if (currentUser) {
                const userData = {
                    id: currentUser.sub || currentUser.userId,
                    email: currentUser.email,
                    createdAt: new Date(currentUser.iat * 1000)
                };
                setUser(userData);
            }
            setIsLoading(false);
        };
        checkAuthStatus();
    }, []);
    const signIn = async (email, password)=>{
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].signin(email, password);
            if (result.success && result.user) {
                setUser(result.user);
                return {
                    success: true
                };
            } else {
                return {
                    success: false,
                    error: result.error || 'Sign in failed'
                };
            }
        } catch (error) {
            console.error('Sign in error:', error);
            return {
                success: false,
                error: 'Network error occurred'
            };
        }
    };
    const signUp = async (email, password)=>{
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].signup(email, password);
            if (result.success && result.user) {
                setUser(result.user);
                return {
                    success: true
                };
            } else {
                return {
                    success: false,
                    error: result.error || 'Sign up failed'
                };
            }
        } catch (error) {
            console.error('Sign up error:', error);
            return {
                success: false,
                error: 'Network error occurred'
            };
        }
    };
    const signOut = async ()=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].signout();
            setUser(null);
        } catch (error) {
            console.error('Sign out error:', error);
        }
    };
    const value = {
        user,
        isAuthenticated: !!user,
        isLoading,
        signIn,
        signUp,
        signOut
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/auth/AuthProvider.tsx",
        lineNumber: 104,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/contexts/ThemeContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeContext",
    ()=>ThemeContext,
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ThemeProvider = ({ children })=>{
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('light');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check for saved theme in localStorage or system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme) {
            setTheme(savedTheme);
        } else if (systemPrefersDark) {
            setTheme('dark');
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Apply theme to document with smooth transition
        const root = document.documentElement;
        console.log('Theme changed to:', theme);
        // Add transition class to body for smooth theme switching
        document.body.classList.add('theme-transition-all');
        // Remove existing theme classes and add new one
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        // Save theme to localStorage
        localStorage.setItem('theme', theme);
        // Clean up transition class after transition completes
        const cleanupTransition = setTimeout(()=>{
            document.body.classList.remove('theme-transition-all');
        }, 300); // Match the CSS transition duration
        return ()=>clearTimeout(cleanupTransition);
    }, [
        theme
    ]);
    const toggleTheme = ()=>{
        console.log('Toggle theme called, current:', theme);
        setTheme((prev)=>prev === 'light' ? 'dark' : 'light');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            toggleTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/contexts/ThemeContext.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useTheme = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
}),
"[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/hooks/useTheme.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/contexts/ThemeContext.tsx [app-ssr] (ecmascript)");
;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/hooks/useTheme.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/contexts/ThemeContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SunIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SunIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/@heroicons/react/24/outline/esm/SunIcon.js [app-ssr] (ecmascript) <export default as SunIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MoonIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/@heroicons/react/24/outline/esm/MoonIcon.js [app-ssr] (ecmascript) <export default as MoonIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircleIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/@heroicons/react/24/outline/esm/UserCircleIcon.js [app-ssr] (ecmascript) <export default as UserCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/@headlessui/react/dist/components/menu/menu.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/@headlessui/react/dist/components/transition/transition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/lib/api.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const Header = ()=>{
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleLogout = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].signout();
        router.push('/auth/signin');
    };
    const handleChatHistory = ()=>{
        router.push('/chat');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm py-3 sm:py-4 px-4 sm:px-6 z-50 border-b border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300 pointer-events-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-lg sm:text-xl font-bold text-gray-800 dark:text-white",
                    children: "Todo App"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/Header.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-2 sm:space-x-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: toggleTheme,
                            className: "p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer pointer-events-auto relative z-50",
                            "aria-label": `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`,
                            children: theme === 'light' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MoonIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonIcon$3e$__["MoonIcon"], {
                                className: "h-4 w-4 sm:h-5 sm:w-5 text-gray-700 dark:text-gray-300"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/Header.tsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SunIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SunIcon$3e$__["SunIcon"], {
                                className: "h-4 w-4 sm:h-5 sm:w-5 text-yellow-400"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/Header.tsx",
                                lineNumber: 48,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/Header.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Menu"], {
                            as: "div",
                            className: "relative z-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Menu"].Button, {
                                    className: "flex items-center space-x-1 sm:space-x-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircleIcon$3e$__["UserCircleIcon"], {
                                        className: "h-5 w-5 sm:h-6 sm:w-6 text-gray-700 dark:text-gray-300"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/Header.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/Header.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"], {
                                    as: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"],
                                    enter: "transition ease-out duration-100",
                                    enterFrom: "transform opacity-0 scale-95",
                                    enterTo: "transform opacity-100 scale-100",
                                    leave: "transition ease-in duration-75",
                                    leaveFrom: "transform opacity-100 scale-100",
                                    leaveTo: "transform opacity-0 scale-95",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Menu"].Items, {
                                        className: "absolute right-0 mt-2 w-40 sm:w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md py-1 z-50 focus:outline-none ring-1 ring-black ring-opacity-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Menu"].Item, {
                                                children: ({ active })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleChatHistory,
                                                        className: `${active ? 'bg-gray-100 dark:bg-gray-700' : ''} block w-full text-left px-3 sm:px-4 py-2 text-sm text-gray-700 dark:text-gray-300`,
                                                        children: "Chat History"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/Header.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/Header.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Menu"].Item, {
                                                children: ({ active })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleLogout,
                                                        className: `${active ? 'bg-gray-100 dark:bg-gray-700' : ''} block w-full text-left px-3 sm:px-4 py-2 text-sm text-red-600`,
                                                        children: "Logout"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/Header.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/Header.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/Header.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/Header.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/Header.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/Header.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/Header.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/Header.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Header;
}),
"[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 py-4 px-4 mt-auto relative z-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row justify-between items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-600 dark:text-gray-400 text-xs sm:text-sm",
                    children: [
                        "© ",
                        currentYear,
                        " Todo App. All rights reserved."
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/Footer.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2 sm:mt-0 flex flex-wrap justify-center gap-3 sm:gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-xs sm:text-sm transition-colors hover:-translate-y-0.5",
                            children: "Privacy"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/Footer.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-xs sm:text-sm transition-colors hover:-translate-y-0.5",
                            children: "Terms"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/Footer.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-xs sm:text-sm transition-colors hover:-translate-y-0.5",
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/Footer.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/Footer.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/Footer.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/Footer.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Footer;
}),
"[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/services/chatService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chatService",
    ()=>chatService
]);
const getApiBaseUrl = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Server-side: return a placeholder (API calls should only happen client-side)
    return ("TURBOPACK compile-time value", "http://localhost:8001") || 'http://localhost:8001';
};
const getAuthToken = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return null;
};
const chatService = {
    sendMessage: async (userId, message, conversationId)=>{
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
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                message
            })
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.detail || 'Failed to send message');
        }
        return response.json();
    },
    getConversations: async (userId)=>{
        const API_BASE_URL = getApiBaseUrl();
        const token = getAuthToken();
        const response = await fetch(`${API_BASE_URL}/api/${userId}/conversations`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch conversations');
        }
        return response.json();
    },
    getConversationDetails: async (userId, conversationId)=>{
        const API_BASE_URL = getApiBaseUrl();
        const token = getAuthToken();
        const response = await fetch(`${API_BASE_URL}/api/${userId}/conversations/${conversationId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch conversation details');
        }
        return response.json();
    }
};
}),
"[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ChatInterface.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$react$2d$chatbot$2d$kit$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/react-chatbot-kit/build/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$services$2f$chatService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/services/chatService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/auth/AuthProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/@heroicons/react/24/outline/esm/ChatBubbleLeftRightIcon.js [app-ssr] (ecmascript) <export default as ChatBubbleLeftRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js [app-ssr] (ecmascript) <export default as XMarkIcon>");
"use client";
;
;
;
;
;
;
;
;
;
;
const ChatInterface = ({ onAction })=>{
    const { user, isAuthenticated, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [conversationId, setConversationId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const userId = user?.id;
    const [isLoadingHistory, setIsLoadingHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (userId) {
            loadRecentHistory();
        }
    }, [
        userId
    ]);
    const loadRecentHistory = async ()=>{
        try {
            setIsLoadingHistory(true);
            const { conversations } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$services$2f$chatService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatService"].getConversations(userId);
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
        } finally{
            setIsLoadingHistory(false);
        }
    };
    if (isLoading || !isAuthenticated || !userId) return null;
    const config = {
        initialMessages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$react$2d$chatbot$2d$kit$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChatBotMessage"])(`Hi! I'm your Todo AI assistant. You can ask me to add, list, complete, or delete tasks. How can I help?`, {})
        ],
        botName: 'TodoAssistant',
        customStyles: {
            botMessageBox: {
                backgroundColor: '#3b82f6'
            },
            chatButton: {
                backgroundColor: '#3b82f6'
            }
        }
    };
    const MessageParser = ({ children, actions })=>{
        const parse = (message)=>{
            actions.handleUserMessage(message);
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Children.map(children, (child)=>{
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(child, {
                    parse: parse,
                    actions
                });
            })
        }, void 0, false, {
            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ChatInterface.tsx",
            lineNumber: 71,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    };
    const ActionProvider = ({ createChatBotMessage, setState, children })=>{
        const handleUserMessage = async (message)=>{
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$services$2f$chatService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatService"].sendMessage(userId, message, conversationId);
                if (response.conversation_id && !conversationId) {
                    setConversationId(response.conversation_id);
                }
                const botMessage = createChatBotMessage(response.response, {});
                setState((prev)=>({
                        ...prev,
                        messages: [
                            ...prev.messages,
                            botMessage
                        ]
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
                setState((prev)=>({
                        ...prev,
                        messages: [
                            ...prev.messages,
                            errorMessage
                        ]
                    }));
            }
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Children.map(children, (child)=>{
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(child, {
                    actions: {
                        handleUserMessage
                    }
                });
            })
        }, void 0, false, {
            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ChatInterface.tsx",
            lineNumber: 115,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-33a19a89d96ea1c6" + " " + "fixed bottom-6 right-24 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: 20,
                        scale: 0.95
                    },
                    className: "mb-4 shadow-2xl rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 w-[350px] sm:w-[400px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-33a19a89d96ea1c6" + " " + "bg-blue-600 p-4 flex justify-between items-center text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-33a19a89d96ea1c6" + " " + "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__["ChatBubbleLeftRightIcon"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ChatInterface.tsx",
                                            lineNumber: 139,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-33a19a89d96ea1c6" + " " + "font-bold",
                                            children: "Todo AI Chat"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ChatInterface.tsx",
                                            lineNumber: 140,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ChatInterface.tsx",
                                    lineNumber: 138,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsOpen(false),
                                    className: "jsx-33a19a89d96ea1c6" + " " + "hover:bg-blue-700 p-1 rounded-full transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__["XMarkIcon"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ChatInterface.tsx",
                                        lineNumber: 143,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ChatInterface.tsx",
                                    lineNumber: 142,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ChatInterface.tsx",
                            lineNumber: 137,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-33a19a89d96ea1c6" + " " + "bg-white dark:bg-gray-800 chatbot-container",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$react$2d$chatbot$2d$kit$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                config: config,
                                messageParser: MessageParser,
                                actionProvider: ActionProvider,
                                placeholderText: "Type your request here..."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ChatInterface.tsx",
                                lineNumber: 147,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ChatInterface.tsx",
                            lineNumber: 146,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ChatInterface.tsx",
                    lineNumber: 131,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ChatInterface.tsx",
                lineNumber: 129,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                whileHover: {
                    scale: 1.05
                },
                whileTap: {
                    scale: 0.95
                },
                onClick: ()=>setIsOpen(!isOpen),
                className: "w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors",
                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__["XMarkIcon"], {
                    className: "w-8 h-8"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ChatInterface.tsx",
                    lineNumber: 164,
                    columnNumber: 27
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__["ChatBubbleLeftRightIcon"], {
                    className: "w-8 h-8"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ChatInterface.tsx",
                    lineNumber: 164,
                    columnNumber: 63
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ChatInterface.tsx",
                lineNumber: 158,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "33a19a89d96ea1c6",
                children: ".react-chatbot-kit-chat-container{border-radius:0 0 1rem 1rem;overflow:hidden;width:100%!important}.react-chatbot-kit-chat-inner-container{flex-direction:column;display:flex;background-color:#0000!important}.react-chatbot-kit-chat-message-container{scrollbar-width:none;-ms-overflow-style:none;background-color:#fff;height:380px!important;padding:15px!important;overflow-y:auto!important}.react-chatbot-kit-chat-message-container::-webkit-scrollbar{display:none}.dark .react-chatbot-kit-chat-message-container{background-color:#0f172a!important}.react-chatbot-kit-chat-bot-message{color:#fff!important;background-color:#3b82f6!important;margin-left:0!important}.react-chatbot-kit-user-chat-message{color:#1f2937!important;background-color:#e5e7eb!important}.dark .react-chatbot-kit-chat-bot-message{color:#fff!important;background-color:#3b82f6!important}.dark .react-chatbot-kit-user-chat-message{color:#f8fafc!important;background-color:#334155!important}.react-chatbot-kit-chat-input-container{background-color:#f9fafb!important;border-top:1px solid #e5e7eb!important;padding:10px!important}.dark .react-chatbot-kit-chat-input-container{background-color:#1e293b!important;border-top:1px solid #334155!important}.react-chatbot-kit-chat-input{border:1px solid #d1d5db!important;border-radius:12px!important;padding:10px 15px!important;font-size:.9rem!important}.dark .react-chatbot-kit-chat-input{color:#fff!important;background-color:#0f172a!important;border:1px solid #334155!important}.react-chatbot-kit-chat-btn-send{border-radius:10px!important;margin-left:8px!important}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ChatInterface.tsx",
        lineNumber: 128,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ChatInterface;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__17b502a7._.js.map