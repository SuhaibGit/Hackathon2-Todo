module.exports = [
"[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/lib/hooks.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthRedirect",
    ()=>useAuthRedirect,
    "useProtectedRoute",
    ()=>useProtectedRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/auth/AuthProvider.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const useAuthRedirect = ()=>{
    const { isAuthenticated, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isLoading && !isAuthenticated) {
            router.push('/auth/signin');
        }
    }, [
        isAuthenticated,
        isLoading,
        router
    ]);
    return {
        isAuthenticated,
        isLoading
    };
};
const useProtectedRoute = ()=>{
    const { isAuthenticated, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isLoading && !isAuthenticated) {
            router.push('/auth/signin');
        }
    }, [
        isAuthenticated,
        isLoading,
        router
    ]);
    return {
        isAllowed: isAuthenticated,
        isLoading
    };
};
}),
"[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PencilSquareIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilSquareIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/@heroicons/react/24/outline/esm/PencilSquareIcon.js [app-ssr] (ecmascript) <export default as PencilSquareIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TrashIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrashIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/@heroicons/react/24/outline/esm/TrashIcon.js [app-ssr] (ecmascript) <export default as TrashIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js [app-ssr] (ecmascript) <export default as CheckCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ClockIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClockIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/@heroicons/react/24/outline/esm/ClockIcon.js [app-ssr] (ecmascript) <export default as ClockIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/@heroicons/react/24/solid/esm/CheckCircleIcon.js [app-ssr] (ecmascript) <export default as CheckCircleIcon>");
'use client';
;
;
;
;
;
;
const TaskItem = ({ task, onUpdate, onDelete })=>{
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editTitle, setEditTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(task.title);
    const [editDescription, setEditDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(task.description || '');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleToggleComplete = async ()=>{
        // Optimistic update: immediately update the UI to show the toggle
        const newCompletedStatus = !task.completed;
        onUpdate({
            ...task,
            completed: newCompletedStatus
        });
        setLoading(true);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].updateTask(task.id, {
                completed: newCompletedStatus
            });
            if (result.success && result.data) {
                // Update with the actual server response to ensure consistency
                onUpdate(result.data);
            } else {
                // If the API call failed, revert the optimistic update
                onUpdate({
                    ...task,
                    completed: task.completed
                });
                setError(result.error || 'Failed to update task');
            }
        } catch (err) {
            // If there was a network error, revert the optimistic update
            onUpdate({
                ...task,
                completed: task.completed
            });
            setError('Network error occurred');
            console.error(err);
        } finally{
            setLoading(false);
        }
    };
    const handleSaveEdit = async ()=>{
        if (!editTitle.trim()) return;
        setLoading(true);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].updateTask(task.id, {
                title: editTitle,
                description: editDescription
            });
            if (result.success && result.data) {
                onUpdate(result.data);
                setIsEditing(false);
            } else {
                setError(result.error || 'Failed to update task');
            }
        } catch (err) {
            setError('Network error occurred');
            console.error(err);
        } finally{
            setLoading(false);
        }
    };
    const handleCancelEdit = ()=>{
        setIsEditing(false);
        setEditTitle(task.title);
        setEditDescription(task.description || '');
        setError(null);
    };
    const handleDelete = async ()=>{
        if (window.confirm('Are you sure you want to delete this task? This action cannot be undone.')) {
            setLoading(true);
            try {
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].deleteTask(task.id);
                if (result.success) {
                    onDelete(task.id);
                } else {
                    setError(result.error || 'Failed to delete task');
                }
            } catch (err) {
                setError('Network error occurred');
                console.error(err);
            } finally{
                setLoading(false);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        initial: {
            opacity: 0,
            y: 10
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            scale: 0.95
        },
        whileHover: {
            y: -2
        },
        className: `bg-white dark:bg-gray-800/90 rounded-2xl p-4 mb-4 border transition-all duration-300 shadow-sm hover:shadow-md group ${task.completed ? 'border-emerald-100 dark:border-emerald-900/30 bg-emerald-50/20 dark:bg-emerald-900/10' : 'border-gray-100 dark:border-gray-700/50'}`,
        children: [
            isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: editTitle,
                        onChange: (e)=>setEditTitle(e.target.value),
                        className: "w-full px-4 py-2 text-lg font-semibold border-none focus:ring-0 bg-gray-50 dark:bg-gray-700/50 rounded-xl text-gray-900 dark:text-white",
                        placeholder: "What needs to be done?",
                        autoFocus: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: editDescription,
                        onChange: (e)=>setEditDescription(e.target.value),
                        className: "w-full px-4 py-2 text-sm border-none focus:ring-0 bg-gray-50 dark:bg-gray-700/50 rounded-xl resize-none text-gray-600 dark:text-gray-300",
                        placeholder: "Add some details...",
                        rows: 2
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCancelEdit,
                                className: "px-4 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSaveEdit,
                                disabled: loading || !editTitle.trim(),
                                className: "px-6 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-all shadow-sm",
                                children: "Update Task"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleToggleComplete,
                        disabled: loading,
                        className: `mt-1 h-6 w-6 rounded-full flex items-center justify-center transition-all ${task.completed ? 'text-emerald-500 scale-110' : 'text-gray-300 hover:text-blue-500 dark:text-gray-600'}`,
                        children: task.completed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__["CheckCircleIcon"], {
                            className: "h-6 w-6"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx",
                            lineNumber: 155,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__["CheckCircleIcon"], {
                            className: "h-6 w-6"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx",
                            lineNumber: 157,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: `text-lg font-bold transition-all ${task.completed ? 'text-gray-400 line-through decoration-2' : 'text-gray-800 dark:text-gray-100'}`,
                                children: task.title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            task.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `mt-1 text-sm leading-relaxed ${task.completed ? 'text-gray-400' : 'text-gray-600 dark:text-gray-400'}`,
                                children: task.description
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx",
                                lineNumber: 167,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center text-[10px] uppercase tracking-wider font-bold text-gray-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ClockIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClockIcon$3e$__["ClockIcon"], {
                                                className: "h-3 w-3 mr-1"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx",
                                                lineNumber: 175,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            task.createdAt ? new Date(task.createdAt).toLocaleDateString(undefined, {
                                                month: 'short',
                                                day: 'numeric'
                                            }) : 'Just now'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsEditing(true),
                                                className: "p-1.5 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors",
                                                "aria-label": "Edit task",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PencilSquareIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilSquareIcon$3e$__["PencilSquareIcon"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleDelete,
                                                className: "p-1.5 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg transition-colors",
                                                "aria-label": "Delete task",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TrashIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrashIcon$3e$__["TrashIcon"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx",
                                                lineNumber: 189,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-xs text-rose-500 font-medium",
                children: error
            }, void 0, false, {
                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx",
                lineNumber: 201,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TaskItem;
}),
"[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/TaskSkeleton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
const TaskSkeleton = ({ count = 3 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: Array.from({
            length: count
        }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "bg-white/60 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-5 mb-4 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden",
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: index * 0.1
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-1 flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-gradient-to-r from-gray-200/50 to-gray-300/50 dark:from-gray-700/50 dark:to-gray-600/50 animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/TaskSkeleton.tsx",
                            lineNumber: 22,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-5 w-3/4 bg-gradient-to-r from-gray-200/50 to-gray-300/50 dark:from-gray-700/50 dark:to-gray-600/50 rounded mb-3 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/TaskSkeleton.tsx",
                                    lineNumber: 26,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4 w-1/2 bg-gradient-to-r from-gray-200/50 to-gray-300/50 dark:from-gray-700/50 dark:to-gray-600/50 rounded animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/TaskSkeleton.tsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mt-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-500 dark:text-gray-400",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-3 w-24 bg-gradient-to-r from-gray-200/50 to-gray-300/50 dark:from-gray-700/50 dark:to-gray-600/50 rounded animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/TaskSkeleton.tsx",
                                                lineNumber: 32,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/TaskSkeleton.tsx",
                                            lineNumber: 31,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-2 opacity-0 group-hover:opacity-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-4 w-12 bg-gradient-to-r from-gray-200/50 to-gray-300/50 dark:from-gray-700/50 dark:to-gray-600/50 rounded animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/TaskSkeleton.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-4 w-12 bg-gradient-to-r from-gray-200/50 to-gray-300/50 dark:from-gray-700/50 dark:to-gray-600/50 rounded animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/TaskSkeleton.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/TaskSkeleton.tsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/TaskSkeleton.tsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/TaskSkeleton.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/TaskSkeleton.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, index, false, {
                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/TaskSkeleton.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = TaskSkeleton;
}),
"[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskList",
    ()=>TaskList,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$components$2f$tasks$2f$TaskItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$components$2f$ui$2f$TaskSkeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/TaskSkeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlassIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js [app-ssr] (ecmascript) <export default as MagnifyingGlassIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Squares2X2Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Squares2X2Icon$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/@heroicons/react/24/outline/esm/Squares2X2Icon.js [app-ssr] (ecmascript) <export default as Squares2X2Icon>");
'use client';
;
;
;
;
;
;
;
const TaskList = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ tasks: tasksProp, loading: loadingProp, onTaskUpdate, onTaskDelete }, ref)=>{
    const [localTasks, setLocalTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    // Use tasks from props if provided, otherwise use local state
    const tasks = tasksProp ?? localTasks;
    const [isLoadingState, setIsLoadingState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isLoading = loadingProp ?? isLoadingState;
    // Load tasks if not provided via props
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!tasksProp && !loadingProp) {
            loadTasks();
        }
    }, [
        tasksProp,
        loadingProp
    ]);
    // Listen for global refresh events (e.g., from AI chat)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleRefresh = ()=>{
            if (!tasksProp && !loadingProp) {
                loadTasks();
            }
        };
        window.addEventListener('todo-refresh-tasks', handleRefresh);
        return ()=>window.removeEventListener('todo-refresh-tasks', handleRefresh);
    }, [
        tasksProp,
        loadingProp
    ]);
    const loadTasks = async ()=>{
        setIsLoadingState(true);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].getTasks();
            if (result.success && result.data) {
                setLocalTasks(result.data);
            } else {
                setError(result.error || 'Failed to load tasks');
            }
        } catch (err) {
            setError('Network error occurred while loading tasks');
            console.error(err);
        } finally{
            setIsLoadingState(false);
        }
    };
    // Expose the refresh function to parent components
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, ()=>({
            refreshTasks: ()=>{
                loadTasks();
            }
        }));
    const handleTaskUpdate = (updatedTask)=>{
        // If tasks are managed externally (via props), notify parent
        if (tasksProp) {
            if (onTaskUpdate) {
                onTaskUpdate(updatedTask);
            }
        } else {
            // Otherwise, manage locally
            setLocalTasks((prevTasks)=>prevTasks.map((task)=>task.id === updatedTask.id ? updatedTask : task));
            if (onTaskUpdate) {
                onTaskUpdate(updatedTask);
            }
        }
    };
    const handleTaskDelete = (taskId)=>{
        // If tasks are managed externally (via props), notify parent
        if (tasksProp) {
            if (onTaskDelete) {
                onTaskDelete(taskId);
            }
        } else {
            // Otherwise, manage locally
            setLocalTasks((prevTasks)=>prevTasks.filter((task)=>task.id !== taskId));
            if (onTaskDelete) {
                onTaskDelete(taskId);
            }
        }
    };
    const handleClearCompleted = async ()=>{
        const completedTasks = tasks.filter((t)=>t.completed);
        if (completedTasks.length === 0) return;
        if (window.confirm(`Are you sure you want to delete all ${completedTasks.length} completed tasks?`)) {
            try {
                await Promise.all(completedTasks.map((t)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].deleteTask(t.id)));
                // Notify parent to remove completed tasks
                if (onTaskDelete) {
                    completedTasks.forEach((task)=>onTaskDelete(task.id));
                }
            } catch (err) {
                setError('Failed to clear some completed tasks');
            }
        }
    };
    const filteredTasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return tasks.filter((task)=>{
            const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) || task.description?.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesFilter = filter === 'all' || filter === 'active' && !task.completed || filter === 'completed' && task.completed;
            return matchesSearch && matchesFilter;
        }).sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }, [
        tasks,
        searchQuery,
        filter
    ]);
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const total = tasks.length;
        const completed = tasks.filter((t)=>t.completed).length;
        const active = total - completed;
        const percentage = total > 0 ? Math.round(completed / total * 100) : 0;
        return {
            total,
            completed,
            active,
            percentage
        };
    }, [
        tasks
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-24 w-full bg-gray-100 dark:bg-gray-800/50 rounded-2xl animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$components$2f$ui$2f$TaskSkeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    count: 3
                }, void 0, false, {
                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
            lineNumber: 147,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 text-center bg-rose-50 dark:bg-rose-900/10 rounded-2xl border border-rose-100 dark:border-rose-900/30",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-rose-600 dark:text-rose-400 font-medium mb-4",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        setError(null);
                        setLocalTasks([]);
                    },
                    className: "px-6 py-2 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition-colors",
                    children: "Try Again"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
            lineNumber: 156,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 flex flex-col h-full",
        children: [
            tasks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 bg-linear-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-xl shadow-blue-500/20 text-white shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-end mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-blue-100 text-xs font-black uppercase tracking-[0.2em] mb-1",
                                        children: "Productivity Index"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-4xl font-black",
                                        children: [
                                            stats.percentage,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-black",
                                        children: [
                                            stats.completed,
                                            "/",
                                            stats.total
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-blue-100 text-[10px] font-bold uppercase tracking-widest",
                                        children: "Tasks Done"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-3 bg-white/20 rounded-full overflow-hidden backdrop-blur-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                width: 0
                            },
                            animate: {
                                width: `${stats.percentage}%`
                            },
                            className: "h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                            lineNumber: 184,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                        lineNumber: 183,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                lineNumber: 172,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlassIcon$3e$__["MagnifyingGlassIcon"], {
                                        className: "absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search tasks...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800/50 border-none focus:ring-2 focus:ring-blue-500/50 rounded-2xl text-gray-800 dark:text-white transition-all font-medium"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex bg-gray-100 dark:bg-gray-800/50 p-1 rounded-2xl",
                                children: [
                                    'all',
                                    'active',
                                    'completed'
                                ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setFilter(f),
                                        className: `px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${filter === f ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`,
                                        children: f
                                    }, f, false, {
                                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    stats.completed > 0 && filter !== 'active' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClearCompleted,
                            className: "text-xs font-bold text-rose-500 hover:text-rose-600 dark:hover:text-rose-400 flex items-center gap-1.5 px-3 py-1 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-all",
                            children: [
                                "Clear ",
                                stats.completed,
                                " Completed"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                            lineNumber: 224,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-h-0",
                children: tasks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full flex flex-col items-center justify-center text-center p-10 py-20 grayscale opacity-80",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-24 h-24 mb-6 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$Squares2X2Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Squares2X2Icon$3e$__["Squares2X2Icon"], {
                                className: "h-12 w-12 text-blue-500"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                                lineNumber: 239,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                            lineNumber: 238,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            className: "text-2xl font-black text-gray-900 dark:text-white mb-2",
                            children: "Clean Slate"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                            lineNumber: 241,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 max-w-[280px]",
                            children: "Your task list is empty. Start your productivity journey by adding a task!"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                    lineNumber: 237,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : filteredTasks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full flex flex-col items-center justify-center text-center p-10 py-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20 h-20 mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlassIcon$3e$__["MagnifyingGlassIcon"], {
                                className: "h-10 w-10 text-gray-300"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                                lineNumber: 247,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                            lineNumber: 246,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            className: "text-xl font-black text-gray-800 dark:text-white mb-2",
                            children: "No results found"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                            lineNumber: 249,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: "We couldn't find any tasks matching your criteria."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                            lineNumber: 250,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setSearchQuery('');
                                setFilter('all');
                            },
                            className: "mt-6 text-sm font-bold text-blue-600 hover:underline",
                            children: "Reset Filters"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                            lineNumber: 251,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                    lineNumber: 245,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LayoutGroup"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "popLayout",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            layout: true,
                            className: "grid grid-cols-1 gap-4",
                            children: filteredTasks.map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$components$2f$tasks$2f$TaskItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    task: task,
                                    onUpdate: handleTaskUpdate,
                                    onDelete: handleTaskDelete
                                }, task.id, false, {
                                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                                    lineNumber: 263,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                            lineNumber: 261,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                        lineNumber: 260,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                    lineNumber: 259,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
const __TURBOPACK__default__export__ = TaskList;
;
}),
"[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/lib/api.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const TaskForm = ({ mode = 'create', task, onTaskCreated, onTaskUpdated, onTaskAction, onCancel })=>{
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(mode === 'edit' && task ? task.title : '');
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(mode === 'edit' && task ? task.description || '' : '');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!title.trim()) {
            setError('Title is required');
            return;
        }
        if (title.trim().length < 1 || title.trim().length > 200) {
            setError('Title must be between 1 and 200 characters');
            return;
        }
        setLoading(true);
        setError(null);
        try {
            let result;
            let success = false;
            if (mode === 'edit' && task) {
                result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].updateTask(task.id, {
                    title: title.trim(),
                    description: description.trim()
                });
                if (result.success && result.data && onTaskUpdated) {
                    onTaskUpdated(result.data);
                    success = true;
                }
            } else {
                result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].createTask(title.trim(), description.trim());
                if (result.success && result.data && onTaskCreated) {
                    onTaskCreated(result.data);
                    setTitle('');
                    setDescription('');
                    success = true;
                }
            }
            if (!result.success) {
                setError(result.error || (mode === 'edit' ? 'Failed to update task' : 'Failed to create task'));
            } else if (success && onTaskAction) {
                // Call onTaskAction if provided (used for triggering refresh)
                // Only call if the operation was successful
                onTaskAction();
            }
        } catch (err) {
            setError(`Network error occurred while ${mode === 'edit' ? 'updating' : 'creating'} task`);
            console.error(err);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -20
        },
        className: "bg-white/60 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-sm mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h3, {
                initial: {
                    opacity: 0,
                    x: -10
                },
                animate: {
                    opacity: 1,
                    x: 0
                },
                className: "text-lg font-semibold text-gray-800 dark:text-white mb-4",
                children: mode === 'edit' ? 'Edit Task' : 'Add New Task'
            }, void 0, false, {
                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskForm.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 0.1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "title",
                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                children: "Task Title *"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskForm.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                id: "title",
                                value: title,
                                onChange: (e)=>setTitle(e.target.value),
                                className: "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:border-transparent transition-all duration-200 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white",
                                placeholder: "What needs to be done?",
                                maxLength: 200,
                                "aria-invalid": !!error,
                                "aria-describedby": error ? "title-error" : undefined
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskForm.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-gray-500 dark:text-gray-400",
                                children: "Title must be between 1 and 200 characters"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskForm.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskForm.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 0.2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "description",
                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                children: "Description (Optional)"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskForm.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: "description",
                                value: description,
                                onChange: (e)=>setDescription(e.target.value),
                                className: "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:border-transparent transition-all duration-200 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm resize-none text-gray-900 dark:text-white",
                                placeholder: "Add details about this task...",
                                rows: 3
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskForm.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskForm.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                height: 0
                            },
                            animate: {
                                opacity: 1,
                                height: 'auto'
                            },
                            exit: {
                                opacity: 0,
                                height: 0
                            },
                            className: "rounded-lg bg-red-50 dark:bg-red-900/30 p-3 border border-red-200 dark:border-red-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-red-700 dark:text-red-300 font-medium",
                                id: "title-error",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskForm.tsx",
                                lineNumber: 147,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskForm.tsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskForm.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 0.3
                        },
                        className: "flex space-x-3 pt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileHover: {
                                    scale: 1.02
                                },
                                whileTap: {
                                    scale: 0.98
                                },
                                type: "submit",
                                disabled: loading,
                                className: "flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition-all duration-200 shadow-md hover:shadow-lg",
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "animate-spin -ml-1 mr-3 h-4 w-4 text-white",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    className: "opacity-25",
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10",
                                                    stroke: "currentColor",
                                                    strokeWidth: "4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskForm.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    className: "opacity-75",
                                                    fill: "currentColor",
                                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskForm.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskForm.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        mode === 'edit' ? 'Updating...' : 'Creating...'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskForm.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : mode === 'edit' ? 'Update Task' : 'Create Task'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskForm.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            onCancel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileHover: {
                                    scale: 1.02
                                },
                                whileTap: {
                                    scale: 0.98
                                },
                                type: "button",
                                onClick: onCancel,
                                className: "px-6 py-3 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskForm.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskForm.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskForm.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskForm.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TaskForm;
}),
"[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
const TaskModal = ({ isOpen, onClose, title = "Task Details", mode = 'create', task, children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            onClick: onClose,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-xl",
                initial: {
                    scale: 0.8,
                    y: 50
                },
                animate: {
                    scale: 1,
                    y: 0
                },
                exit: {
                    scale: 0.8,
                    y: 50
                },
                transition: {
                    type: "spring",
                    damping: 25,
                    stiffness: 300
                },
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-gray-800 dark:text-white",
                                children: mode === 'edit' ? `Edit Task: ${task?.title || ''}` : title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskModal.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full p-1",
                                "aria-label": "Close modal",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskModal.tsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskModal.tsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskModal.tsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskModal.tsx",
                lineNumber: 34,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskModal.tsx",
            lineNumber: 27,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskModal.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TaskModal;
}),
"[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/ProtectedRoute.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/auth/AuthProvider.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const ProtectedRoute = ({ children })=>{
    const { isAuthenticated, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isLoading && !isAuthenticated) {
            router.push('/auth/signin');
        }
    }, [
        isAuthenticated,
        isLoading,
        router
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
            }, void 0, false, {
                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/ProtectedRoute.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/ProtectedRoute.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!isAuthenticated) {
        return null; // The redirect happens in useEffect
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
};
const __TURBOPACK__default__export__ = ProtectedRoute;
}),
"[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/FloatingActionButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PlusIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/@heroicons/react/24/outline/esm/PlusIcon.js [app-ssr] (ecmascript) <export default as PlusIcon>");
'use client';
;
;
;
const FloatingActionButton = ({ onClick, isVisible = true, ariaLabel = 'Add new task' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
            className: "fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center z-40 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50",
            initial: {
                scale: 0,
                y: 50,
                opacity: 0
            },
            animate: {
                scale: 1,
                y: 0,
                opacity: 1
            },
            exit: {
                scale: 0,
                y: 50,
                opacity: 0
            },
            whileHover: {
                scale: 1.1,
                y: -5
            },
            whileTap: {
                scale: 0.9
            },
            onClick: onClick,
            "aria-label": ariaLabel,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                animate: {
                    rotate: 0
                },
                whileHover: {
                    rotate: 90
                },
                transition: {
                    duration: 0.2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PlusIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__["PlusIcon"], {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/FloatingActionButton.tsx",
                    lineNumber: 35,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/FloatingActionButton.tsx",
                lineNumber: 30,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/FloatingActionButton.tsx",
            lineNumber: 20,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/FloatingActionButton.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = FloatingActionButton;
}),
"[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/lib/hooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$components$2f$tasks$2f$TaskList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$components$2f$tasks$2f$TaskForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$components$2f$tasks$2f$TaskModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/tasks/TaskModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$components$2f$ui$2f$ProtectedRoute$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/ProtectedRoute.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$components$2f$ui$2f$FloatingActionButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/components/ui/FloatingActionButton.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const DashboardPage = ()=>{
    const { isAllowed, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProtectedRoute"])();
    const [showTaskModal, setShowTaskModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const taskListRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null); // Add ref for TaskList
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"
            }, void 0, false, {
                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!isAllowed) {
        return null; // Redirect happens in the hook
    }
    const handleTaskCreated = (task)=>{
        // The TaskList component will reload tasks automatically
        console.log('Task created:', task);
        // Close the modal after task creation
        setShowTaskModal(false);
    };
    const handleTaskAction = ()=>{
        // Call the refresh function on TaskList via ref
        if (taskListRef.current) {
            taskListRef.current.refreshTasks();
        }
    };
    const handleTaskUpdated = (task)=>{
        console.log('Task updated:', task);
        // Close the modal after task update
        setShowTaskModal(false);
    };
    const handleSignOut = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].signout();
        window.location.href = '/auth/signin';
    };
    const openTaskModal = ()=>{
        setShowTaskModal(true);
    };
    const closeTaskModal = ()=>{
        setShowTaskModal(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$components$2f$ui$2f$ProtectedRoute$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1800px] mx-auto px-4 py-6 sm:py-8 sm:px-10 lg:px-16 pb-20 mt-20",
                children: [
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl sm:text-4xl font-black text-gray-800 dark:text-white ",
                                        children: "Your Tasks"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 dark:text-gray-400 mt-1 font-medium italic",
                                        children: "Manage your tasks efficiently"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSignOut,
                                className: "px-4 py-2 sm:px-6 sm:py-2 bg-linear-to-r from-red-500 to-pink-500 text-white rounded-xl font-medium hover:from-red-600 hover:to-pink-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 self-start sm:self-auto",
                                children: "Sign Out"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-16 gap-8 items-stretch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-7",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-4xl p-8 shadow-2xl shadow-blue-500/10 border border-white/20 dark:border-gray-700/30 lg:h-[calc(100vh-280px)] flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "shrink-0 mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-black text-gray-800 dark:text-white ",
                                                    children: "Create New Task"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500 text-xs font-bold uppercase  mt-1",
                                                    children: "Add to your workflow"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 overflow-y-auto pr-2 custom-scrollbar",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$components$2f$tasks$2f$TaskForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                onTaskCreated: handleTaskCreated,
                                                onTaskAction: handleTaskAction
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-9",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-4xl p-8 shadow-2xl shadow-blue-500/10 border border-white/20 dark:border-gray-700/30 lg:h-[calc(100vh-280px)] flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "shrink-0 mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-black text-gray-800 dark:text-white ",
                                                    children: "Task Queue"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500 text-xs font-bold uppercase  mt-1",
                                                    children: "Your daily focus"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 overflow-y-auto pr-2 custom-scrollbar",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$components$2f$tasks$2f$TaskList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                ref: taskListRef
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$components$2f$tasks$2f$TaskModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        isOpen: showTaskModal,
                        onClose: closeTaskModal,
                        title: "Create New Task",
                        mode: "create",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$components$2f$tasks$2f$TaskForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            mode: "create",
                            onTaskCreated: handleTaskCreated,
                            onTaskUpdated: handleTaskUpdated,
                            onTaskAction: handleTaskAction,
                            onCancel: closeTaskModal
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Hackathon2__$2d$__Todo$2f$Phase3$2d$Todo$2d$App$2f$frontend$2f$components$2f$ui$2f$FloatingActionButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClick: openTaskModal,
                ariaLabel: "Add new task"
            }, void 0, false, {
                fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Hackathon2 - Todo/Phase3-Todo-App/frontend/app/dashboard/page.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = DashboardPage;
}),
];

//# sourceMappingURL=Desktop_Hackathon2%20-%20Todo_Phase3-Todo-App_frontend_461d19c5._.js.map