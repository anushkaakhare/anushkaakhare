"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  HelloBurstSvg,
  HeadingAccentSvg,
  QuoteSvg,
  StarSvg,
  ArrowUpRightSvg,
} from "@/svg";

export default function Hero() {
  const [activeBtn, setActiveBtn] = useState<"portfolio" | "hireme">("portfolio");
  const [hoveredBtn, setHoveredBtn] = useState<"portfolio" | "hireme" | null>(null);
  const currentTab = hoveredBtn ?? activeBtn;
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    const updateHeroScroll = () => {
      if (!heroContentRef.current) return;
      const maxScroll = Math.max(350, window.innerHeight * 0.7);
      const scrollY = window.scrollY;
      const progress = Math.min(1, Math.max(0, scrollY / maxScroll));

      const scale = 1 - progress * 0.14;
      const opacity = Math.max(0, 1 - progress * 1.35);
      const blur = progress * 3;
      const translateY =
        scrollY <= maxScroll
          ? progress * 24
          : 24 - (scrollY - maxScroll);

      heroContentRef.current.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
      heroContentRef.current.style.opacity = `${opacity}`;
      heroContentRef.current.style.filter = `blur(${blur}px)`;
      heroContentRef.current.style.visibility = progress >= 0.75 ? "hidden" : "visible";
      heroContentRef.current.style.pointerEvents = progress >= 0.75 ? "none" : "auto";
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateHeroScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateHeroScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="home"
      className="hero-section relative w-full custom-container mx-auto min-h-[calc(100dvh-80px)] lg:min-h-[calc(100vh-84px)] 2xl:max-w-[1600px] pt-2 sm:pt-4 md:pt-5 lg:pt-4 pb-2 sm:pb-3 overflow-x-clip flex flex-col justify-between items-center scroll-mt-24"
    >
      {/* Receding and Fading Hero Content Wrapper */}
      <div
        ref={heroContentRef}
        className="w-full flex-1 flex flex-col justify-between items-center will-change-transform"
        style={{
          transformOrigin: "center 38%",
        }}
      >
        <div className="relative w-full flex flex-col items-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="relative inline-flex flex-col items-center mb-1.5 sm:mb-3 lg:mb-2 xl:mb-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.3, rotate: -25 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="absolute -top-4 -right-1 sm:-top-6 sm:-right-6 pointer-events-none"
            >
              <HelloBurstSvg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </motion.div>

            <div className="px-5 py-1.5 sm:px-6 sm:py-2 rounded-full border border-[#171717] bg-white text-[#171717] font-['Lufga',var(--font-urbanist),sans-serif] font-medium text-[16px] sm:text-[20px] leading-[100%] tracking-[-0.015em] shadow-xs">
              Hello!
            </div>
          </motion.div>

          <div className="relative text-center max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.38 }}
              className="absolute -left-3 xs:-left-5 sm:-left-8 md:-left-12 lg:-left-9 -bottom-1 md:-bottom-2 lg:-bottom-6 pointer-events-none"
            >
              <HeadingAccentSvg className="w-6 h-8 xs:w-8 xs:h-10 sm:w-11 sm:h-13 md:w-[56px] md:h-[66px] lg:w-[64px] lg:h-[75px] xl:w-[74px] xl:h-[85px]" />
            </motion.div>

            <h1 className="hero-title font-semibold text-center text-3xl xs:text-4xl sm:text-5xl md:text-[54px] lg:text-[58px] xl:text-[76px] 2xl:text-[92px] leading-[108%] sm:leading-[102%] tracking-[-0.015em] text-[#171717]">
              <span className="block overflow-hidden pb-0.5 sm:pb-1">
                <motion.span
                  initial={{ opacity: 0, y: "115%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
                  className="inline-block"
                >
                  <span>I’m </span>
                  <span className="text-[#FD853A]">Anushka</span>
                  <span>,</span>
                </motion.span>
              </span>
              <span className="block overflow-hidden pt-0.5 sm:pt-1 pb-0.5 sm:pb-1">
                <motion.span
                  initial={{ opacity: 0, y: "115%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
                  className="inline-block"
                >
                  UIUX Designer
                </motion.span>
              </span>
            </h1>
          </div>
        </div>

        {/* Hero Visual Area: Left Testimonial + Center Arch & Cutout + Right Experience */}
        <div className="relative w-full mt-2 sm:mt-4 md:mt-auto flex flex-col items-center justify-end">
          {/* TABLET & DESKTOP Left Feature: Testimonial Quote */}
          <div className="hero-quote-box hidden md:block absolute left-2 sm:left-4 lg:left-6 xl:left-8 top-[50%] -translate-y-1/2 max-w-[160px] lg:max-w-[200px] xl:max-w-[260px] 2xl:max-w-[320px] text-left z-20">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.46 }}
            >
              {/* Quote SVG */}
              <div className="mb-1.5 lg:mb-2 xl:mb-2.5">
                <QuoteSvg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-9 xl:h-9" />
              </div>
              {/* Quote Text */}
              <p className="hero-quote-text text-[#344054] font-normal text-xs lg:text-[14px] xl:text-[17px] 2xl:text-[20px] leading-[125%] lg:leading-[120%] tracking-[-0.015em]">
                Good design isn't just about making things look pretty it’s about making complex tools feel simple and natural to use.
              </p>
            </motion.div>
          </div>

          {/* TABLET & DESKTOP Right Feature: Rating & Experience */}
          <div className="hero-stat-box hidden md:block absolute right-2 sm:right-4 lg:right-6 xl:right-8 top-[46%] -translate-y-1/2 max-w-[150px] lg:max-w-[180px] xl:max-w-[220px] 2xl:max-w-[240px] text-left z-20">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            >
              {/* 5 Stars with Figma Star SVG */}
              <div className="flex items-center gap-1 lg:gap-1.5 mb-1 lg:mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <StarSvg key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5 xl:w-6 xl:h-6" />
                ))}
              </div>
              {/* 2 Years */}
              <h2 className="hero-stat-heading text-2xl lg:text-[32px] xl:text-[40px] 2xl:text-[47px] font-semibold text-[#171717] tracking-[-0.015em] leading-[100%] mt-0.5 lg:mt-1">
                2 Years
              </h2>
              {/* Experience subtitle */}
              <p className="text-[#374151] text-xs lg:text-[13px] xl:text-base font-normal mt-0.5">
                Experience
              </p>
            </motion.div>
          </div>

          {/* Center Visual: Semicircular Arch + Overlaid Cutout + Glassmorphism Pill */}
          <div className="hero-visual-area relative w-full flex justify-center items-end pt-2 sm:pt-4 md:pt-4 lg:pt-5 xl:pt-8">
            {/* The Arch Background */}
            <motion.div
              initial={{ opacity: 0, y: 65 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className=" shrink-0 relative w-[290px] sm:w-[350px] md:w-[390px] lg:w-[400px] xl:w-[390px] 2xl:w-[420px] h-[200px] sm:h-[240px] md:h-[225px] lg:h-[245px] xl:h-[270px] 2xl:h-[300px] bg-[#feb273] rounded-t-full flex items-end justify-center"
            >
              {/* Anushka Portrait: Clean Single Motion Container with Explicit Responsive Dimensions */}
              <motion.div
                initial={{ opacity: 0, y: 45, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-10 w-[220px] h-[280px] sm:w-[270px] sm:h-[320px] md:w-[300px] md:h-[360px] lg:w-[320px] lg:h-[380px] xl:w-[380px] xl:h-[390px] 2xl:w-[500px] 2xl:h-[480px]"
              >
                <Image
                  src="/anushka-hero.png"
                  alt="Anushka Akhare - UIUX Designer"
                  width={1090}
                  height={1596}
                  priority
                  className="w-full h-full object-contain object-bottom select-none pointer-events-none"
                />
              </motion.div>

              {/* Floating Glassmorphism Pill (Sliding Orange Pill & Dynamic Arrow Animation) */}
              <div className="absolute bottom-2.5 sm:bottom-3 md:bottom-4 lg:bottom-5 left-1/2 -translate-x-1/2 z-20 w-max max-w-[92%]">
                <motion.div
                  initial={{ opacity: 0, y: 28, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                  className="relative grid grid-cols-2 p-1.5 sm:p-2 rounded-full bg-white/20 hover:bg-white/25 backdrop-blur-md border border-white/40 hover:border-white/60 shadow-xl hover:shadow-2xl w-[240px] sm:w-[270px] md:w-[290px] lg:w-[300px] xl:w-[320px] transition-all duration-300"
                  onMouseLeave={() => setHoveredBtn(null)}
                >
                  {/* Sliding Orange Background Pill */}
                  <div
                    className={`absolute top-1.5 bottom-1.5 sm:top-2 sm:bottom-2 left-1.5 sm:left-2 w-[calc(50%-6px)] sm:w-[calc(50%-8px)] rounded-full bg-[#FD853A] shadow-md transition-transform duration-300 ease-out pointer-events-none ${currentTab === "hireme"
                      ? "translate-x-full"
                      : "translate-x-0"
                      }`}
                  />

                  {/* Portfolio Button */}
                  <Link
                    href="#project"
                    onClick={() => setActiveBtn("portfolio")}
                    onMouseEnter={() => setHoveredBtn("portfolio")}
                    className="relative z-10 flex items-center justify-center py-2.5 sm:py-3 rounded-full font-medium text-xs sm:text-sm md:text-base text-white transition-all duration-300 select-none active:scale-95 cursor-pointer"
                  >
                    <span className="transition-transform duration-300">Portfolio</span>
                    <span
                      className={`inline-flex items-center overflow-hidden transition-all duration-300 ease-out ${currentTab === "portfolio"
                        ? "max-w-[24px] opacity-100 ml-1.5 sm:ml-2 scale-100"
                        : "max-w-0 opacity-0 ml-0 scale-75"
                        }`}
                    >
                      <ArrowUpRightSvg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5" />
                    </span>
                  </Link>

                  {/* Hire Me Button */}
                  <Link
                    href="#contact"
                    onClick={() => setActiveBtn("hireme")}
                    onMouseEnter={() => setHoveredBtn("hireme")}
                    className="relative z-10 flex items-center justify-center py-2.5 sm:py-3 rounded-full font-medium text-xs sm:text-sm md:text-base text-white transition-all duration-300 select-none active:scale-95 cursor-pointer"
                  >
                    <span className="transition-transform duration-300">Hire me</span>
                    <span
                      className={`inline-flex items-center overflow-hidden transition-all duration-300 ease-out ${currentTab === "hireme"
                        ? "max-w-[24px] opacity-100 ml-1.5 sm:ml-2 scale-100"
                        : "max-w-0 opacity-0 ml-0 scale-75"
                        }`}
                    >
                      <ArrowUpRightSvg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5" />
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* MOBILE ONLY Features: Displayed beneath the arch (< 768px) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.48 }}
            className="md:hidden w-full max-w-[600px] flex flex-row items-start justify-between gap-4 px-2 pt-5 pb-6"
          >
            {/* Left Testimonial */}
            <div className="flex-1 flex flex-col items-start text-left">
              <div className="mb-1.5">
                <QuoteSvg className="w-6 h-6" />
              </div>
              <p className="text-[#344054] font-normal text-xs sm:text-sm leading-snug tracking-[-0.015em]">
                Good design isn't just about making things look pretty it’s about making complex tools feel simple and natural to use.
              </p>
            </div>

            {/* Right Rating & Experience */}
            <div className="flex-1 flex flex-col items-start text-left pl-3">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <StarSvg key={i} className="w-4 h-4" />
                ))}
              </div>
              <h2 className="text-2xl font-semibold text-[#171717] tracking-[-0.015em] leading-[100%] mt-0.5">
                2 Years
              </h2>
              <p className="text-[#374151] text-xs font-normal mt-0.5">
                Experience
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
