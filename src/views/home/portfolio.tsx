"use client";

import React, { useRef, useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import PortfolioCard, { PortfolioCardProps } from "@/components/portfolio-card";
import FloatingBgObject from "@/components/floating-bg-object";
import { ArrowUpRightSvg } from "@/svg";

interface PortfolioSectionProps {
  cards?: PortfolioCardProps[];
}

const DEFAULT_PORTFOLIO_ITEMS: PortfolioCardProps[] = [
  {
    id: 1,
    title: "OGcollege",
    description: "Redesigning college guidance for Indian students — unifying AI counselling, data-driven choice filling, and 1:1 senior mentorship.",
    tags: ["EdTech", "Product Design", "UX Architecture"],
    image: "/demo-1.png",
    alt: "OGcollege: Redesigning College Guidance for Indian Students",
    link: "/case-studies/ogcollege",
  },
  {
    id: 2,
    title: "Apex Studio",
    description: "Thoughtful visual identity and digital craft for modern companies.",
    tags: ["Brand Identity", "Web Design"],
    image: "/demo-2.webp",
    alt: "Apex Studio Brand & Design",
    link: "/case-studies/apex-studio",
  },
  {
    id: 3,
    title: "Luminary",
    description: "Creative digital experiences designed with clarity, speed, and care.",
    tags: ["Mobile App", "UIUX Design"],
    image: "/demo-3.webp",
    alt: "Luminary UIUX Design",
    link: "/case-studies/luminary",
  },
  {
    id: 4,
    title: "Vanguard",
    description: "Interactive editorial platform with bespoke micro-interactions.",
    tags: ["Framer Website", "Product Design"],
    image: "/demo-4.webp",
    alt: "Vanguard Framer Website",
    link: "/case-studies/vanguard",
  },
];

export default function PortfolioSection({ cards = DEFAULT_PORTFOLIO_ITEMS }: PortfolioSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ clientX: number; clientY: number } | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setMousePos({
      clientX: e.clientX,
      clientY: e.clientY,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos(null);
  }, []);

  return (
    <section
      id="project"
      className="relative w-full custom-container mx-auto overflow-x-clip pb-14 sm:pb-20 md:pb-28 scroll-mt-24"
    >
      {/* Fallback anchor for #portfolio */}
      <span id="portfolio" className="sr-only" />

      {/* Main Container with Background Image & Rounded Styling */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full rounded-[28px] sm:rounded-[36px] md:rounded-[44px] lg:rounded-[48px] overflow-hidden bg-[#121214]"
      >
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/second_sectoon_bg.jpg')",
          }}
        >
          {/* Subtle Darkening Overlay for Contrast & Readability */}
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />
        </div>

        {/* 3D Floating "ob" Objects (Slowly animate and move on hover/mouse proximity) */}
        {/* Top-Right Object */}
        <FloatingBgObject
          src="/ob1.png"
          alt="Decorative background object"
          baseRotation={15}
          className="-top-12 -right-8 sm:-top-16 sm:-right-12 md:-top-20 md:-right-14 w-36 h-36 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72"
          sizes="(max-width: 640px) 150px, (max-width: 1024px) 250px, 320px"
          mousePos={mousePos}
          animationClass="animate-float-slow-1"
        />

        {/* Top-Center Object (peeking from gap between hero and section) */}
        <FloatingBgObject
          src="/ob2.png"
          alt="Decorative background object"
          baseRotation={180}
          className="-top-12 sm:-top-16 md:-top-20 left-1/2 -translate-x-1/2 w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48"
          sizes="(max-width: 640px) 120px, 200px"
          mousePos={mousePos}
          animationClass="animate-float-slow-2"
          opacity="opacity-90"
        />

        {/* Middle-Right Object */}
        <FloatingBgObject
          src="/ob3.png"
          alt="Decorative background object"
          baseRotation={85}
          className="top-[48%] -right-10 sm:-right-14 md:-right-18 -translate-y-1/2 w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56"
          sizes="(max-width: 640px) 140px, 240px"
          mousePos={mousePos}
          animationClass="animate-float-slow-3"
        />

        {/* Middle-Left Object */}
        <FloatingBgObject
          src="/ob4.png"
          alt="Decorative background object"
          baseRotation={-60}
          className="top-[38%] -left-10 sm:-left-14 md:-left-18 -translate-y-1/2 w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56"
          sizes="(max-width: 640px) 140px, 240px"
          mousePos={mousePos}
          animationClass="animate-float-slow-1"
        />

        {/* Bottom-Left Object */}
        <FloatingBgObject
          src="/ob1.png"
          alt="Decorative background object"
          baseRotation={45}
          className="-bottom-10 -left-10 sm:-bottom-14 sm:-left-14 w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52"
          sizes="(max-width: 640px) 140px, 220px"
          mousePos={mousePos}
          animationClass="animate-float-slow-2"
          opacity="opacity-85"
        />

        {/* Content Wrapper */}
        <div className="relative z-20 px-5 py-8 sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-16 lg:py-18 pointer-events-none">
          {/* Section Header: Title & Description */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 md:gap-10 pb-8 sm:pb-10 md:pb-12 pointer-events-auto">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-[44px] lg:text-[50px] font-semibold text-white tracking-tight leading-[115%] shrink-0"
            >
              <span>Selected </span>
              <span className="text-[#FD853A]">Work</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
              className="text-xs sm:text-sm md:text-[15px] text-[#D0D5DD] max-w-sm sm:max-w-md lg:max-w-[420px] leading-relaxed font-normal sm:text-right md:text-left"
            >
              A quick look at recent projects where I helped solve real product problems through research, wireframing, and visual design.
            </motion.p>
          </div>

          {/* Cards Grid: 1 col on mobile, 2 cols on tablet/desktop */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-7 lg:gap-9 justify-items-center w-full pointer-events-auto"
          >
            {cards.map((card, index) => (
              <PortfolioCard
                key={card.id ?? index}
                {...card}
              />
            ))}
          </motion.div>

          {/* Bottom CTA Button: "View More Work" */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
            className="mt-8 sm:mt-11 md:mt-14 flex justify-center pointer-events-auto"
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#FD853A] hover:bg-[#ea6f24] text-white font-medium text-sm sm:text-base shadow-[0_10px_25px_-5px_rgba(253,133,58,0.45)] hover:shadow-[0_15px_30px_-5px_rgba(253,133,58,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 group select-none cursor-pointer"
            >
              <span>View More Work</span>
              <ArrowUpRightSvg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
