// src/components/PortfolioCard.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioCard = ({ title, description, tags, imageUrl, liveDemo }) => {
  const [showSnowAnimation, setShowSnowAnimation] = useState(false);

  const handleViewClick = (e) => {
    if (liveDemo === "coming-soon") {
      e.preventDefault();
      setShowSnowAnimation(true);
      setTimeout(() => setShowSnowAnimation(false), 4000);
    }
  };

  const isComingSoon = liveDemo === "coming-soon";

  // Create snowflakes
  const snowflakes = Array.from({ length: 100 }).map((_, i) => ({
    id: i,
    size: Math.random() * 5 + 2,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 5 + 5
  }));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full flex flex-col relative">
      {/* Content */}
      <div className="flex flex-col h-full">
        {/* Image container */}
        <div className="overflow-hidden">
          <motion.img 
            src={imageUrl} 
            alt={title}
            className="w-full h-48 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Single Button */}
          {isComingSoon ? (
            // View Project Button for coming soon projects
            <motion.button
              onClick={handleViewClick}
              className="w-full mt-auto"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(156, 163, 175, 0.3), 0 10px 10px -5px rgba(156, 163, 175, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-center px-4 py-3 rounded-lg font-medium">
                View Project
              </div>
            </motion.button>
          ) : (
            // Live Demo Button for ready projects
            <motion.a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block mt-auto"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5), 0 10px 10px -5px rgba(59, 130, 246, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="bg-indigo-600 text-white text-center px-4 py-3 rounded-lg font-medium">
                View Project
                <motion.span
                  className="ml-2"
                  animate={{ 
                    x: [0, 5, 0],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                >
                  ↗
                </motion.span>
              </div>
            </motion.a>
          )}
        </div>
      </div>

      {/* Snow Animation Overlay - Fixed position outside card */}
      <AnimatePresence>
        {showSnowAnimation && (
          <motion.div
            className="fixed inset-0 bg-blue-900 bg-opacity-90 z-50 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Snowflakes */}
            {snowflakes.map((flake) => (
              <motion.div
                key={flake.id}
                className="absolute top-0 rounded-full bg-white"
                style={{
                  width: `${flake.size}px`,
                  height: `${flake.size}px`,
                  left: `${flake.left}%`,
                }}
                initial={{ y: -50, opacity: 0 }}
                animate={{ 
                  y: "100vh", 
                  opacity: [0, 1, 1, 0],
                }}
                transition={{ 
                  duration: flake.duration,
                  delay: flake.delay,
                  ease: "linear"
                }}
              />
            ))}

            {/* Coming Soon Message - FIXED ROTATION ANIMATION */}
            <motion.div
              className="text-center z-10"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                // Fixed: Use only two values for spring animation
                rotate: 0
              }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 200
              }}
            >
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                animate={{ 
                  rotate: [0, 5, -5, 0]  // Move rotation here with keyframes
                }}
                transition={{ 
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                Website Coming Soon!
              </motion.h2>
              <motion.div
                className="text-2xl text-white"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                🚧 Under Construction 🚧
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioCard;