import React from 'react';
import { PROFILE } from '../data.js';

/**
 * Hero — Full-viewport first impression section.
 * Layout: text left | profile image right (desktop) | stacked (mobile).
 */
export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      aria-label="Hero introduction"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background blobs */}
      <div
        className="hero-blob"
        style={{
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(0,209,193,0.08) 0%, transparent 70%)',
          top: '-100px', left: '-100px',
        }}
        aria-hidden="true"
      />
      <div
        className="hero-blob"
        style={{
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(0,209,193,0.05) 0%, transparent 70%)',
          bottom: '0', right: '0',
        }}
        aria-hidden="true"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,209,193,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,209,193,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 w-full py-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

          {/* ── Text Side ─────────────────────────────────────────────────── */}
          <div className="flex-1 text-center md:text-left">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-medium"
              style={{ background: 'rgba(0,209,193,0.08)', border: '1px solid rgba(0,209,193,0.2)', color: '#00d1c1' }}>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" aria-hidden="true" />{' '}
              Open to Senior Roles · Bengaluru, India
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-white">
              {PROFILE.name.split(' ').map((word, i) =>
                i === 1
                  ? <span key={word} className="neon-text"> {word}</span>
                  : <span key={word}>{word}</span>
              )}
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-accent mb-4">
              {PROFILE.headline}
            </h2>

            <p className="text-base sm:text-lg text-slate-400 font-medium mb-5 max-w-xl">
              {PROFILE.subheadline}
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              {PROFILE.heroIntro}
            </p>

            {/* Tech tags */}
            <ul className="flex flex-wrap justify-center md:justify-start gap-2 mb-10 list-none p-0" aria-label="Core technologies">
              {PROFILE.techTags.map((tag) => (
                <li key={tag}><span className="tech-tag">{tag}</span></li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href={PROFILE.resumeUrl}
                download
                className="btn-accent"
                aria-label="Download Biswajit's Resume PDF"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
                Download Resume
              </a>
              <button
                onClick={() => scrollTo('#contact')}
                className="btn-outline"
                aria-label="Scroll to contact section"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4 mt-8">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-accent transition-colors"
                aria-label="Biswajit's LinkedIn profile"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-slate-500 hover:text-accent transition-colors"
                aria-label="Email Biswajit"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ── Profile Image ──────────────────────────────────────────────── */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="profile-ring w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
              <div className="w-full h-full rounded-full overflow-hidden bg-dark-600 flex items-center justify-center">
                <img
                  src={PROFILE.profileImage}
                  alt="Biswajit Sahu — Senior Java Backend Engineer"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML =
                      '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;' +
                      'background:linear-gradient(135deg,#1e2a38,#0b0f12);border-radius:50%;font-size:4rem;' +
                      'font-weight:800;color:#00d1c1;font-family:Inter,sans-serif;">BS</div>';
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollTo('#about')}
            className="flex flex-col items-center gap-2 text-slate-600 hover:text-accent transition-colors text-xs"
            aria-label="Scroll down to About section"
          >
            <span>Scroll</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce" aria-hidden="true">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

