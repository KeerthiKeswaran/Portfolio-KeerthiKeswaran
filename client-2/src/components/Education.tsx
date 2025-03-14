import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 text-black dark:text-white flex items-center justify-center gap-3"
        >
          <GraduationCap className="w-8 h-8" />
          Education
        </motion.h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
            B.Tech Computer Science with Business Systems
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
            Vellore Institute of Technology, Amaravati, AP
          </p>
          <p className="text-xl font-semibold text-black dark:text-white">
            CGPA: 8.40
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;