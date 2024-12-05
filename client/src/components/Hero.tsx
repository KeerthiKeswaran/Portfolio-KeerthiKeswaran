import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Brain, Code, Rocket } from 'lucide-react';
import ProfileImage from './ProfileImage';

export default function Hero() {
  const taglineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-jet">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={taglineVariants}
            className="text-left"
          >
            <motion.div variants={taglineVariants} className="flex items-center gap-2 mb-4">
              <Brain className="w-6 h-6 text-cyan-glow" />
              <span className="text-teal-glow">AI | Software Engineer</span>
            </motion.div>
            <motion.h1 variants={taglineVariants} className="text-5xl md:text-7xl font-bold text-ghost-white mb-4">
              KeerthiKeswaran
            </motion.h1>
            <motion.h2 variants={taglineVariants} className="text-2xl md:text-3xl bg-gradient-to-r from-cyan-glow to-electric-blue bg-clip-text text-transparent font-bold mb-6">
              Crafting a Better Tomorrow
            </motion.h2>
            <motion.p variants={taglineVariants} className="text-xl text-dim-gray mb-8 max-w-2xl">
              Driving innovation through the seamless integration of advanced technologies to create intelligent solutions that shape the future.
            </motion.p>
            <motion.div variants={taglineVariants} className="flex gap-4 mb-8">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px #00FFFF' }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-glow to-teal-glow text-jet font-bold rounded-full hover:opacity-90 transition-all"
              >
                Get in Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px #00CED1' }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-3 bg-transparent border-2 border-teal-glow text-ghost-white rounded-full hover:bg-teal-glow/10 transition-all"
              >
                View Projects
              </motion.a>
            </motion.div>
            <motion.div variants={taglineVariants} className="flex gap-6">
              <motion.a
                whileHover={{ scale: 1.2, color: '#00FFFF' }}
                href="https://github.com/KeerthiKeswaran"
                className="text-dim-gray hover:text-cyan-glow transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: '#00FFFF' }}
                href="https://www.linkedin.com/in/keerthikeswaran-k-s/"
                className="text-dim-gray hover:text-cyan-glow transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: '#00FFFF' }}
                href="mailto:keshwarankeerthi@gmail.com"
                className="text-dim-gray hover:text-cyan-glow transition-colors"
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
          <div className="flex justify-center">
            <ProfileImage />
          </div>
        </div>
      </div>
    </div>
  );
}