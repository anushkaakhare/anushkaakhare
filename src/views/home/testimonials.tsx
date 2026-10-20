"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { QuoteSvg, StarSvg } from "@/svg";

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number; // 4.0 or 4.5 as requested by user
  review: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "Yashworld Products PVT LTD",
    role: "Team collaboration · Product design",
    company: "",
    avatar: "/avatars/avatar-1.jpg",
    rating: 5.0,
    review:
      "Anushka brings creativity and thoughtfulness to her design work. She’s good at turning complex requirements into clear, user-friendly interfaces and works well with the team to bring ideas to life.",
  },
  {
    id: 2,
    name: "Neexly",
    role: "Website Design · Layout & Navigation",
    company: "",
    avatar: "/avatars/avatar-2.jpg",
    rating: 4.5,
    review:
      "Anushka has a good eye for clean, modern design. She approaches website projects with care and focuses on making layouts clear, responsive, and easy to navigate.",
  },
  {
    id: 3,
    name: "Aanatech Software",
    role: "Web & App Interfaces · Usability",
    company: "",
    avatar: "/avatars/avatar-3.jpg",
    rating: 4.5,
    review:
      "Anushka showed a genuine interest in learning and improving her design skills. She worked thoughtfully on website and application interfaces and paid attention to usability and visual details.",
  },
  {
    id: 4,
    name: "Windesign",
    role: "App Redesign · UI Systems",
    company: "",
    avatar: "/avatars/avatar-4.jpg",
    rating: 4.5,
    review:
      "Anushka approached the app redesign with a focus on usability and consistency. Her work on user flows and reusable UI components helped create a more structured design experience.",
  },
  {
    id: 5,
    name: "BagPack Studio",
    role: "Cluely AI Launch Film · UI Design",
    company: "",
    avatar: "/avatars/avatar-5.jpg",
    rating: 5.0,
    review:
      "Anushka did a great job designing the UI interfaces for our Cluely AI launch film. She understood the visual direction well and created clean, futuristic interfaces that fit seamlessly into the video. It was a pleasure collaborating with her on this project.",
  },
];

// Helper component for Star Rating (supporting full, half, and empty stars)
function RatingStars({ rating }: { rating: number }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      // Full star
      stars.push(
        <StarSvg
          key={i}
          className="w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0"
          fill="#FD853A"
        />
      );
    } else if (rating >= i - 0.5) {
      // Half star: orange filled star clipped at 50% overlaid on muted star
      stars.push(
        <div
          key={i}
          className="relative w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0"
        >
          <StarSvg
            className="w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0"
            fill="rgba(255, 255, 255, 0.2)"
          />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <StarSvg
              className="w-4 h-4 sm:w-[18px] sm:h-[18px] min-w-[16px] sm:min-w-[18px] shrink-0"
              fill="#FD853A"
            />
          </div>
        </div>
      );
    } else {
      // Empty star
      stars.push(
        <StarSvg
          key={i}
          className="w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0"
          fill="rgba(255, 255, 255, 0.2)"
        />
      );
    }
  }

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-1">{stars}</div>
      <span className="text-white font-semibold text-xs sm:text-sm ml-1">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

// Hand-drawn doodle star matching reference image
function HandDrawnStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2.5L14.7 8.3L21 9.2L16.4 13.7L17.5 20L12 16.9L6.5 20L7.6 13.7L3 9.2L9.3 8.3L12 2.5Z" />
    </svg>
  );
}

