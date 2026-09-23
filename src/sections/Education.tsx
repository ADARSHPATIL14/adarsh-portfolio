import React from 'react';
import { educationData } from '../data/portfolio';
import { SectionHeader } from '../components/SectionHeader';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 md:py-32 relative overflow-hidden bg-background cinematic-footer-wrapper">
      {/* Aurora & Grid */}
      <div className="footer-aurora absolute left-[-5%] top-1/2 h-[50vh] w-[60vw] rounded-[50%] blur-[120px] pointer-events-none z-0 opacity-45" />
      <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

      {/* Giant Masked Background Text */}
      <div className="section-giant-bg-text absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none">
        ACADEMICS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="ACADEMICS"
          title="Education"
          subtitle="Formal university education and rigorous computer science curriculum."
        />

        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl footer-glass-pill p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Left Details */}
              <div className="md:col-span-8 space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3.5 rounded-2xl bg-card border border-border text-primary shadow-sm">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-foreground footer-text-glow">
                      {educationData.degree}
                    </h3>
                    <p className="text-sm font-semibold text-primary font-mono mt-0.5">
                      {educationData.specialization}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                  {educationData.status}
                </p>

                {/* Relevant Coursework */}
                <div className="pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                    <BookOpen size={14} className="text-primary" />
                    <span>Relevant Coursework & Core Subjects</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {educationData.relevantSubjects.map((subject, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-3 rounded-2xl bg-card/60 border border-border/60 text-foreground/90 font-medium"
                      >
                        <CheckCircle size={14} className="text-primary shrink-0" />
                        <span>{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right CGPA Metric Card */}
              <div className="md:col-span-4 flex flex-col items-center justify-center p-8 rounded-3xl footer-glass-pill text-center">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3.5 shadow-sm">
                  <Award size={26} />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-bold">
                  Cumulative
                </span>
                <div className="text-4xl sm:text-5xl font-black font-mono text-foreground my-2">
                  <span className="text-emerald-400">
                    {educationData.cgpa}
                  </span>
                  <span className="text-lg text-muted-foreground font-normal"> / 10.0</span>
                </div>
                <span className="text-[11px] text-muted-foreground font-mono mt-1">
                  High Academic Standing
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
