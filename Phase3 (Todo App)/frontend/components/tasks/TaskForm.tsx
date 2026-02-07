'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Task } from '@/types';
import { apiClient } from '@/lib/api';

interface TaskFormProps {
  mode?: 'create' | 'edit';
  task?: Task;
  onTaskCreated?: (task: Task) => void;
  onTaskUpdated?: (task: Task) => void;
  onTaskAction?: () => void; // Added to trigger refresh after any action
  onCancel?: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({
  mode = 'create',
  task,
  onTaskCreated,
  onTaskUpdated,
  onTaskAction,
  onCancel
}) => {
  const [title, setTitle] = useState(mode === 'edit' && task ? task.title : '');
  const [description, setDescription] = useState(mode === 'edit' && task ? task.description || '' : '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
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
        result = await apiClient.updateTask(task.id, {
          title: title.trim(),
          description: description.trim()
        });
        if (result.success && result.data && onTaskUpdated) {
          onTaskUpdated(result.data);
          success = true;
        }
      } else {
        result = await apiClient.createTask(title.trim(), description.trim());
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white/60 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-sm mb-6"
    >
      <motion.h3
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-lg font-semibold text-gray-800 dark:text-white mb-4"
      >
        {mode === 'edit' ? 'Edit Task' : 'Add New Task'}
      </motion.h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Task Title *
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:border-transparent transition-all duration-200 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white"
            placeholder="What needs to be done?"
            maxLength={200}
            aria-invalid={!!error}
            aria-describedby={error ? "title-error" : undefined}
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Title must be between 1 and 200 characters</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Description (Optional)
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:border-transparent transition-all duration-200 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm resize-none text-gray-900 dark:text-white"
            placeholder="Add details about this task..."
            rows={3}
          />
        </motion.div>

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="rounded-lg bg-red-50 dark:bg-red-900/30 p-3 border border-red-200 dark:border-red-800"
            >
              <div className="text-sm text-red-700 dark:text-red-300 font-medium" id="title-error">
                {error}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex space-x-3 pt-2"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {mode === 'edit' ? 'Updating...' : 'Creating...'}
              </span>
            ) : (
              mode === 'edit' ? 'Update Task' : 'Create Task'
            )}
          </motion.button>

          {onCancel && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={onCancel}
              className="px-6 py-3 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200"
            >
              Cancel
            </motion.button>
          )}
        </motion.div>
      </form>
    </motion.div>
  );
};

export default TaskForm;