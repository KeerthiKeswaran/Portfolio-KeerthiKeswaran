import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-jet">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-ghost-white mb-12 text-center">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-ghost-white mb-6">Let's Connect</h3>
              <p className="text-dim-gray mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:keshwarankeerthi@gmail.com"
                  className="flex items-center gap-4 text-dim-gray hover:text-cyan-glow transition-colors"
                >
                  <Mail className="w-6 h-6" />
                  <span>keshwarankeerthi@gmail.com</span>
                </a>
                <a
                  href="https://github.com/KeerthiKeswaran"
                  className="flex items-center gap-4 text-dim-gray hover:text-cyan-glow transition-colors"
                >
                  <Github className="w-6 h-6" />
                  <span>github.com/KeerthiKeswaran</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/keerthikeswaran-k-s/"
                  className="flex items-center gap-4 text-dim-gray hover:text-cyan-glow transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                  <span>linkedin.com/keerthikeswaran-k-s</span>
                </a>
              </div>
            </motion.div>
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-charcoal text-ghost-white border border-cyan-glow/20 rounded-lg px-4 py-3 focus:border-cyan-glow outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-charcoal text-ghost-white border border-cyan-glow/20 rounded-lg px-4 py-3 focus:border-cyan-glow outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-charcoal text-ghost-white border border-cyan-glow/20 rounded-lg px-4 py-3 focus:border-cyan-glow outline-none transition-colors"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-cyan-glow to-electric-blue text-jet font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}