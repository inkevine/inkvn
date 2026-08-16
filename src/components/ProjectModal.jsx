import React, { useEffect } from 'react';
import { X, ExternalLink, BookOpen, AlertCircle, CheckCircle2, Sparkles, User, Award } from 'lucide-react';
import { GithubIcon, FigmaIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto animate-in fade-in duration-200">
      
      {/* Light Overlay Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#14261C]/50 backdrop-blur-sm transition-opacity"
      ></div>

      {/* Main Modal Container: Pure White */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl border border-[#E5DFD5] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col z-10">
        
        {/* Top Header Controls */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5DFD5] bg-[#F5F2EB] sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#1B4332]"></span>
            <span className="w-3 h-3 rounded-full bg-[#2D6A4F]"></span>
            <span className="w-3 h-3 rounded-full bg-[#D48A12]"></span>
            <span className="text-xs font-mono text-[#1B4332] font-bold ml-2">Project Case Study / Details</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#1B4332] hover:bg-[#F3EDE0] transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto bg-white">
          
          {/* Title & Category Header */}
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {project.categories.map((cat, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-[#F3EDE0] text-[#1B4332] text-xs font-bold border border-[#E5DFD5]"
                >
                  {cat}
                </span>
              ))}
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B4332] tracking-tight">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg font-bold text-[#2D6A4F] font-mono">
              {project.subtitle}
            </p>
          </div>

          {/* Project Visual Image */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#F5F2EB] border border-[#E5DFD5] shadow-md">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quick Info Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#F5F2EB] border border-[#E5DFD5]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#F3EDE0] text-[#1B4332]">
                <User className="w-5 h-5 text-[#1B4332]" />
              </div>
              <div>
                <div className="text-xs text-[#526359] font-semibold">My Role</div>
                <div className="text-sm font-bold text-[#1B4332]">{project.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#F3EDE0] text-[#1B4332]">
                <Award className="w-5 h-5 text-[#D48A12]" />
              </div>
              <div>
                <div className="text-xs text-[#526359] font-semibold">Impact / Result</div>
                <div className="text-sm font-bold text-[#1B4332] leading-tight">{project.impact}</div>
              </div>
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#F5F2EB] border border-[#E5DFD5] space-y-2">
              <div className="flex items-center gap-2 text-[#1B4332] font-bold text-sm">
                <AlertCircle className="w-4 h-4 text-[#D48A12]" />
                <span>The Problem</span>
              </div>
              <p className="text-sm text-[#233329] leading-relaxed font-normal">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F3EDE0]/60 border border-[#E5DFD5] space-y-2">
              <div className="flex items-center gap-2 text-[#1B4332] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#1B4332]" />
                <span>The Solution</span>
              </div>
              <p className="text-sm text-[#233329] leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features List */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#1B4332] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#D48A12]" />
              <span>Key Features & Capabilities</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <li
                  key={i}
                  className="p-3.5 rounded-xl bg-[#F5F2EB] border border-[#E5DFD5] text-sm text-[#233329] font-medium flex items-start gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-[#1B4332] mt-1.5 shrink-0"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack List */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#1B4332] font-mono">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-xl bg-[#F3EDE0] text-[#1B4332] text-xs font-mono font-bold border border-[#E5DFD5]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links: Forest Green Buttons */}
          <div className="pt-6 border-t border-[#E5DFD5] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-[#526359] font-medium">
              * Editable inside <code className="text-[#1B4332] font-mono">src/data/portfolioData.js</code>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {project.links?.liveDemo && (
                <a
                  href={project.links.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4 text-[#E5A93C]" />
                  <span>Live Demo</span>
                </a>
              )}

              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#F3EDE0] text-[#1B4332] text-xs font-bold border border-[#E5DFD5] transition-all flex items-center gap-2 shadow-sm"
                >
                  <GithubIcon className="w-4 h-4 text-[#1B4332]" />
                  <span>GitHub Frontend</span>
                </a>
              )}

              {project.links?.githubBackend && (
                <a
                  href={project.links.githubBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#F3EDE0] text-[#1B4332] text-xs font-bold border border-[#E5DFD5] transition-all flex items-center gap-2 shadow-sm"
                >
                  <GithubIcon className="w-4 h-4 text-[#1B4332]" />
                  <span>GitHub Backend</span>
                </a>
              )}

              {project.links?.figma && (
                <a
                  href={project.links.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#F3EDE0] text-[#1B4332] text-xs font-bold border border-[#E5DFD5] transition-all flex items-center gap-2 shadow-sm"
                >
                  <FigmaIcon className="w-4 h-4 text-[#1B4332]" />
                  <span>Figma Design</span>
                </a>
              )}

              {project.links?.caseStudy && (
                <a
                  href={project.links.caseStudy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#F5F2EB] hover:bg-[#F3EDE0] text-[#1B4332] text-xs font-bold border border-[#E5DFD5] transition-all flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-[#1B4332]" />
                  <span>Case Study</span>
                </a>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