export default function TestimonialsSection() {
  // Duplicate list for infinite seamless marquee loop
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      id="testimonials"
      className="relative w-full custom-container mx-auto pb-14 sm:pb-20 md:pb-28 overflow-x-clip scroll-mt-24"
    >
      {/* Dark Silky Textured Container matching reference */}
      <div className="relative w-full rounded-[28px] sm:rounded-[36px] md:rounded-[44px] lg:rounded-[48px] overflow-hidden bg-[#101012] pt-14 pb-16 sm:pt-20 sm:pb-24 md:pt-24 md:pb-28">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/second_sectoon_bg.jpg')",
          }}
        >
          {/* Subtle Darkening Overlay for Perfect Contrast */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>

        {/* Section Content */}
        <div className="relative z-10 w-full flex flex-col items-center">
          {/* Header Area */}
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            {/* Hand-drawn Star Doodle (Right of Title) */}
            <HandDrawnStar className="absolute -top-2 sm:top-1 right-2 sm:right-6 md:-right-6 w-5 h-5 sm:w-6 sm:h-6 text-white/80 rotate-12 pointer-events-none" />

            {/* Hand-drawn Star Doodle (Bottom-Left of Description) */}
            <HandDrawnStar className="absolute -bottom-6 sm:-bottom-8 left-2 sm:left-6 md:-left-4 w-4 h-4 sm:w-5 sm:h-5 text-white/70 -rotate-12 pointer-events-none" />

            {/* Title with Hand-drawn Radiance Arcs over "That" */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-semibold text-white tracking-tight leading-[1.25]"
            >
              <span className="relative inline-block">
                Testimonials That
                {/* Two Hand-drawn Arcs over "That" */}
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  className="absolute -top-4 -right-6 sm:-top-5 sm:-right-8 w-6 h-6 sm:w-7 sm:h-7 text-white pointer-events-none"
                >
                  <path
                    d="M6 22C8.5 15 13 9 19 4"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15 24C17.5 18 22 12 28 8"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              <span>Speak to </span>
              <span className="text-[#FD853A]">My Results</span>
            </motion.h2>

            {/* Subtitle Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
              className="mt-4 sm:mt-5 max-w-xl mx-auto text-white/70 text-sm xs:text-[15px] sm:text-base md:text-[17px] leading-[1.65] font-normal"
            >
              Hear directly from founders, product leaders, and design partners about how thoughtful UX architecture and clean interface craft transformed their digital products.
            </motion.p>
          </div>

          {/* Marquee Carousel Container */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-full mt-10 sm:mt-14 md:mt-16 overflow-hidden"
          >
            {/* Left Gradient Edge Mask for Smooth Glide Fade */}
            <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-[#101012] via-[#101012]/60 to-transparent z-20 pointer-events-none" />

            {/* Right Gradient Edge Mask for Smooth Glide Fade */}
            <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-[#101012] via-[#101012]/60 to-transparent z-20 pointer-events-none" />

            {/* Marquee Animated Track */}
            <div className="animate-marquee gap-5 sm:gap-6 md:gap-7 px-4">
              {marqueeItems.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="w-[300px] sm:w-[380px] md:w-[420px] lg:w-[450px] shrink-0 rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 md:p-8 bg-white/[0.06] backdrop-blur-md border border-white/[0.12] hover:border-white/25 transition-all duration-300 flex flex-col justify-between select-none shadow-2xl"
                >
                  <div>
                    {/* Header: Avatar, Name/Role & Large Quote Icon */}
                    <div className="flex items-center justify-between gap-4">
                      {/* Avatar and Name */}
                      <div className="flex items-center gap-3.5">
                        <div className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full overflow-hidden border border-white/20 shrink-0 bg-[#222]">
                          <Image
                            src={item.avatar}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="52px"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-white font-semibold text-base sm:text-[17px] tracking-tight leading-tight">
                            {item.name}
                          </h3>
                          <p className="text-white/60 font-medium text-xs sm:text-sm mt-0.5">
                            {[item.role, item.company].filter(Boolean).join(", ")}
                          </p>
                        </div>
                      </div>

                      {/* Large Quotation Mark SVG */}
                      <div className="text-white/15 shrink-0">
                        <QuoteSvg className="w-11 h-11 sm:w-13 sm:h-13" />
                      </div>
                    </div>

                    {/* Star Rating Row */}
                    <div className="mt-4 sm:mt-5">
                      <RatingStars rating={item.rating} />
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="mt-4 sm:mt-5 text-white/75 font-normal text-xs sm:text-[13.5px] leading-relaxed">
                    {item.review}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
