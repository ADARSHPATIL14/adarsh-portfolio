import React from 'react';
import { achievementsList } from '../data/portfolio';
import { SectionHeader } from '../components/SectionHeader';
import {
  GraduationCap,
  Code,
  FolderGit2,
  Users,
  Sparkles,
} from 'lucide-react';

export const Achievements: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap size={22} className="text-emerald-400" />;
      case 'Code':
        return <Code size={22} className="text-primary" />;
      case 'FolderGit2':
        return <FolderGit2 size={22} className="text-secondary" />;
      case 'Users':
        return <Users size={22} className="text-primary" />;
      case 'Sparkles':
        return <Sparkles size={22} className="text-amber-400" />;
      default:
        return <Sparkles size={22} className="text-primary" />;
    }
  };

  return (
    <section id="achievements" className="py-24 md:py-32 relative overflow-hidden bg-background cinematic-footer-wrapper">
      {/* Aurora & Grid */}
      <div className="footer-aurora absolute right-[-8%] top-1/2 h-[55vh] w-[60vw] rounded-[50%] blur-[120px] pointer-events-none z-0 opacity-45" />
      <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

      {/* Giant Masked Background Text */}
      <div className="section-giant-bg-text absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none">
        MILESTONES
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="MILESTONES"
          title="Achievements & Activities"
          subtitle="Genuine technical engagements, academic consistency, and collaborative project experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsList.map((item, idx) => (
            <div
              key={item.id}
              className={`p-8 rounded-3xl footer-glass-pill flex flex-col justify-between group ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                    {getIcon(item.icon)}
                  </div>
                  {item.badge && (
                    <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-card border border-border text-primary">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors footer-text-glow">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border/50 text-[11px] font-mono text-muted-foreground flex items-center justify-between">
                <span>VERIFIED ENGAGEMENT</span>
                <span className="text-primary font-bold">✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
