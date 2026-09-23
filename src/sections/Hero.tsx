import React, { useRef, useEffect } from 'react';
import { personalInfo, educationData } from '../data/portfolio';
import { Terminal } from '../components/Terminal';
import { MagneticButton } from '../components/ui/motion-footer';
import { ArrowRight, FileDown, Sparkles, Code2, Award, Terminal as TerminalIcon } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import { gsap } from 'gsap';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        giantTextRef.current,
        { scale: 0.85, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 1.4, ease: "power3.out" }
      );

      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }
      );

      gsap.fromTo(
        actionsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: "power3.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const marqueeItems = [
    "ADARSH PATIL",
    "B.TECH CSE • 9.05 CGPA",
    "DATA STRUCTURES & ALGORITHMS",
    "C++ & JAVA SYSTEMS",
    "SQL & DBMS",
    "PROBLEM SOLVING",
    "PRACTICAL BUILDER",
    "OPEN SOURCE EXPLORER",
  ];

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-background text-foreground cinematic-footer-wrapper select-none"
    >
      {/* Ambient Aurora Glow & Grid Background */}
      <div className="footer-aurora absolute left-1/2 top-1/2 h-[70vh] w-[85vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[100px] pointer-events-none z-0" />
      <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

      {/* Giant Parallax Masked Background Text */}
      <div
        ref={giantTextRef}
        className="footer-giant-bg-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap z-0 pointer-events-none"
      >
        ADARSH
      </div>

      {/* 1. Sleek Diagonal Marquee Ticker */}
      <div className="relative z-10 w-full overflow-hidden border-y border-border/40 bg-background/50 backdrop-blur-md py-3.5 mb-10 -rotate-1 scale-105 shadow-xl">
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

      {/* 2. Main Center Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & Magnetic CTA Pills */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Live Status Glass Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full footer-glass-pill text-xs font-mono text-foreground shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
              <span className="text-muted-foreground/60">•</span>
              <span className="text-primary font-bold">{educationData.cgpa} CGPA</span>
            </div>

            {/* Main Giant Metallic Title */}
            <div>
              <h1
                ref={headingRef}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black footer-text-glow tracking-tighter leading-[1.04]"
              >
                Hi, I'm <br />
                <span className="text-primary">{personalInfo.name}</span>.
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-muted-foreground mt-3 flex items-center gap-2">
                {personalInfo.role}
              </p>
            </div>

            {/* Tagline Description */}
            <p className="text-base sm:text-lg text-foreground/85 leading-relaxed max-w-2xl font-normal">
              {personalInfo.tagline}
            </p>

            {/* Exploration Pill */}
            <div className="p-4 rounded-2xl footer-glass-pill max-w-xl">
              <p className="text-xs sm:text-sm text-primary font-mono flex items-start gap-2.5">
                <Sparkles size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/90 font-medium">{personalInfo.currentExploration}</span>
              </p>
            </div>

            {/* Interactive Magnetic Button Row */}
            <div ref={actionsRef} className="flex flex-wrap items-center gap-3.5 pt-2">
              <MagneticButton
                as="a"
                href="#projects"
                onClick={scrollToProjects}
                className="footer-glass-pill px-7 py-3.5 rounded-full text-foreground font-bold text-sm flex items-center gap-2.5 group"
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
              </MagneticButton>

              <MagneticButton
                as="a"
                href={personalInfo.resumeUrl}
                download="Adarsh_Patil_Resume.pdf"
                className="footer-glass-pill px-6 py-3.5 rounded-full text-foreground font-semibold text-sm flex items-center gap-2 group"
              >
                <FileDown size={16} className="text-primary" />
                <span>Resume</span>
              </MagneticButton>

              <MagneticButton
                as="a"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-glass-pill px-4 py-3.5 rounded-full text-muted-foreground hover:text-foreground text-sm flex items-center gap-2"
                title="GitHub"
              >
                <Github size={16} />
                <span className="hidden sm:inline">GitHub</span>
              </MagneticButton>

              <MagneticButton
                as="a"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-glass-pill px-4 py-3.5 rounded-full text-muted-foreground hover:text-foreground text-sm flex items-center gap-2"
                title="LinkedIn"
              >
                <Linkedin size={16} />
                <span className="hidden sm:inline">LinkedIn</span>
              </MagneticButton>

              {personalInfo.leetcode && (
                <MagneticButton
                  as="a"
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-glass-pill px-4 py-3.5 rounded-full text-muted-foreground hover:text-foreground text-sm flex items-center gap-2"
                  title="LeetCode"
                >
                  <Code2 size={16} className="text-amber-400" />
                  <span className="hidden sm:inline font-mono">LeetCode</span>
                </MagneticButton>
              )}
            </div>

            {/* High-End Metric Pills */}
            <div className="grid grid-cols-3 gap-3 pt-3 max-w-lg">
              <div className="p-3.5 rounded-2xl footer-glass-pill text-center">
                <div className="text-2xl font-black text-foreground font-mono">{educationData.cgpa}</div>
                <div className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider mt-0.5">B.Tech CGPA</div>
              </div>
              <div className="p-3.5 rounded-2xl footer-glass-pill text-center">
                <div className="text-2xl font-black text-primary font-mono">3+</div>
                <div className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider mt-0.5">Flagship Projects</div>
              </div>
              <div className="p-3.5 rounded-2xl footer-glass-pill text-center">
                <div className="text-2xl font-black text-foreground font-mono">10+</div>
                <div className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider mt-0.5">Core Tech Skills</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Developer Terminal in Glass Pill Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md p-1.5 rounded-3xl footer-glass-pill shadow-2xl">
              <Terminal />
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Scroll Cue */}
      <div className="relative z-10 w-full text-center pt-8">
        <a
          href="#about"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full footer-glass-pill text-xs font-mono text-muted-foreground hover:text-foreground transition-all group"
        >
          <span>Explore Developer Profile & Work</span>
          <span className="text-primary group-hover:translate-y-0.5 transition-transform">↓</span>
        </a>
      </div>

    </section>
  );
};
