import React from 'react';
import { currentFocusList } from '../data/portfolio';
import { SectionHeader } from '../components/SectionHeader';
import { Code2, Binary, Coffee, Database, GitBranch } from 'lucide-react';

export const Focus: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={24} className="text-primary" />;
      case 'Binary':
        return <Binary size={24} className="text-primary" />;
      case 'Coffee':
        return <Coffee size={24} className="text-amber-400" />;
      case 'Database':
        return <Database size={24} className="text-secondary" />;
      case 'GitBranch':
        return <GitBranch size={24} className="text-emerald-400" />;
      default:
        return <Code2 size={24} className="text-primary" />;
    }
  };

  return (
    <section id="focus" className="py-24 md:py-32 relative overflow-hidden bg-background cinematic-footer-wrapper">
      {/* Aurora & Grid */}
      <div className="footer-aurora absolute left-[-10%] top-1/2 h-[50vh] w-[60vw] rounded-[50%] blur-[110px] pointer-events-none z-0 opacity-55" />
      <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

      {/* Giant Masked Background Text */}
      <div className="section-giant-bg-text absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none">
        FOCUS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="CURRENT PRIORITIES"
          title="Currently Working On"
          subtitle="Key areas of computer science and software engineering where I am dedicating daily practice and deep study."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentFocusList.map((item, idx) => (
            <div
              key={item.id}
              className={`p-8 rounded-3xl footer-glass-pill group flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-inner">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2.5 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span className="font-bold">0{idx + 1} // PRIORITY</span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
