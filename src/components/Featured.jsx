import React from 'react';
import { Star, ArrowRight, Eye } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Featured({ onSelectProject }) {
  const featuredProjects = projectsData
    .filter((p) => p.categories.includes('Featured'))
    .sort((a, b) => (a.featuredRank || 99) - (b.featuredRank || 99))
    .slice(0, 4);

  return (
    <section id="featured" className="py-24 relative bg-[#F5F2EB] border-t border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EDE0] border border-[#E5DFD5] text-[#1B4332] text-xs font-bold uppercase tracking-widest mb-3">
              <Star className="w-3.5 h-3.5 fill-[#D48A12] text-[#D48A12]" />
              <span>Flagship Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B4332] tracking-tight">
              Featured Projects & Innovations
            </h2>
          </div>
          <p className="text-[#233329] text-sm max-w-md font-medium">
            Hand-picked standout systems across AI analytics, IoT smart agriculture, youth advocacy, and UI design systems.
          </p>
        </div>

        {/* Featured Projects Grid: White Cards with Mustard Yellow Borders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative rounded-3xl bg-white border-2 border-[#D48A12]/40 hover:border-[#1B4332] overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#1B4332]/10"
            >
              {/* Image Banner */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#F5F2EB]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/70 via-transparent to-transparent opacity-80"></div>

                {/* Badge Category Tag */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#1B4332] text-[#E5A93C] text-xs font-bold shadow-md">
                    ★ Featured Case Study
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-3 rounded-2xl bg-[#1B4332] hover:bg-[#2D6A4F] text-white shadow-xl flex items-center gap-2 text-xs font-bold">
                    <Eye className="w-4 h-4 text-[#E5A93C]" />
                    <span>View Case Study</span>
                  </span>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#2D6A4F] font-bold tracking-wide uppercase">
                    {project.subtitle}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#1B4332] group-hover:text-[#2D6A4F] transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-[#233329] text-sm leading-relaxed line-clamp-2 font-normal">
                  {project.shortDescription}
                </p>

                {/* Tags: Soft Warm Beige with Forest Green text */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-[#F3EDE0] text-[#1B4332] text-xs font-mono font-bold border border-[#E5DFD5]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-1 rounded-lg bg-[#F3EDE0] text-[#1B4332] text-xs font-mono font-bold border border-[#E5DFD5]">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-[#E5DFD5] flex items-center justify-between">
                  <span className="text-xs text-[#233329] font-semibold">
                    Role: <span className="text-[#1B4332] font-bold">{project.role}</span>
                  </span>
                  <button className="text-xs font-bold text-[#1B4332] group-hover:text-[#2D6A4F] flex items-center gap-1">
                    <span>Explore Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D48A12] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
