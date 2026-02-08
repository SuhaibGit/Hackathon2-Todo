'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Check for saved theme in localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme to document with smooth transition
    const root = document.documentElement;
    console.log('Theme changed to:', theme);

    // Add transition class to body for smooth theme switching
    document.body.classList.add('theme-transition-all');

    // Remove existing theme classes and add new one
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    // Save theme to localStorage
    localStorage.setItem('theme', theme);

    // Clean up transition class after transition completes
    const cleanupTransition = setTimeout(() => {
      document.body.classList.remove('theme-transition-all');
    }, 300); // Match the CSS transition duration

    return () => clearTimeout(cleanupTransition);
  }, [theme]);

  const toggleTheme = () => {
    console.log('Toggle theme called, current:', theme);
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};