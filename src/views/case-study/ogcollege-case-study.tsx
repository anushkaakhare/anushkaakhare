"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import MoreWorks from "@/components/more-works";

export default function OGcollegeCaseStudy() {
  return (
    <article className="w-full min-h-screen bg-[#453668] relative overflow-x-clip pb-24">
      {/* Soft Ambient Background Atmosphere (Matching Luzia Framer dreamy glow) */}
      <div className="absolute top-0 left-0 right-0 h-[640px] sm:h-[720px] md:h-[800px] overflow-hidden pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 filter blur-[70px] opacity-65"
          style={{ backgroundImage: "url('/OGcollege.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d224b]/55 via-[#3b2d60]/70 to-[#453668]" />
      </div>

      {/* Hero Container */}
      <div className="relative w-full">

        {/* ========================================================= */}
        {/* TOP HERO VISUAL (Exact Luzia Framer Pulma Window Mockup)  */}
        {/* Floating with generous padding & rounded browser frame    */}
        {/* ========================================================= */}
        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-6 sm:pt-10 md:pt-14 pb-0">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] max-h-[520px] sm:max-h-[640px] md:max-h-[740px] rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.35),0_12px_32px_rgba(0,0,0,0.2)] border border-white/25 bg-[#EDE9FE]">
            <Image
              src="/OGcollege.png"
              alt="OGcollege Case Study Hero"
              fill
              priority
              sizes="(max-width: 1360px) 100vw, 1360px"
              className="object-cover object-center select-none pointer-events-none"
            />
          </div>
        </div>

        {/* ========================================================= */}
        {/* OVERLAPPING WHITE SHEET MODAL (Exact Luzia Framer Sheet)  */}
        {/* Overlaps just the bottom portion beneath the headline     */}
        {/* ========================================================= */}
        <div className="relative z-20 w-full -mt-[60px] xs:-mt-[80px] sm:-mt-[110px] md:-mt-[135px] lg:-mt-[155px]">
          <div className="w-full bg-[#FFFFFF] rounded-t-[36px] sm:rounded-t-[44px] md:rounded-t-[52px] shadow-[0_-20px_80px_rgba(0,0,0,0.12)] px-6 sm:px-12 md:px-16 lg:px-20 pt-8 sm:pt-12 md:pt-14 pb-16 sm:pb-24">

            {/* Top Row: Title & Floating Close Button (✕) */}
            <div className="flex items-start justify-between gap-4 pb-6 sm:pb-8">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#111827]">
                OGcollege
              </h1>

              {/* Close Button: Routes cleanly back to #project on portfolio */}
              <Link
                href="/#project"
                aria-label="Close Case Study"
                className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-[16px] bg-[#F4F4F6] hover:bg-[#EAEAEF] text-gray-700 hover:text-black flex items-center justify-center transition-all border border-black/[0.04] shadow-sm active:scale-95 group"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:rotate-90 duration-300"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </Link>
            </div>

            {/* 2-Column Overview & Metadata Grid (Matching Luzia Layout) */}
            <div className="space-y-6 sm:space-y-8 text-[15px] sm:text-[16px] pb-12 sm:pb-16 border-b border-gray-100">

              {/* Row 1: Overview */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start">
                <div className="md:col-span-3 lg:col-span-2 text-[#71717A] font-normal pt-0.5">
                  Overview
                </div>
                <div className="md:col-span-9 lg:col-span-10 text-[#18181B] leading-relaxed space-y-4 font-normal">
                  <p>
                    OGcollege started as a small platform with big ambitions. It had a couple of live tools, but mostly a grid of &ldquo;coming soon&rdquo; placeholders. When the team was ready to expand into new streams, paid mentorship, and AI tools, the original site hit a wall. It looked dated, and adding features meant jamming more cards onto an already crowded page.
                  </p>
                  <p>
                    I redesigned the experience around the student’s mindset. Now, instead of hunting through a feature menu, a student can drop in, state where they are in their journey, and get to the right tool whether that’s an AI chat, a rank predictor, or a 1:1 call with a senior at their dream college in just a couple of clicks.
                  </p>
                </div>
              </div>

              {/* Row 2: Categories */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start">
                <div className="md:col-span-3 lg:col-span-2 text-[#71717A] font-normal pt-0.5">
                  Categories
                </div>
                <div className="md:col-span-9 lg:col-span-10 text-[#18181B] font-normal">
                  EdTech &bull; Product Design &bull; UX Case Study
                </div>
              </div>

              {/* Row 3: Role */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start">
                <div className="md:col-span-3 lg:col-span-2 text-[#71717A] font-normal pt-0.5">
                  Role
                </div>
                <div className="md:col-span-9 lg:col-span-10 text-[#18181B] font-normal">
                  UI/UX Designer (End-to-End: Audit, User Flows, UI, Mobile)
                </div>
              </div>

              {/* Row 4: Platform */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start">
                <div className="md:col-span-3 lg:col-span-2 text-[#71717A] font-normal pt-0.5">
                  Platform
                </div>
                <div className="md:col-span-9 lg:col-span-10 text-[#18181B] font-normal">
                  Responsive Web (Desktop & Mobile)
                </div>
              </div>

              {/* Row 5: Date */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start">
                <div className="md:col-span-3 lg:col-span-2 text-[#71717A] font-normal pt-0.5">
                  Date
                </div>
                <div className="md:col-span-9 lg:col-span-10 text-[#18181B] font-normal">
                  8 Weeks
                </div>
              </div>

              {/* Row 6: Client */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start">
                <div className="md:col-span-3 lg:col-span-2 text-[#71717A] font-normal pt-0.5">
                  Client
                </div>
                <div className="md:col-span-9 lg:col-span-10 text-[#18181B] font-normal">
                  OGcollege
                </div>
              </div>

              {/* Live Preview Button */}
              <div id="live-preview" className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 pt-3">
                <div className="md:col-span-3 lg:col-span-2" />
                <div className="md:col-span-9 lg:col-span-10">
                  <a
                    href="#case-study-details"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#18181B] hover:bg-black text-white text-sm font-semibold transition-all shadow-md group"
                  >
                    <span>Live Preview</span>
                    <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </a>
                </div>
              </div>

            </div>

            {/* ========================================================= */}
            {/* DEVICE MOCKUP SHOWCASE (Dark Slate Frame as in Luzia)     */}
            {/* ========================================================= */}
            <section className="py-12 sm:py-16">
              <div className="w-full rounded-[28px] sm:rounded-[36px] bg-[#374C5E] p-4 sm:p-7 md:p-9 shadow-xl border border-black/10">

                {/* 2 Side-by-Side Browser Device Mockups */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">

                  {/* Device Mockup 1: Journey-Led Homepage */}
                  <div className="rounded-2xl sm:rounded-3xl bg-[#0F172A] border border-slate-700/60 overflow-hidden shadow-2xl flex flex-col">
                    <div className="h-10 px-4 bg-[#1E293B]/80 border-b border-slate-700 flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      </div>
                      <div className="px-3 py-0.5 rounded-md bg-slate-800 text-[11px] text-slate-300 font-mono">
                        ogcollege.com/journey
                      </div>
                      <div className="w-8" />
                    </div>

                    <div className="p-5 sm:p-6 bg-gradient-to-br from-[#0F172A] to-[#1E293B] flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between border-b border-slate-700/60 pb-3 mb-4">
                          <div className="font-medium text-white text-base tracking-tight flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                            OGcollege
                          </div>
                          <div className="flex items-center gap-1 bg-slate-800/80 p-0.5 rounded-lg text-[10px] text-slate-300">
                            <span className="px-2 py-0.5 rounded bg-indigo-600 text-white font-medium">Engineering</span>
                            <span className="px-2 py-0.5">Medical</span>
                            <span className="px-2 py-0.5">BITSAT</span>
                          </div>
                        </div>

                        <div className="my-3">
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-400">
                            Interactive Flow
                          </span>
                          <h4 className="text-xl font-medium text-white mt-1 leading-snug">
                            &ldquo;Where are you right now?&rdquo;
                          </h4>
                          <p className="text-xs text-slate-300 mt-1">
                            Surfacing tools according to your exact exam readiness stage.
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-2 my-4">
                          <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                            <span className="text-[10px] text-slate-400 font-medium block">Stage 1</span>
                            <span className="text-xs font-semibold text-white">Preparing</span>
                            <span className="text-[10px] text-indigo-300 block mt-0.5">Cutoffs &amp; Syllabi</span>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                            <span className="text-[10px] text-slate-400 font-medium block">Stage 2</span>
                            <span className="text-xs font-semibold text-white">Results Out</span>
                            <span className="text-[10px] text-indigo-300 block mt-0.5">Rank Predictors</span>
                          </div>
                          <div className="p-3 rounded-xl bg-indigo-600/20 border border-indigo-500/40">
                            <span className="text-[10px] text-indigo-300 font-semibold block">Stage 3 (Active)</span>
                            <span className="text-xs font-semibold text-white">Counselling</span>
                            <span className="text-[10px] text-emerald-400 block mt-0.5">JoSAA Choice-Filler</span>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                            <span className="text-[10px] text-slate-400 font-medium block">Stage 4</span>
                            <span className="text-xs font-semibold text-white">Choosing</span>
                            <span className="text-[10px] text-indigo-300 block mt-0.5">1:1 Senior Advice</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-2 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
                        <span>✓ Mobile-First Execution</span>
                        <span className="text-emerald-400 font-medium">8 Streams Supported</span>
                      </div>
                    </div>
                  </div>

                  {/* Device Mockup 2: Senior Mentorship Booking */}
                  <div className="rounded-2xl sm:rounded-3xl bg-[#0F172A] border border-slate-700/60 overflow-hidden shadow-2xl flex flex-col">
                    <div className="h-10 px-4 bg-[#1E293B]/80 border-b border-slate-700 flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      </div>
                      <div className="px-3 py-0.5 rounded-md bg-slate-800 text-[11px] text-slate-300 font-mono">
                        ogcollege.com/mentors/iit-bombay
                      </div>
                      <div className="w-8" />
                    </div>

                    <div className="p-5 sm:p-6 bg-gradient-to-br from-[#0F172A] to-[#1E293B] flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          <span className="px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[10px] font-medium">
                            IIT Bombay
                          </span>
                          <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-[10px]">
                            Computer Science
                          </span>
                          <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-[10px]">
                            Hindi / English
                          </span>
                          <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-[10px]">
                            4.9★
                          </span>
                        </div>

                        <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 shadow-md">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-400 to-indigo-500 flex items-center justify-center font-medium text-white text-base">
                              AK
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <h5 className="text-sm font-semibold text-white">Aryan K.</h5>
                                <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-semibold border border-emerald-500/30">
                                  ✓ Verified Senior
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-300">IIT Bombay &bull; B.Tech CSE &bull; Final Year</p>
                              <div className="flex items-center gap-2 mt-1 text-[10px] text-amber-300">
                                <span>★ 4.95 (142 sessions)</span>
                                <span className="text-slate-400">&bull;</span>
                                <span className="text-slate-300">₹499 / 30 mins</span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 pt-3 border-t border-slate-700/60 flex items-center justify-between">
                            <div className="text-[10px] text-slate-300">
                              Next slot: <span className="text-emerald-400 font-medium">Today, 6:00 PM</span>
                            </div>
                            <button className="px-3 py-1 rounded-lg bg-[#FD853A] hover:bg-[#ea6f24] text-white text-xs font-semibold shadow-sm transition-colors">
                              Book Call
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="mt-2 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
                        <span>✓ In-Context Sticky Booking</span>
                        <span className="text-indigo-300 font-medium">Zero Redirection Hesitation</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Full Width Device Mockup 3: Choice Filling Dashboard */}
                <div className="rounded-2xl sm:rounded-3xl bg-[#0F172A] border border-slate-700/60 overflow-hidden shadow-2xl">
                  <div className="h-10 px-4 bg-[#1E293B]/80 border-b border-slate-700 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <div className="px-3 py-0.5 rounded-md bg-slate-800 text-[11px] text-slate-300 font-mono">
                      ogcollege.com/tools/choice-filling-predictor
                    </div>
                    <div className="w-8" />
                  </div>

                  <div className="p-6 sm:p-8 bg-[#0F172A]">
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs text-slate-400">Active Profile:</span>
                        <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
                          JEE Adv Rank: #14,250
                        </span>
                        <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs">
                          Category: General (EWS)
                        </span>
                        <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs">
                          Home State: Maharashtra
                        </span>
                      </div>

                      <div className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                        ✓ Honest Readout: Safe (5) • Target (7) • Reach (3)
                      </div>
                    </div>

                    <div className="mt-4 space-y-2.5">
                      <div className="p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/50 flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-md bg-slate-700 text-slate-300 flex items-center justify-center text-xs font-medium">1</span>
                          <div>
                            <p className="font-semibold text-white">IIT Roorkee &bull; Data Science &amp; Artificial Intelligence</p>
                            <p className="text-slate-400 text-xs">2024 Closing Rank: 14,890 &bull; 4-Year B.Tech</p>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
                          High Chance (92%)
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/50 flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-md bg-slate-700 text-slate-300 flex items-center justify-center text-xs font-medium">2</span>
                          <div>
                            <p className="font-semibold text-white">IIT Kharagpur &bull; Electrical &amp; Electronics Engineering</p>
                            <p className="text-slate-400 text-xs">2024 Closing Rank: 13,950 &bull; 4-Year B.Tech</p>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
                          Moderate Chance (61%)
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/50 flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-md bg-slate-700 text-slate-300 flex items-center justify-center text-xs font-medium">3</span>
                          <div>
                            <p className="font-semibold text-white">IIT Delhi &bull; Mechanical Engineering</p>
                            <p className="text-slate-400 text-xs">2024 Closing Rank: 11,200 &bull; 4-Year B.Tech</p>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold border border-rose-500/30">
                          Low Chance (22%)
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </section>

            {/* ========================================================= */}
            {/* FULL CASE STUDY CONTENT (Strictly as per Google Document) */}
            {/* ========================================================= */}
            <div id="case-study-details" className=" space-y-16 py-8 text-[#1F2937]">

              {/* 1. The Short Version */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">

                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                    The Short Version
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-[#374151] leading-relaxed font-normal">
                  OGcollege started as a small platform with big ambitions. It had a couple of live tools, but mostly a grid of &ldquo;coming soon&rdquo; placeholders. When the team was ready to expand into new streams, paid mentorship, and AI tools, the original site hit a wall. It looked dated, and adding features meant jamming more cards onto an already crowded page.
                </p>
                <p className="text-base sm:text-lg text-[#374151] leading-relaxed font-normal">
                  I redesigned the experience around the student’s mindset. Now, instead of hunting through a feature menu, a student can drop in, state where they are in their journey, and get to the right tool whether that’s an AI chat, a rank predictor, or a 1:1 call with a senior at their dream college in just a couple of clicks.
                </p>
              </section>

              {/* 2. What OGcollege Is (and Why It Matters) */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">

                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                    What OGcollege Is (and Why It Matters)
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                  In India, clearing exams like JEE, NEET, or BITSAT is only half the battle. What comes next counselling, ranking choices, and picking a college determines the next four years of a student&apos;s life. Most students navigate this high-stakes process using bad advice from WhatsApp groups and biased coaching center opinions.
                </p>
                <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                  OGcollege fixes this by combining three core tools:
                </p>
                <ol className="list-decimal list-outside pl-6 space-y-2 text-base sm:text-lg text-[#374151]">
                  <li>
                    <strong className="text-[#111827]">Orbi:</strong> An AI counsellor that answers questions in regional languages.
                  </li>
                  <li>
                    <strong className="text-[#111827]">Data-Driven Tools:</strong> College predictors and choice-fillers built on actual cutoff data.
                  </li>
                  <li>
                    <strong className="text-[#111827]">Verified Seniors:</strong> Current students at top colleges available for paid 1:1 advice.
                  </li>
                </ol>
              </section>

              {/* 3. The Problem */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">

                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                    The Problem
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                  When I first audited the site on desktop and mobile, three major issues stood out:
                </p>
                <ol className="list-decimal list-outside pl-6 space-y-3 text-base sm:text-lg text-[#374151]">
                  <li>
                    <strong className="text-[#111827]">It lacked trust:</strong> The visual design felt dated and flat. For a product asking parents and students to trust it with major life decisions (and paid bookings), the visual impression fell flat.
                  </li>
                  <li>
                    <strong className="text-[#111827]">It couldn&apos;t scale:</strong> As OGcollege expanded beyond Engineering and Medical into Law, Design, and Study Abroad, stacking more tiles on the homepage made the layout chaotic.
                  </li>
                  <li>
                    <strong className="text-[#111827]">Missing &ldquo;Real World&rdquo; states:</strong> Key flows had no home—and crucial edge states (failed payments, double-booked slots, or empty search results) were completely unhandled.
                  </li>
                </ol>
              </section>

              {/* 4. The Goal & Design Principles */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">

                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                    The Goal &amp; Design Principles
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                  My main objective was simple: <strong className="text-[#111827]">Make it obvious where a student should start, and make every next step feel safe.</strong>
                </p>
                <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                  To keep the project grounded, I anchored every decision to four rules:
                </p>
                <ul className="list-disc list-outside pl-6 space-y-2.5 text-base sm:text-lg text-[#374151]">
                  <li>
                    <strong className="text-[#111827]">Start with the student, not the feature:</strong> Students don&apos;t think <em>&ldquo;I need a predictor&rdquo;</em>; they think <em>&ldquo;My rank is 15,000, now what?&rdquo;</em>
                  </li>
                  <li>
                    <strong className="text-[#111827]">Show trust, don&apos;t just claim it:</strong> Verified badges, real ratings, and transparent pricing build credibility better than any tagline.
                  </li>
                  <li>
                    <strong className="text-[#111827]">Build for growth:</strong> Visual systems must scale seamlessly as streams expand from 2 to 6+ and mentors from 10 to 1,000.
                  </li>
                  <li>
                    <strong className="text-[#111827]">Mobile-first execution:</strong> Most Indian students browse on their phones, so mobile layouts were designed alongside desktop never as an afterthought.
                  </li>
                </ul>
              </section>

              {/* 5. Key Design Decisions */}
              <section id="key-decisions" className="space-y-8 scroll-mt-24">
                <div className="flex items-center gap-2">

                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                    Key Design Decisions
                  </h3>
                </div>

                {/* Decision 1 */}
                <div className="space-y-3">
                  <h4 className="text-xl sm:text-2xl font-medium text-[#111827]">
                    1. A Homepage Guided by the Journey
                  </h4>
                  <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                    Instead of listing features, the new homepage opens with a clear question: <strong className="text-[#111827]">&ldquo;Where are you right now?&rdquo;</strong>
                  </p>
                  <ul className="list-disc list-outside pl-6 space-y-2 text-base sm:text-lg text-[#374151]">
                    <li>
                      <strong className="text-[#111827]">Stream-First Hero:</strong> Students switch between Medical, Engineering, or other streams right at the top so the site feels tailored to them instantly.
                    </li>
                    <li>
                      <strong className="text-[#111827]">Journey Anchors:</strong> We broke the process down into four clear phases: <strong className="text-[#111827]">Preparing &rarr; Results Out &rarr; Counselling &rarr; Choosing</strong>. Selecting a stage surfaces the exact tools needed at that moment.
                    </li>
                    <li>
                      <strong className="text-[#111827]">Scalable Architecture:</strong> Stream tabs let new verticals launch smoothly with a single status toggle instead of requiring a layout rebuild.
                    </li>
                  </ul>
                </div>

                {/* Decision 2 */}
                <div className="space-y-3">
                  <h4 className="text-xl sm:text-2xl font-medium text-[#111827]">
                    2. Trust-Driven Senior Mentorship
                  </h4>
                  <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                    Paying a stranger for advice can feel risky. I designed the mentor discovery and booking flow to remove hesitation at every step:
                  </p>
                  <ul className="list-disc list-outside pl-6 space-y-2 text-base sm:text-lg text-[#374151]">
                    <li>
                      <strong className="text-[#111827]">Scannable Filters:</strong> Quick filters for Exam, Language, College, and Branch let students compare mentors without opening dozens of browser tabs.
                    </li>
                    <li>
                      <strong className="text-[#111827]">Social Proof First:</strong> Mentor profiles highlight verified badges, total sessions completed, and student ratings upfront.
                    </li>
                    <li>
                      <strong className="text-[#111827]">In-Context Booking:</strong> A sticky side panel lets users select dates, view available slots, and see clear fee breakdowns without leaving the mentor&apos;s profile.
                    </li>
                  </ul>
                </div>

                {/* Decision 3 with Table */}
                <div className="space-y-4">
                  <h4 className="text-xl sm:text-2xl font-medium text-[#111827]">
                    3. Turning Choice-Filling into a Calm Experience
                  </h4>
                  <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                    JoSAA choice filling is stressful students often have to rank up to 150 college options correctly. I focused on building a calm, clear interface:
                  </p>

                  {/* Exact Table from Document */}
                  <div className="w-full overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mt-4">
                    <table className="w-full text-left text-sm sm:text-base border-collapse">
                      <thead className="bg-[#F9FAFB] border-b border-gray-200">
                        <tr>
                          <th className="py-4 px-5 font-medium text-[#111827] w-1/3">
                            Key Element
                          </th>
                          <th className="py-4 px-5 font-medium text-[#111827] w-2/3">
                            How It Helps the Student
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-[#374151]">
                        <tr className="hover:bg-gray-50/70 transition-colors">
                          <td className="py-4 px-5 font-semibold text-[#111827] align-top">
                            Persistent Context
                          </td>
                          <td className="py-4 px-5 leading-relaxed align-top">
                            Rank, category, and state details stay visible as editable chips at the top.
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50/70 transition-colors">
                          <td className="py-4 px-5 font-semibold text-[#111827] align-top">
                            Color-Coded Chances
                          </td>
                          <td className="py-4 px-5 leading-relaxed align-top">
                            High, Moderate, and Low admission probabilities are immediately clear.
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50/70 transition-colors">
                          <td className="py-4 px-5 font-semibold text-[#111827] align-top">
                            Live Summaries
                          </td>
                          <td className="py-4 px-5 leading-relaxed align-top">
                            An honest readout flags if a list is too short or risky before submission.
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50/70 transition-colors">
                          <td className="py-4 px-5 font-semibold text-[#111827] align-top">
                            Side-by-Side Comparison
                          </td>
                          <td className="py-4 px-5 leading-relaxed align-top">
                            A floating toolbar allows direct comparison of cutoffs, fees, and placements.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Decision 4 */}
                <div className="space-y-3">
                  <h4 className="text-xl sm:text-2xl font-medium text-[#111827]">
                    4. Giving &ldquo;Orbi&rdquo; (AI) a Unique Identity
                  </h4>
                  <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                    Instead of presenting Orbi as another generic chatbot, the landing page answers the real question: <em>&ldquo;Why use Orbi over ChatGPT?&rdquo;</em>
                  </p>
                  <ul className="list-disc list-outside pl-6 space-y-2 text-base sm:text-lg text-[#374151]">
                    <li>
                      <strong className="text-[#111827]">Direct Comparison:</strong> Side-by-side examples show how generic AI gives vague advice, while Orbi draws from verified cutoff data.
                    </li>
                    <li>
                      <strong className="text-[#111827]">Human Hand-off:</strong> If an AI chat reaches its limit, Orbi seamlessly connects the student to a verified senior, bridging the gap between automated tools and human guidance.
                    </li>
                  </ul>
                </div>

                {/* Decision 5 */}
                <div className="space-y-3">
                  <h4 className="text-xl sm:text-2xl font-medium text-[#111827]">
                    5. Designing Edge Cases &amp; Financial Moments
                  </h4>
                  <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                    Asking students or parents for money requires clarity. I designed seamless payment breakdowns (including regional touches like WhatsApp OTP verification) along with friendly, helpful screens for edge states like <strong className="text-[#111827]">cancelled payments</strong>, <strong className="text-[#111827]">expired slots</strong>, or <strong className="text-[#111827]">empty search results</strong>.
                  </p>
                </div>

              </section>

              {/* 6. Visual Direction */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">

                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                    Visual Direction
                  </h3>
                </div>
                <ul className="list-disc list-outside pl-6 space-y-2.5 text-base sm:text-lg text-[#374151]">
                  <li>
                    <strong className="text-[#111827]">Colors:</strong> Deep indigo and violet for a modern academic feel, crisp green for verified/available indicators, and warm accents for alerts.
                  </li>
                  <li>
                    <strong className="text-[#111827]">Typography:</strong> Clean geometric sans-serif prioritizing clear hierarchy and quick scanning of data.
                  </li>
                  <li>
                    <strong className="text-[#111827]">Components:</strong> Soft rounded cards, pill tags for quick filtering, and prominent photos of real seniors to keep the experience human.
                  </li>
                </ul>
              </section>

              {/* 7. User Research & Usability Testing */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">

                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                    User Research &amp; Usability Testing
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                  To ground every design decision in real student needs, I conducted remote user interviews with <strong className="text-[#111827]">8 high school seniors and recent exam takers (JEE, NEET, and BITSAT)</strong> alongside 2 parents. The goal was to understand how they currently navigate post-exam counselling and what makes them trust (or dismiss) online guidance platforms. The interviews revealed that anxiety peaks right after ranks are declared, students rely heavily on peer advice over generic coaching advice, and hidden pricing creates immediate distrust.
                </p>
                <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                  Using these insights, I created mid-fidelity prototypes to map out two key workflows: finding a senior mentor and using the choice-filling college predictor. I tested these prototypes with <strong className="text-[#111827]">5 students</strong> across desktop and mobile devices. During usability testing, we observed where users hesitated, how quickly they grasped Orbi’s AI capabilities compared to ChatGPT, and whether they felt confident moving through the mentor checkout flow.
                </p>
                <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                  The feedback directly shaped the final UI. Students expressed strong preferences for seeing verified badges, rating breakdowns, and clear session deliverables before committing to a paid call. Additionally, we simplified the choice-filling layout after observing that dense data tables overwhelmed users on mobile screens, replacing them with digestible cards and color-coded chance indicators.
                </p>
              </section>

              {/* 8. What Changed & Lessons Learned */}
              <section className="space-y-6">
                <div className="flex items-center gap-2">

                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                    What Changed &amp; Lessons Learned
                  </h3>
                </div>

                {/* Exact Metrics Table from Document */}
                <div className="w-full overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead className="bg-[#F9FAFB] border-b border-gray-200">
                      <tr>
                        <th className="py-4 px-5 font-medium text-[#111827] w-1/4">
                          Metric
                        </th>
                        <th className="py-4 px-5 font-medium text-[#111827] w-3/8">
                          Before
                        </th>
                        <th className="py-4 px-5 font-medium text-[#111827] w-3/8">
                          After
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-[#374151]">
                      <tr className="hover:bg-gray-50/70 transition-colors">
                        <td className="py-4 px-5 font-semibold text-[#111827] align-top">
                          Homepage Strategy
                        </td>
                        <td className="py-4 px-5 leading-relaxed align-top text-[#6B7280]">
                          Dated, feature-heavy grid with &ldquo;Coming Soon&rdquo; blocks
                        </td>
                        <td className="py-4 px-5 leading-relaxed align-top font-medium text-[#111827]">
                          Journey-led setup filtered by student phase and stream
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/70 transition-colors">
                        <td className="py-4 px-5 font-semibold text-[#111827] align-top">
                          Mentorship Flow
                        </td>
                        <td className="py-4 px-5 leading-relaxed align-top text-[#6B7280]">
                          High friction, unclear booking path
                        </td>
                        <td className="py-4 px-5 leading-relaxed align-top font-medium text-[#111827]">
                          Transparent profiles with built-in scheduling and proof
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/70 transition-colors">
                        <td className="py-4 px-5 font-semibold text-[#111827] align-top">
                          System Scalability
                        </td>
                        <td className="py-4 px-5 leading-relaxed align-top text-[#6B7280]">
                          Rigid layouts that broke when adding features
                        </td>
                        <td className="py-4 px-5 leading-relaxed align-top font-medium text-[#111827]">
                          Modular UI kit built to handle new tools and streams
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Core Takeaways */}
                <div className="pt-2 space-y-3">
                  <h4 className="text-lg sm:text-xl font-medium text-[#111827]">
                    Core Takeaways:
                  </h4>
                  <ol className="list-decimal list-outside pl-6 space-y-3 text-base sm:text-lg text-[#374151]">
                    <li>
                      <strong className="text-[#111827]">Design for tomorrow:</strong> Asking <em>&ldquo;What happens when we scale 10x?&rdquo;</em> early on saved weeks of redesigning later.
                    </li>
                    <li>
                      <strong className="text-[#111827]">Trust is a design material:</strong> Badges, transparent pricing, and genuine photos do more to drive conversions than clever copy.
                    </li>
                    <li>
                      <strong className="text-[#111827]">Edge states build brand credibility:</strong> Handling failed payments or empty states thoughtfully keeps users from feeling abandoned when things go wrong.
                    </li>
                  </ol>
                </div>
              </section>

            </div>

            {/* ========================================================= */}
            {/* MORE WORKS SECTION (Common Component with Home Page Cards)*/}
            {/* ========================================================= */}
            <MoreWorks currentSlug="ogcollege" />

          </div>
        </div>

      </div>
    </article>
  );
}
