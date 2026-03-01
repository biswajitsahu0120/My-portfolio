import React from 'react';
import PropTypes from 'prop-types';
import { EDUCATION, CERTIFICATIONS } from '../data.js';
import useReveal from './useReveal.js';

/* ── Sub-components so hooks are called at component top level ── */
function EduCard({ edu, idx }) {
  const cardRef = useReveal(0.1);
  return (
    <article
      ref={cardRef}
      className="reveal glass-card p-5"
      style={{ transitionDelay: `${idx * 80}ms` }}
    >
      <div className="flex items-start gap-4">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
          style={{ background: 'rgba(0,209,193,0.08)' }}
          aria-hidden="true"
        >
          {edu.logo}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <h4 className="text-sm font-bold text-white leading-snug">{edu.degree}</h4>
            {edu.status === 'Pursuing' && (
              <span
                className="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
                style={{ background: 'rgba(251,191,36,0.1)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.2)' }}
              >
                Pursuing
              </span>
            )}
            {edu.status === 'Completed' && (
              <span
                className="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
                style={{ background: 'rgba(74,222,128,0.1)', color: '#4ade80', border: '1px solid rgba(74,222,128,0.2)' }}
              >
                Completed
              </span>
            )}
          </div>
          <div className="text-accent text-sm font-medium mt-0.5">{edu.institution}</div>
          <div className="text-slate-500 text-xs mt-0.5">{edu.period}</div>
          <p className="text-slate-400 text-xs mt-2 leading-relaxed">{edu.description}</p>
        </div>
      </div>
    </article>
  );
}

EduCard.propTypes = {
  edu: PropTypes.shape({
    logo: PropTypes.string,
    degree: PropTypes.string,
    status: PropTypes.string,
    institution: PropTypes.string,
    period: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  idx: PropTypes.number.isRequired,
};

function CertCard({ cert, idx }) {
  const cardRef = useReveal(0.1);
  return (
    <article
      ref={cardRef}
      className="reveal glass-card overflow-hidden"
      style={{ transitionDelay: `${idx * 80}ms` }}
    >
      <div className={`h-1 bg-gradient-to-r ${cert.color}`} aria-hidden="true" />
      <div className="p-5">
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0"
            style={{ background: 'linear-gradient(135deg,#1a73e8,#00d1c1)', color: '#fff' }}
            aria-label={`${cert.issuer} badge`}
          >
            <span className="text-sm font-extrabold">{cert.badge}</span>
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div>
                <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                <div className="text-accent text-xs font-semibold mt-0.5">{cert.issuer}</div>
              </div>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(0,209,193,0.08)', color: '#00d1c1', border: '1px solid rgba(0,209,193,0.2)' }}
              >
                {cert.issued}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">{cert.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {cert.skills.map((s) => (
                <span key={s} className="skill-pill text-xs">{s}</span>
              ))}
            </div>
            {cert.credentialUrl && cert.credentialUrl !== '#' && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-accent hover:underline mt-3"
              >
                Verify Credential ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

CertCard.propTypes = {
  cert: PropTypes.shape({
    color: PropTypes.string,
    issuer: PropTypes.string,
    badge: PropTypes.string,
    title: PropTypes.string,
    issued: PropTypes.string,
    description: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
    credentialUrl: PropTypes.string,
  }).isRequired,
  idx: PropTypes.number.isRequired,
};

/**
 * Education + Certifications section.
 */
export default function Education() {
  const headingRef = useReveal();

  return (
    <section id="education" aria-label="Education and certifications" className="py-24">
      <div className="section-container">

        <div ref={headingRef} className="reveal mb-12">
          <h2 className="section-heading">Education & <span>Certifications</span></h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* ── Education ─────────────────────────────────────────────────── */}
          <div>
            <h3 className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">Education</h3>
            <div className="space-y-5">
              {EDUCATION.map((edu, idx) => (
                <EduCard key={edu.id} edu={edu} idx={idx} />
              ))}
            </div>
          </div>

          {/* ── Certifications ────────────────────────────────────────────── */}
          <div>
            <h3 className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">Certifications</h3>
            <div className="space-y-5">
              {CERTIFICATIONS.map((cert, idx) => (
                <CertCard key={cert.id} cert={cert} idx={idx} />
              ))}

              {/* Future cert placeholder */}
              <div className="glass-card p-5" style={{ borderStyle: 'dashed', opacity: 0.6 }}>
                <div className="text-center text-slate-600 text-sm py-3">
                  <div className="text-2xl mb-2" aria-hidden="true">🎯</div>
                  <div className="font-medium text-slate-500">More certifications in progress…</div>
                  <div className="text-xs mt-1 text-slate-600">Spring Professional | AWS | Kafka Certification</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
