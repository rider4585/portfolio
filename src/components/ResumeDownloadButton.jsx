// src/components/ResumeDownloadButton.jsx
import { FileText } from 'lucide-react';

const ResumeDownloadButton = () => {
  return (
    <a
      href="/Raviraj_Bugge_Resume.pdf" // Put this in `public/` folder
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 animate-bounce hover:animate-none"
    >
      <FileText size={18} />
      <span className="hidden sm:inline">Download Resume</span>
    </a>
  );
};

export default ResumeDownloadButton;
