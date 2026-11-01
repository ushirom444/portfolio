import React from 'react';
import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Frontend Development',
    description:
      'Building fast, responsive and visually stunning user interfaces using React.js, Next.js, Angular, HTML and CSS with a focus on performance and accessibility.',
  },
  {
    number: '02',
    name: 'Backend Development',
    description:
      'Developing robust server-side logic, RESTful APIs and database integrations using Node.js and Java to power scalable web applications.',
  },
  {
    number: '03',
    name: 'Full-Stack Development',
    description:
      'End-to-end web application development combining modern frontend frameworks with powerful backend services into cohesive, production-ready products.',
  },
  {
    number: '04',
    name: 'Responsive Web Design',
    description:
      'Crafting pixel-perfect, mobile-first layouts that adapt seamlessly across all screen sizes — from mobile phones to ultra-wide displays.',
  },
  {
    number: '05',
    name: 'Web Application Development',
    description:
      'Designing and building feature-rich, interactive web applications with clean architecture, smooth UX and maintainable codebases.',
  },
  {
    number: '06',
    name: 'AI-Powered App Development',
    description:
      'Integrating AI and machine learning capabilities into web applications to create intelligent, data-driven digital experiences.',
  },
  {
    number: '07',
    name: 'Modern UI/UX Implementation',
    description:
      'Translating design concepts into high-fidelity, interactive interfaces with attention to typography, spacing, motion and user delight.',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.08} y={30}>
            <div
              className="flex items-start gap-4 sm:gap-6 md:gap-8 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : undefined,
                borderBottom: '1px solid rgba(12,12,12,0.15)',
              }}
            >
              {/* Number */}
              <span
                className="font-black leading-none flex-shrink-0"
                style={{
                  color: '#0C0C0C',
                  fontSize: 'clamp(3rem, 10vw, 140px)',
                  lineHeight: 1,
                }}
              >
                {service.number}
              </span>

              {/* Name + Description */}
              <div className="flex flex-col justify-center pt-1 sm:pt-2 md:pt-3">
                <h3
                  className="font-medium uppercase"
                  style={{ color: '#0C0C0C', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl mt-1 sm:mt-2"
                  style={{
                    color: '#0C0C0C',
                    opacity: 0.6,
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
