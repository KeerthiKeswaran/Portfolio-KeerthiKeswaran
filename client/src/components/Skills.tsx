import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Cloud, Users,HardDrive, Wrench, Cpu} from 'lucide-react';

const skills = {
  'Programming Languages': ['Java', 'Python', 'C/C++', 'JavaScript'],
  'Frameworks/Tools': ['React', 'Node.js', 'Express', 'MongoDB', 'FastAPI','Tailwind'],
  'Cloud & Deployment': ['AWS', 'GCP', 'Docker', 'Git & GitHub'],
  'Database Technologies': ['SQL', 'NoSQL','Neo4j', 'GraphQL'],
  'ML & Gen-AI': ['TensorFlow','LangChain', 'Transformers','Pytorch','Lora-PEFT'],
  'Soft Skills': ['Communication', 'Leadership', 'Teamwork']
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-jet">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h2 className="text-4xl font-bold text-center text-ghost-white mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                variants={item}
                className="bg-charcoal rounded-xl p-6 border border-cyan-glow/20 hover:border-cyan-glow/40 transition-all"
              >
                <div className="flex items-center mb-4">
                  {index === 0 && <Code2 className="w-6 h-6 text-cyan-glow mr-2" />}
                  {index === 1 && <Wrench className="w-6 h-6 text-cyan-glow mr-2" />}
                  {index === 2 && <Cloud className="w-6 h-6 text-cyan-glow mr-2" />}
                  {index === 3 && <Database className="w-6 h-6 text-cyan-glow mr-2" />}
                  {index === 4 && <Cpu className="w-6 h-6 text-cyan-glow mr-2" />} {/* Replaced CpuChip with HardDrive */}
                  {index === 5 && <Users className="w-6 h-6 text-cyan-glow mr-2" />}
                  <h3 className="text-xl font-semibold text-ghost-white">{category}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li key={skill} className="text-dim-gray flex items-center">
                      <span className="w-2 h-2 bg-electric-blue rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
