// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <Router>
          <Navbar 
            darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode}
            language={language}
            changeLanguage={changeLanguage}
          />
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/about" element={<About language={language} />} />
            <Route path="/portfolio" element={<Portfolio language={language} />} />
            <Route path="/services" element={<Services language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
          </Routes>
          <Footer language={language} />
        </Router>
      </div>
    </div>
  );
}

export default App;