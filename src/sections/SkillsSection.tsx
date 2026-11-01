import React from 'react';
import FadeIn from '../components/FadeIn';

const SKILL_GROUPS = [
  {
    category: 'Languages',
    skills: [
      { name: 'C', icon: '⚙️' },
      { name: 'C++', icon: '⚙️' },
      { name: 'Java', icon: '☕' },
      { name: 'Python', icon: '🐍' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'TypeScript', icon: '🔷' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'Bootstrap', icon: '🅱️' },
      { name: 'React.js', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Angular', icon: '🅰️' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: '🟢' },
    ],
  },
];

const SkillCard: React.FC<{ name: string; icon: string; delay: number }> = ({ name, icon, delay }) => (
  <FadeIn delay={delay} y={24}>
    <div
      className="group relative flex flex-col items-center justify-center gap-2 rounded-2xl px-4 py-5 cursor-default select-none transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'rgba(215,226,234,0.04)',
        border: '1px solid rgba(215,226,234,0.12)',
        boxShadow: '0 0 0 0 rgba(182,0,168,0)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          '0 0 24px 2px rgba(182,0,168,0.22), inset 0 0 12px rgba(182,0,168,0.08)';
        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(182,0,168,0.5)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 0 rgba(182,0,168,0)';
        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(215,226,234,0.12)';
      }}
    >
      <span className="text-2xl sm:text-3xl">{icon}</span>
      <span
        className="font-medium uppercase tracking-wider text-center"
        style={{ color: '#D7E2EA', fontSize: 'clamp(0.65rem, 1.1vw, 0.85rem)' }}
      >
        {name}
      </span>
    </div>
  </FadeIn>
);

const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col gap-16 sm:gap-20">
        {SKILL_GROUPS.map((group, gi) => (
          <div key={group.category}>
            <FadeIn delay={gi * 0.08} y={20}>
              <p
                className="uppercase tracking-[0.3em] font-light mb-6 sm:mb-8"
                style={{ color: '#B600A8', fontSize: 'clamp(0.65rem, 1.2vw, 0.9rem)' }}
              >
                {group.category}
              </p>
            </FadeIn>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
              {group.skills.map((skill, si) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  delay={gi * 0.1 + si * 0.06}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

