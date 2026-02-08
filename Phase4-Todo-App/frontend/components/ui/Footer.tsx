'use client';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 py-4 px-4 mt-auto relative z-10"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
          © {currentYear} Todo App. All rights reserved.
        </div>
        <div className="mt-2 sm:mt-0 flex flex-wrap justify-center gap-3 sm:gap-6">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-xs sm:text-sm transition-colors hover:-translate-y-0.5"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-xs sm:text-sm transition-colors hover:-translate-y-0.5"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-xs sm:text-sm transition-colors hover:-translate-y-0.5"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;