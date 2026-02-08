'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon } from '@heroicons/react/24/outline';

interface FloatingActionButtonProps {
  onClick: () => void;
  isVisible?: boolean;
  ariaLabel?: string;
}

const FloatingActionButton = ({
  onClick,
  isVisible = true,
  ariaLabel = 'Add new task'
}: FloatingActionButtonProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center z-40 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
          initial={{ scale: 0, y: 50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0, y: 50, opacity: 0 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClick}
          aria-label={ariaLabel}
        >
          <motion.span
            animate={{ rotate: 0 }}
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <PlusIcon className="h-6 w-6" />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default FloatingActionButton;