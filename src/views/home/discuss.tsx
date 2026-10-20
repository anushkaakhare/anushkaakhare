"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

export interface ProjectDiscussionProps {
  titleLine1?: string;
  titleLine2Prefix?: string;
  titleHighlight?: string;
  placeholder?: string;
  buttonText?: string;
}

const MARQUEE_SKILLS = [
  "Design",
  "App Design",
  "Dashboard",
  "Wireframe",
  "User Research",
  "UX Design",
  "Web Design",
  "Product Design",
  "Mobile Apps",
  "Design System",
];

// 4-point sparkle star separator matching reference image
function SparkleStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 1C12 7.07 16.93 12 23 12C16.93 12 12 16.93 12 23C12 16.93 7.07 12 1 12C7.07 12 12 7.07 12 1Z" />
    </svg>
  );
}

export default function ProjectDiscussionSection({
  titleLine1 = "Have an Awsome Project",
  titleLine2Prefix = "Idea? ",
  titleHighlight = "Let's Discuss",
  placeholder = "Enter Email Address",
  buttonText = "Send",
}: ProjectDiscussionProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  // Duplicate items for infinite seamless loop
  const tickerItems = [...MARQUEE_SKILLS, ...MARQUEE_SKILLS];

  return (
    <section
      id="contact"
      className="relative w-full bg-white pt-14 sm:pt-20 md:pt-28 pb-10 sm:pb-14 md:pb-16 overflow-hidden select-none scroll-mt-24"
    >
      {/* Anchor for backward compatibility with #discuss */}
      <span id="discuss" className="sr-only" />

      {/* Top CTA Content Container */}
      <div className="w-full custom-container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold text-[#1D2939] tracking-tight leading-[1.25]"
          >
            <span>{titleLine1}</span>
            <br />
            <span>{titleLine2Prefix}</span>
            <span className="text-[#FD853A]">{titleHighlight}</span>
          </motion.h2>

          {/* Form Pill Container */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.14 }}
            onSubmit={handleSubmit}
            className="w-full max-w-[680px] sm:max-w-[720px] mt-7 sm:mt-11"
          >
            <div className="relative w-full rounded-full border border-[#E4E7EC] bg-white p-1.5 sm:p-2 md:p-2.5 flex items-center shadow-sm hover:border-[#FD853A]/40 transition-colors">
              {/* Email Envelope Icon in Soft Orange Squircle */}
              <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full sm:rounded-[18px] bg-[#FFF2EB] flex items-center justify-center shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FD853A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5"
                >
                  <rect width="20" height="16" x="2" y="4" rx="3" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>

              {/* Email Input */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                required
                className="flex-1 min-w-0 bg-transparent px-2.5 sm:px-4 md:px-5 text-[#1D2939] placeholder:text-[#98A2B3] text-xs sm:text-sm md:text-base font-normal outline-none"
              />

              {/* Send Button */}
              <button
                type="submit"
                className="bg-[#FD853A] hover:bg-[#e67329] text-white font-medium text-xs sm:text-sm md:text-base px-5 sm:px-7 md:px-9 py-2.5 sm:py-3 md:py-3.5 rounded-full transition-all duration-200 active:scale-95 shrink-0 shadow-sm shadow-[#FD853A]/30 cursor-pointer"
              >
                {buttonText}
              </button>
            </div>

            {/* Submission feedback message */}
            {submitted && (
              <p className="mt-3 text-[#FD853A] text-xs sm:text-sm font-medium">
                Thank you! We received your message and will reach out shortly.
              </p>
            )}
          </motion.form>

          {/* Direct Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mt-6 sm:mt-7"
          >
            {/* Phone */}
            <Link
              href="tel:+919975693424"
              className="group inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#F2F4F7] hover:bg-[#FFF2EB] border border-[#E4E7EC] hover:border-[#FD853A]/40 text-[#344054] hover:text-[#FD853A] text-xs sm:text-sm font-medium transition-all shadow-sm active:scale-95"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#FD853A]"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 9975693424</span>
            </Link>

            {/* Email */}
            <Link
              href="mailto:anushkaakhare@gmail.com"
              className="group inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#F2F4F7] hover:bg-[#FFF2EB] border border-[#E4E7EC] hover:border-[#FD853A]/40 text-[#344054] hover:text-[#FD853A] text-xs sm:text-sm font-medium transition-all shadow-sm active:scale-95"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#FD853A]"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>anushkaakhare@gmail.com</span>
            </Link>
          </motion.div>

          {/* Social Proof / Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
            className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 md:gap-x-12 gap-y-3 mt-6 sm:mt-9 text-xs sm:text-[13.5px] text-[#344054] font-medium"
          >
            {/* Badge 1: 4.9/5 Average Ratings */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#1D2939] shrink-0"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>4.9/5 Average Ratings</span>
            </div>

            {/* Badge 2: 25+ Winning Awards */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#1D2939] shrink-0"
              >
                <path d="M12 2a6 6 0 0 0-6 6c0 2.22 1.2 4.16 3 5.2V22l3-2 3 2v-8.8c1.8-1.04 3-2.98 3-5.2a6 6 0 0 0-6-6zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
              </svg>
              <span>25+ Winning Awards</span>
            </div>

            {/* Badge 3: Certified Product Designer */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#1D2939] shrink-0"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.4 14.2l-3.8-3.8 1.4-1.4 2.4 2.4 5.9-5.9 1.4 1.4-7.3 7.3z" />
              </svg>
              <span>Certified Product Designer</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* Dynamic Marquee Ribbon: Straight Orange BG + Crossing Marquee */}
      {/* ======================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="relative w-full mt-14 sm:mt-20 md:mt-24 pt-6 pb-10 overflow-hidden select-none"
      >
        <style>{`
          @keyframes discussMarqueeScroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .discuss-marquee-track {
            display: flex !important;
            width: max-content !important;
            animation: discussMarqueeScroll 20s linear infinite !important;
            will-change: transform;
          }
          .discuss-marquee-track:hover {
            animation-play-state: paused !important;
          }
        `}</style>

        <div className="w-full">
          {/* Straight Orange Background Container with Rounded Corners */}
          <div className="relative w-full h-16 sm:h-20 md:h-28 bg-[#FD853A] rounded-[20px] sm:rounded-[28px] flex items-center justify-center">
            {/* White Marquee Ribbon crossing diagonally across the straight orange banner */}
            <div className="absolute -left-[5%] w-[110%] bg-white py-3 sm:py-3.5 md:py-4 -rotate-[2deg] sm:-rotate-[2.2deg] shadow-sm border-y border-[#F0F2F5] overflow-hidden">
              <div
                className="discuss-marquee-track flex items-center gap-6 sm:gap-8 md:gap-10"
                style={{
                  display: "flex",
                  width: "max-content",
                  animation: "discussMarqueeScroll 20s linear infinite",
                  willChange: "transform",
                }}
              >
                {tickerItems.map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className="flex items-center gap-6 sm:gap-8 md:gap-10 shrink-0"
                  >
                    <span className="text-[#171717] font-semibold text-base sm:text-lg md:text-xl lg:text-[22px] whitespace-nowrap tracking-tight">
                      {item}
                    </span>
                    <SparkleStar className="w-4 h-4 sm:w-5 sm:h-5 text-[#FD853A] shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
