import React from 'react';
import { Rocket, Code, Shield, Palette, GraduationCap, Calendar, Compass } from 'lucide-react';
import { journeyTimeline } from '../data/portfolioData';

const iconMap = {
  Rocket: Rocket,
  Code: Code,
  Shield: Shield,
  Palette: Palette,
  GraduationCap: GraduationCap
};

export default function Experience() {
  return (
    <section id="journey" className="py-24 relative bg-[#0B0F17]/90 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>Journey & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Path as a <span className="gradient-text">Builder & Creator</span>
          </h2>
          <p className="text-slate-400 text-base">
            Key milestones spanning software innovation, hands-on engineering, cybersecurity certifications, visual design, and academic development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-12">
          {journeyTimeline.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Code;
            return (
              <div key={index} className="relative group pl-8 sm:pl-10">
                
                {/* Year Marker on Desktop */}
                <div className="hidden sm:block absolute -left-36 top-1 text-right w-28 text-xs font-mono font-bold text-slate-400">
                  <div className="flex items-center justify-end gap-1 text-indigo-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.year}</span>
                  </div>
                </div>

                {/* Timeline Dot Node */}
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-[#0B0F17] border-2 border-indigo-500 text-indigo-400 flex items-center justify-center group-hover:scale-125 group-hover:border-cyan-400 group-hover:bg-indigo-950 transition-all duration-300 shadow-md">
                  <IconComponent className="w-4 h-4" />
                </div>

                {/* Content Card */}
                <div className="p-6 rounded-2xl glass-card border border-slate-800 group-hover:border-indigo-500/40 transition-all space-y-3">
                  
                  {/* Mobile Year Badge */}
                  <div className="sm:hidden inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-slate-800 text-indigo-300 text-xs font-mono mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{item.year}</span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h3>
                    <span className="px-3 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono">
                      {item.badge}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-cyan-400 font-semibold">
                    {item.organization} • <span className="text-slate-400">{item.type}</span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
