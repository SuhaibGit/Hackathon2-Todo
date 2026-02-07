'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Task } from '@/types';
import { apiClient } from '@/lib/api';
import { PencilSquareIcon, TrashIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleSolid } from '@heroicons/react/24/solid';

interface TaskItemProps {
  task: Task;
  onUpdate: (updatedTask: Task) => void;
  onDelete: (taskId: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleToggleComplete = async () => {
    // Optimistic update: immediately update the UI to show the toggle
    const newCompletedStatus = !task.completed;
    onUpdate({ ...task, completed: newCompletedStatus });

    setLoading(true);
    try {
      const result = await apiClient.updateTask(task.id, {
        completed: newCompletedStatus,
      });
      if (result.success && result.data) {
        // Update with the actual server response to ensure consistency
        onUpdate(result.data);
      } else {
        // If the API call failed, revert the optimistic update
        onUpdate({ ...task, completed: task.completed });
        setError(result.error || 'Failed to update task');
      }
    } catch (err) {
      // If there was a network error, revert the optimistic update
      onUpdate({ ...task, completed: task.completed });
      setError('Network error occurred');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveEdit = async () => {
    if (!editTitle.trim()) return;
    setLoading(true);
    try {
      const result = await apiClient.updateTask(task.id, {
        title: editTitle,
        description: editDescription,
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
    } finally {
      setLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditTitle(task.title);
    setEditDescription(task.description || '');
    setError(null);
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task? This action cannot be undone.')) {
      setLoading(true);
      try {
        const result = await apiClient.deleteTask(task.id);
        if (result.success) {
          onDelete(task.id);
        } else {
          setError(result.error || 'Failed to delete task');
        }
      } catch (err) {
        setError('Network error occurred');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -2 }}
      className={`bg-white dark:bg-gray-800/90 rounded-2xl p-4 mb-4 border transition-all duration-300 shadow-sm hover:shadow-md group ${task.completed
          ? 'border-emerald-100 dark:border-emerald-900/30 bg-emerald-50/20 dark:bg-emerald-900/10'
          : 'border-gray-100 dark:border-gray-700/50'
        }`}
    >
      {isEditing ? (
        <div className="space-y-4">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full px-4 py-2 text-lg font-semibold border-none focus:ring-0 bg-gray-50 dark:bg-gray-700/50 rounded-xl text-gray-900 dark:text-white"
            placeholder="What needs to be done?"
            autoFocus
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="w-full px-4 py-2 text-sm border-none focus:ring-0 bg-gray-50 dark:bg-gray-700/50 rounded-xl resize-none text-gray-600 dark:text-gray-300"
            placeholder="Add some details..."
            rows={2}
          />
          <div className="flex justify-end space-x-3">
            <button
              onClick={handleCancelEdit}
              className="px-4 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveEdit}
              disabled={loading || !editTitle.trim()}
              className="px-6 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-all shadow-sm"
            >
              Update Task
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-start gap-4">
          <button
            onClick={handleToggleComplete}
            disabled={loading}
            className={`mt-1 h-6 w-6 rounded-full flex items-center justify-center transition-all ${task.completed
                ? 'text-emerald-500 scale-110'
                : 'text-gray-300 hover:text-blue-500 dark:text-gray-600'
              }`}
          >
            {task.completed ? (
              <CheckCircleSolid className="h-6 w-6" />
            ) : (
              <CheckCircleIcon className="h-6 w-6" />
            )}
          </button>

          <div className="flex-1 min-w-0">
            <h3 className={`text-lg font-bold transition-all ${task.completed ? 'text-gray-400 line-through decoration-2' : 'text-gray-800 dark:text-gray-100'
              }`}>
              {task.title}
            </h3>
            {task.description && (
              <p className={`mt-1 text-sm leading-relaxed ${task.completed ? 'text-gray-400' : 'text-gray-600 dark:text-gray-400'
                }`}>
                {task.description}
              </p>
            )}

            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center text-[10px] uppercase tracking-wider font-bold text-gray-400">
                <ClockIcon className="h-3 w-3 mr-1" />
                {task.createdAt ? new Date(task.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) : 'Just now'}
              </div>

              <div className="flex-1" />

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsEditing(true)}
                  className="p-1.5 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                  aria-label="Edit task"
                >
                  <PencilSquareIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={handleDelete}
                  className="p-1.5 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg transition-colors"
                  aria-label="Delete task"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {error && <p className="mt-2 text-xs text-rose-500 font-medium">{error}</p>}
    </motion.div>
  );
};

export default TaskItem;