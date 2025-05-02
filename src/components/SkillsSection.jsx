// src/components/SkillsSection.jsx
import { motion } from 'framer-motion';
import {
  Code2,
  Braces,
  Database,
  Hammer,
  Wrench
} from 'lucide-react';

const skills = [
  {
    icon: <Braces size={24} />,
    title: 'Languages',
    items: ['C', 'C++', 'PHP', 'JavaScript ES6', 'Node.js', 'Express.js'],
  },
  {
    icon: <Code2 size={24} />,
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'Materialize CSS', 'Bootstrap 5', 'Tailwind CSS'],
  },
  {
    icon: <Database size={24} />,
    title: 'Databases',
    items: ['MySQL', 'SQLite', 'Firebase Firestore'],
  },
  {
    icon: <Hammer size={24} />,
    title: 'Tools & Design',
    items: ['Adobe XD', 'Figma'],
  },
  {
    icon: <Wrench size={24} />,
    title: 'Other Skills',
    items: ['API Integration', 'Data Security', 'Responsive Web Design', 'Cross-Platform Compatibility'],
  }
];

const SkillsSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((group, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-2xl p-5 shadow hover:shadow-blue-500/30 transition-shadow duration-300 hover:scale-[1.03]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4 text-blue-300">
                {group.icon}
                <h3 className="text-lg font-semibold">{group.title}</h3>
              </div>
              <ul className="space-y-1 text-gray-300 text-sm">
                {group.items.map((item, idx) => (
                  <li key={idx} className="list-disc list-inside">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
