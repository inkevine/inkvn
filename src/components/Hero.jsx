import React from 'react';
import { ArrowRight, FolderKanban, User, Mail, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center justify-center bg-[#F5F2EB]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill Tag: Soft Beige + Mustard Yellow dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EDE0] border border-[#E5DFD5] text-[#1B4332] text-xs font-bold tracking-wide shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D48A12]"></span>
              </span>
              <span>Software Engineer & Tech Builder</span>
            </div>

            {/* Main Name & Headings: Forest Green */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1B4332] leading-[1.1]">
                Hi, I'm <br className="hidden sm:inline" />
                <span className="text-[#1B4332] font-black">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-bold text-[#233329] tracking-tight flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="text-[#1B4332]">Software Engineer</span>
                <span className="text-[#C4BCAD]">•</span>
                <span className="text-[#2D6A4F]">AI & Data Enthusiast</span>
                <span className="text-[#C4BCAD]">•</span>
                <span className="text-[#1B4332]">Builder</span>
                <span className="text-[#C4BCAD]">•</span>
                <span className="text-[#2D6A4F]">Designer</span>
              </p>
            </div>

            {/* Body Text: Dark Forest Charcoal */}
            <p className="text-base sm:text-lg text-[#233329] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {personalInfo.shortIntro}
            </p>

            {/* Buttons: Forest Green with White text & Mustard Yellow arrow */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-[#1B4332] hover:bg-[#2D6A4F] text-white shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group cursor-pointer"
              >
                <FolderKanban className="w-4 h-4 text-white" />
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 text-[#E5A93C] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('about')}
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-white hover:bg-[#F3EDE0]/60 text-[#1B4332] border border-[#E5DFD5] hover:border-[#D48A12]/60 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <User className="w-4 h-4 text-[#1B4332]" />
                <span>About Me</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-white hover:bg-[#F3EDE0]/60 text-[#233329] border border-[#E5DFD5] hover:text-[#1B4332] transition-all flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#1B4332]" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Quick Stats Strip */}
            <div className="pt-8 border-t border-[#E5DFD5] grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <div className="text-2xl font-extrabold text-[#1B4332] font-mono">14+</div>
                <div className="text-xs text-[#526359] font-medium">Projects Built</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#2D6A4F] font-mono">6+</div>
                <div className="text-xs text-[#526359] font-medium">Tech Domains</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#1B4332] font-mono">100%</div>
                <div className="text-xs text-[#526359] font-medium">Impact Focused</div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean White Card Image Frame */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden bg-white p-3 border border-[#E5DFD5] shadow-md group">
              
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F5F2EB]">
                <img
                  src="/projects/agrohaven.png"
                  alt="Ihimbazwe Niyikora Kevine - Showcase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/70 via-transparent to-transparent opacity-80"></div>
                
                {/* Bottom Label Box */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E5DFD5] flex items-center justify-between shadow-sm">
                  <div>
                    <h3 className="text-sm font-bold text-[#1B4332]">AgroHaven & JetOpinion</h3>
                    <p className="text-xs text-[#233329] font-mono font-medium">Smart IoT & AI Analytics Platform</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-[#1B4332] text-[#E5A93C] text-[10px] font-bold">
                    Featured
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#526359] text-xs font-semibold animate-bounce pointer-events-none">
        <span>Scroll to Explore</span>
        <ChevronDown className="w-4 h-4 text-[#D48A12]" />
      </div>
    </section>
  );
}
