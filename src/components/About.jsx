import React from 'react';
import { Code, BrainCircuit, Smartphone, Cpu, Palette, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo, focusAreas } from '../data/portfolioData';

const iconMap = {
  Code: Code,
  BrainCircuit: BrainCircuit,
  Smartphone: Smartphone,
  Cpu: Cpu,
  Palette: Palette,
  HeartHandshake: HeartHandshake,
};

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-white border-t border-[#E5DFD5]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EDE0] border border-[#E5DFD5] text-[#1B4332] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#D48A12]" />
            <span>About & Engineering Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B4332] tracking-tight">
            Building Practical Technology That Makes an Impact
          </h2>
          <p className="text-[#233329] text-base sm:text-lg leading-relaxed font-normal">
            {personalInfo.aboutText}
          </p>
        </div>

        {/* Focus Areas Grid (White Cards + Forest Green Icons + Mustard Yellow Hover) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, idx) => {
            const IconComponent = iconMap[area.icon] || Code;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-white border border-[#E5DFD5] hover:border-[#D48A12] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md overflow-hidden"
              >
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-[#F3EDE0] border border-[#E5DFD5] text-[#1B4332] group-hover:bg-[#1B4332] group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6 text-[#1B4332] group-hover:text-[#E5A93C]" />
                    </div>
                    <span className="text-xs font-mono text-[#526359] font-bold">0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1B4332] group-hover:text-[#2D6A4F] transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-sm text-[#233329] leading-relaxed font-normal">
                    {area.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5DFD5] flex items-center justify-between text-xs font-semibold relative z-10">
                  <span className="flex items-center gap-1.5 text-[#233329]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D48A12]" />
                    Active Practice
                  </span>
                  <span className="text-[11px] font-mono text-[#1B4332] group-hover:underline">
                    Explore Tech &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mindset Statement Box */}
        <div className="mt-16 p-8 rounded-3xl bg-[#F5F2EB] border border-[#E5DFD5] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-bold text-[#1B4332] flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span>Core Mindset:</span>
              <span className="text-[#2D6A4F] font-black">"I don't just learn technologies — I build things with them."</span>
            </h4>
            <p className="text-sm text-[#233329]">
              From IoT hardware micro-misting to AI sentiment analytics pipelines, real-world execution always comes first.
            </p>
          </div>
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-bold text-sm shadow-sm whitespace-nowrap transition-all flex items-center gap-2"
          >
            <span>See Project Case Studies</span>
            <span className="text-[#E5A93C]">&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
