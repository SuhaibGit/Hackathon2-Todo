'use client';
import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/components/auth/AuthProvider';

export default function HomePage() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center p-4 pt-24 sm:pt-32 pb-20">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
              Todo App
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A beautifully designed todo application to help you stay organized, focused, and productive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="space-y-6 flex flex-col justify-center">
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/50 hover:transform hover:scale-[1.02] transition-all duration-300">
                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/50 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Stay Organized</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Create, manage, and track your tasks with our intuitive interface.
                  Never miss a deadline again with smart reminders and categorization.
                </p>
              </div>

              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/50 hover:transform hover:scale-[1.02] transition-all duration-300">
                <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/50 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Secure & Private</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Your data is protected with industry-standard security measures.
                  We prioritize your privacy and ensure your information remains safe.
                </p>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20 dark:border-gray-700/50 h-full flex flex-col justify-center">
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {!isAuthenticated ? "Get Started Today" : "Welcome Back"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {!isAuthenticated
                        ? "Join thousands of users organizing their life with Todo App."
                        : "Ready to conquer your tasks?"}
                    </p>
                  </div>

                  {!isAuthenticated ? (
                    <div className="space-y-4">
                      <Link
                        href="/auth/signin"
                        className="w-full block py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-center text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
                      >
                        Sign In
                      </Link>
                      <div className="relative flex items-center py-2">
                        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
                        <span className="flex-shrink-0 mx-4 text-gray-500 text-sm">Or</span>
                        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
                      </div>
                      <Link
                        href="/auth/signup"
                        className="w-full block py-4 px-6 rounded-2xl bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-bold text-center text-lg border-2 border-gray-100 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1"
                      >
                        Create Account
                      </Link>
                    </div>
                  ) : (
                    <Link
                      href="/dashboard"
                      className="w-full block py-5 px-8 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-center text-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-1"
                    >
                      Go to Dashboard
                      <span className="ml-2">→</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}