import React from 'react';
import { ACHIEVEMENTS } from '../data.js';
import useReveal from './useReveal.js';

/** Single achievement card — own component so useReveal hook is valid. */
function AchCard({ ach, idx }) {
  const cardRef = useReveal(0.1);
  return (
    <article
      ref={cardRef}
      className="reveal glass-card p-6 text-center group"
      style={{ transitionDelay: `${idx * 80}ms` }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl"
        style={{ background: 'rgba(0,209,193,0.08)', border: '1px solid rgba(0,209,193,0.15)' }}
        aria-hidden="true"
      >
        {ach.icon}
      </div>

      {/* Metric badge */}
      <div
        className="inline-block px-3 py-1 rounded-full text-lg font-extrabold mb-2"
        style={{
          background: 'rgba(0,209,193,0.12)',
          color: '#00d1c1',
          border: '1px solid rgba(0,209,193,0.25)',
          textShadow: '0 0 12px rgba(0,209,193,0.4)',
        }}
      >
        {ach.metric}
      </div>

      <h3 className="text-sm font-bold text-white mb-2">{ach.label}</h3>
      <p className="text-xs text-slate-500 leading-relaxed">{ach.description}</p>
    </article>
  );
}

/**
 * Achievements — Key metrics with numeric badges and descriptions.
 */
export default function Achievements() {
  const headingRef = useReveal();

  return (
    <section id="achievements" aria-label="Key achievements and metrics" className="py-24 bg-section-alt">
      <div className="section-container">

        <div ref={headingRef} className="reveal mb-12">
          <h2 className="section-heading">Key <span>Achievements</span></h2>
          <div className="section-divider" />
          <p className="text-slate-400 text-sm max-w-xl">
            Measurable impact delivered across production systems in enterprise telecom.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ACHIEVEMENTS.map((ach, idx) => (
            <AchCard key={ach.id} ach={ach} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
