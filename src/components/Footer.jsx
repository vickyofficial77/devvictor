// src/components/Footer.js
import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = ({ language }) => {
  const currentYear = new Date().getFullYear();
  
  const copyrightText = language === 'en' ? `© ${currentYear} DevVictor. All rights reserved.` : 
                       language === 'fr' ? `© ${currentYear} DevVictor. Tous droits réservés.` : 
                       `© ${currentYear} DevVictor. Uburenganzira bwose burinzwe.`;

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-white mb-2">DevVictor</h3>
            <p className="max-w-xs">
              {language === 'en' ? 'Creating innovative digital solutions for businesses worldwide.' : 
               language === 'fr' ? 'Création de solutions numériques innovantes pour les entreprises du monde entier.' : 
               'Kubaka ibisubizo bya digitale byihariye kubucuruzi ku isi yose.'}
            </p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="https://github.com/vickyofficial77" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mugisha-victor-bb2844307/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FiLinkedin size={20} />
            </a>
            <a href="https://x.com/vicky_oofficial" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FiTwitter size={20} />
            </a>
            <a href="https://www.instagram.com/mugisha__victor/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FiInstagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;