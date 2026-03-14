// src/components/ServiceCard.js
import React from 'react';
import { FiCheck } from 'react-icons/fi';

const ServiceCard = ({ name, oldPrice, price, features, language }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-2xl font-semibold text-center mb-3 text-gray-900 dark:text-gray-100">
          {name}
        </h3>

        <div className="flex items-center justify-center gap-3 mb-2 flex-wrap">
          {oldPrice && (
            <span className="text-lg md:text-xl font-medium text-red-400 dark:text-red-300 line-through decoration-2 decoration-red-500 opacity-90">
              {oldPrice}
            </span>
          )}
          <span className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-300">
            {price}
          </span>
        </div>

        {oldPrice && (
          <div className="text-center mb-6">
            <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 dark:bg-red-900/20 dark:text-red-300 border border-red-100 dark:border-red-800/40">
              Special Offer
            </span>
          </div>
        )}

        <ul className="space-y-3 mb-6 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="w-5 h-5 bg-indigo-600 rounded-full flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                <FiCheck className="text-white w-3 h-3" />
              </span>
              <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
