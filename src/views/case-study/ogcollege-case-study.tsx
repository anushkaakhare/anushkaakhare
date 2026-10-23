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
                    href="https://ogcollege.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#18181B] hover:bg-black text-white text-sm font-semibold transition-all shadow-md group"
                  >
                    <span>Live Preview</span>
                    <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </a>
                </div>
              </div>

            </div>

            {/* ========================================================= */}
            {/* HIGH-FIDELITY CASE STUDY BENTO GRID                       */}
            {/* ========================================================= */}
            <section className="py-6 sm:py-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">
                {/* Left Bento Cell: Choice Filling Main Tool (Span 7 cols) */}
                <a
                  href="/og_clg_case_study_3.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Click to view full image in high resolution"
                  className="group md:col-span-7 relative rounded-3xl border border-gray-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.06)] bg-white overflow-hidden flex flex-col h-[480px] sm:h-[530px] md:h-[570px] lg:h-[600px] transition-all duration-300 hover:shadow-[0_24px_55px_rgba(0,0,0,0.12)] hover:-translate-y-1 cursor-pointer"
                >
                  {/* Browser Chrome Header */}
                  <div className="h-10 px-4 bg-[#F8FAFC] border-b border-gray-200/80 flex items-center justify-between text-xs text-gray-500 shrink-0 select-none">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                    </div>
                    <div className="px-3 py-0.5 rounded-md bg-white border border-gray-200/80 text-[11px] text-gray-600 font-mono flex items-center gap-1.5 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                      <span>ogcollege.io/tools/choice-filling</span>
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-[#FD853A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
                  </div>

                  {/* Edge-to-Edge UI Screen */}
                  <div className="relative w-full flex-1 overflow-hidden bg-[#F8FAFC]">
                    <Image
                      src="/og_clg_case_study_3.png"
                      alt="OGcollege JoSAA Choice Filling platform"
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover object-top select-none transition-transform duration-500 group-hover:scale-[1.015]"
                      priority
                    />
                    {/* Bottom gentle gradient fade to keep the edge soft */}
                    <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />
                    
                    {/* Floating context pill */}
                    <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-gray-200/90 text-xs font-medium text-gray-800 shadow-sm flex items-center gap-1.5 select-none">
                      <span className="w-2 h-2 rounded-full bg-[#FD853A]" />
                      <span>JoSAA Choice Filling &bull; Core Platform</span>
                    </div>
                  </div>
                </a>

                {/* Right Bento Column: 2 Stacked Cells (Span 5 cols) */}
                <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6 h-auto md:h-[570px] lg:h-[600px]">
                  {/* Top Cell: Orbi AI Guidance */}
                  <a
                    href="/og_clg_case_study_2.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Click to view full image in high resolution"
                    className="group flex-1 relative rounded-3xl border border-gray-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.06)] bg-gradient-to-br from-white via-[#FAF5FF] to-[#EDE9FE] overflow-hidden flex items-center justify-center min-h-[230px] sm:min-h-[265px] transition-all duration-300 hover:shadow-[0_24px_55px_rgba(0,0,0,0.12)] hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src="/og_clg_case_study_2.png"
                        alt="Orbi AI Assistant"
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-contain scale-135 sm:scale-140 select-none transition-transform duration-500 group-hover:scale-145"
                      />
                    </div>

                    {/* Top-right subtle preview arrow */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200/80 flex items-center justify-center text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>

                    {/* Floating context pill */}
                    <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-gray-200/90 text-xs font-medium text-gray-800 shadow-sm flex items-center gap-1.5 select-none">
                      <span className="w-2 h-2 rounded-full bg-indigo-500" />
                      <span>Orbi AI &bull; Regional Voice Guidance</span>
                    </div>
                  </a>

                  {/* Bottom Cell: Student Testimonials */}
                  <a
                    href="/og_clg_case_study_1.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Click to view full image in high resolution"
                    className="group flex-1 relative rounded-3xl border border-gray-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.06)] bg-[#EEEDF7] overflow-hidden flex items-center justify-center min-h-[230px] sm:min-h-[265px] transition-all duration-300 hover:shadow-[0_24px_55px_rgba(0,0,0,0.12)] hover:-translate-y-1 cursor-pointer"
                  >
                    <Image
                      src="/og_clg_case_study_1.png"
                      alt="OGcollege Student Reviews"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-contain p-3 sm:p-5 select-none transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Top-right subtle preview arrow */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200/80 flex items-center justify-center text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>

                    {/* Floating context pill */}
                    <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-gray-200/90 text-xs font-medium text-gray-800 shadow-sm flex items-center gap-1.5 select-none">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Social Proof &bull; Verified Reviews</span>
                    </div>
                  </a>
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
