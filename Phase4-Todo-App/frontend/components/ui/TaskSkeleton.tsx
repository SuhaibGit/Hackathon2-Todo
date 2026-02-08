'use client';

import { motion } from 'framer-motion';

interface TaskSkeletonProps {
  count?: number;
}

const TaskSkeleton = ({ count = 3 }: TaskSkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className="bg-white/60 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-5 mb-4 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex items-start gap-4">
            {/* Checkbox skeleton */}
            <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-gradient-to-r from-gray-200/50 to-gray-300/50 dark:from-gray-700/50 dark:to-gray-600/50 animate-pulse" />

            {/* Content skeleton */}
            <div className="flex-1 min-w-0">
              <div className="h-5 w-3/4 bg-gradient-to-r from-gray-200/50 to-gray-300/50 dark:from-gray-700/50 dark:to-gray-600/50 rounded mb-3 animate-pulse" />
              <div className="h-4 w-1/2 bg-gradient-to-r from-gray-200/50 to-gray-300/50 dark:from-gray-700/50 dark:to-gray-600/50 rounded animate-pulse" />

              {/* Action buttons skeleton */}
              <div className="flex items-center justify-between mt-3">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <div className="h-3 w-24 bg-gradient-to-r from-gray-200/50 to-gray-300/50 dark:from-gray-700/50 dark:to-gray-600/50 rounded animate-pulse" />
                </div>

                <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100">
                  <div className="h-4 w-12 bg-gradient-to-r from-gray-200/50 to-gray-300/50 dark:from-gray-700/50 dark:to-gray-600/50 rounded animate-pulse" />
                  <div className="h-4 w-12 bg-gradient-to-r from-gray-200/50 to-gray-300/50 dark:from-gray-700/50 dark:to-gray-600/50 rounded animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default TaskSkeleton;