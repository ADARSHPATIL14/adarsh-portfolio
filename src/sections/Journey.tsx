import React from 'react';
import { timelineList } from '../data/portfolio';
import { SectionHeader } from '../components/SectionHeader';
import { Calendar, CheckCircle, Clock, Compass } from 'lucide-react';

export const Journey: React.FC = () => {
  const getStatusBadge = (status?: string) => {
    switch (status) {
      case 'past':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
            <CheckCircle size={12} />
            Completed
          </span>
        );
      case 'current':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/30">
            <Clock size={12} className="animate-spin" />
            In Active Focus
          </span>
        );
      case 'future':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-secondary/15 text-secondary border border-secondary/30">
            <Compass size={12} />
            Upcoming Horizon
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="journey" className="py-24 md:py-32 relative overflow-hidden bg-background cinematic-footer-wrapper">
      {/* Aurora & Grid */}
      <div className="footer-aurora absolute right-[-10%] top-1/2 h-[55vh] w-[60vw] rounded-[50%] blur-[120px] pointer-events-none z-0 opacity-45" />
      <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

      {/* Giant Masked Background Text */}
      <div className="section-giant-bg-text absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none">
        JOURNEY
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="TIMELINE"
          title="My Learning Journey"
          subtitle="How my computer science education and technical journey have progressed from core programming to problem-solving and software engineering."
        />

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 sm:-translate-x-1/2 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20 opacity-40"></div>

          <div className="space-y-10 sm:space-y-12">
            {timelineList.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 group"
                >
                  {/* Glowing Node on Timeline */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-card border-2 border-border group-hover:border-primary flex items-center justify-center z-10 transition-colors shadow-lg shadow-black">
                    <span
                      className={`w-3 h-3 rounded-full ${
                        item.status === 'current'
                          ? 'bg-primary animate-pulse'
                          : item.status === 'future'
                          ? 'bg-secondary'
                          : 'bg-emerald-400'
                      }`}
                    ></span>
                  </div>

                  {/* Left Side Content (Desktop) */}
                  <div
                    className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                      isEven ? 'sm:pr-10 sm:text-right' : 'sm:order-2 sm:pl-10 sm:text-left'
                    }`}
                  >
                    <div className="p-7 rounded-3xl footer-glass-pill transition-all">
                      <div
                        className={`flex flex-wrap items-center gap-2 mb-3.5 ${
                          isEven ? 'sm:justify-end' : 'sm:justify-start'
                        }`}
                      >
                        <span className="font-mono text-sm font-bold text-primary flex items-center gap-1.5">
                          <Calendar size={14} />
                          {item.year}
                        </span>
                        {getStatusBadge(item.status)}
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-2 footer-text-glow">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty Spacer Column for Alignment */}
                  <div
                    className={`hidden sm:block sm:w-1/2 ${
                      isEven ? 'sm:order-2' : 'sm:order-1'
                    }`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
