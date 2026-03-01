import React from 'react';
import { ABOUT } from '../data.js';
import useReveal from './useReveal.js';

/**
 * About — Personal narrative + key stat highlights.
 */
export default function About() {
  const headingRef = useReveal();
  const textRef = useReveal(0.1);
  const statsRef = useReveal(0.1);

  return (
    <section id="about" aria-label="About Biswajit Sahu" className="py-24 bg-section-alt">
      <div className="section-container">

        {/* Heading */}
        <div ref={headingRef} className="reveal mb-12">
          <h2 className="section-heading">About <span>Me</span></h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Text */}
          <div ref={textRef} className="reveal space-y-5">
            {ABOUT.paragraphs.map((p) => (
              <p key={p.slice(0, 30)} className="text-slate-400 leading-relaxed text-base">{p}</p>
            ))}

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="#experience"
                onClick={(e) => { e.preventDefault(); document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-accent text-sm px-5 py-2.5"
              >
                View Experience →
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-outline text-sm px-5 py-2.5"
              >
                Let's Connect
              </a>
            </div>
          </div>

          {/* Stat Highlights */}
          <div ref={statsRef} className="reveal">
            <div className="grid grid-cols-2 gap-4">
              {ABOUT.highlights.map(({ label, sublabel }) => (
                <div
                  key={label}
                  className="glass-card p-6 text-center"
                >
                  <div className="text-3xl font-extrabold neon-text mb-1">{label}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest">{sublabel}</div>
                </div>
              ))}
            </div>

            {/* What I Do card */}
            <div className="glass-card mt-4 p-5">
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">What I Specialise In</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                {[
                  '⚙️  Event-driven microservices with Apache Kafka',
                  '☁️  Cloud-native systems on Google Cloud Platform',
                  '🔧  High-throughput REST & gRPC API design',
                  '🚀  CI/CD automation with Jenkins & Docker',
                  '📊  Query optimization & production reliability',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

