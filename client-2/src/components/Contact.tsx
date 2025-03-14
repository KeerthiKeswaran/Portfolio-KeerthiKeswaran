import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const contacts = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "keshwarankeerthi@gmail.com",
      href: "mailto:keshwarankeerthi@gmail.com"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "KeerthiKeswaran",
      href: "https://github.com/KeerthiKeswaran"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Keerthikeswaran K S",
      href: "https://www.linkedin.com/in/keerthikeswaran-k-s/"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 text-black dark:text-white"
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4 text-gray-600 dark:text-gray-400">
                {contact.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {contact.label}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {contact.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;