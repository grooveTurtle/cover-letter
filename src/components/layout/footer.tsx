import { FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-6 border-t border-gray-200 dark:border-neutral-700">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600 dark:text-neutral-400">
            &copy; 2025 Grvt. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/gamecorelabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-400 text-xs"
            >
              <FaGithub size={16} />
              Github
            </a>
            <a
              href="mailto:grooveturtle29@gmail.com"
              className="flex items-center gap-1 text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-400 text-xs"
            >
              <FaEnvelope size={16} />
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
