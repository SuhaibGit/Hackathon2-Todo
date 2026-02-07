'use client';

import { motion } from 'framer-motion';

interface LoadingSkeletonProps {
  count?: number;
  className?: string;
  height?: string;
  width?: string;
}

const LoadingSkeleton = ({
  count = 1,
  className = '',
  height = 'h-4',
  width = 'w-full'
}: LoadingSkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className={`${height} ${width} rounded-xl bg-gradient-to-r from-gray-200/50 via-gray-300/50 to-gray-200/50 dark:from-gray-700/50 dark:via-gray-600/50 dark:to-gray-700/50 animate-pulse ${className}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        />
      ))}
    </>
  );
};

export default LoadingSkeleton;