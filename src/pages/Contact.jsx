// src/pages/Contact.js
import React, { useState } from 'react';
import { FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  // Phone number constants
  const phoneNumber = '+250787711111';
  const formattedPhone = '+250 787 711 111';

  const translations = {
    en: {
      title: "Get In Touch",
      description: "Have a project in mind? Want to discuss potential opportunities? Feel free to reach out using the form below or through my contact information.",
      formTitle: "Send me a message",
      nameLabel: "Your Name",
      emailLabel: "Email Address",
      subjectLabel: "Subject",
      messageLabel: "Message",
      submitButton: "Send Message",
      contactTitle: "Contact Information",
      whatsapp: "Chat on WhatsApp",
      whatsappMessage: "Hello! I came from your portfolio and would like to chat.",
      socialTitle: "Connect with me"
    },
    fr: {
      title: "Contactez-moi",
      description: "Vous avez un projet en tête ? Vous souhaitez discuter d'opportunités potentielles ? N'hésitez pas à me contacter en utilisant le formulaire ci-dessous ou via mes coordonnées.",
      formTitle: "Envoyez-moi un message",
      nameLabel: "Votre nom",
      emailLabel: "Adresse e-mail",
      subjectLabel: "Sujet",
      messageLabel: "Message",
      submitButton: "Envoyer le message",
      contactTitle: "Informations de contact",
      whatsapp: "Discuter sur WhatsApp",
      whatsappMessage: "Bonjour! Je viens de votre portfolio et je voudrais discuter.",
      socialTitle: "Connectez-vous avec moi"
    },
    rw: {
      title: "Mvugishe",
      description: "Ufite umushinga mu bitekerezo? Ushaka kuganira ku mahirwe ashoboka? Wumve utuje, ukoreshe fomu iri hasi cyangwa ukoreshe amakuru yanjye yo kuvugana.",
      formTitle: "Ohereza ubutumwa",
      nameLabel: "Izina ryawe",
      emailLabel: "Imeri",
      subjectLabel: "Umutwe",
      messageLabel: "Ubutumwa",
      submitButton: "Ohereza",
      contactTitle: "Uburyo bwo kuvugana",
      whatsapp: "Vugana kuri WhatsApp",
      whatsappMessage: "Muraho! Naje kuri portfolio yawe ndashaka kuvugana nawe.",
      socialTitle: "Mvugishe"
    }
  };

  const t = translations[language] || translations.en;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(t.whatsappMessage)}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: language === 'en' ? 'Your message has been sent successfully!' : 
              language === 'fr' ? 'Votre message a été envoyé avec succès !' : 
              'Ubutumwa bwawe bwakoherejwe neza!'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 120, 
        damping: 14 
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="container mx-auto px-4 py-12"
    >
      <motion.div variants={fadeIn}>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">{t.title}</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          {t.description}
        </p>
      </motion.div>
      
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <motion.div 
            variants={item}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-2xl font-bold mb-6"
            >
              {t.formTitle}
            </motion.h2>
            
            {submitMessage && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-lg ${
                  submitMessage.type === 'success' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                }`}
              >
                {submitMessage.text}
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit}>
              <motion.div variants={item} className="mb-6">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800"
                  required
                />
              </motion.div>
              
              <motion.div variants={item} className="mb-6">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800"
                  required
                />
              </motion.div>
              
              <motion.div variants={item} className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">
                  {t.subjectLabel}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800"
                  required
                />
              </motion.div>
              
              <motion.div variants={item} className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                  {t.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800"
                  required
                ></textarea>
              </motion.div>
              
              <motion.div variants={item}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors w-full ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    language === 'en' ? 'Sending...' : 
                    language === 'fr' ? 'Envoi en cours...' : 
                    'Kohereza...'
                  ) : t.submitButton}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
        
        <div className="lg:w-1/2">
          <motion.div variants={item} className="mb-8">
            <motion.h2 
              variants={fadeIn}
              className="text-2xl font-bold mb-6"
            >
              {t.contactTitle}
            </motion.h2>
            
            <div className="space-y-6">
              <motion.div 
                variants={item}
                className="flex items-start"
              >
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg mr-4">
                  <FiMail className="text-indigo-600 dark:text-indigo-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    {language === 'en' ? 'Email' : language === 'fr' ? 'E-mail' : 'Imeri'}
                  </h3>
                  <a href="mailto:vickydeveloper200@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                    vickydeveloper200@gmail.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                variants={item}
                className="flex items-start"
              >
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg mr-4">
                  <FiPhone className="text-indigo-600 dark:text-indigo-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    {language === 'en' ? 'Phone' : language === 'fr' ? 'Téléphone' : 'Telefone'}
                  </h3>
                  <a href={`tel:${phoneNumber}`} className="text-indigo-600 dark:text-indigo-400 hover:underline">
                    {formattedPhone}
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                variants={item}
                className="flex items-start"
              >
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg mr-4">
                  <FiMessageSquare className="text-indigo-600 dark:text-indigo-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                  <a 
                    href={whatsappUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors inline-flex items-center"
                  >
                    <FiMessageSquare className="mr-2" />
                    {t.whatsapp}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div variants={item}>
            <motion.h2 
              variants={fadeIn}
              className="text-2xl font-bold mb-6"
            >
              {t.socialTitle}
            </motion.h2>
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ y: -5 }}
                href="https://github.com/vickyofficial77" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>
              
              <motion.a 
                whileHover={{ y: -5 }}
                href="https://www.linkedin.com/in/mugisha-victor-bb2844307/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>
              
              <motion.a 
                whileHover={{ y: -5 }}
                href="https://x.com/vicky_oofficial" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </motion.a>
              
              <motion.a 
                whileHover={{ y: -5 }}
                href="https://www.instagram.com/mugisha__victor/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;