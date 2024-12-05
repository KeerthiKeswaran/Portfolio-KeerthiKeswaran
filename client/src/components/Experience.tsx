import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'AI Research Intern',
    company: 'RevoltronX',
    date: '2023',
    responsibilities: [
      'Built LLM-based chat servers and optimized semantic search systems',
      'Implemented advanced memory optimization techniques',
      'Developed scalable architectures using FastAPI',
      'Established CI/CD pipelines with transfer learning techniques',
      'Engineered semantic search system for large datasets',
      'Led cross-functional teams in AI solution development'
    ]
  },
  {
    title: 'Software Engineering Virtual Intern',
    company: 'Accenture Nordics',
    date: '2023',
    responsibilities: [
      'Participated in agile development practices',
      'Collaborated on full-stack development projects',
      'Gained hands-on experience with enterprise software development',
      'Worked with cross-functional teams across different time zones'
    ]
  }
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-jet">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-ghost-white mb-12 text-center">Professional Experience</h2>
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="relative pl-8 border-l-2 border-cyan-glow/30"
              >
                <div className="absolute -left-[11px] top-0">
                  <div className="w-5 h-5 rounded-full bg-cyan-glow animate-glow"></div>
                </div>
                <div className="bg-charcoal p-6 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <Briefcase className="w-6 h-6 text-cyan-glow" />
                    <h3 className="text-2xl font-bold text-ghost-white">{experience.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-electric-blue mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{experience.company} • {experience.date}</span>
                  </div>
                  <ul className="space-y-3 text-dim-gray">
                    {experience.responsibilities.map((responsibility, i) => (
                      <li key={i}>• {responsibility}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}