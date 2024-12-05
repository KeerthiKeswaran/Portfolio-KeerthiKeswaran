import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Rocket } from 'lucide-react';
import AboutMe from '../assets/AboutMeIllustration.png';
export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-charcoal">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-4 items-center"
        >
          <div className="relative">
            <div className="w-3/4 h-3/4">
              <img
                src={AboutMe}
                alt="KeerthiKeswaran K S"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-6 h-6 text-cyan-glow" />
              <h2 className="text-4xl font-bold text-ghost-white">About Me</h2>
            </div>
            <p className="text-dim-gray mb-6">
              I'm a Computer Science and Engineering student specializing in AI, ML, and Full-Stack Development.
              With a passion for building innovative solutions, I combine cutting-edge AI technologies with
              scalable web applications to create impactful projects.
            </p>
            <p className="text-dim-gray mb-6">
              My expertise spans across modern frameworks and technologies including React.js, FastAPI, Node.js,
              and TensorFlow. I'm particularly interested in developing AI-driven solutions that solve real-world
              problems and enhance user experiences.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-jet p-4 rounded-lg border border-cyan-glow/20">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="w-5 h-5 text-cyan-glow" />
                  <h3 className="font-semibold text-ghost-white">Education</h3>
                </div>
                <p className="text-dim-gray">B.Tech in Computer Science Engineering</p>
              </div>
              <div className="bg-jet p-4 rounded-lg border border-cyan-glow/20">
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="w-5 h-5 text-cyan-glow" />
                  <h3 className="font-semibold text-ghost-white">Experience</h3>
                </div>
                <p className="text-dim-gray">AI Research Intern</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

{/*
  <div className="w-full h-[500px] rounded-2xl overflow-hidden border-2 border-cyan-glow/20">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-glow/20 to-electric-blue/20 animate-glow"></div>
              <img
                src={AboutMe}
                alt="KeerthiKeswaran K S"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
            </div>
  */}