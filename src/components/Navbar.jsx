// src/components/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMoon, FiSun, FiGlobe, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ language, changeLanguage }) => {
  const location = useLocation();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );
  const languageRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'rw', name: 'Kinyarwanda' }
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLanguageOpen(false);
  }, [location.pathname]);

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const handleLanguageChange = (code) => {
    changeLanguage(code);
    setIsLanguageOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navItems = [
    { path: '/', en: 'Home', fr: 'Accueil', rw: 'Ahabanza' },
    { path: '/about', en: 'About', fr: 'À propos', rw: 'Ibyerekeye' },
    { path: '/portfolio', en: 'Portfolio', fr: 'Portefeuille', rw: 'Imishinga' },
    { path: '/services', en: 'Services', fr: 'Services', rw: 'Serivisi' },
    { path: '/contact', en: 'Contact', fr: 'Contact', rw: 'Vugana' }
  ];

  const isActivePath = (path) => location.pathname === path;

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/20 dark:border-white/10 bg-white/75 dark:bg-gray-900/75 backdrop-blur-xl shadow-lg shadow-black/5">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="group inline-flex items-center gap-2"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600 text-white font-bold shadow-lg shadow-indigo-500/25">
                DV
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-extrabold text-gray-900 dark:text-white">
                  DevVictor
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Developer Portfolio
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2 rounded-full border border-gray-200/80 dark:border-gray-700/80 bg-white/70 dark:bg-gray-800/70 px-2 py-2 shadow-sm">
              {navItems.map((item, index) => {
                const isActive = isActivePath(item.path);

                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavPill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}

                    <span className="relative z-10 flex items-center gap-2">
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-white"></span>
                      )}
                      {item[language]}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Language */}
              <div className="relative hidden sm:block" ref={languageRef}>
                <button
                  onClick={toggleLanguageDropdown}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm transition hover:bg-white dark:hover:bg-gray-800"
                >
                  <FiGlobe className="text-indigo-500" />
                  {languages.find((lang) => lang.code === language)?.name}
                </button>

                <AnimatePresence>
                  {isLanguageOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.18 }}
                      className="absolute right-0 mt-3 w-48 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-800/95 shadow-xl backdrop-blur-xl"
                    >
                      <div className="p-2">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                              language === lang.code
                                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                                : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                          >
                            {lang.name}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Dark Mode */}
              <button
                onClick={toggleDarkMode}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-200 shadow-sm transition hover:scale-105 hover:bg-white dark:hover:bg-gray-800"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-indigo-500" />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-200 shadow-sm transition hover:scale-105 md:hidden"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              className="fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm overflow-y-auto border-l border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-5 py-5">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                    DevVictor
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Navigation
                  </p>
                </div>

                <button
                  onClick={toggleMobileMenu}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                >
                  <FiX size={20} />
                </button>
              </div>

              <div className="px-4 py-5">
                <div className="space-y-2">
                  {navItems.map((item, index) => {
                    const isActive = isActivePath(item.path);

                    return (
                      <Link
                        key={index}
                        to={item.path}
                        className={`flex items-center justify-between rounded-2xl px-4 py-4 font-semibold transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                            : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                        onClick={toggleMobileMenu}
                      >
                        <span>{item[language]}</span>
                        {isActive && <span className="h-2.5 w-2.5 rounded-full bg-white" />}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-3xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                    <FiGlobe className="text-indigo-500" />
                    Language / Ururimi
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          handleLanguageChange(lang.code);
                          toggleMobileMenu();
                        }}
                        className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                          language === lang.code
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                            : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
