import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolio';
import { Menu, X, FileDown, Terminal as TerminalIcon, Code2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { MagneticButton } from './ui/motion-footer';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 130;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-background/85 backdrop-blur-2xl border-b border-border/60 shadow-xl shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-foreground group font-mono font-semibold text-base sm:text-lg tracking-tight"
            aria-label="Adarsh Patil Home"
          >
            <div className="w-10 h-10 rounded-2xl bg-card border border-border flex items-center justify-center text-primary group-hover:border-primary/60 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all">
              <TerminalIcon size={18} />
            </div>
            <span className="font-bold flex items-center gap-1">
              {personalInfo.name}
              <span className="text-primary font-black">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full footer-glass-pill">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-primary/20 text-primary border border-primary/40 shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/40 border border-transparent'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2">
            <MagneticButton
              as="a"
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-2xl footer-glass-pill text-muted-foreground hover:text-foreground"
              aria-label="GitHub Profile"
            >
              <Github size={17} />
            </MagneticButton>
            <MagneticButton
              as="a"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-2xl footer-glass-pill text-muted-foreground hover:text-foreground"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={17} />
            </MagneticButton>
            {personalInfo.leetcode && (
              <MagneticButton
                as="a"
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-2xl footer-glass-pill text-amber-400 hover:text-amber-300"
                aria-label="LeetCode Profile"
                title="LeetCode"
              >
                <Code2 size={17} />
              </MagneticButton>
            )}
            <MagneticButton
              as="a"
              href={personalInfo.resumeUrl}
              download="Adarsh_Patil_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full footer-glass-pill text-xs font-bold text-foreground"
            >
              <FileDown size={14} className="text-primary" />
              <span>Resume</span>
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-2xl footer-glass-pill text-muted-foreground hover:text-foreground focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-4 pb-6 bg-card/95 backdrop-blur-2xl border-b border-border shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-left px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-primary/20 text-primary border border-primary/30'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
            <div className="flex items-center gap-2.5 pt-3 mt-2 border-t border-border">
              <a
                href={personalInfo.resumeUrl}
                download="Adarsh_Patil_Resume.pdf"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-2xl text-xs font-bold bg-primary text-primary-foreground"
              >
                <FileDown size={15} />
                <span>Resume</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-2xl footer-glass-pill text-foreground"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-2xl footer-glass-pill text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              {personalInfo.leetcode && (
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-2xl footer-glass-pill text-amber-400"
                  aria-label="LeetCode"
                >
                  <Code2 size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
