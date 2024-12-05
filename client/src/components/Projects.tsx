import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Bot, Brain, Database, Activity } from 'lucide-react';

const projects = [
  {
    title: 'ARIA-AI',
    description: 'Mobile app providing personalized health recommendations using LLMs',
    icon: <Activity className="w-6 h-6 text-cyan-glow" />,
    tech: ['React Native', 'Python', 'FastAPI', 'LangChain'],
    github: 'https://github.com/KeerthiKeswaran/ARIA-AI-Adaptive-Response-Insight-Assistant',
    demo: '#'
  },
  {
    title: 'RAGGLE',
    description: 'AI chatbot for automating admission-related queries',
    icon: <Bot className="w-6 h-6 text-cyan-glow" />,
    tech: ['Python', 'LangChain', 'FastAPI', 'React'],
    github: '',
    demo: '#'
  },
  {
    title: 'Probe2Cure',
    description: 'AI-driven diagnostic tool for classifying chest X-rays',
    icon: <Brain className="w-6 h-6 text-cyan-glow" />,
    tech: ['TensorFlow', 'Python', 'FastAPI', 'React'],
    github: 'https://github.com/KeerthiKeswaran/Probe2Cure-Intelligent-Xray-Diagnosis-Dashboard',
    demo: '#'
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-charcoal">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-ghost-white mb-4">Featured Projects</h2>
          <p className="text-dim-gray text-lg">Showcasing innovation through code</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-jet p-6 rounded-xl border border-cyan-glow/20 hover:border-cyan-glow/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                {project.icon}
                <h3 className="text-2xl font-bold text-ghost-white">{project.title}</h3>
              </div>
              <p className="text-dim-gray mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-electric-blue/10 text-electric-blue rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.github}
                  className="flex items-center gap-2 text-dim-gray hover:text-cyan-glow transition-colors"
                >
                  <Github size={20} />
                  <span>Code</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.demo}
                  className="flex items-center gap-2 text-dim-gray hover:text-cyan-glow transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}