import React from 'react';
import { PROJECTS } from '../data.js';
import useReveal from './useReveal.js';

// Icons per project — no payment-card icon
const PROJECT_ICONS = ['⚡', '🔗', '🔄'];

/** Single project card — own component so useReveal hook is valid. */
function ProjectCard({ project, idx }) {
  const cardRef = useReveal(0.1);
  return (
    <article
      ref={cardRef}
      className="reveal glass-card p-6 flex flex-col"
      style={{ transitionDelay: `${idx * 100}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
          style={{ background: 'rgba(0,209,193,0.1)' }}
          aria-hidden="true"
        >
          {PROJECT_ICONS[idx] ?? '🛠️'}
        </div>
        <span
          className="text-xs px-2 py-0.5 rounded-full"
          style={{ background: 'rgba(0,209,193,0.08)', color: '#00d1c1', border: '1px solid rgba(0,209,193,0.2)' }}
        >
          {project.type}
        </span>
      </div>

      <h3 className="text-base font-bold text-white mb-2">{project.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>

      {/* Highlights */}
      <ul className="space-y-1.5 mb-4 list-none p-0">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-xs text-slate-300">
            <span style={{ color: '#00d1c1' }} aria-hidden="true">✓</span>
            {h}
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <ul className="flex flex-wrap gap-1.5 list-none p-0 m-0" aria-label="Technologies used">
        {project.tech.map((t) => (
          <li key={t}><span className="skill-pill text-xs">{t}</span></li>
        ))}
      </ul>
    </article>
  );
}

/**
 * Projects — Portfolio project cards with tech stack and highlights.
 */
export default function Projects() {
  const headingRef = useReveal();

  return (
    <section id="projects" aria-label="Notable projects" className="py-24">
      <div className="section-container">

        <div ref={headingRef} className="reveal mb-12">
          <h2 className="section-heading">Key <span>Projects</span></h2>
          <div className="section-divider" />
          <p className="text-slate-400 text-sm max-w-xl">
            Selected technical projects demonstrating system design, scalability, and production impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
