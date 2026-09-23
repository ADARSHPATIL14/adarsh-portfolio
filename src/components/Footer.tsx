import React from 'react';
import { personalInfo } from '../data/portfolio';
import { Mail, ArrowUp, Terminal } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#262626] bg-[#0a0a0a] text-[#a1a1aa] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1f1f1f]">
          {/* Brand & Role */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <div className="w-6 h-6 rounded bg-[#151515] border border-[#262626] flex items-center justify-center text-cyan-400">
                <Terminal size={12} />
              </div>
              <h4 className="text-base font-bold text-[#f5f5f5] font-mono">
                {personalInfo.name}
              </h4>
            </div>
            <p className="text-xs text-[#a1a1aa]">{personalInfo.role}</p>
            <p className="text-xs text-cyan-400 font-mono mt-1">
              Building. Learning. Solving.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github === 'YOUR_GITHUB_URL' ? '#github' : personalInfo.github}
              target={personalInfo.github === 'YOUR_GITHUB_URL' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-[#151515] border border-[#262626] text-[#a1a1aa] hover:text-[#f5f5f5] hover:border-cyan-500/40 transition-all"
            >
              <Github size={18} />
            </a>

            <a
              href={personalInfo.linkedin === 'YOUR_LINKEDIN_URL' ? '#contact' : personalInfo.linkedin}
              target={personalInfo.linkedin === 'YOUR_LINKEDIN_URL' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-[#151515] border border-[#262626] text-[#a1a1aa] hover:text-[#f5f5f5] hover:border-cyan-500/40 transition-all"
            >
              <Linkedin size={18} />
            </a>

            <a
              href={personalInfo.email === 'YOUR_EMAIL' ? '#contact' : `mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-[#151515] border border-[#262626] text-[#a1a1aa] hover:text-[#f5f5f5] hover:border-cyan-500/40 transition-all"
            >
              <Mail size={18} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-xl bg-[#151515] border border-[#262626] text-[#a1a1aa] hover:text-cyan-400 hover:border-cyan-500/40 transition-all ml-2"
              title="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 text-center text-xs text-[#71717a]">
          <p>© 2026 {personalInfo.name}. Built with curiosity, code, and continuous learning.</p>
        </div>
      </div>
    </footer>
  );
};
