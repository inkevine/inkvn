import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Featured', href: '#featured', id: 'featured' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#F5F2EB]/95 backdrop-blur-md border-b border-[#E5DFD5] shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo (Forest Green + Mustard Yellow Dot) */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home', 'home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1B4332] flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:bg-[#2D6A4F] transition-colors">
              K
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#1B4332] group-hover:text-[#2D6A4F] transition-colors text-base tracking-tight leading-tight">
                Ihimbazwe N. Kevine
              </span>
              <span className="text-[11px] text-[#2D3D33] font-mono flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D48A12]"></span>
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav (White Container + Soft Beige Active Tab) */}
          <nav className="hidden md:flex items-center gap-1 bg-white border border-[#E5DFD5] px-3 py-1.5 rounded-full shadow-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'text-[#1B4332] bg-[#F3EDE0] border border-[#D48A12]/40'
                      : 'text-[#2D3D33] hover:text-[#1B4332] hover:bg-[#F5F2EB]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTA Button (Forest Green + Mustard Yellow Icon) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact', 'contact')}
              className="group relative px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 bg-[#1B4332] hover:bg-[#2D6A4F] text-white shadow-sm flex items-center gap-1.5"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E5A93C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#1B4332] bg-white border border-[#E5DFD5] shadow-sm"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#1B4332]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E5DFD5] px-4 pt-3 pb-6 mt-3 shadow-lg animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-[#F3EDE0] text-[#1B4332] font-bold border border-[#D48A12]/40'
                      : 'text-[#2D3D33] hover:bg-[#F5F2EB] hover:text-[#1B4332]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact', 'contact')}
              className="mt-3 px-4 py-3 rounded-xl text-sm font-bold bg-[#1B4332] hover:bg-[#2D6A4F] text-white text-center shadow-md flex items-center justify-center gap-2"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4 text-[#E5A93C]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
