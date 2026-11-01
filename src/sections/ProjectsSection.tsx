import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import FadeIn from '../components/FadeIn';

const PROJECTS = [
  {
    number: '01',
    category: 'Full-Stack',
    name: 'E-Commerce Website',
    tech: 'HTML · CSS · JavaScript · React.js · Next.js',
    description: 'Modern 3D online shopping platform with interactive product catalogs, digital cart checkout, and seamless order management.',
    col1img1: '/projects/p1-cart.svg',
    col1img2: '/projects/p1-product.svg',
    col2img:  '/projects/p1-dashboard.svg',
  },
  {
    number: '02',
    category: 'Mobile Application',
    name: 'Smart Water Conservation & Leak Reporting System',
    tech: 'IoT Sensors · GIS Mapping · Real-Time Telemetry',
    description: 'Futuristic smart city water monitoring system with acoustic leak detection, digital meters, and citizen incident reporting.',
    col1img1: '/projects/p2-meter.svg',
    col1img2: '/projects/p2-leak.svg',
    col2img:  '/projects/p2-dashboard.svg',
  },
  {
    number: '03',
    category: 'Web Application',
    name: 'Restaurant Bill Generator',
    tech: 'HTML · JavaScript · Dynamic POS Engine',
    description: 'Professional restaurant POS and billing station with live table status, automated tax calculations, and instant digital invoicing.',
    col1img1: '/projects/p3-receipt.svg',
    col1img2: '/projects/p3-menu.svg',
    col2img:  '/projects/p3-dashboard.svg',
  },
  {
    number: '04',
    category: 'Web Application',
    name: 'Hotel Receipt Generator',
    tech: 'HTML · CSS · JavaScript · Folio Engine',
    description: 'Modern luxury hotel reception and guest management interface with suite booking, itemized charges, and print-ready receipts.',
    col1img1: '/projects/p4-checkin.svg',
    col1img2: '/projects/p4-receipt.svg',
    col2img:  '/projects/p4-dashboard.svg',
  },
  {
    number: '05',
    category: 'Mobile Application',
    name: 'Multisector Leave Management System',
    tech: 'Mobile App · Role-Based Workflow · Calendar Sync',
    description: 'Enterprise HR management portal with multi-tier approval chains, attendance tracking, and cross-department leave analytics.',
    col1img1: '/projects/p5-apply.svg',
    col1img2: '/projects/p5-approval.svg',
    col2img:  '/projects/p5-dashboard.svg',
  },
  {
    number: '06',
    category: 'Smart Campus Application',
    name: 'Smart Campus Project',
    tech: 'IoT Automation · RFID Attendance · Digital Twin',
    description: 'Connected university infrastructure featuring isometric campus digital twin, automated lecture attendance, and smart facility controls.',
    col1img1: '/projects/p6-classroom.svg',
    col1img2: '/projects/p6-iot.svg',
    col2img:  '/projects/p6-dashboard.svg',
  },
];

const TOTAL_CARDS = PROJECTS.length;

interface ProjectCardProps {
  project: (typeof PROJECTS)[0];
  index: number;
  progress: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, progress }) => {
  const targetScale = 1 - (TOTAL_CARDS - 1 - index) * 0.025;
  const scale = useTransform(progress, [index / TOTAL_CARDS, 1], [1, targetScale]);

  // Subtle 3D tilt effect on hover
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 250, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 250, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      className="h-[85vh] flex items-start justify-center sticky"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 transition-shadow duration-500 hover:shadow-[0_0_50px_rgba(182,0,168,0.2)]"
        style={{
          background: '#0C0C0C',
          scale,
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          transformOrigin: 'top center',
        }}
      >
        {/* Top row */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4 sm:mb-6 md:mb-8">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span
              className="font-black leading-none"
              style={{ color: '#D7E2EA', fontSize: 'clamp(3rem, 10vw, 120px)', lineHeight: 1 }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span
                className="font-light uppercase tracking-widest"
                style={{ color: '#D7E2EA', opacity: 0.5, fontSize: 'clamp(0.6rem, 1vw, 0.85rem)' }}
              >
                {project.category}
              </span>
              <span
                className="font-medium uppercase leading-tight"
                style={{ color: '#D7E2EA', fontSize: 'clamp(0.9rem, 2vw, 1.7rem)' }}
              >
                {project.name}
              </span>
              <span
                className="font-light tracking-wide mt-1"
                style={{ color: '#B600A8', fontSize: 'clamp(0.65rem, 1vw, 0.85rem)' }}
              >
                {project.tech}
              </span>
              <span
                className="font-light leading-relaxed mt-1 max-w-xl"
                style={{ color: '#D7E2EA', opacity: 0.65, fontSize: 'clamp(0.7rem, 1.1vw, 0.95rem)' }}
              >
                {project.description}
              </span>
            </div>
          </div>

          {/* GitHub action button */}
          <button
            type="button"
            className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm transition-all duration-300 hover:bg-[#D7E2EA]/10 hover:shadow-[0_0_15px_rgba(215,226,234,0.3)]"
          >
            GitHub
          </button>
        </div>

        {/* Bottom row: two-column image grid with zoom on hover */}
        <div className="flex gap-3 sm:gap-4">
          {/* Left column (40% width) - 2 stacked images */}
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
            <div className="overflow-hidden rounded-[28px] sm:rounded-[36px] md:rounded-[40px] border border-white/10 group">
              <img
                src={project.col1img1}
                alt={`${project.name} preview 1`}
                loading="eager"
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
              />
            </div>
            <div className="overflow-hidden rounded-[28px] sm:rounded-[36px] md:rounded-[40px] border border-white/10 group">
              <img
                src={project.col1img2}
                alt={`${project.name} preview 2`}
                loading="eager"
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
              />
            </div>
          </div>

          {/* Right column (60% width) - 1 tall image */}
          <div style={{ width: '60%' }}>
            <div className="overflow-hidden rounded-[28px] sm:rounded-[36px] md:rounded-[40px] border border-white/10 h-full group">
              <img
                src={project.col2img}
                alt={`${project.name} preview 3`}
                loading="eager"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ minHeight: 'clamp(290px, 38vw, 580px)' }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="flex flex-col">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
