import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
}) => {
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-2xl mb-12 md:mb-16 ${alignmentClass}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-card/80 border border-border text-primary mb-3.5 shadow-sm backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="tracking-wider uppercase">{badge}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
