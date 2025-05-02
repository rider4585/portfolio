import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import AchievementsSection from './components/AchievementsSection';
import LanguagesSection from './components/LanguagesSection';
import ResumeDownloadButton from './components/ResumeDownloadButton';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTopButton from './components/ScrollToTopButton';


function App() {
  return (
    <>
      <ScrollProgress />
      <main className="bg-gray-950 min-h-screen text-white relative">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <AchievementsSection />
        <LanguagesSection />
        <ResumeDownloadButton />
        <ScrollToTopButton />
      </main>
    </>
  );
}

export default App;
