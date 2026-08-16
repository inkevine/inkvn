import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FigmaIcon, TwitterIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F281E] border-t border-[#1B4332] py-12 text-[#B7C7BD] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1B4332]">
          
          {/* Brand Info */}
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-white tracking-tight">
              {personalInfo.name}
            </h3>
            <p className="text-xs text-[#E5A93C] font-mono font-semibold">
              Software Engineer • Builder • Designer
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs font-semibold text-white">
            <a href="#home" className="hover:text-[#E5A93C] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#E5A93C] transition-colors">About</a>
            <a href="#featured" className="hover:text-[#E5A93C] transition-colors">Featured</a>
            <a href="#projects" className="hover:text-[#E5A93C] transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[#E5A93C] transition-colors">Skills</a>
            <a href="#contact" className="hover:text-[#E5A93C] transition-colors">Contact</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-[#1B4332] hover:bg-[#2D6A4F] border border-[#2D6A4F] text-white transition-all flex items-center gap-2 text-xs font-mono font-bold cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-[#E5A93C]" />
          </button>
        </div>

        {/* Bottom Socials & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B7C7BD] font-mono">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} {personalInfo.name}. Crafted with precision & passion.
          </p>

          <div className="flex items-center gap-4 text-white">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#E5A93C] transition-colors">
              <GithubIcon className="w-4 h-4" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#E5A93C] transition-colors">
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a href={personalInfo.figma} target="_blank" rel="noopener noreferrer" className="hover:text-[#E5A93C] transition-colors">
              <FigmaIcon className="w-4 h-4" />
            </a>
            <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-[#E5A93C] transition-colors">
              <TwitterIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
