// src/components/AchievementsSection.jsx
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const achievements = [
  {
    title: 'Top 10 (AIR-10)',
    event: 'SAMADHAN COVID-19 Challenge',
    note: 'Contributed to innovative pandemic solutions with a cross-functional team.',
  },
];

const AchievementsSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Achievements & Awards
        </motion.h2>

        <div className="space-y-6">
          {achievements.map((award, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-blue-400 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 text-blue-300 mb-1">
                <Award size={20} />
                <h3 className="text-lg font-semibold">{award.title}</h3>
              </div>
              <p className="text-gray-400">{award.event}</p>
              <p className="text-sm text-gray-300 mt-1">{award.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
