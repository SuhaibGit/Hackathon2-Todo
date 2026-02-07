'use client';

import React, { useState, useEffect, useMemo, useImperativeHandle, forwardRef } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Task } from '@/types';
import TaskItem from './TaskItem';
import { apiClient } from '@/lib/api';
import TaskSkeleton from '@/components/ui/TaskSkeleton';
import { MagnifyingGlassIcon, Squares2X2Icon } from '@heroicons/react/24/outline';

export interface TaskListHandle {
  refreshTasks: () => void;
}

interface TaskListProps {
  tasks?: Task[];
  loading?: boolean;
  onTaskUpdate?: (task: Task) => void;
  onTaskDelete?: (taskId: string) => void;
}

const TaskList = forwardRef<TaskListHandle, TaskListProps>(({ tasks: tasksProp, loading: loadingProp, onTaskUpdate, onTaskDelete }, ref) => {
  const [localTasks, setLocalTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  // Use tasks from props if provided, otherwise use local state
  const tasks = tasksProp ?? localTasks;
  const [isLoadingState, setIsLoadingState] = useState(false);
  const isLoading = loadingProp ?? isLoadingState;

  // Load tasks if not provided via props
  useEffect(() => {
    if (!tasksProp && !loadingProp) {
      loadTasks();
    }
  }, [tasksProp, loadingProp]);

  // Listen for global refresh events (e.g., from AI chat)
  useEffect(() => {
    const handleRefresh = () => {
      if (!tasksProp && !loadingProp) {
        loadTasks();
      }
    };
    window.addEventListener('todo-refresh-tasks', handleRefresh);
    return () => window.removeEventListener('todo-refresh-tasks', handleRefresh);
  }, [tasksProp, loadingProp]);

  const loadTasks = async () => {
    setIsLoadingState(true);
    try {
      const result = await apiClient.getTasks();
      if (result.success && result.data) {
        setLocalTasks(result.data);
      } else {
        setError(result.error || 'Failed to load tasks');
      }
    } catch (err) {
      setError('Network error occurred while loading tasks');
      console.error(err);
    } finally {
      setIsLoadingState(false);
    }
  };

  // Expose the refresh function to parent components
  useImperativeHandle(ref, () => ({
    refreshTasks: () => {
      loadTasks();
    }
  }));

  const handleTaskUpdate = (updatedTask: Task) => {
    // If tasks are managed externally (via props), notify parent
    if (tasksProp) {
      if (onTaskUpdate) {
        onTaskUpdate(updatedTask);
      }
    } else {
      // Otherwise, manage locally
      setLocalTasks(prevTasks =>
        prevTasks.map(task => task.id === updatedTask.id ? updatedTask : task)
      );
      if (onTaskUpdate) {
        onTaskUpdate(updatedTask);
      }
    }
  };

  const handleTaskDelete = (taskId: string) => {
    // If tasks are managed externally (via props), notify parent
    if (tasksProp) {
      if (onTaskDelete) {
        onTaskDelete(taskId);
      }
    } else {
      // Otherwise, manage locally
      setLocalTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
      if (onTaskDelete) {
        onTaskDelete(taskId);
      }
    }
  };

  const handleClearCompleted = async () => {
    const completedTasks = tasks.filter(t => t.completed);
    if (completedTasks.length === 0) return;

    if (window.confirm(`Are you sure you want to delete all ${completedTasks.length} completed tasks?`)) {
      try {
        await Promise.all(completedTasks.map(t => apiClient.deleteTask(t.id)));
        // Notify parent to remove completed tasks
        if (onTaskDelete) {
          completedTasks.forEach(task => onTaskDelete(task.id));
        }
      } catch (err) {
        setError('Failed to clear some completed tasks');
      }
    }
  };

  const filteredTasks = useMemo(() => {
    return tasks
      .filter(task => {
        const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          task.description?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = filter === 'all' ||
          (filter === 'active' && !task.completed) ||
          (filter === 'completed' && task.completed);
        return matchesSearch && matchesFilter;
      })
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [tasks, searchQuery, filter]);

  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const active = total - completed;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { total, completed, active, percentage };
  }, [tasks]);

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="h-24 w-full bg-gray-100 dark:bg-gray-800/50 rounded-2xl animate-pulse" />
        <TaskSkeleton count={3} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center bg-rose-50 dark:bg-rose-900/10 rounded-2xl border border-rose-100 dark:border-rose-900/30">
        <p className="text-rose-600 dark:text-rose-400 font-medium mb-4">{error}</p>
        <button onClick={() => {
          setError(null);
          setLocalTasks([]);
        }} className="px-6 py-2 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition-colors">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 flex flex-col h-full">
      {/* Productivity Stats */}
      {tasks.length > 0 && (
        <div className="p-6 bg-linear-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-xl shadow-blue-500/20 text-white shrink-0">
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-blue-100 text-xs font-black uppercase tracking-[0.2em] mb-1">Productivity Index</p>
              <h4 className="text-4xl font-black">{stats.percentage}%</h4>
            </div>
            <div className="text-right">
              <p className="text-3xl font-black">{stats.completed}/{stats.total}</p>
              <p className="text-blue-100 text-[10px] font-bold uppercase tracking-widest">Tasks Done</p>
            </div>
          </div>
          <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden backdrop-blur-md">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${stats.percentage}%` }}
              className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
            />
          </div>
        </div>
      )}

      {/* Toolbar */}
      <div className="flex flex-col gap-4 shrink-0">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800/50 border-none focus:ring-2 focus:ring-blue-500/50 rounded-2xl text-gray-800 dark:text-white transition-all font-medium"
            />
          </div>
          <div className="flex bg-gray-100 dark:bg-gray-800/50 p-1 rounded-2xl">
            {(['all', 'active', 'completed'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${filter === f
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {stats.completed > 0 && filter !== 'active' && (
          <div className="flex justify-end">
            <button
              onClick={handleClearCompleted}
              className="text-xs font-bold text-rose-500 hover:text-rose-600 dark:hover:text-rose-400 flex items-center gap-1.5 px-3 py-1 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-all"
            >
              Clear {stats.completed} Completed
            </button>
          </div>
        )}
      </div>

      {/* Task List Container */}
      <div className="flex-1 min-h-0">
        {tasks.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-10 py-20 grayscale opacity-80">
            <div className="w-24 h-24 mb-6 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
              <Squares2X2Icon className="h-12 w-12 text-blue-500" />
            </div>
            <h5 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Clean Slate</h5>
            <p className="text-gray-500 max-w-[280px]">Your task list is empty. Start your productivity journey by adding a task!</p>
          </div>
        ) : filteredTasks.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-10 py-20">
            <div className="w-20 h-20 mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <MagnifyingGlassIcon className="h-10 w-10 text-gray-300" />
            </div>
            <h5 className="text-xl font-black text-gray-800 dark:text-white mb-2">No results found</h5>
            <p className="text-gray-500">We couldn't find any tasks matching your criteria.</p>
            <button
              onClick={() => { setSearchQuery(''); setFilter('all'); }}
              className="mt-6 text-sm font-bold text-blue-600 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <LayoutGroup>
            <AnimatePresence mode="popLayout">
              <motion.div layout className="grid grid-cols-1 gap-4">
                {filteredTasks.map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    onUpdate={handleTaskUpdate}
                    onDelete={handleTaskDelete}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </LayoutGroup>
        )}
      </div>
    </div>
  );
})

export default TaskList;
export { TaskList };