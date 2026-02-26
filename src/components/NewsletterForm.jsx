// src/components/NewsletterForm.js
import React from 'react';

const NewsletterForm = ({ language }) => {
  const translations = {
    en: {
      placeholder: "Your email address",
      button: "Subscribe",
      note: "No spam, just useful updates"
    },
    fr: {
      placeholder: "Votre adresse email",
      button: "S'inscrire",
      note: "Pas de spam, juste des mises à jour utiles"
    },
    rw: {
      placeholder: "Imeri yawe ",
      button: "Kwiyandikisha",
      note: "Nta spam, amakuru y'ingirakamaro gusa."
    }
  };

  const t = translations[language] || translations.en;

  return (
    <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-8 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2">
          {language === 'en' ? 'Subscribe to my newsletter' : 
           language === 'fr' ? 'Abonnez-vous à ma newsletter' : 
           'Kwiyandikisha kuri newsletter yanjye'}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {language === 'en' ? 'Get the latest updates, tips, and resources delivered to your inbox.' : 
           language === 'fr' ? 'Recevez les dernières mises à jour, conseils et ressources dans votre boîte de réception.' : 
           'Bona amakuru agezweho, inama, n ibikoresho by ingirakamaro bitangwa kuri email yawe.'}
        </p>
      </div>
      
      <form className="flex flex-col sm:flex-row gap-4">
        <input 
          type="email" 
          placeholder={t.placeholder}
          className="px-4 py-3 rounded-lg flex-grow border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800"
          required
        />
        <button 
          type="submit"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          {t.button}
        </button>
      </form>
      
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
        {t.note}
      </p>
    </div>
  );
};

export default NewsletterForm;