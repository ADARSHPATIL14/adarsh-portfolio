import React from 'react';
import { skillCategories } from '../data/portfolio';
import { SectionHeader } from '../components/SectionHeader';
import {
  Code,
  Binary,
  Database,
  Wrench,
  BookOpen,
  Sparkles,
} from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming-languages':
        return <Code size={20} className="text-primary" />;
      case 'dsa-skills':
        return <Binary size={20} className="text-primary" />;
      case 'database-skills':
        return <Database size={20} className="text-secondary" />;
      case 'tools-skills':
        return <Wrench size={20} className="text-emerald-400" />;
      case 'core-cs':
        return <BookOpen size={20} className="text-secondary" />;
      case 'currently-learning':
        return <Sparkles size={20} className="text-amber-400" />;
      default:
        return <Code size={20} className="text-primary" />;
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden bg-background cinematic-footer-wrapper">
      {/* Aurora & Grid */}
      <div className="footer-aurora absolute right-[-5%] top-1/2 h-[55vh] w-[65vw] rounded-[50%] blur-[120px] pointer-events-none z-0 opacity-50" />
      <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

      {/* Giant Masked Background Text */}
      <div className="section-giant-bg-text absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none">
        SKILLS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="CAPABILITIES"
          title="Technical Skills"
          subtitle="A structured matrix of the programming languages, algorithms, databases, and engineering fundamentals I work with."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const isLearning = category.id === 'currently-learning';

            return (
              <div
                key={category.id}
                className={`p-8 rounded-3xl footer-glass-pill transition-all duration-300 flex flex-col justify-between ${
                  isLearning ? 'border-amber-500/30' : ''
                }`}
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-border/60">
                    <div className="p-3 rounded-2xl bg-card border border-border shadow-inner">
                      {getCategoryIcon(category.id)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-mono text-muted-foreground">
                        {category.skills.length} competencies
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                          isLearning
                            ? 'bg-amber-500/10 text-amber-300 border border-amber-500/25'
                            : 'bg-card/90 text-foreground/90 border border-border hover:border-primary/50 hover:text-primary'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border/50 text-[11px] font-mono text-muted-foreground flex justify-between items-center">
                  <span>CATEGORY</span>
                  <span className="text-primary font-bold">● ACTIVE</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
