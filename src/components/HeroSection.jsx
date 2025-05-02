// src/components/HeroSection.jsx
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const contactItems = [
  {
    icon: <Phone size={18} />,
    label: '+91 7798476162',
  },
  {
    icon: <Mail size={18} />,
    label: 'ravirajbugge4585@gmail.com',
  },
  {
    icon: <MapPin size={18} />,
    label: 'Pune, Maharashtra',
  },
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/raviraj-bugge-68017a21a',
  }
];

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm text-blue-400 tracking-wide uppercase font-mono">Hello, I'm</p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-2 hover:text-blue-400 transition-colors duration-300">
          Raviraj Bugge
        </h1>
        <h2 className="text-xl md:text-2xl text-blue-500 font-semibold mt-2">
          Software Developer
        </h2>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          Crafting clean, efficient, and scalable web applications. I blend backend logic with frontend finesse to build seamless user experiences.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center text-sm md:text-base">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center gap-2 text-gray-300 hover:text-blue-400 transition-all duration-300 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="group-hover:text-blue-500 transition-colors duration-300"
                whileHover={{ rotate: [0, 10, -10, 0] }}
              >
                {item.icon}
              </motion.div>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {item.label}
                </a>
              ) : (
                <span>{item.label}</span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
