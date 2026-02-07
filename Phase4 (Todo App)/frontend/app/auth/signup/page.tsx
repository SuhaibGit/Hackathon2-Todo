'use client';

import React from 'react';
import SignupForm from '@/components/auth/SignupForm';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SignUpPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 dark:from-slate-950 dark:to-slate-900 p-4 transition-colors duration-300">
      <div className="max-w-md w-full">
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/20 dark:border-slate-800/50 transition-all duration-300">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Join Us
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-3 font-medium">Create a new account</p>
          </div>

          <SignupForm
            onSwitchToSignin={() => router.push('/auth/signin')}
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

export default SignUpPage;