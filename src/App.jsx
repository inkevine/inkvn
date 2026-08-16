import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Featured from './components/Featured';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'featured', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-[#233329] selection:bg-[#1B4332] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Page Sections */}
      <main>
        <Hero />
        <About />
        <Featured onSelectProject={setSelectedProject} />
        <Projects onSelectProject={setSelectedProject} />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal Popup for Project Details */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
