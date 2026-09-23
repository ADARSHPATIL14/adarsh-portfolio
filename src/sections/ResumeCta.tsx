import React from 'react';
import { personalInfo } from '../data/portfolio';
import { FileDown, Eye, CheckCircle2 } from 'lucide-react';

export const ResumeCta: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#0d0d0d] border-t border-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#151515] border border-[#262626] text-center space-y-6 relative overflow-hidden shadow-2xl">
          {/* Subtle Background Accent */}
          <div className="absolute inset-0 bg-radial-gradient pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-[#111111] border border-[#262626] text-cyan-400 mb-3">
              CURRICULUM VITAE
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f5f5f5] tracking-tight">
              Want to know more?
            </h2>

            <p className="text-[#a1a1aa] text-base sm:text-lg mt-3">
              Take a closer look at my education, technical skills, projects, and learning journey.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
              <a
                href={personalInfo.resumeUrl}
                download="Adarsh_Patil_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-cyan-500 hover:bg-cyan-400 text-black transition-all shadow-lg shadow-cyan-500/20"
              >
                <FileDown size={18} />
                <span>Download Resume</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#111111] hover:bg-[#1a1a1a] text-[#f5f5f5] border border-[#262626] hover:border-cyan-500/40 transition-all"
              >
                <Eye size={18} className="text-cyan-400" />
                <span>Preview Document</span>
              </a>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-[#71717a]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-400" /> PDF Format
              </span>
              <span>•</span>
              <span className="font-mono text-cyan-300/80">
                public/resume.pdf
              </span>
              <span>•</span>
              <span>Updated for 2026 Academic Term</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
