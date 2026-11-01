import React from 'react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const ABOUT_TEXT =
  "I am a B.Tech Computer Science Engineering student and Full-Stack Developer passionate about building modern web applications. I enjoy working with frontend and backend technologies to create responsive, interactive and user-friendly digital experiences.";

const MOON_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png';
const P59_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png';
const LEGO_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png';
const GROUP_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png';

const INFO_CARDS = [
  { label: 'Education', value: 'B.Tech CSE', sub: 'Sanjivani University · 2028' },
  { label: 'Internship', value: 'Technokeens', sub: 'Web Dev Intern · 3 Months' },
  { label: 'Diploma', value: '70%', sub: 'Computer Science · 2025' },
  { label: 'Location', value: 'Nashik', sub: 'Maharashtra, India' },
];

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
      style={{ background: '#0C0C0C' }}
    >
      {/* Decorative 3D images — preserved */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none"
      >
        <img src={MOON_URL} alt="" className="w-[120px] sm:w-[160px] md:w-[210px] h-auto" draggable={false} />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none"
      >
        <img src={P59_URL} alt="" className="w-[100px] sm:w-[140px] md:w-[180px] h-auto" draggable={false} />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none"
      >
        <img src={LEGO_URL} alt="" className="w-[120px] sm:w-[160px] md:w-[210px] h-auto" draggable={false} />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none"
      >
        <img src={GROUP_URL} alt="" className="w-[130px] sm:w-[170px] md:w-[220px] h-auto" draggable={false} />
      </FadeIn>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16 w-full max-w-3xl">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Animated paragraph */}
        <div className="flex flex-col items-center gap-10 sm:gap-12 w-full">
          <AnimatedText
            text={ABOUT_TEXT}
            className="font-medium text-center leading-relaxed max-w-[560px]"
            style={{ color: '#D7E2EA', fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />

          {/* Info cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
            {INFO_CARDS.map((card, i) => (
              <FadeIn key={card.label} delay={0.1 + i * 0.08} y={20}>
                <div
                  className="rounded-2xl p-4 flex flex-col gap-1 text-center"
                  style={{
                    background: 'rgba(215,226,234,0.04)',
                    border: '1px solid rgba(215,226,234,0.12)',
                  }}
                >
                  <span
                    className="font-black uppercase leading-tight"
                    style={{ color: '#D7E2EA', fontSize: 'clamp(1rem, 2.5vw, 1.4rem)' }}
                  >
                    {card.value}
                  </span>
                  <span
                    className="font-light uppercase tracking-wider"
                    style={{ color: '#D7E2EA', opacity: 0.5, fontSize: '0.65rem' }}
                  >
                    {card.label}
                  </span>
                  <span
                    className="font-light"
                    style={{ color: '#D7E2EA', opacity: 0.4, fontSize: '0.6rem' }}
                  >
                    {card.sub}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>

          <ContactButton />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
