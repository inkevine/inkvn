import React from 'react';
import { Code2, Smartphone, Sparkles, Database, Zap, Layout, ShieldCheck, CheckCircle, Award } from 'lucide-react';
import { skillsGrouped } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Smartphone: Smartphone,
  Sparkles: Sparkles,
  Database: Database,
  Zap: Zap,
  Layout: Layout,
  ShieldCheck: ShieldCheck
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-[#F5F2EB] border-t border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EDE0] border border-[#E5DFD5] text-[#1B4332] text-xs font-bold uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5 text-[#D48A12]" />
            <span>Tech Stack & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B4332] tracking-tight">
            Tools, Languages & Engineering Skills
          </h2>
          <p className="text-[#233329] text-base font-normal">
            Categorized technical stack spanning software engineering, mobile systems, AI pipelines, IoT hardware, UI/UX design, and security certifications.
          </p>
        </div>

        {/* Grouped Skills Cards Grid: White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsGrouped.map((group, idx) => {
            const IconComponent = iconMap[group.icon] || Code2;
            const isSecurity = group.category.includes('Cybersecurity');
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md ${
                  isSecurity
                    ? 'border-2 border-[#D48A12]/50 shadow-md shadow-[#1B4332]/5'
                    : 'border-[#E5DFD5] hover:border-[#D48A12]/60'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-[#F3EDE0] border border-[#E5DFD5] text-[#1B4332] shadow-sm">
                      <IconComponent className="w-6 h-6 text-[#1B4332]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1B4332]">{group.category}</h3>
                      <p className="text-xs text-[#526359] leading-tight font-medium">{group.description}</p>
                    </div>
                  </div>

                  {/* Tags: Soft Beige with Forest Green text */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {group.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-xl bg-[#F3EDE0] text-[#1B4332] text-xs font-mono font-bold transition-all hover:scale-105 flex items-center gap-1.5 border border-[#E5DFD5]"
                      >
                        <CheckCircle className="w-3 h-3 text-[#2D6A4F]" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {isSecurity && (
                  <div className="mt-6 pt-4 border-t border-[#E5DFD5] flex items-center justify-between text-xs text-[#1B4332] font-mono font-bold">
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-[#D48A12]" />
                      Cyberium Certificate Training
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#1B4332] text-[#E5A93C] font-bold">Verified</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
