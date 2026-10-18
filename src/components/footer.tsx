"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

export default function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  // Case study pages have their own self-contained minimalist layout (matching Luzia)
  if (pathname?.startsWith("/case-studies") || pathname?.startsWith("/case-study")) {
    return null;
  }

  return (
    <footer className="w-full bg-[#272727] text-white rounded-t-[32px] sm:rounded-t-[40px] mt-auto">
      <div className="w-full max-w-[1298px] mx-auto px-6 sm:px-10 lg:px-14 pt-12 sm:pt-16 pb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-10 sm:pb-14 border-b border-white/10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-white leading-tight"
          >
            Lets Connect there
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="self-start sm:self-auto shrink-0"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 h-[48px] sm:h-[52px] px-7 sm:px-8 rounded-full bg-[#fd853a] hover:bg-[#e67329] text-white font-medium text-[16px] sm:text-[17px] shadow-sm shadow-[#fd853a]/30 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <span>Hire me</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* MIDDLE SECTION: 4 Columns (Brand, Nav, Contact, Newsletter) */}
        {/* ========================================================= */}
        <div className="pt-10 sm:pt-12 pb-10 sm:pb-12 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            {/* Column 1: Brand Logo (matching Navbar), Description & Socials */}
            <div className="lg:col-span-5 flex flex-col">
              {/* Logo like navbar */}
              <Link
                href="#home"
                className="inline-flex items-center gap-2.5 sm:gap-3 group select-none"
                aria-label="Anushka Akhare Home"
              >
                <div className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full bg-[#fd853a] flex items-center justify-center shrink-0 shadow-sm shadow-[#fd853a]/30 transition-transform duration-200 group-hover:scale-105">
                  <span className="text-white text-[14px] sm:text-[15px] font-semibold tracking-tight">
                    AA
                  </span>
                </div>
                <div className="flex flex-col text-left leading-[1.08] tracking-[-0.015em]">
                  <span className="text-white text-[15px] sm:text-[17px] font-semibold group-hover:text-[#fd853a] transition-colors duration-200">
                    Anushka
                  </span>
                  <span className="text-white text-[15px] sm:text-[17px] font-semibold group-hover:text-[#fd853a] transition-colors duration-200">
                    Akhare
                  </span>
                </div>
              </Link>

              {/* Bio description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
                className="text-[#a0a5ad] text-sm sm:text-[15px] leading-relaxed max-w-sm mt-4 mb-6"
              >
                Passionate UI/UX designer dedicated to crafting delightful, human-centered digital experiences that drive measurable impact and solve complex product challenges.
              </motion.p>

              {/* Social Media Icons (Facebook, YouTube, WhatsApp, Instagram, Twitter) */}
              <div className="flex items-center gap-4 text-white">
                {/* Facebook */}
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-white hover:text-[#fd853a] transition-colors"
                  aria-label="Facebook"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>

                {/* YouTube */}
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-white hover:text-[#fd853a] transition-colors"
                  aria-label="YouTube"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Link>

                {/* WhatsApp */}
                <Link
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-white hover:text-[#fd853a] transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.181-.176.2-.352.226-.653.075s-1.272-.469-2.424-1.496c-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.527.15-.176.2-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.678-1.634-.929-2.237-.245-.588-.494-.508-.678-.518-.176-.01-.376-.01-.577-.01s-.527.075-.803.376c-.276.301-1.054 1.03-1.054 2.511s1.079 2.913 1.229 3.114c.15.2 2.124 3.243 5.146 4.549.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.087 1.78-.727 2.031-1.429.251-.702.251-1.303.176-1.429-.075-.126-.276-.201-.577-.352zM12 0C5.373 0 0 5.373 0 12c0 2.118.552 4.108 1.516 5.836L0 24l6.335-1.482C8.006 23.467 9.946 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                  </svg>
                </Link>

                {/* Instagram */}
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-white hover:text-[#fd853a] transition-colors"
                  aria-label="Instagram"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>

                {/* Twitter / X */}
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-white hover:text-[#fd853a] transition-colors"
                  aria-label="Twitter"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="lg:col-span-2 flex flex-col">
              <h3 className="text-[#fd853a] font-semibold text-[17px] mb-4 tracking-[-0.015em]">
                Navigation
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#home"
                    className="text-[#d0d5dd] hover:text-[#fd853a] transition-colors text-sm sm:text-[15px]"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-[#d0d5dd] hover:text-[#fd853a] transition-colors text-sm sm:text-[15px]"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#project"
                    className="text-[#d0d5dd] hover:text-[#fd853a] transition-colors text-sm sm:text-[15px]"
                  >
                    Project
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d0d5dd] hover:text-[#fd853a] transition-colors text-sm sm:text-[15px]"
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="text-[#d0d5dd] hover:text-[#fd853a] transition-colors text-sm sm:text-[15px]"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-[#d0d5dd] hover:text-[#fd853a] transition-colors text-sm sm:text-[15px]"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="lg:col-span-2 flex flex-col">
              <h3 className="text-[#fd853a] font-semibold text-[17px] mb-4 tracking-[-0.015em]">
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="tel:+917738443636"
                    className="text-[#d0d5dd] hover:text-white transition-colors text-sm sm:text-[15px]"
                  >
                    +91 7738443636
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:anushka.akhare@design.com"
                    className="text-[#d0d5dd] hover:text-white transition-colors text-sm sm:text-[15px] break-all"
                  >
                    anushka.akhare@design.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-[#d0d5dd] hover:text-white transition-colors text-sm sm:text-[15px] break-all"
                  >
                    anushka-portfolio.com
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter Subscription */}
            <div className="lg:col-span-3 flex flex-col">
              <h3 className="text-[#fd853a] font-semibold text-[17px] mb-4 tracking-[-0.015em]">
                Get the latest insights
              </h3>

              <form onSubmit={handleSubscribe} className="w-full max-w-[320px]">
                <div className="w-full h-[46px] sm:h-[48px] bg-white rounded-full flex items-center pl-4 pr-1.5 shadow-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    required
                    className="w-full bg-transparent text-[#171717] placeholder:text-[#888888] text-sm focus:outline-none pr-2 font-normal"
                  />
                  <button
                    type="submit"
                    aria-label="Submit email address"
                    className="w-[36px] h-[36px] sm:w-[38px] sm:h-[38px] rounded-full bg-[#fd853a] hover:bg-[#e67329] text-white flex items-center justify-center shrink-0 transition-transform active:scale-95 cursor-pointer shadow-sm shadow-[#fd853a]/30"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </button>
                </div>
                {subscribed && (
                  <p className="text-[#fd853a] text-xs mt-2 font-medium">
                    Thank you for subscribing!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM ROW: Copyright & Legal Policies                    */}
        {/* ========================================================= */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#a0a5ad]">
          <p>Copyright© 2026 Anushka Akhare. All Rights Reserved.</p>

          <div className="flex items-center gap-2 text-white/90">
            <Link
              href="#terms"
              className="hover:text-[#fd853a] transition-colors"
            >
              User Terms &amp; Conditions
            </Link>
            <span>|</span>
            <Link
              href="#privacy"
              className="hover:text-[#fd853a] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
