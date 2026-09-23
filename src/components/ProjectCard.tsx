import React, { useState } from 'react';
import { ProjectItem } from '../types/portfolio';
import { MagneticButton } from './ui/motion-footer';
import {
  ExternalLink,
  Code2,
  Terminal,
  Lightbulb,
  CheckCircle2,
  Sparkles,
  Layers,
  Users,
} from 'lucide-react';
import { Github } from './Icons';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isEntrepreneurship = project.isProductOrEntrepreneurship;
  const [clickedPlaceholder, setClickedPlaceholder] = useState(false);

  const handleGithubClick = (e: React.MouseEvent) => {
    if (project.githubUrl === '#') {
      e.preventDefault();
      setClickedPlaceholder(true);
      setTimeout(() => setClickedPlaceholder(false), 2800);
    }
  };

  return (
    <div
      className={`group relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 footer-glass-pill ${
        isEntrepreneurship ? 'border-amber-500/25' : ''
      }`}
    >
      {/* Top Meta: Number & Badge */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-muted-foreground group-hover:text-primary transition-colors">
              // 0{project.number}
            </span>
            {isEntrepreneurship ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                <Lightbulb size={13} />
                Product Innovation
              </span>
            ) : project.id === 'line-editor' ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/30">
                <Terminal size={13} />
                C Systems
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-secondary/15 text-secondary border border-secondary/30">
                <Code2 size={13} />
                DSA Repository
              </span>
            )}
          </div>

          {/* Solved Count Placeholder for LeetCode */}
          {project.solvedCount && (
            <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-card border border-border text-xs font-mono">
              <span className="text-muted-foreground font-medium">Solved:</span>
              <span className="font-bold text-primary">{project.solvedCount} problems</span>
            </div>
          )}
        </div>

        {/* Title and Subtitle */}
        <div className="mb-4">
          <h3 className="text-2xl sm:text-3xl font-black text-foreground group-hover:text-primary transition-colors footer-text-glow">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-sm font-medium text-muted-foreground mt-1">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Features / Project Focus */}
        {project.features && (
          <div className="mb-6 p-4 rounded-2xl bg-card/60 border border-border/70">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-primary" />
              <span>Core Features</span>
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-foreground/90 font-medium">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="truncate">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Learning Outcomes */}
        {project.learningOutcomes && (
          <div className="mb-6 p-4 rounded-2xl bg-card/60 border border-border/70">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 flex items-center gap-1.5">
              <Sparkles size={14} className="text-primary" />
              <span>Key Technical Takeaways</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.learningOutcomes.map((outcome, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-muted/60 text-muted-foreground border border-border"
                >
                  {outcome}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* LeetCode Topics */}
        {project.topics && (
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 flex items-center gap-1.5">
              <Layers size={14} className="text-secondary" />
              <span>Algorithmic Topics</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.topics.map((topic, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl text-xs font-mono bg-card border border-border text-foreground/90"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* PureSip Focus */}
        {isEntrepreneurship && (
          <div className="space-y-4 mb-6">
            {project.projectFocus && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                  <Lightbulb size={14} className="text-amber-400" />
                  <span>Validation & Strategy</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.projectFocus.map((focus, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-xl text-xs bg-amber-500/10 text-amber-200 border border-amber-500/25 font-mono"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.targetUsers && (
              <div className="p-4 rounded-2xl bg-amber-500/[0.04] border border-amber-500/20">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2 flex items-center gap-1.5">
                  <Users size={14} className="text-amber-400" />
                  <span>Target User Segments</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.targetUsers.map((user, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-[11px] bg-card border border-amber-500/30 text-amber-200"
                    >
                      {user}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom: Technologies & Actions */}
      <div className="pt-6 border-t border-border/60">
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-xl text-xs font-mono bg-card text-primary border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <MagneticButton
            as="a"
            href={project.githubUrl}
            target={project.githubUrl === '#' ? '_self' : '_blank'}
            rel="noopener noreferrer"
            onClick={handleGithubClick}
            className="footer-glass-pill px-5 py-2.5 rounded-full text-xs font-bold text-foreground flex items-center gap-2 group/btn"
          >
            <Github size={15} className="text-muted-foreground group-hover/btn:text-primary transition-colors" />
            <span>Repository</span>
          </MagneticButton>

          {project.id === 'leetcode-solutions' && (
            <MagneticButton
              as="a"
              href="https://leetcode.com/u/Adarsh_patil14/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-glass-pill px-5 py-2.5 rounded-full text-xs font-bold text-amber-300 flex items-center gap-1.5 group/btn"
            >
              <Code2 size={14} />
              <span>LeetCode Profile</span>
            </MagneticButton>
          )}

          {project.liveUrl && (
            <MagneticButton
              as="a"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-glass-pill px-4 py-2.5 rounded-full text-xs font-semibold text-muted-foreground hover:text-foreground flex items-center gap-1.5"
            >
              <ExternalLink size={14} />
              <span>Live Demo</span>
            </MagneticButton>
          )}
        </div>

        {clickedPlaceholder && (
          <div className="mt-3 p-2.5 rounded-xl bg-primary/10 border border-primary/30 text-xs font-mono text-primary flex items-center gap-2 animate-in fade-in duration-200">
            <span>Repository link configured as placeholder in portfolio.ts</span>
          </div>
        )}
      </div>
    </div>
  );
};
