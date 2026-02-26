// src/components/ServiceCard.js
import React from 'react';
import { FiCheck } from 'react-icons/fi';

const ServiceCard = ({ name, price, features, language }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-2xl font-semibold text-center mb-2 text-gray-900 dark:text-gray-100">{name}</h3>
        <div className="text-4xl font-bold text-center mb-6 text-indigo-600 dark:text-indigo-300">{price}</div>

        <ul className="space-y-3 mb-6 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="w-5 h-5 bg-indigo-600 rounded-full flex-shrink-0 flex items-center justify-center mr-2">
                <FiCheck className="text-white w-3 h-3" />
              </span>
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Modern design could include a subtle call-to-action area, but button removed as requested */}
      </div>
    </div>
  );
};

export default ServiceCard;
