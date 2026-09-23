import React, { useRef, useEffect } from 'react';
import { personalInfo, educationData } from '../data/portfolio';
import { MagneticButton } from '../components/ui/motion-footer';
import { ChevronDown, Sparkles, ArrowDown, FileDown, Code2 } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import { gsap } from 'gsap';

export const ScrollRevealIntro: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
      );

      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, opacity: 0 },
        { scaleY: 1, opacity: 1, duration: 1.4, delay: 0.3, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToHero = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('profile');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' });
    }
  };

  const marqueeItems = [
    "ADARSH PATIL",
    "B.TECH CSE • 9.05 CGPA",
    "DATA STRUCTURES & ALGORITHMS",
    "C++ & JAVA SYSTEMS",
    "SQL & DBMS",
    "SCROLL DOWN TO REVEAL",
    "GRAND FINALE CURTAIN AT END",
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between items-center pt-24 pb-12 overflow-hidden bg-background text-foreground cinematic-footer-wrapper select-none border-b border-border/40"
    >
      {/* Ambient Aurora Glow & Background Grid */}
      <div className="footer-aurora absolute left-1/2 top-1/2 h-[75vh] w-[90vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[120px] pointer-events-none z-0" />
      <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

      {/* Giant Parallax Masked Typography */}
      <div className="footer-giant-bg-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap z-0 pointer-events-none opacity-40">
        ADARSH
      </div>

      {/* Top Floating Sleek Marquee */}
      <div className="relative z-10 w-full overflow-hidden border-y border-border/40 bg-background/60 backdrop-blur-md py-3 -rotate-1 scale-105 shadow-xl">
        <div className="flex w-max animate-footer-scroll-marquee text-xs md:text-sm font-bold tracking-[0.25em] text-muted-foreground uppercase">
          <div className="flex items-center space-x-10 px-4">
            {marqueeItems.map((item, idx) => (
              <React.Fragment key={idx}>
                <span>{item}</span>
                <span className={idx % 2 === 0 ? "text-primary/70" : "text-secondary/70"}>✦</span>
              </React.Fragment>
            ))}
          </div>
          <div className="flex items-center space-x-10 px-4">
            {marqueeItems.map((item, idx) => (
              <React.Fragment key={`repeat-${idx}`}>
                <span>{item}</span>
                <span className={idx % 2 === 0 ? "text-primary/70" : "text-secondary/70"}>✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Center Main Stage */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto my-auto space-y-7">
        
        {/* The Exact Badge requested: "Scroll down for the grand finale curtain" */}
        <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full footer-glass-pill text-xs sm:text-sm font-mono text-foreground shadow-2xl backdrop-blur-xl animate-in fade-in duration-700">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
          </span>
          <span className="font-bold tracking-wide">Scroll down for the grand finale curtain</span>
          <ChevronDown size={16} className="text-primary animate-bounce ml-0.5" />
        </div>

        {/* Main Giant Metallic Title */}
        <div>
          <h1
            ref={titleRef}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black footer-text-glow tracking-tighter leading-[0.98] uppercase"
          >
            Scroll Down <br />
            <span className="text-primary">To Reveal</span>
          </h1>
          <p className="text-base sm:text-xl font-mono text-muted-foreground mt-5 tracking-widest uppercase">
            {personalInfo.name} • {personalInfo.role}
          </p>
        </div>

        {/* Subtitle / Exploration Callout */}
        <p className="text-sm sm:text-base text-foreground/80 max-w-xl leading-relaxed font-normal">
          {personalInfo.tagline}
        </p>

        {/* Magnetic Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3.5 pt-2">
          <MagneticButton
            as="a"
            href="#profile"
            onClick={scrollToHero}
            className="footer-glass-pill px-8 py-4 rounded-full text-foreground font-bold text-sm flex items-center gap-2.5 group shadow-xl"
          >
            <span>Enter Developer Experience</span>
            <ArrowDown size={16} className="text-primary group-hover:translate-y-1 transition-transform" />
          </MagneticButton>

          <MagneticButton
            as="a"
            href={personalInfo.resumeUrl}
            download="Adarsh_Patil_Resume.pdf"
            className="footer-glass-pill px-6 py-4 rounded-full text-foreground font-semibold text-sm flex items-center gap-2"
          >
            <FileDown size={16} className="text-primary" />
            <span>Resume</span>
          </MagneticButton>

          <MagneticButton
            as="a"
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-glass-pill px-5 py-4 rounded-full text-muted-foreground hover:text-foreground text-sm flex items-center gap-2"
            title="GitHub"
          >
            <Github size={16} />
            <span className="hidden sm:inline">GitHub</span>
          </MagneticButton>

          {personalInfo.leetcode && (
            <MagneticButton
              as="a"
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-glass-pill px-5 py-4 rounded-full text-muted-foreground hover:text-foreground text-sm flex items-center gap-2"
              title="LeetCode"
            >
              <Code2 size={16} className="text-amber-400" />
              <span className="hidden sm:inline font-mono">LeetCode</span>
            </MagneticButton>
          )}
        </div>

      </div>

      {/* 3. The Signature Vertical Light Beam & Bouncing Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-4 pb-2">
        <MagneticButton
          as="button"
          onClick={scrollToHero}
          className="group flex flex-col items-center focus:outline-none cursor-pointer"
          aria-label="Scroll down to reveal profile"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground group-hover:text-primary transition-colors mb-3">
            Scroll to begin
          </span>
          <div
            ref={lineRef}
            className="w-[2px] h-28 sm:h-36 bg-gradient-to-b from-primary via-secondary to-transparent origin-top shadow-[0_0_15px_rgba(56,189,248,0.5)] group-hover:from-primary group-hover:h-40 transition-all duration-300"
          />
        </MagneticButton>
      </div>

    </section>
  );
};
