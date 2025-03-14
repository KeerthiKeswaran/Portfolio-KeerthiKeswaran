import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "PTBDB Arrhythmia Classification",
    description: "Developed a deep learning model using ResNet-based CNN to classify ECG signals with 98.6% accuracy. Optimized feature extraction and data preprocessing, achieving 97% accuracy on normal cases and 99.3% on abnormal cases.",
    links: {
      demo: "https://colab.research.google.com/drive/1OHxqkXuAPwZRVTnGwyUdcxaxW6GcU1LE?usp=sharing"
    },
    date: "Jul 2024"
  },
  {
    title: "ARIA-AI: Adaptive Response & Insight Assistant",
    description: "Developed a mobile app with React Native providing personalized health recommendations using real-time environmental and user data. Fine-tuned LLM and integrated with FastAPI to deliver actionable health insights.",
    links: {
      github: "https://github.com/KeerthiKeswaran/ARIA-AI-Adaptive-Response-Insight-Assistant"
    },
    date: "Oct 2024"
  },
  {
    title: "CAFF-E: Smart Mobilized Coffee-Making Assistant",
    description: "Built an AI-powered coffee-making assistant that personalized recipes and added mobility features, improving user experience by 40%. Programmed an interactive user interface using Embedded C++.",
    links: {
      github: "https://github.com/KeerthiKeswaran/Smart-Mobilized-Coffee-Making-Assistant-Gen-AI",
      prototype: "https://drive.google.com/file/d/1BmH7evsmqQH4Xeew3rZ4gAIby1UZ-she/view?usp=sharing"
    },
    date: "Jan 2025"
  },
  {
    title: "Behavior Anomaly Detection SDK",
    description: "Engineered an SDK for backend usage, compatible with FastAPI, Django, and Express to safeguard login and critical security pages. Achieved 60% improvement in response speed and enhanced login security by 55%.",
    links: {
      docs: "https://behaviour.indominuslabs.in/"
    },
    date: "Jan 2025"
  },
  {
    title: "Career-Advisor: Assistant for College Admission Queries",
    description: "Developed an AI-powered assistant for college admission queries, leveraging NLP and semantic search to automate responses. Enhanced information accessibility by 35% and reduced administrative workload by 40%.",
    links: {
      github: "https://github.com/KeerthiKeswaran/Career-Advisor-Assistant-For-College-Admission-Queries",
      website: "https://careeradvisor-three.vercel.app/"
    },
    date: "Sep 2024"
  },
  {
    title: "Probe2Cure",
    description: "Created an innovative web application using React.js to classify chest X-rays with 95% accuracy. Leveraged CNN and LLM to provide AI-driven diagnostic insights and suggestions.",
    links: {
      github: "https://github.com/KeerthiKeswaran/Probe2Cure-Intelligent-Xray-Diagnosis-Dashboard",
      demo: "https://drive.google.com/file/d/1pfSVxjCs6c1EPVYnZMLwdLG7xChT7iNk/view?usp=sharing"
    },
    date: "Jul 2024"
  }
];

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="project-card bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-black dark:text-white transition-colors duration-300">
          {project.title}
        </h3>
        <span className="text-sm text-gray-500">{project.date}</span>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
      
      <div className="flex gap-4">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        )}
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <ExternalLink size={16} />
            <span>Demo</span>
          </a>
        )}
        {project.links.website && (
          <a
            href={project.links.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <ExternalLink size={16} />
            <span>Website</span>
          </a>
        )}
        {project.links.prototype && (
          <a
            href={project.links.prototype}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <ExternalLink size={16} />
            <span>Prototype</span>
          </a>
        )}
        {project.links.docs && (
          <a
            href={project.links.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <ExternalLink size={16} />
            <span>Docs</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 text-black dark:text-white"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;