import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90' : 'bg-black/80'} h-16 dark:animated-gradient backdrop-blur-sm`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Contact
            </button>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/KeerthiKeswaran" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/keerthikeswaran-k-s/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:keshwarankeerthi@gmail.com" 
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              {isDark ? 
                <Sun size={20} className="text-gray-300 hover:text-white transition-colors duration-300" /> : 
                <Moon size={20} className="text-gray-300 hover:text-white transition-colors duration-300" />
              }
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;