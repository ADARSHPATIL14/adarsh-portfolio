import React from 'react';
import { personalInfo } from '../data/portfolio';
import { ExternalLink, GitPullRequest, GitFork, Star } from 'lucide-react';
import { Github } from '../components/Icons';

export const GithubCta: React.FC = () => {
  const isPlaceholder = personalInfo.github === 'YOUR_GITHUB_URL';

  return (
    <section id="github" className="py-16 md:py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#141416] via-[#16161a] to-[#121214] border border-[#262626] p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl">
          {/* Subtle Background Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#111111] border border-[#262626] text-cyan-400">
                <Github size={13} />
                <span>OPEN SOURCE & CODE REPOSITORIES</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f5f5f5] tracking-tight">
                Explore My Code
              </h2>

              <p className="text-[#a1a1aa] text-base sm:text-lg leading-relaxed max-w-2xl">
                I believe the best way to demonstrate my programming journey is through the things I build.
                Explore my GitHub repositories to see my programming practice, academic projects, LeetCode solutions, experiments, and learning progress.
              </p>

              <div className="pt-2">
                <a
                  href={isPlaceholder ? '#github' : personalInfo.github}
                  target={isPlaceholder ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (isPlaceholder) {
                      e.preventDefault();
                      alert(
                        "Replace 'YOUR_GITHUB_URL' in src/data/portfolio.ts with your actual GitHub profile link."
                      );
                    }
                  }}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#f5f5f5] text-black hover:bg-white transition-all shadow-lg hover:shadow-white/10 group"
                >
                  <Github size={18} />
                  <span>Visit GitHub</span>
                  <ExternalLink size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Graphic Preview */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-xs p-5 rounded-2xl bg-[#0e0e10] border border-[#262626] space-y-4 text-xs font-mono">
                <div className="flex items-center justify-between pb-3 border-b border-[#202020] text-[#71717a]">
                  <span className="flex items-center gap-1.5">
                    <Github size={14} className="text-cyan-400" />
                    github.com/{isPlaceholder ? 'your-username' : 'adarsh-patil'}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[#a1a1aa]">
                    <span className="flex items-center gap-1.5">
                      <Star size={13} className="text-amber-400" /> Starred Repos
                    </span>
                    <span className="text-[#f5f5f5]">Active</span>
                  </div>
                  <div className="flex items-center justify-between text-[#a1a1aa]">
                    <span className="flex items-center gap-1.5">
                      <GitPullRequest size={13} className="text-cyan-400" /> Contributions
                    </span>
                    <span className="text-[#f5f5f5]">Growing</span>
                  </div>
                  <div className="flex items-center justify-between text-[#a1a1aa]">
                    <span className="flex items-center gap-1.5">
                      <GitFork size={13} className="text-indigo-400" /> Code Practice
                    </span>
                    <span className="text-[#f5f5f5]">Daily</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#202020] text-[11px] text-[#52525b] text-center">
                  Consistent commits & modular codebases
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
