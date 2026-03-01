import React, { useState, useEffect } from 'react';
import { PROFILE, NAV_LINKS } from '../data.js';

/**
 * Navbar — fixed top navigation with mobile hamburger menu.
 * Becomes opaque on scroll. Highlights active section.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  // Handle scroll for background + active section detection
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_LINKS.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-900/95 backdrop-blur-md border-b border-accent/10 shadow-card' : 'bg-transparent'
      }`}
    >
      <nav
        className="section-container flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo / Brand */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          className="font-bold text-lg tracking-wide text-white hover:text-accent transition-colors"
          aria-label="Biswajit Sahu – Home"
        >
          <span className="text-accent">&lt;</span>BS<span className="text-accent">/&gt;</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace('#', '');
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                    active === id
                      ? 'text-accent bg-accent/10'
                      : 'text-slate-300 hover:text-accent hover:bg-accent/5'
                  }`}
                  aria-current={active === id ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <a
          href={PROFILE.resumeUrl}
          download
          className="hidden md:inline-flex btn-accent text-xs px-4 py-2"
          aria-label="Download Resume PDF"
        >
          ↓ Resume
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded text-slate-300 hover:text-accent"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-5 h-0.5 bg-current transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-dark-800/98 backdrop-blur-md border-b border-accent/10 overflow-hidden transition-all duration-300 ${
          open ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <ul className="section-container flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="block px-4 py-2.5 rounded text-sm font-medium text-slate-300 hover:text-accent hover:bg-accent/5 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href={PROFILE.resumeUrl}
              download
              className="block btn-accent text-center text-sm"
            >
              ↓ Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

