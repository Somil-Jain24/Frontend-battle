import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INITIALIZING');

  const loadingStates = [
    'INITIALIZING',
    'LOADING ASSETS',
    'CONFIGURING',
    'OPTIMIZING',
    'READY'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    const textInterval = setInterval(() => {
      setLoadingText(prev => {
        const currentIndex = loadingStates.indexOf(prev);
        return loadingStates[(currentIndex + 1) % loadingStates.length];
      });
    }, 600);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-navy flex flex-col items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo Animation */}
      <motion.div
        className="mb-8"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="text-6xl font-space font-bold bg-gradient-to-r from-electric via-gold to-neon-purple bg-clip-text text-transparent">
          FUTURETECH
        </div>
      </motion.div>

      {/* Loading Text */}
      <motion.div
        className="text-xl font-space font-medium text-electric mb-4"
        key={loadingText}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {loadingText}
      </motion.div>

      {/* Loading Bar */}
      <div className="w-96 h-1 bg-dark-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-electric via-gold to-neon-purple"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>

      {/* Percentage */}
      <motion.div
        className="mt-4 text-sm font-mono text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {Math.round(progress)}%
      </motion.div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-electric rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 10,
              opacity: 0
            }}
            animate={{
              y: -10,
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Loader;