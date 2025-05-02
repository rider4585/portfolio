// src/components/ProjectsSection.jsx
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const projects = [
  {
    title: 'CDST Editor (Clinical Decision Support System)',
    description:
      'Responsive UI upgrade and management of a legacy business-critical system.',
    contributions: [
      'Led as project manager for execution and task assignment',
      'Redesigned the UI to be fully responsive across devices',
      'Improved UX with intuitive navigation and modern design',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Legacy Systems'],
  },
  {
    title: 'Acoms',
    description:
      'Custom file manager and secure RBAC system built from scratch.',
    contributions: [
      'Built RBAC and custom file manager to replace paid tools',
      'Hardened backend security and SQL injection defense',
      'Implemented backup automation for reliability',
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'Security'],
  },
  {
    title: 'Tool Translator',
    description:
      'Optimized API-based translation system with versioned multilingual DB.',
    contributions: [
      'Improved API speed and cost-efficiency by 20%',
      'Designed multilingual DB with version control',
      'Built reusable API infra for future integration',
    ],
    tech: ['Javascript', 'DeepL API', 'Webpack', 'SQLite'],
  },
  {
    title: 'ESC Web App',
    description:
      'European Society of Cardiology content engine rebuilt for performance.',
    contributions: [
      'Reduced resource load by 90% and loading time by 80%',
      'Switched to a template-driven engine',
      'Cleaned up API usage and created onboarding docs',
    ],
    tech: ['PHP', 'HTML Templates', 'API Integration'],
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-14 text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-blue-500/30 border border-gray-700 hover:border-blue-400 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 text-blue-300 mb-2">
                <Code2 size={20} />
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-3">{project.description}</p>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mb-4">
                {project.contributions.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 text-xs text-blue-300">
                {project.tech.map((tech, idt) => (
                  <span
                    key={idt}
                    className="bg-blue-900/40 border border-blue-500 rounded-full px-3 py-1"
                  >
                    {tech}
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

export default ProjectsSection;
