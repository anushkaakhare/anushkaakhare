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

  // Case study pages and blog pages have their own self-contained minimalist layout
  if (
    pathname?.startsWith("/case-studies") ||
    pathname?.startsWith("/case-study") ||
    pathname?.startsWith("/blog/")
  ) {
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

              {/* Social Media Icons (Instagram, WhatsApp, LinkedIn) */}
              <div className="flex items-center gap-3 text-white">
                {/* Instagram */}
                <Link
                  href="https://www.instagram.com/theanushkalab/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#fd853a] flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 shadow-sm"
                  aria-label="Instagram"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z" fill="white" />
                  </svg>

                </Link>

                {/* WhatsApp */}
                <Link
                  href="https://wa.me/919975693424"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#25D366] flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 shadow-sm"
                  aria-label="WhatsApp"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9803 11.4104C21.6403 5.61044 16.3703 1.14045 10.3003 2.14045C6.12029 2.83045 2.77029 6.22043 2.12029 10.4004C1.74029 12.8204 2.24031 15.1104 3.33031 17.0004L2.4403 20.3104C2.2403 21.0604 2.93028 21.7404 3.67028 21.5304L6.93029 20.6304C8.41029 21.5004 10.1403 22.0004 11.9903 22.0004C17.6303 22.0004 22.3103 17.0304 21.9803 11.4104ZM16.8803 15.7204C16.7903 15.9004 16.6803 16.0704 16.5403 16.2304C16.2903 16.5004 16.0203 16.7004 15.7203 16.8204C15.4203 16.9504 15.0903 17.0104 14.7403 17.0104C14.2303 17.0104 13.6803 16.8905 13.1103 16.6405C12.5303 16.3905 11.9603 16.0604 11.3903 15.6504C10.8103 15.2304 10.2703 14.7604 9.7503 14.2504C9.2303 13.7304 8.77027 13.1804 8.35027 12.6104C7.94027 12.0404 7.61029 11.4704 7.37029 10.9004C7.13029 10.3304 7.01031 9.78045 7.01031 9.26045C7.01031 8.92044 7.0703 8.59044 7.1903 8.29044C7.3103 7.98044 7.50032 7.70045 7.77032 7.45045C8.09032 7.13045 8.4403 6.98045 8.8103 6.98045C8.95029 6.98045 9.09027 7.01044 9.22027 7.07044C9.35027 7.13044 9.47029 7.22044 9.5603 7.35044L10.7203 8.99043C10.8103 9.12043 10.8803 9.23043 10.9203 9.34043C10.9703 9.45043 10.9903 9.55043 10.9903 9.65043C10.9903 9.77043 10.9503 9.89045 10.8803 10.0104C10.8103 10.1304 10.7203 10.2504 10.6003 10.3704L10.2203 10.7704C10.1603 10.8304 10.1403 10.8904 10.1403 10.9704C10.1403 11.0104 10.1503 11.0504 10.1603 11.0904C10.1803 11.1304 10.1903 11.1604 10.2003 11.1904C10.2903 11.3604 10.4503 11.5704 10.6703 11.8304C10.9003 12.0904 11.1403 12.3604 11.4003 12.6204C11.6703 12.8904 11.9303 13.1304 12.2003 13.3604C12.4603 13.5804 12.6803 13.7304 12.8503 13.8204C12.8803 13.8304 12.9103 13.8504 12.9403 13.8604C12.9803 13.8804 13.0203 13.8804 13.0703 13.8804C13.1603 13.8804 13.2203 13.8504 13.2803 13.7904L13.6603 13.4104C13.7903 13.2804 13.9103 13.1904 14.0203 13.1304C14.1403 13.0604 14.2503 13.0204 14.3803 13.0204C14.4803 13.0204 14.5803 13.0404 14.6903 13.0904C14.8003 13.1404 14.9203 13.2004 15.0403 13.2904L16.7003 14.4704C16.8303 14.5604 16.9203 14.6704 16.9803 14.7904C17.0303 14.9204 17.0603 15.0404 17.0603 15.1804C17.0003 15.3504 16.9603 15.5404 16.8803 15.7204Z" fill="white" />
                  </svg>

                </Link>

                {/* LinkedIn */}
                <Link
                  href="http://www.linkedin.com/in/anushka-akhare-9b9560220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#0A66C2] flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
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
                    href="tel:+919975693424"
                    className="group inline-flex items-center gap-2 text-[#d0d5dd] hover:text-[#fd853a] transition-colors text-sm sm:text-[15px]"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#fd853a] shrink-0"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>+91 9975693424</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:anushkaakhare@gmail.com"
                    className="group inline-flex items-center gap-2 text-[#d0d5dd] hover:text-[#fd853a] transition-colors text-sm sm:text-[15px] break-all"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#fd853a] shrink-0"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span>anushkaakhare@gmail.com</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://anushkaakhare.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-[#d0d5dd] hover:text-[#fd853a] transition-colors text-sm sm:text-[15px] break-all"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#fd853a] shrink-0"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" x2="22" y1="12" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    <span>anushkaakhare.vercel.app</span>
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
