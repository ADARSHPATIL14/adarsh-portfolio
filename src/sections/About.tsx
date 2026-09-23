import React from 'react';
import { aboutData, educationData } from '../data/portfolio';
import { SectionHeader } from '../components/SectionHeader';
import { MagneticButton } from '../components/ui/motion-footer';
import { User, Code2, Compass, ArrowRight, Terminal, Award, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-background cinematic-footer-wrapper">
      {/* Background Aurora & Grid */}
      <div className="footer-aurora absolute right-[-10%] top-1/3 h-[50vh] w-[60vw] rounded-[50%] blur-[100px] pointer-events-none z-0 opacity-60" />
      <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

      {/* Giant Masked Background Text */}
      <div className="section-giant-bg-text absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none">
        PROFILE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="BIOGRAPHY"
          title={aboutData.heading}
          subtitle="A glimpse into my background, passion for computer science, and engineering approach."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative Copy & 3 Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 sm:p-9 rounded-3xl footer-glass-pill space-y-4 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-black text-foreground flex items-center gap-2 footer-text-glow">
                <Sparkles size={20} className="text-primary" />
                <span>Engineering Mindset & Ambition</span>
              </h3>
              {aboutData.paragraphs.map((para, idx) => (
                <p key={idx} className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* 3 Pillars as Magnetic Glass Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-6 rounded-3xl footer-glass-pill group">
                <div className="w-12 h-12 rounded-2xl bg-card border border-border flex items-center justify-center text-primary mb-3.5 group-hover:scale-105 transition-transform shadow-inner">
                  <Code2 size={22} />
                </div>
                <h4 className="text-sm font-bold text-foreground mb-1">Problem Solver</h4>
                <p className="text-xs text-muted-foreground leading-normal">
                  Daily algorithmic problem solving in C++, Java, and DSA on LeetCode.
                </p>
              </div>

              <div className="p-6 rounded-3xl footer-glass-pill group">
                <div className="w-12 h-12 rounded-2xl bg-card border border-border flex items-center justify-center text-secondary mb-3.5 group-hover:scale-105 transition-transform shadow-inner">
                  <Terminal size={22} />
                </div>
                <h4 className="text-sm font-bold text-foreground mb-1">Practical Builder</h4>
                <p className="text-xs text-muted-foreground leading-normal">
                  CLI tools, database management architectures, and innovation prototypes.
                </p>
              </div>

              <div className="p-6 rounded-3xl footer-glass-pill group">
                <div className="w-12 h-12 rounded-2xl bg-card border border-border flex items-center justify-center text-emerald-400 mb-3.5 group-hover:scale-105 transition-transform shadow-inner">
                  <Compass size={22} />
                </div>
                <h4 className="text-sm font-bold text-foreground mb-1">Fast Learner</h4>
                <p className="text-xs text-muted-foreground leading-normal">
                  Deepening knowledge across systems programming, OOP, and software design.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Developer-style Bento Card */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="w-full rounded-3xl footer-glass-pill p-7 sm:p-8 shadow-2xl relative overflow-hidden group">
              {/* Card top badge */}
              <div className="flex items-center justify-between pb-6 border-b border-border/60">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center text-primary shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                    <User size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-foreground">
                      {aboutData.devCard.name}
                    </h3>
                    <p className="text-xs font-mono text-primary font-bold mt-0.5">
                      {aboutData.devCard.title}
                    </p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full footer-glass-pill text-xs font-mono font-bold text-primary">
                  {educationData.cgpa} CGPA
                </div>
              </div>

              {/* Card Body: Current Focus */}
              <div className="py-6 border-b border-border/60 space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block font-bold">
                  Core Technical Focus
                </span>
                <ul className="space-y-2.5">
                  {aboutData.devCard.currentFocus.map((focus, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-foreground/90 group/item"
                    >
                      <ArrowRight size={14} className="text-primary shrink-0 group-hover/item:translate-x-1 transition-transform" />
                      <span>{focus}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Status */}
              <div className="pt-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block mb-2 font-bold">
                  Engineering Status
                </span>
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-card border border-border text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{aboutData.devCard.status}</span>
                </div>
              </div>
            </div>

            {/* Quick Education Callout Pill */}
            <div className="p-5 rounded-3xl footer-glass-pill flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center">
                  <Award size={22} />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">{educationData.degree}</div>
                  <div className="text-[11px] text-muted-foreground">{educationData.specialization}</div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-primary px-3 py-1.5 rounded-xl bg-card border border-border">
                {educationData.cgpa} CGPA
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
