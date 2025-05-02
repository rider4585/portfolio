// src/components/LanguagesSection.jsx
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';

const languages = ['English (Fluent)', 'Hindi (Fluent)', 'Marathi (Native)'];

const LanguagesSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-400 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Languages
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {languages.map((lang, index) => (
            <span
              key={index}
              className="bg-blue-900/40 border border-blue-500 text-blue-300 px-4 py-2 rounded-full text-sm font-medium"
            >
              {lang}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LanguagesSection;
