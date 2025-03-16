import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden scroll-mt-16">
      {/*<div className="absolute top-0 right-0 mt-20 mr-8">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop"
          alt="Keerthikeswaran K S"
          className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
        />
      </div>*/}
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-6"
        >
          KeerthiKeswaran K S
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8"
        >
          Futuristic AI | Software Engineer
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Driving innovation through the seamless integration of advanced technologies to create intelligent solutions that shape the future.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;