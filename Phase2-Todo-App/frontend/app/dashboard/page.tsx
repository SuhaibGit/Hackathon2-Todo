'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useProtectedRoute } from '@/lib/hooks';
import TaskList, { TaskListHandle } from '@/components/tasks/TaskList';
import TaskForm from '@/components/tasks/TaskForm';
import TaskModal from '@/components/tasks/TaskModal';
import { Task } from '@/types';
import { apiClient } from '@/lib/api';
import ProtectedRoute from '@/components/ui/ProtectedRoute';
import FloatingActionButton from '@/components/ui/FloatingActionButton';

const DashboardPage: React.FC = () => {
  const { isAllowed, isLoading } = useProtectedRoute();
  const [showTaskModal, setShowTaskModal] = useState(false);
  const taskListRef = useRef<TaskListHandle>(null); // Add ref for TaskList

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  if (!isAllowed) {
    return null; // Redirect happens in the hook
  }

  const handleTaskCreated = (task: Task) => {
    // The TaskList component will reload tasks automatically
    console.log('Task created:', task);
    // Close the modal after task creation
    setShowTaskModal(false);
  };

  const handleTaskAction = () => {
    // Call the refresh function on TaskList via ref
    if (taskListRef.current) {
      taskListRef.current.refreshTasks();
    }
  };

  const handleTaskUpdated = (task: Task) => {
    console.log('Task updated:', task);
    // Close the modal after task update
    setShowTaskModal(false);
  };

  const handleSignOut = async () => {
    await apiClient.signout();
    window.location.href = '/auth/signin';
  };

  const openTaskModal = () => {
    setShowTaskModal(true);
  };

  const closeTaskModal = () => {
    setShowTaskModal(false);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-[1800px] mx-auto px-4 py-6 sm:py-8 sm:px-10 lg:px-16 pb-20 mt-20"> {/* Expanded width for better space utilization */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-800 dark:text-white ">Your Tasks</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1 font-medium italic">Manage your tasks efficiently</p>
          </div>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 sm:px-6 sm:py-2 bg-linear-to-r from-red-500 to-pink-500 text-white rounded-xl font-medium hover:from-red-600 hover:to-pink-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 self-start sm:self-auto"
          >
            Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-16 gap-8 items-stretch">
          {/* Left Side: Create New Task Card */}
          <div className="lg:col-span-7">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-4xl p-8 shadow-2xl shadow-blue-500/10 border border-white/20 dark:border-gray-700/30 lg:h-[calc(100vh-280px)] flex flex-col">
              <div className="shrink-0 mb-8">
                <h3 className="text-2xl font-black text-gray-800 dark:text-white ">Create New Task</h3>
                <p className="text-gray-500 text-xs font-bold uppercase  mt-1">Add to your workflow</p>
              </div>
              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                <TaskForm onTaskCreated={handleTaskCreated} onTaskAction={handleTaskAction} />
              </div>
            </div>
          </div>

          {/* Right Side: Task List Card */}
          <div className="lg:col-span-9">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-4xl p-8 shadow-2xl shadow-blue-500/10 border border-white/20 dark:border-gray-700/30 lg:h-[calc(100vh-280px)] flex flex-col">
              <div className="shrink-0 mb-8">
                <h3 className="text-2xl font-black text-gray-800 dark:text-white ">Task Queue</h3>
                <p className="text-gray-500 text-xs font-bold uppercase  mt-1">Your daily focus</p>
              </div>
              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                <TaskList ref={taskListRef} />
              </div>
            </div>
          </div>
        </div>

        <TaskModal
          isOpen={showTaskModal}
          onClose={closeTaskModal}
          title="Create New Task"
          mode="create"
        >
          <TaskForm
            mode="create"
            onTaskCreated={handleTaskCreated}
            onTaskUpdated={handleTaskUpdated}
            onTaskAction={handleTaskAction}
            onCancel={closeTaskModal}
          />
        </TaskModal>
      </div>

      <FloatingActionButton
        onClick={openTaskModal}
        ariaLabel="Add new task"
      />
    </ProtectedRoute>
  );
};

export default DashboardPage;