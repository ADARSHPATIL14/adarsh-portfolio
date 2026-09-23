import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Focus } from './sections/Focus';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Journey } from './sections/Journey';
import { Education } from './sections/Education';
import { Achievements } from './sections/Achievements';
import { Contact } from './sections/Contact';
import { CinematicFooter } from '@/components/ui/motion-footer';
import { personalInfo } from './data/portfolio';

export const AppClassic: React.FC = () => {
  return (
    <div className="relative w-full bg-background min-h-screen text-foreground font-sans selection:bg-primary/25 selection:text-primary overflow-x-hidden">
      
      {/* 
        MAIN CONTENT CURTAIN AREA:
        High z-index, solid background, and curved bottom border so the 
        fixed GSAP CinematicFooter is unveiled as the user reaches the bottom.
      */}
      <div className="relative z-10 w-full min-h-screen bg-background border-b border-border/50 shadow-2xl rounded-b-[2.5rem] md:rounded-b-[4.5rem]">
        
        {/* Floating Navigation Bar */}
        <Navbar />

        {/* Continuous Portfolio Sections */}
        <main>
          {/* 01: Hero Section */}
          <Hero />

          {/* 02: About Me (Bento Grid) */}
          <About />

          {/* 03: Current Priorities & Focus */}
          <Focus />

          {/* 04: Technical Skills Matrix */}
          <Skills />

          {/* 05: Featured Projects */}
          <Projects />

          {/* 06: Learning Journey Timeline */}
          <Journey />

          {/* 07: Education & CGPA */}
          <Education />

          {/* 08: Verified Achievements */}
          <Achievements />

          {/* 09: Contact & Message */}
          <Contact />
        </main>
      </div>

      {/* 
        10: GSAP Cinematic Curtain-Reveal Footer
      */}
      <CinematicFooter
        brandName="ADARSH"
        heading="Ready to build something extraordinary?"
        marqueeItems={[
          "Data Structures & Algorithms",
          "C++ & Java Core",
          "B.Tech CSE • 9.05 CGPA",
          "Full-Stack Engineering",
          "Algorithmic Problem Solving",
          "Clean Architecture",
          "Open Source Explorer"
        ]}
        primaryActions={[
          {
            label: "GitHub Profile",
            href: personalInfo.github,
            target: "_blank",
            icon: (
              <svg className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            )
          },
          {
            label: "LinkedIn Profile",
            href: personalInfo.linkedin,
            target: "_blank",
            icon: (
              <svg className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            )
          },
          {
            label: "Download Resume",
            href: personalInfo.resumeUrl,
            download: "Adarsh_Patil_Resume.pdf",
            icon: (
              <svg className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            )
          },
        ]}
        secondaryLinks={[
          { label: "Home", href: "#home" },
          { label: "About", href: "#about" },
          { label: "Skills", href: "#skills" },
          { label: "Projects", href: "#projects" },
          { label: "Journey", href: "#journey" },
          { label: "Education", href: "#education" },
          { label: "Contact", href: "#contact" }
        ]}
        copyrightText="© 2026 Adarsh Patil. All rights reserved."
        craftedBy="Adarsh Patil"
      />

    </div>
  );
};

export default AppClassic;
