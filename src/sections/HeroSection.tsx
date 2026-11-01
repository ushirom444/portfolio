import React from 'react';
import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';

const PORTRAIT_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Contact'];

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col relative"
      style={{ overflowX: 'clip', background: '#0C0C0C' }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav">
        <nav className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
              style={{ color: '#D7E2EA' }}
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading uppercase tracking-tight leading-none whitespace-nowrap w-full text-[10vw] sm:text-[11vw] md:text-[12vw] lg:text-[13.5vw] mt-6 sm:mt-4 md:-mt-5"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Hi, I&apos;m Om Ushir
          </h1>
        </FadeIn>
      </div>

      {/* Title badge */}
      <FadeIn delay={0.28} y={20}>
        <p
          className="uppercase tracking-[0.25em] font-light px-6 md:px-10"
          style={{ color: '#B600A8', fontSize: 'clamp(0.7rem, 1.6vw, 1.1rem)' }}
        >
          Full-Stack AI Developer
        </p>
      </FadeIn>

      {/* Portrait - Centered Absolutely */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
          <img
            src={PORTRAIT_URL}
            alt="Om Ushir — Full-Stack AI Developer"
            className="w-full h-auto object-contain"
            draggable={false}
          />
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end mt-auto pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        {/* Left text */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ color: '#D7E2EA', fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            B.Tech CSE Student · Building modern, responsive & AI-powered web apps
          </p>
        </FadeIn>

        {/* Buttons */}
        <FadeIn delay={0.5} y={20}>
          <div className="flex flex-col sm:flex-row gap-3 items-end sm:items-center">
            <a href="#projects">
              <button
                className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm transition-colors hover:bg-[#D7E2EA]/10"
              >
                Explore Work
              </button>
            </a>
            <a href="#contact">
              <ContactButton />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
