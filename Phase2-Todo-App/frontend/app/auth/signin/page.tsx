'use client';

import React, { useState } from 'react';
import LoginForm from '@/components/auth/LoginForm';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SignInPage: React.FC = () => {
  const [showSignup, setShowSignup] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4 transition-colors duration-300">
      <div className="max-w-md w-full">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome Back
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Sign in to your account</p>
          </div>

          <LoginForm
            onSwitchToSignup={() => router.push('/auth/signup')}
          />

          <div className="mt-6 text-center">
            <Link href="/" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;