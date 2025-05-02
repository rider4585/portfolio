// src/components/ExperienceSection.jsx
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Boerm Bruckmeier Infotech India Private Limited',
    role: 'Software Developer',
    duration: '2022 – Present',
    points: [
      'Enhanced frontend designs for better speed and aesthetics',
      'Led backend and API integration for high-impact projects',
      'Optimized dashboards to improve performance and UX',
      'Reduced server load by 30% via implementation optimization',
      'Replaced paid tools with in-house solutions to cut costs',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-14 text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 text-blue-300 mb-3">
                <Briefcase size={22} />
                <h3 className="text-xl font-semibold">{exp.role}</h3>
              </div>
              <div className="text-sm text-gray-400 mb-2">
                {exp.company} &middot; <span className="text-blue-300">{exp.duration}</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm md:text-base">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="hover:text-blue-300 transition-colors duration-200">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
