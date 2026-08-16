import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MessageSquare, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FigmaIcon, TwitterIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative bg-white border-t border-[#E5DFD5]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EDE0] border border-[#E5DFD5] text-[#1B4332] text-xs font-bold uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5 text-[#D48A12]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#1B4332] tracking-tight">
            Let's build something meaningful.
          </h2>
          <p className="text-[#233329] text-base sm:text-lg font-normal">
            Have a project in mind, want to collaborate on AI/IoT solutions, or discuss software engineering opportunities? Send a message below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Copy Email */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Copy Email Box */}
            <div className="p-6 rounded-3xl bg-[#F5F2EB] border border-[#E5DFD5] space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#F3EDE0] text-[#1B4332]">
                  <Mail className="w-6 h-6 text-[#1B4332]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1B4332] uppercase tracking-wider">Direct Email</h3>
                  <p className="text-base font-bold text-[#233329] font-mono">{personalInfo.email}</p>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full py-3 rounded-xl bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#E5A93C]" />
                    <span>Email Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links Grid */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[#1B4332] uppercase tracking-wider">Connect & Follow</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white border border-[#E5DFD5] hover:border-[#D48A12] flex items-center justify-between group transition-all shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-5 h-5 text-[#1B4332]" />
                    <span className="text-sm font-bold text-[#233329]">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#D48A12] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white border border-[#E5DFD5] hover:border-[#D48A12] flex items-center justify-between group transition-all shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-5 h-5 text-[#1B4332]" />
                    <span className="text-sm font-bold text-[#233329]">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#D48A12] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={personalInfo.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white border border-[#E5DFD5] hover:border-[#D48A12] flex items-center justify-between group transition-all shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <FigmaIcon className="w-5 h-5 text-[#1B4332]" />
                    <span className="text-sm font-bold text-[#233329]">Figma Profile</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#D48A12] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={personalInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white border border-[#E5DFD5] hover:border-[#D48A12] flex items-center justify-between group transition-all shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <TwitterIcon className="w-5 h-5 text-[#1B4332]" />
                    <span className="text-sm font-bold text-[#233329]">Twitter / X</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#D48A12] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-[#F5F2EB] border border-[#E5DFD5] shadow-sm space-y-6">
              
              <div className="space-y-1 border-b border-[#E5DFD5] pb-4">
                <h3 className="text-xl font-bold text-[#1B4332]">Send Me a Message</h3>
                <p className="text-xs text-[#526359] font-medium">Fill out the form below to initiate contact directly.</p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#F3EDE0] text-[#1B4332] mx-auto flex items-center justify-center border border-[#E5DFD5]">
                    <Check className="w-8 h-8 text-[#D48A12]" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1B4332]">Message Sent Successfully!</h4>
                  <p className="text-sm text-[#233329] max-w-md mx-auto">
                    Thank you for reaching out, Kevine will review your note and respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#1B4332] uppercase tracking-wider">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5DFD5] text-[#233329] placeholder-[#8A9A90] text-sm focus:outline-none focus:border-[#1B4332] transition-colors shadow-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#1B4332] uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5DFD5] text-[#233329] placeholder-[#8A9A90] text-sm focus:outline-none focus:border-[#1B4332] transition-colors shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#1B4332] uppercase tracking-wider">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Collaboration / Inquiries"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5DFD5] text-[#233329] placeholder-[#8A9A90] text-sm focus:outline-none focus:border-[#1B4332] transition-colors shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#1B4332] uppercase tracking-wider">Your Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, timeline, or idea..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5DFD5] text-[#233329] placeholder-[#8A9A90] text-sm focus:outline-none focus:border-[#1B4332] transition-colors resize-none shadow-sm"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-sm bg-[#1B4332] hover:bg-[#2D6A4F] text-white shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#E5A93C]" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
