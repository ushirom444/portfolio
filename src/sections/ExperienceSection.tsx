import React from 'react';
import FadeIn from '../components/FadeIn';

const EDUCATION = [
  {
    degree: 'B.Tech Computer Science & Engineering',
    institution: 'Sanjivani University',
    year: 'Expected 2028',
    detail: 'Currently pursuing a bachelor\'s degree in Computer Science with focus on software engineering, data structures and web technologies.',
  },
  {
    degree: 'Diploma in Computer Science',
    institution: 'Diploma Programme',
    year: 'Passed 2025',
    detail: 'Completed diploma with 70% — covered core programming, networking and computer science fundamentals.',
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36"
      style={{ background: '#0C0C0C' }}
    >
      {/* ── INTERNSHIP ── */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto mb-24 sm:mb-32">
        <FadeIn delay={0.1} y={30}>
          <div
            className="rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-12 relative overflow-hidden"
            style={{
              border: '1px solid rgba(215,226,234,0.15)',
              background: 'rgba(215,226,234,0.03)',
            }}
          >
            {/* Accent glow */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(182,0,168,0.12) 0%, transparent 70%)',
              }}
            />

            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <p
                  className="uppercase tracking-[0.3em] font-light mb-2"
                  style={{ color: '#B600A8', fontSize: 'clamp(0.6rem, 1vw, 0.8rem)' }}
                >
                  Internship
                </p>
                <h3
                  className="font-black uppercase"
                  style={{ color: '#D7E2EA', fontSize: 'clamp(1.4rem, 4vw, 3rem)' }}
                >
                  Technokeens Pvt. Ltd.
                </h3>
                <p
                  className="font-medium uppercase tracking-wider mt-1"
                  style={{ color: '#D7E2EA', opacity: 0.6, fontSize: 'clamp(0.75rem, 1.4vw, 1rem)' }}
                >
                  Web Development Intern
                </p>
              </div>
              <div
                className="rounded-full px-5 py-2 font-medium uppercase tracking-widest text-xs"
                style={{
                  border: '1px solid rgba(182,0,168,0.5)',
                  color: '#B600A8',
                  background: 'rgba(182,0,168,0.08)',
                }}
              >
                3 Months
              </div>
            </div>

            <p
              className="font-light leading-relaxed max-w-2xl"
              style={{ color: '#D7E2EA', opacity: 0.55, fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)' }}
            >
              Worked on web development and gained practical experience with modern web technologies,
              including HTML, CSS, JavaScript, React.js, Next.js and Java. Contributed to real-world
              projects and collaborated with an engineering team in a professional environment.
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Java'].map((t) => (
                <span
                  key={t}
                  className="rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider"
                  style={{
                    background: 'rgba(215,226,234,0.06)',
                    border: '1px solid rgba(215,226,234,0.1)',
                    color: '#D7E2EA',
                    opacity: 0.8,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* ── EDUCATION ── */}
      <FadeIn delay={0.05} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
        >
          Education
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {EDUCATION.map((edu, i) => (
          <FadeIn key={edu.degree} delay={0.1 + i * 0.12} y={30}>
            <div
              className="rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 flex flex-wrap gap-6 justify-between"
              style={{
                border: '1px solid rgba(215,226,234,0.12)',
                background: 'rgba(215,226,234,0.02)',
              }}
            >
              <div className="flex-1 min-w-[200px]">
                <p
                  className="uppercase tracking-[0.3em] font-light mb-2"
                  style={{ color: '#B600A8', fontSize: '0.65rem' }}
                >
                  {edu.year}
                </p>
                <h3
                  className="font-black uppercase leading-tight mb-1"
                  style={{ color: '#D7E2EA', fontSize: 'clamp(1rem, 2.5vw, 1.8rem)' }}
                >
                  {edu.degree}
                </h3>
                <p
                  className="font-medium uppercase tracking-wider"
                  style={{ color: '#D7E2EA', opacity: 0.5, fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)' }}
                >
                  {edu.institution}
                </p>
              </div>
              <p
                className="font-light leading-relaxed max-w-xs self-center"
                style={{ color: '#D7E2EA', opacity: 0.45, fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)' }}
              >
                {edu.detail}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;

