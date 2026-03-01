import React, { useState } from 'react';
import { EXPERIENCE } from '../data.js';
import useReveal from './useReveal.js';

/** Single experience card — own component so useReveal hook is valid. */
function ExpCard({ exp, isOpen, onToggle }) {
  const cardRef = useReveal(0.1);
  return (
    <div ref={cardRef} className="reveal relative pl-0 sm:pl-14">
      {/* Timeline dot */}
      <div
        className="hidden sm:block absolute left-4 md:left-5 top-5 w-3 h-3 rounded-full border-2"
        style={{ borderColor: '#00d1c1', background: '#0b0f12', boxShadow: '0 0 8px rgba(0,209,193,0.5)' }}
        aria-hidden="true"
      />

      <div className="glass-card overflow-hidden">
        {/* Header / Toggle */}
        <button
          className="w-full text-left p-5 md:p-6 focus:outline-none group"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`exp-body-${exp.id}`}
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h3 className="text-base md:text-lg font-bold text-white group-hover:text-accent transition-colors">
                  {exp.role}
                </h3>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ background: 'rgba(0,209,193,0.1)', color: '#00d1c1' }}
                >
                  {exp.type}
                </span>
              </div>
              <div className="text-sm font-semibold text-accent">{exp.company}</div>
              <div className="flex flex-wrap gap-3 mt-1.5 text-xs text-slate-500">
                <span>📅 {exp.period}</span>
                <span>📍 {exp.location}</span>
                <span>🏭 {exp.domain}</span>
              </div>
            </div>
            <span
              className={`text-slate-500 transition-transform duration-300 mt-1 ${isOpen ? 'rotate-180' : ''}`}
              aria-hidden="true"
            >▼</span>
          </div>
        </button>

        {/* Collapsible Body */}
        <div
          id={`exp-body-${exp.id}`}
          className={`overflow-hidden transition-all duration-400 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
        >
          <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-white/5 pt-4">
            <p className="text-slate-400 text-sm mb-4">{exp.description}</p>
            <ul className="space-y-2 mb-4">
              {exp.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#00d1c1' }} aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-1.5 list-none p-0 m-0" aria-label="Technologies used">
              {exp.tags.map((tag) => (
                <li key={tag}><span className="skill-pill text-xs">{tag}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Experience — Timeline-style experience cards.
 */
export default function Experience() {
  const headingRef = useReveal();
  const [expanded, setExpanded] = useState('exp-1');

  return (
    <section id="experience" aria-label="Work experience" className="py-24 bg-section-alt">
      <div className="section-container">
        <div ref={headingRef} className="reveal mb-12">
          <h2 className="section-heading">Work <span>Experience</span></h2>
          <div className="section-divider" />
          <p className="text-slate-400 text-sm">3.5+ years building enterprise telecom & payment systems.</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-4 md:left-6 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, #00d1c1, rgba(0,209,193,0.1))' }}
            aria-hidden="true"
          />
          <div className="space-y-6">
            {EXPERIENCE.map((exp) => (
              <ExpCard
                key={exp.id}
                exp={exp}
                isOpen={expanded === exp.id}
                onToggle={() => setExpanded(expanded === exp.id ? null : exp.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
