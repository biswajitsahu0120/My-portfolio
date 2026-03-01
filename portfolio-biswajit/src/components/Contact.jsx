import React from 'react';
import { PROFILE } from '../data.js';
import useReveal from './useReveal.js';

/**
 * Contact — Static contact details section. No form, no API calls.
 * Clean card layout with icon-based rows and a Resume download CTA.
 */
export default function Contact() {
  const headingRef = useReveal();
  const cardRef    = useReveal(0.1);

  const contactItems = [
    {
      label: 'Email',
      value: PROFILE.email,
      href:  `mailto:${PROFILE.email}`,
      external: false,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
    },
    {
      label: 'Phone',
      value: PROFILE.phone,
      href:  `tel:${PROFILE.phone.replaceAll(' ', '')}`,
      external: false,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.84a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        </svg>
      ),
    },
    {
      label: 'Location',
      value: PROFILE.location,
      href:  'https://maps.google.com/?q=Bengaluru,Karnataka,India',
      external: true,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/biswajit-sahu-2021bs2',
      href:  PROFILE.linkedin,
      external: true,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" aria-label="Contact Biswajit Sahu" className="py-24 bg-section-alt">
      <div className="section-container">

        {/* Heading */}
        <div ref={headingRef} className="reveal mb-12">
          <h2 className="section-heading">Get In <span>Touch</span></h2>
          <div className="section-divider" />
          <p className="text-slate-400 text-sm max-w-lg">
            Open to senior backend engineering roles, consulting, and collaboration.
            Reach out via any of the channels below.
          </p>
        </div>

        {/* Contact card */}
        <div ref={cardRef} className="reveal max-w-2xl mx-auto">
          <div className="glass-card p-6 md:p-8">

            {/* Contact rows */}
            <ul className="space-y-4 list-none p-0 m-0" aria-label="Contact details">
              {contactItems.map(({ icon, label, value, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 group"
                    aria-label={`${label}: ${value}`}
                  >
                    {/* Icon bubble */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-accent transition-all duration-200 group-hover:scale-110"
                      style={{ background: 'rgba(0,209,193,0.08)', border: '1px solid rgba(0,209,193,0.15)' }}
                    >
                      {icon}
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <div className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">
                        {label}
                      </div>
                      <div className="text-sm md:text-base text-white font-medium group-hover:text-accent transition-colors truncate">
                        {value}
                      </div>
                    </div>

                    {/* External arrow */}
                    {external && (
                      <svg
                        className="ml-auto flex-shrink-0 text-slate-700 group-hover:text-accent transition-colors"
                        width="14" height="14" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                      </svg>
                    )}
                  </a>

                  {/* Divider — skip after last item */}
                  {label !== 'LinkedIn' && (
                    <div className="mt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.04)' }} />
                  )}
                </li>
              ))}
            </ul>

            {/* Resume CTA */}
            <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(0,209,193,0.1)' }}>
              <a
                href={PROFILE.resumeUrl}
                download
                className="btn-accent w-full justify-center"
                aria-label="Download Biswajit Sahu's Resume PDF"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
                Download Resume (PDF)
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
