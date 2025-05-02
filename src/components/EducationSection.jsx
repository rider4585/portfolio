// src/components/EducationSection.jsx
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'Savitribai Phule Pune University',
    score: '8.01 CGPA',
  },
  {
    degree: 'Higher Secondary School',
    institution: 'State Board of Maharashtra',
    score: '54.15%',
  },
  {
    degree: 'Secondary School',
    institution: 'State Board of Maharashtra',
    score: '81.40%',
  },
];

const EducationSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-14 text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-5 rounded-xl border border-gray-700 hover:border-blue-400 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 text-blue-300 mb-2">
                <GraduationCap size={20} />
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
              </div>
              <p className="text-gray-400 text-sm">{edu.institution}</p>
              <p className="text-blue-300 text-sm font-mono">{edu.score}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
