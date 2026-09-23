import React, { useState } from 'react';
import { personalInfo } from '../data/portfolio';
import { SectionHeader } from '../components/SectionHeader';
import { ContactForm } from '../components/ContactForm';
import { MagneticButton } from '../components/ui/motion-footer';
import { Mail, MessageSquare, Copy, Check, ChevronDown, Code2 } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-background cinematic-footer-wrapper">
      {/* Aurora & Grid */}
      <div className="footer-aurora absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[65vh] w-[80vw] rounded-[50%] blur-[120px] pointer-events-none z-0 opacity-55" />
      <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

      {/* Giant Masked Background Text */}
      <div className="section-giant-bg-text absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none">
        CONNECT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="GET IN TOUCH"
          title="Let's Connect"
          subtitle="Whether you have an internship opportunity, want to collaborate on software, or talk about algorithms, feel free to reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-black text-foreground flex items-center gap-2 footer-text-glow">
                <MessageSquare size={22} className="text-primary" />
                <span>Direct Channels</span>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I'm actively seeking software engineering opportunities, internships, and open-source project collaborations.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-5 rounded-3xl footer-glass-pill flex items-center justify-between group">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-card border border-border text-primary shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] text-muted-foreground font-mono block">
                      Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-bold text-foreground hover:text-primary transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-3 rounded-2xl text-muted-foreground hover:text-foreground bg-card border border-border transition-all cursor-pointer"
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check size={18} className="text-emerald-400" />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
              </div>

              {/* GitHub Card with Magnetic Pill */}
              <MagneticButton
                as="a"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-3xl footer-glass-pill flex items-center justify-between group w-full"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-card text-muted-foreground group-hover:text-foreground border border-border shadow-sm">
                    <Github size={20} />
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] text-muted-foreground font-mono block">
                      GitHub
                    </span>
                    <span className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {personalInfo.github.replace('https://', '')}
                    </span>
                  </div>
                </div>
                <span className="text-sm font-mono text-primary font-bold group-hover:translate-x-1.5 transition-transform">
                  →
                </span>
              </MagneticButton>

              {/* LinkedIn Card with Magnetic Pill */}
              <MagneticButton
                as="a"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-3xl footer-glass-pill flex items-center justify-between group w-full"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-card text-muted-foreground group-hover:text-foreground border border-border shadow-sm">
                    <Linkedin size={20} />
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] text-muted-foreground font-mono block">
                      LinkedIn
                    </span>
                    <span className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      Adarsh Patil on LinkedIn
                    </span>
                  </div>
                </div>
                <span className="text-sm font-mono text-primary font-bold group-hover:translate-x-1.5 transition-transform">
                  →
                </span>
              </MagneticButton>

              {/* LeetCode Card */}
              {personalInfo.leetcode && (
                <MagneticButton
                  as="a"
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-3xl footer-glass-pill flex items-center justify-between group w-full"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-2xl bg-card text-amber-400 group-hover:text-amber-300 border border-border shadow-sm">
                      <Code2 size={20} />
                    </div>
                    <div className="text-left">
                      <span className="text-[11px] text-muted-foreground font-mono block">
                        LeetCode Profile
                      </span>
                      <span className="text-sm sm:text-base font-bold text-foreground group-hover:text-amber-400 transition-colors">
                        Adarsh_patil14
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-mono text-amber-400 font-bold group-hover:translate-x-1.5 transition-transform">
                    →
                  </span>
                </MagneticButton>
              )}
            </div>
          </div>

          {/* Right Column: Contact Message Form in Glass Pill Frame */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl footer-glass-pill shadow-2xl backdrop-blur-md">
              <ContactForm />
            </div>
          </div>

        </div>

        {/* Scroll Cue To Curtain Reveal */}
        <div className="pt-10 pb-4 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full footer-glass-pill text-xs font-mono text-muted-foreground">
            <span>Scroll down for the grand finale curtain</span>
            <ChevronDown size={14} className="text-primary animate-bounce" />
          </div>
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary/60 to-transparent mt-4" />
        </div>

      </div>
    </section>
  );
};
