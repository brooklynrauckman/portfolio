'use client';

import { useState } from 'react';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center">
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#projects"
              className="text-gray-300 hover:text-primary-400 transition-colors font-medium"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-primary-400 transition-colors font-medium"
            >
              Skills
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-primary-400 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="https://www.linkedin.com/in/brooklyn-rauckman-21514390/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all transform hover:scale-105"
            >
              Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/brooklyn-rauckman-21514390/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-semibold rounded-lg"
            >
              Connect
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              <img
                src="/menu.svg"
                alt="Menu"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900 z-50 p-6">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-8">
              <img
                src="/logo.svg"
                alt="Logo"
                className="w-10 h-10"
              />
              <button
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white"
                aria-label="Close menu"
              >
                <img
                  src="/close.svg"
                  alt="Close"
                  className="w-6 h-6"
                />
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-semibold text-gray-300 hover:text-primary-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-semibold text-gray-300 hover:text-primary-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-semibold text-gray-300 hover:text-primary-400 transition-colors"
              >
                About
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

