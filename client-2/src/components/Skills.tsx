import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Wrench, Brain, BookOpen } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "C/C++", "JavaScript", "HTML/CSS"],
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: "Programs/Frameworks",
    skills: ["React", "Node.js", "Express", "SQL/NoSQL", "FastAPI", "Django", "Flask", "RestAPI", "MongoDB", "Neo4j", "GraphQL", "Agile Methodology"],
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: "Tools/Technologies",
    skills: ["Git", "Docker", "AWS Lambda", "S3", "PyTorch", "LangChain", "Transformer LLMs", "Selenium", "Apache JMeter"],
    icon: <Wrench className="w-6 h-6" />,
  },
  {
    title: "Fundamentals",
    skills: ["Data Structures and Algorithms", "Operating Systems", "DBMS", "Computer Networks", "IoT", "Cloud Computing", "Machine Learning", "Agile"],
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    title: "Soft Skills",
    skills: ["Verbal and Written Communication", "Leadership", "Teamwork", "Public Speaking"],
    icon: <Brain className="w-6 h-6" />,
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 text-black dark:text-white"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={ref}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-black dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-800 dark:text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;