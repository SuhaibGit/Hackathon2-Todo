'use client';

import { useTheme } from '@/hooks/useTheme';
import { SunIcon, MoonIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  // Simple user menu dropdown
  const handleLogout = () => {
    // TODO: Implement logout functionality
    console.log('Logout clicked');
  };

  const handleProfile = () => {
    // TODO: Implement profile navigation
    console.log('Profile clicked');
  };

  return (
    <header
      className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm py-3 sm:py-4 px-4 sm:px-6 z-50 border-b border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300 pointer-events-auto"
    >
      <div className="flex justify-between items-center">
        {/* App name */}
        <div
          className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white"
        >
          Todo App
        </div>

        {/* Right side controls */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer pointer-events-auto relative z-50"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <MoonIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700 dark:text-gray-300" />
            ) : (
              <SunIcon className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
            )}
          </button>

          {/* User menu */}
          <Menu as="div" className="relative z-50">
            <Menu.Button className="flex items-center space-x-1 sm:space-x-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer">
              <UserCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 dark:text-gray-300" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-40 sm:w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md py-1 z-50 focus:outline-none ring-1 ring-black ring-opacity-5">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={handleProfile}
                      className={`${active ? 'bg-gray-100 dark:bg-gray-700' : ''
                        } block w-full text-left px-3 sm:px-4 py-2 text-sm text-gray-700 dark:text-gray-300`}
                    >
                      Profile
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={handleLogout}
                      className={`${active ? 'bg-gray-100 dark:bg-gray-700' : ''
                        } block w-full text-left px-3 sm:px-4 py-2 text-sm text-red-600`}
                    >
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;