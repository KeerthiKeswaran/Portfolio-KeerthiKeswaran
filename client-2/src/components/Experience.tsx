import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, ExternalLink } from 'lucide-react';

const experiences = [
  {
    company: "RevoltronX",
    position: "AI Developer Intern",
    duration: "Jan 2024 - Jan 2025",
    achievements: [
      "Architected an LLM-powered chatbot incorporating a chat history module, optimizing real-time conversation recall, achieving 40% better personalized responses, and reducing query latency from 300ms to <50ms.",
      "Developed an Auto-Tagging module with a fine-tuned T5-base model, achieving ROUGE-1: 69.23% and 25% faster inference for content tagging.",
      "Implemented RAG & memory retention, boosting response accuracy by 30%, and optimized LLM performance using a CI/CD pipeline with transfer learning, reducing training time by 50% and enhancing operational flexibility.",
      "Combined Agile development with automated testing and performance benchmarking using Selenium and Apache JMeter, participating in daily stand-ups, sprint planning, and code reviews to ensure iterative development, system stability, and scalable deployments."
    ],
    lor: "https://drive.google.com/file/d/1AOEjviXfbYX4wT6IPUdCvn6CGxwJYNO_/view?usp=sharing"
  },
  {
    company: "Accenture Nordics",
    position: "Software Engineering Virtual Intern",
    duration: "",
    achievements: [
      "Analyzed and optimized software architecture, evaluated cloud platforms (IaaS, PaaS) for performance, and enhanced security by addressing vulnerabilities, improving code responsiveness, and conducting thorough testing.",
      "Engaged in Agile sprints, collaborating with cross-functional teams to refine development processes and improve app functionality and user experience."
    ]
  }
];

const Experience = () => {
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
          <Briefcase className="w-8 h-8" />
          Work Experience
        </motion.h2>

        <div className="space-y-12" ref={ref}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700"
            >
              <div className="absolute w-4 h-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full -left-[9px] top-0" />
              
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white">
                      {exp.position}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">
                    {exp.duration}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-400">
                      • {achievement}
                    </li>
                  ))}
                </ul>

                {exp.lor && (
                  <a
                    href={exp.lor}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <ExternalLink size={16} />
                    <span>Letter of Recommendation</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;