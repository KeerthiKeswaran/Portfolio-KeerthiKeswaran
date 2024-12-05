import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-charcoal">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-ghost-white mb-12 text-center">Education</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-jet p-8 rounded-xl border border-cyan-glow/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <GraduationCap className="w-8 h-8 text-cyan-glow" />
              <div>
                <h3 className="text-2xl font-bold text-ghost-white">
                  B.Tech in Computer Science and Engineering
                  <span className="text-sm font-medium text-ghost-white ml-2">with Business Systems</span>
                </h3>
                <div className="flex items-center gap-2 text-electric-blue mt-2">
                  <Calendar className="w-4 h-4" />
                  <span>2022 - 2026</span>
                </div>
              </div>
            </div>
            <p className="text-dim-gray mb-6">
              Specialized in Artificial Intelligence and Machine Learning with a focus on practical applications
              and innovative solutions.
            </p>
            <div className="space-y-4">
              <h4 className="text-ghost-white font-semibold">Key Achievements:</h4>
              <ul className="space-y-2 text-dim-gray">
                <li>• Maintained excellent academic performance with CGPA: 8.36/10</li>
                <li>• Led multiple technical projects in Software and AI domains</li>
                <li>• Active member of the college's Machine Learning Clud Research and Project Team</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}