import React, { useState } from 'react';
import { Layers, Eye, Tag } from 'lucide-react';
import { projectsData, projectCategories } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.categories.includes(activeCategory));

  return (
    <section id="projects" className="py-24 relative bg-white border-t border-[#E5DFD5]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EDE0] border border-[#E5DFD5] text-[#1B4332] text-xs font-bold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5 text-[#D48A12]" />
            <span>Interactive Project Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B4332] tracking-tight">
            Explore My Complete Work
          </h2>
          <p className="text-[#233329] text-base font-normal">
            Filter by domain to discover software applications, AI models, mobile apps, IoT aeroponics, design case studies, and social impact platforms.
          </p>
        </div>

        {/* Category Tabs: Forest Green Active State */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#1B4332] text-white shadow-sm border border-[#2D6A4F] scale-105'
                    : 'bg-[#F5F2EB] text-[#233329] hover:text-[#1B4332] hover:bg-[#F3EDE0] border border-[#E5DFD5]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Counter Summary */}
        <div className="flex items-center justify-between text-xs text-[#233329] mb-6 px-2 font-mono">
          <span>Showing <strong className="text-[#1B4332] font-bold">{filteredProjects.length}</strong> project{filteredProjects.length !== 1 ? 's' : ''} in <strong className="text-[#1B4332]">{activeCategory}</strong></span>
          <span>Click card to inspect details</span>
        </div>

        {/* Projects Card Grid (White Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative rounded-2xl bg-white border border-[#E5DFD5] hover:border-[#D48A12] overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#1B4332]/5"
            >
              <div>
                {/* Image Banner */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#F5F2EB]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/60 via-transparent to-transparent opacity-75"></div>

                  {/* Primary Category Tag */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {project.categories.slice(0, 2).map((cat, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-white/95 text-[#1B4332] text-[10px] font-mono font-bold border border-[#E5DFD5] shadow-sm"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-[#1B4332]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-bold text-xs shadow-xl flex items-center gap-2">
                      <Eye className="w-4 h-4 text-[#E5A93C]" />
                      <span>View Details</span>
                    </span>
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-[#1B4332] group-hover:text-[#2D6A4F] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#233329] leading-relaxed line-clamp-2 font-normal">
                    {project.shortDescription}
                  </p>

                  {/* Tags: Soft Beige with Forest Green text */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-[#F3EDE0] text-[#1B4332] text-[11px] font-mono font-bold border border-[#E5DFD5]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded bg-[#F3EDE0] text-[#1B4332] text-[10px] font-mono font-bold border border-[#E5DFD5]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 mt-2 border-t border-[#E5DFD5] pt-4 flex items-center justify-between text-xs text-[#233329]">
                <span className="font-mono text-[11px] font-semibold text-[#1B4332]">{project.role}</span>
                <span className="text-[#1B4332] font-bold group-hover:underline flex items-center gap-1">
                  <span>View Project</span>
                  <span className="text-[#D48A12]">&rarr;</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 p-8 rounded-2xl bg-[#F5F2EB] border border-[#E5DFD5] max-w-md mx-auto space-y-3">
            <Tag className="w-8 h-8 text-[#1B4332] mx-auto" />
            <h4 className="text-base font-bold text-[#1B4332]">No projects found in this category</h4>
            <p className="text-xs text-[#233329]">Try selecting "All Projects" to view the full showcase.</p>
          </div>
        )}

        {/* View All Projects on GitHub Button */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/inkevine"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-[#1B4332] hover:bg-[#2D6A4F] text-white shadow-md transition-all hover:scale-105"
          >
            <span>View All Projects on GitHub</span>
            <span className="text-[#E5A93C] font-extrabold">&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
