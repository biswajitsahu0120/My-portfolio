import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Achievements from './components/Achievements.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import { PROFILE } from './data.js';

/**
 * App — Root component assembling all portfolio sections.
 * Includes: cookie consent banner, back-to-top button, footer.
 */
export default function App() {
  const [cookieAccepted, setCookieAccepted] = useState(
    () => localStorage.getItem('cookie-consent') === 'accepted'
  );
  const [showTop, setShowTop] = useState(false);

  // Show back-to-top when scrolled >500px
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setCookieAccepted(true);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setCookieAccepted(true); // just hide the banner
  };

  return (
    <>
      {/* Skip to main content — accessibility */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] btn-accent text-sm"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="py-10 border-t" style={{ borderColor: 'rgba(0,209,193,0.08)', background: '#0b0f12' }}>
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
            <div className="font-semibold text-slate-400">
              <span style={{ color: '#00d1c1' }}>&lt;</span>
              {'BS'}
              <span style={{ color: '#00d1c1' }}>/&gt;</span>
              {' '}Biswajit Sahu
            </div>
            <div className="text-center">
              Built with React + Vite + Tailwind CSS ·{' '}
              <span className="text-slate-500">Senior Java Backend Engineer · Bengaluru</span>
            </div>
            <div className="flex gap-5">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="hover:text-accent transition-colors"
                aria-label="Email"
              >
                Email
              </a>
              <a
                href={PROFILE.resumeUrl}
                download
                className="hover:text-accent transition-colors"
                aria-label="Download Resume"
              >
                Resume ↓
              </a>
            </div>
          </div>
          <div className="text-center text-xs text-slate-700 mt-4">
            © {new Date().getFullYear()} Biswajit Sahu. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ── Back to top ──────────────────────────────────────────────────────── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center shadow-glow transition-all duration-300 ${
          showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        style={{ background: '#00d1c1', color: '#0b0f12' }}
        aria-label="Back to top"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </button>

      {/* ── Cookie Consent Banner ─────────────────────────────────────────────── */}
      {!cookieAccepted && (
        <section className="cookie-banner" aria-label="Cookie consent notice" aria-live="polite">
          <p className="flex-1 text-sm text-slate-400">
            🍪 This site uses cookies for analytics (Google Analytics / Plausible) to improve the experience.
            No personal data is sold.{' '}
            <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <button onClick={declineCookies} className="btn-outline text-xs px-4 py-2">Decline</button>
            <button onClick={acceptCookies} className="btn-accent text-xs px-4 py-2">Accept</button>
          </div>
        </section>
      )}
    </>
  );
}

