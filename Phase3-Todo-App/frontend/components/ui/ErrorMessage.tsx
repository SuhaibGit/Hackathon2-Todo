'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface ErrorMessageProps {
  message: string;
  isVisible?: boolean;
  onClose?: () => void;
  type?: 'error' | 'warning' | 'info';
}

const ErrorMessage = ({ message, isVisible = true, onClose, type = 'error' }: ErrorMessageProps) => {
  const getStyles = () => {
    switch (type) {
      case 'warning':
        return {
          bg: 'bg-amber-50 dark:bg-amber-900/30',
          border: 'border-amber-200 dark:border-amber-800',
          text: 'text-amber-700 dark:text-amber-300',
          icon: '⚠️'
        };
      case 'info':
        return {
          bg: 'bg-blue-50 dark:bg-blue-900/30',
          border: 'border-blue-200 dark:border-blue-800',
          text: 'text-blue-700 dark:text-blue-300',
          icon: 'ℹ️'
        };
      case 'error':
      default:
        return {
          bg: 'bg-red-50 dark:bg-red-900/30',
          border: 'border-red-200 dark:border-red-800',
          text: 'text-red-700 dark:text-red-300',
          icon: '❌'
        };
    }
  };

  const styles = getStyles();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`rounded-xl p-4 mb-4 ${styles.bg} ${styles.border} border ${styles.text} flex items-start`}
          initial={{ opacity: 0, y: -20, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: -20, height: 0 }}
          transition={{ duration: 0.3 }}
          role="alert"
          aria-live="polite"
        >
          <span className="mr-3 text-lg" aria-hidden="true">{styles.icon}</span>
          <div className="flex-1">
            <p className="font-medium">{message}</p>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="ml-4 text-current hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-current rounded-full p-1"
              aria-label="Close error message"
            >
              ✕
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ErrorMessage;