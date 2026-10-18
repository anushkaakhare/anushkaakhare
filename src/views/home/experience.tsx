"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

export interface ExperienceItem {
  id: number;
  company: string;
  period: string;
  role: string;
  description: string;
  dotColor: "orange" | "dark";
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 1,
    company: "Aanatech",
    period: "29 Aug 2024 - 30 Dec 2024",
    role: "Intern UI/UX Designer",
    description:
      "Designed responsive landing pages for Aanatech and Musemate.\nRedesigned the Pureblue AI website with improved visual hierarchy and interface structure.\nDesigned Slotify, a desktop slot-booking application focused on simplifying the booking experience.\nCreated user flows, wireframes, and high-fidelity interfaces based on project requirements",
    dotColor: "orange",
  },
  {
    id: 2,
    company: "Windesign",
    period: "19 Aug 2024 - 30 Nov 2024",
    role: "Contract UI/UX Designer",
    description:
      "Redesigned the Oazo app with improved user flows, interface usability, and visual consistency.\nCreated an end-to-end UI kit with reusable components and design patterns.",
    dotColor: "dark",
  },
  {
    id: 3,
    company: "Neexly",
    period: "02 Jan 2025 - 28 March 2025",
    role: "Contract UI/UX Designer",
    description:
      "Designed responsive websites for Neexly and Flip Studio, focusing on information hierarchy, navigation, responsive layouts, and user-friendly experiences.",
    dotColor: "orange",
  },
  {
    id: 4,
    company: "Yashworld Products PVT LTD",
    period: "21 Apr 2025 - Present",
    role: "Full Time UI/UX Designer",
    description:
      "Designed responsive websites and digital products across desktop and mobile, from user flows and wireframes to high-fidelity UI.\nDesigned the Monkis e-commerce website and dashboard, covering product, customer, and admin experiences.\nDesigned the HiveStaff mobile app UI, website, and supporting product experiences.\nDesigned the HiveMeet dashboard and end-to-end user flows, simplifying complex workflows.\nDesigned HiveProperty, a property-listing platform with information architecture, responsive UI, and property discovery.\nDesigned HiveLand and other company/client websites with responsive layouts, clear navigation, and content hierarchy.\nDesigned an end-to-end inventory management dashboard, structuring complex data and workflows.\nCreated user flows and contributed to UX research and usability evaluation based on project requirements.\nCollaborated with developers on Figma designs, interactions, responsive behavior, and implementation",
    dotColor: "dark",
  },
];

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="resume"
      className="relative w-full py-20 sm:py-24 md:py-32 bg-white overflow-hidden select-none scroll-mt-24"
    >
      {/* Anchor for nav menu #experience and #resume */}
      <span id="experience" className="sr-only" />

      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 sm:mb-20 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-[54px] lg:text-[60px] font-semibold text-[#171717] tracking-tight leading-[1.12]">
            <span>My </span>
            <span className="text-[#FD853A]">Work</span>
            <br />
            <span className="text-[#FD853A]">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* DESKTOP & TABLET LAYOUT (>= 768px): Centered 3-Column Timeline */}
          <div className="hidden md:block relative w-full">
            {/* Center Dashed Vertical Connecting Line */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0 border-r-2 border-dashed border-[#171717] transition-all duration-1000 ease-out origin-top ${
                isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
              }`}
            />

            {/* Timeline Items List */}
            <div className="flex flex-col space-y-16 lg:space-y-20">
              {EXPERIENCES.map((item, index) => {
                const isHovered = hoveredId === item.id;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.75,
                      ease: [0.16, 1, 0.3, 1],
                      delay: index * 0.15,
                    }}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="relative grid grid-cols-[1fr_80px_1fr] items-start group cursor-pointer"
                  >
                    {/* Left Column: Company & Date */}
                    <div className="text-left pr-4 lg:pr-8 pt-0.5">
                      <h3
                        className={`text-2xl lg:text-[32px] font-semibold tracking-tight transition-transform duration-300 ease-out ${
                          isHovered
                            ? "text-[#FD853A] translate-x-1"
                            : "text-[#171717]"
                        }`}
                      >
                        {item.company}
                      </h3>
                      <p className="text-sm lg:text-[15px] text-[#98A2B3] font-normal mt-1 tracking-normal">
                        {item.period}
                      </p>
                    </div>

                    {/* Center Column: Dashed Circular Node */}
                    <div className="relative flex justify-center items-center z-10">
                      <div
                        className={`w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-dashed bg-white flex items-center justify-center transition-all duration-400 ease-out ${
                          isHovered
                            ? "border-[#FD853A] scale-125 shadow-[0_0_20px_rgba(253,133,58,0.45)]"
                            : "border-[#171717] scale-100 shadow-sm"
                        }`}
                      >
                        {/* Inner Solid Dot */}
                        <div
                          className={`w-4 h-4 lg:w-5 lg:h-5 rounded-full transition-transform duration-300 ${
                            item.dotColor === "orange"
                              ? "bg-[#FD853A]"
                              : "bg-[#1D2939]"
                          } ${isHovered ? "scale-110" : "scale-100"}`}
                        />
                      </div>
                    </div>

                    {/* Right Column: Role Title & Description */}
                    <div className="text-left pl-4 lg:pl-8 pt-0.5">
                      <h4
                        className={`text-2xl lg:text-[32px] font-semibold tracking-tight transition-colors duration-300 ease-out ${
                          isHovered ? "text-[#FD853A]" : "text-[#171717]"
                        }`}
                      >
                        {item.role}
                      </h4>
                      {item.description.includes("\n") ? (
                        <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs sm:text-sm lg:text-[15px] text-[#98A2B3] font-normal leading-relaxed mt-2.5 max-w-lg transition-colors duration-300">
                          {item.description.split("\n").map((line, idx) => (
                            <li key={idx}>{line.trim()}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-xs sm:text-sm lg:text-[15px] text-[#98A2B3] font-normal leading-relaxed mt-2 max-w-lg transition-colors duration-300">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* MOBILE LAYOUT (< 768px): Vertical Left-Aligned Timeline */}
          <div className="md:hidden relative w-full pl-10 pr-2">
            {/* Left Dashed Vertical Line */}
            <div
              className={`absolute left-4 top-4 bottom-4 w-0 border-r-2 border-dashed border-[#171717] transition-all duration-1000 ease-out origin-top ${
                isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
              }`}
            />

            {/* Mobile Timeline Items */}
            <div className="flex flex-col space-y-12">
              {EXPERIENCES.map((item, index) => {
                const isHovered = hoveredId === item.id;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                      delay: index * 0.12,
                    }}
                    onClick={() => setHoveredId(item.id)}
                    className="relative flex flex-col group cursor-pointer"
                  >
                    {/* Dashed Circular Node positioned on the left line */}
                    <div className="absolute -left-10 top-0.5 z-10 flex items-center justify-center">
                      <div
                        className={`w-8 h-8 rounded-full border-2 border-dashed bg-white flex items-center justify-center transition-all duration-300 ${
                          isHovered
                            ? "border-[#FD853A] scale-115 shadow-[0_0_15px_rgba(253,133,58,0.45)]"
                            : "border-[#171717] scale-100"
                        }`}
                      >
                        <div
                          className={`w-3.5 h-3.5 rounded-full ${
                            item.dotColor === "orange"
                              ? "bg-[#FD853A]"
                              : "bg-[#1D2939]"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Company and Date */}
                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <h3
                        className={`text-xl font-semibold tracking-tight transition-colors duration-200 ${
                          isHovered ? "text-[#FD853A]" : "text-[#171717]"
                        }`}
                      >
                        {item.company}
                      </h3>
                      <span className="text-xs text-[#98A2B3] font-normal">
                        ({item.period})
                      </span>
                    </div>

                    {/* Role Title */}
                    <h4
                      className={`text-lg font-semibold tracking-tight transition-colors duration-200 ${
                        isHovered ? "text-[#FD853A]" : "text-[#171717]"
                      }`}
                    >
                      {item.role}
                    </h4>

                    {/* Description */}
                    {item.description.includes("\n") ? (
                      <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs sm:text-sm text-[#98A2B3] font-normal leading-relaxed mt-1.5">
                        {item.description.split("\n").map((line, idx) => (
                          <li key={idx}>{line.trim()}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs sm:text-sm text-[#98A2B3] font-normal leading-relaxed mt-1.5">
                        {item.description}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
