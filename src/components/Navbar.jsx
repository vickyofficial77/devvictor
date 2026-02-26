import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiMoon, FiSun, FiGlobe, FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ language, changeLanguage }) => {
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
    { path: '/portfolio', en: 'Portfolio', fr: 'Portefeuille', rw: 'imishinga yanjye' },
    { path: '/services', en: 'Services', fr: 'Services', rw: 'Serivisi' },
    { path: '/contact', en: 'Contact', fr: 'Contact', rw: 'vugana' }
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          DevVictor
        </Link>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <Link 
              key={index}
              to={item.path}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
            >
              {item[language]}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative" ref={languageRef}>
            <button 
              onClick={toggleLanguageDropdown}
              className="flex items-center text-sm font-medium p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <FiGlobe className="mr-1" />
              {languages.find(lang => lang.code === language)?.name}
            </button>

            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1 z-10 border border-gray-200 dark:border-gray-600">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`block px-4 py-2 text-sm w-full text-left ${
                      language === lang.code 
                        ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300' 
                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMobileMenu}>
          <div 
            className="absolute right-0 top-16 h-full w-64 bg-white dark:bg-gray-800 shadow-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col py-4">
              {navItems.map((item, index) => (
                <Link 
                  key={index}
                  to={item.path}
                  className="px-6 py-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-medium"
                  onClick={toggleMobileMenu}
                >
                  {item[language]}
                </Link>
              ))}

              <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4 px-6">
                <div className="mb-4 font-medium">Language / Ururimi</div>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        handleLanguageChange(lang.code);
                        toggleMobileMenu();
                      }}
                      className={`px-4 py-2 rounded-lg text-sm ${
                        language === lang.code 
                          ? 'bg-indigo-600 text-white' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
