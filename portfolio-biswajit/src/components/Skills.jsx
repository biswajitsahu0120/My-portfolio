import React, { useState } from 'react';
import { SKILLS, AI_SKILLS } from '../data.js';
import useReveal from './useReveal.js';

/** Individual skill category card — own component so the hook is valid. */
function SkillCard({ group, idx, hoveredCategory, onEnter, onLeave }) {
  const cardRef = useReveal(0.1);
  return (
    <div
      ref={cardRef}
      className="reveal glass-card p-5"
      style={{ transitionDelay: `${idx * 80}ms` }}
      onMouseEnter={() => onEnter(group.category)}
      onMouseLeave={onLeave}
    >
      <div className="flex items-center gap-3 mb-4">
        <span
          className="text-xl w-9 h-9 flex items-center justify-center rounded-lg"
          style={{ background: 'rgba(0,209,193,0.1)' }}
          aria-hidden="true"
        >
          {group.icon}
        </span>
        <h3 className="text-sm font-semibold text-white">{group.category}</h3>
      </div>
      <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
        {group.items.map((skill) => (
          <li key={skill}>
            <span
              className="skill-pill"
              style={
                hoveredCategory === group.category
                  ? { background: 'rgba(0,209,193,0.18)', borderColor: 'rgba(0,209,193,0.4)' }
                  : {}
              }
            >
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Skills — Category-grouped skill grid + AI-Assisted Practices subsection.
 */
export default function Skills() {
  const headingRef = useReveal();
  const aiRef      = useReveal(0.1);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <section id="skills" aria-label="Core skills and technologies" className="py-24">
      <div className="section-container">
        <div ref={headingRef} className="reveal mb-12">
          <h2 className="section-heading">Core <span>Expertise</span></h2>
          <div className="section-divider" />
          <p className="text-slate-400 text-sm max-w-xl">
            Technologies and tools I work with daily to build production-grade backend systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((group, idx) => (
            <SkillCard
              key={group.category}
              group={group}
              idx={idx}
              hoveredCategory={hoveredCategory}
              onEnter={setHoveredCategory}
              onLeave={() => setHoveredCategory(null)}
            />
          ))}
        </div>

        {/* ── AI-Assisted Engineering Practices ───────────────────────────── */}
        <div ref={aiRef} className="reveal mt-8">
          <div
            className="glass-card p-6"
            style={{ borderColor: 'rgba(139,92,246,0.18)' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-xl w-9 h-9 flex items-center justify-center rounded-lg flex-shrink-0"
                style={{ background: 'rgba(139,92,246,0.1)' }}
                aria-hidden="true"
              >
                🤖
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">
                  AI-Assisted Engineering Practices
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Practical use of AI tooling to improve engineering productivity and output quality.
                </p>
              </div>
            </div>

            {/* Bullet list */}
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 list-none p-0 m-0">
              {AI_SKILLS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-400">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: 'rgba(139,92,246,0.7)' }}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
