"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import MoreWorks from "@/components/more-works";

export default function HiveMeetCaseStudy() {
  return (
    <article className="w-full min-h-screen bg-[#0F172A] relative overflow-x-clip pb-24">
      {/* Soft Ambient Background Atmosphere */}
      <div className="absolute top-0 left-0 right-0 h-[640px] sm:h-[720px] md:h-[800px] overflow-hidden pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 filter blur-[70px] opacity-45"
          style={{ backgroundImage: "url('/HiveMeet.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E293B]/60 via-[#0F172A]/75 to-[#0F172A]" />
      </div>

      {/* Hero Container */}
      <div className="relative w-full">
        {/* ========================================================= */}
        {/* TOP HERO VISUAL (Exact Luzia Framer Pulma Window Mockup)  */}
        {/* ========================================================= */}
        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-6 sm:pt-10 md:pt-14 pb-0">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] max-h-[520px] sm:max-h-[640px] md:max-h-[740px] rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.35),0_12px_32px_rgba(0,0,0,0.2)] border border-white/20 bg-[#1E293B]">
            <Image
              src="/HiveMeet.png"
              alt="HiveMeet Case Study Hero"
              fill
              priority
              sizes="(max-width: 1360px) 100vw, 1360px"
              className="object-cover object-center select-none pointer-events-none"
            />
          </div>
        </div>

        {/* ========================================================= */}
        {/* OVERLAPPING WHITE SHEET MODAL (Exact Luzia Framer Sheet)  */}
        {/* ========================================================= */}
        <div className="relative z-20 w-full -mt-[60px] xs:-mt-[80px] sm:-mt-[110px] md:-mt-[135px] lg:-mt-[155px]">
          <div className="w-full bg-[#FFFFFF] rounded-t-[36px] sm:rounded-t-[44px] md:rounded-t-[52px] shadow-[0_-20px_80px_rgba(0,0,0,0.12)] px-6 sm:px-12 md:px-16 lg:px-20 pt-8 sm:pt-12 md:pt-14 pb-16 sm:pb-24">

            {/* Top Row: Title & Floating Close Button (✕) */}
            <div className="flex items-start justify-between gap-4 pb-6 sm:pb-8">
              <div>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#111827]">
                  HiveMeet
                </h1>
                <p className="text-base sm:text-lg text-[#64748B] mt-2 font-normal">
                  Designing a Connected Meeting &amp; Collaboration Workspace
                </p>
              </div>

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

            {/* 2-Column Overview & Metadata Grid */}
            <div className="space-y-6 sm:space-y-8 text-[15px] sm:text-[16px] pb-12 sm:pb-16 border-b border-gray-100">

              {/* Row 1: Overview */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start">
                <div className="md:col-span-3 lg:col-span-2 text-[#71717A] font-normal pt-0.5">
                  Overview
                </div>
                <div className="md:col-span-9 lg:col-span-10 text-[#18181B] leading-relaxed space-y-4 font-normal">
                  <p>
                    Managing virtual meetings often means jumping across multiple disconnected tools—one app for video calls, another for scheduling, a separate folder for shared files, and manual notes for summaries.
                  </p>
                  <p>
                    HiveMeet was designed to fix this fragmentation by bringing meeting management, team collaboration, and AI-powered productivity tools into a single, unified workspace. I took company-provided requirements and built an intuitive, clutter-free web experience that makes scheduling, joining, and post-meeting follow-ups effortless.
                  </p>
                </div>
              </div>

              {/* Row 2: Categories */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start">
                <div className="md:col-span-3 lg:col-span-2 text-[#71717A] font-normal pt-0.5">
                  Categories
                </div>
                <div className="md:col-span-9 lg:col-span-10 text-[#18181B] font-normal">
                  Web Application &bull; Collaboration &amp; Productivity &bull; AI Workspace
                </div>
              </div>

              {/* Row 3: Role */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start">
                <div className="md:col-span-3 lg:col-span-2 text-[#71717A] font-normal pt-0.5">
                  Role
                </div>
                <div className="md:col-span-9 lg:col-span-10 text-[#18181B] font-normal">
                  UI/UX Designer (End-to-End Product Design)
                </div>
              </div>

              {/* Row 4: Platform */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start">
                <div className="md:col-span-3 lg:col-span-2 text-[#71717A] font-normal pt-0.5">
                  Platform
                </div>
                <div className="md:col-span-9 lg:col-span-10 text-[#18181B] font-normal">
                  Web Application
                </div>
              </div>

              {/* Row 5: Scope */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start">
                <div className="md:col-span-3 lg:col-span-2 text-[#71717A] font-normal pt-0.5">
                  Scope
                </div>
                <div className="md:col-span-9 lg:col-span-10 text-[#18181B] font-normal">
                  Information Architecture, Core Meeting Flows, Dashboard, AI Productivity Tools, Visual Design System
                </div>
              </div>

              {/* Row 6: Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start">
                <div className="md:col-span-3 lg:col-span-2 text-[#71717A] font-normal pt-0.5">
                  Timeline
                </div>
                <div className="md:col-span-9 lg:col-span-10 text-[#18181B] font-normal">
                  4 Weeks
                </div>
              </div>

              {/* Row 7: Tools */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start">
                <div className="md:col-span-3 lg:col-span-2 text-[#71717A] font-normal pt-0.5">
                  Tools
                </div>
                <div className="md:col-span-9 lg:col-span-10 text-[#18181B] font-normal">
                  Figma
                </div>
              </div>

            </div>

            {/* ========================================================= */}
            {/* INTERACTIVE DESIGN SHOWCASE (Bespoke Product Cards)        */}
            {/* ========================================================= */}
            <section className="py-10 sm:py-14">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Preview Card 1: Mission-Control Dashboard */}
                <div className="rounded-3xl border border-gray-200/90 bg-[#F8FAFC] p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-gray-200/80">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                        01 &bull; Mission Control
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[11px] font-semibold">
                        Instant Hub
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div>
                        <h4 className="text-base font-semibold text-gray-900">Pre-Meeting Dashboard</h4>
                        <p className="text-xs text-gray-500 mt-0.5">Unified calendar &amp; quick entry</p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white border border-gray-100 space-y-2.5 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500 font-medium">Next Meeting</span>
                          <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-semibold">In 15 Mins</span>
                        </div>
                        <p className="font-semibold text-gray-900 text-sm">Product Strategy &amp; Design Review</p>
                        <div className="flex items-center justify-between text-gray-500 text-[11px] pt-1 border-t border-gray-50">
                          <span>6 Participants</span>
                          <span>3 Shared Files Attached</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-gray-200/80 grid grid-cols-2 gap-2">
                    <button className="py-2 px-3 rounded-xl bg-[#2563EB] text-white text-xs font-semibold text-center hover:bg-blue-700 transition-colors shadow-sm">
                      Start Meeting
                    </button>
                    <button className="py-2 px-3 rounded-xl bg-gray-100 text-gray-800 text-xs font-semibold text-center hover:bg-gray-200 transition-colors">
                      Join Code
                    </button>
                  </div>
                </div>

                {/* Preview Card 2: In-Meeting Controls & Ergonomics */}
                <div className="rounded-3xl border border-gray-200/90 bg-[#F8FAFC] p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-gray-200/80">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                        02 &bull; In-Call Ergonomics
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold">
                        Distraction-Free
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      <h4 className="text-base font-semibold text-gray-900">Pinned Primary Toolbar</h4>
                      
                      <div className="p-3 rounded-2xl bg-white border border-gray-100 space-y-2">
                        <div className="flex items-center justify-center gap-2 py-1">
                          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold" title="Mic Active">
                            🎙
                          </span>
                          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold" title="Camera On">
                            📹
                          </span>
                          <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold" title="Screen Share">
                            🖥
                          </span>
                          <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold" title="AI Notes">
                            ✨
                          </span>
                          <span className="w-8 h-8 rounded-lg bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold" title="Leave Call">
                            📞
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-500 text-center">
                          Contextual side panel opens notes without resizing video grid.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-gray-200/80">
                    <span className="text-xs text-gray-600 block text-center font-medium">
                      ✓ Zero layout shifting during presentation
                    </span>
                  </div>
                </div>

                {/* Preview Card 3: AI Productivity Tools */}
                <div className="rounded-3xl border border-gray-200/90 bg-[#F8FAFC] p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-gray-200/80">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#7C3AED]">
                        03 &bull; AI Assistant
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200 text-[11px] font-semibold">
                        Automated
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      <h4 className="text-base font-semibold text-gray-900">Live Notes &amp; Action Items</h4>

                      <div className="p-3 rounded-2xl bg-white border border-gray-100 space-y-2 text-xs">
                        <div className="flex items-center gap-1.5 text-purple-700 font-semibold text-[11px]">
                          <span>✨</span>
                          <span>AI Summary Generated</span>
                        </div>
                        <p className="text-gray-700 font-medium leading-snug">
                          &ldquo;Agreed on modular card structure for V2 release; engineering to review Figma specs by Friday.&rdquo;
                        </p>
                        <div className="pt-1 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                          <span>3 Action items tagged</span>
                          <span className="text-purple-600 font-medium">Export &rarr;</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-gray-200/80">
                    <span className="text-xs text-purple-700 font-medium block text-center">
                      ✓ Instant natural language history query
                    </span>
                  </div>
                </div>

              </div>
            </section>

            {/* ========================================================= */}
            {/* FULL CASE STUDY CONTENT                                    */}
            {/* ========================================================= */}
            <div id="case-study-details" className="space-y-16 py-8 text-[#1F2937]">

              {/* 1. Executive Summary */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                    ⚡ Executive Summary (TL;DR)
                  </h3>
                </div>
                <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl p-6 sm:p-8 space-y-4 text-base sm:text-lg text-[#1E3A8A] leading-relaxed">
                  <p>
                    Managing virtual meetings often means jumping across multiple disconnected tools—one app for video calls, another for scheduling, a separate folder for shared files, and manual notes for summaries.
                  </p>
                  <p className="font-medium text-[#1E3A8A]">
                    HiveMeet was designed to fix this fragmentation by bringing meeting management, team collaboration, and AI-powered productivity tools into a single, unified workspace. I took company-provided requirements and built an intuitive, clutter-free web experience that makes scheduling, joining, and post-meeting follow-ups effortless.
                  </p>
                </div>
              </section>

              {/* 2. What HiveMeet Is (and Why It Matters) */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                    🎯 What HiveMeet Is (and Why It Matters)
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                  HiveMeet serves as an all-in-one hub for modern teams. Rather than just acting as a video-conferencing tool, it integrates the entire meeting lifecycle into one platform:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
                    <span className="text-xs uppercase font-bold text-[#2563EB] tracking-wider">01 &bull; Entry</span>
                    <h4 className="text-lg font-semibold text-gray-900">Seamless Scheduling &amp; Access</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Quick creation tools and direct link-joining that get users into meetings in one or two clicks with zero friction.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
                    <span className="text-xs uppercase font-bold text-[#2563EB] tracking-wider">02 &bull; Context</span>
                    <h4 className="text-lg font-semibold text-gray-900">Smart Context</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Easy access to recent files, agenda decks, and attendee profile information right where you need it before and during calls.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
                    <span className="text-xs uppercase font-bold text-[#7C3AED] tracking-wider">03 &bull; AI Boost</span>
                    <h4 className="text-lg font-semibold text-gray-900">AI-Assisted Productivity</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Automated agenda generation, live meeting summaries, action item extraction, translation, and historical natural language search.
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. The Problem */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                    🔍 The Problem
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                  Designing a workspace that packs multiple powerful features into a single screen comes with major UX challenges:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="p-6 rounded-2xl bg-[#FFF1F2] border border-[#FECDD3] space-y-2">
                    <span className="text-xs uppercase font-bold text-[#BE123C] tracking-wider">01 &bull; Clutter</span>
                    <h4 className="text-lg font-semibold text-gray-900">Information Clutter</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Balancing video controls, chat, file sharing, team info, and AI features on a single screen without overwhelming the user is difficult.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] space-y-2">
                    <span className="text-xs uppercase font-bold text-[#B45309] tracking-wider">02 &bull; Discoverability</span>
                    <h4 className="text-lg font-semibold text-gray-900">Feature Discoverability</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Advanced productivity tools (like AI summaries or past meeting searches) often get buried under deep menus where users can&apos;t find them.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                    <span className="text-xs uppercase font-bold text-[#475569] tracking-wider">03 &bull; Fragmentation</span>
                    <h4 className="text-lg font-semibold text-gray-900">Fragmented Workflows</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Switching between pre-meeting prep, live meeting actions, and post-meeting follow-ups previously required jumping across different screens and tools.
                    </p>
                  </div>
                </div>
              </section>

              {/* 4. The Goal & Design Principles */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                    🚀 The Goal &amp; Design Principles
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                  My objective was clear: <strong className="text-[#111827]">Create a coherent meeting experience that keeps core actions front and center while making advanced productivity tools naturally discoverable.</strong>
                </p>
                <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                  I anchored my design decisions to four core rules:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <strong className="text-[#111827] block text-base font-semibold">1. Frictionless Entry</strong>
                    <span className="text-sm text-gray-600 mt-1 block leading-relaxed">
                      Getting into a meeting or scheduling a call should take no more than one or two clicks from any entry point.
                    </span>
                  </div>
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <strong className="text-[#111827] block text-base font-semibold">2. Progressive Disclosure</strong>
                    <span className="text-sm text-gray-600 mt-1 block leading-relaxed">
                      Keep live meeting screens clean; surface AI insights and shared files contextually when needed without cluttering the primary video grid.
                    </span>
                  </div>
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <strong className="text-[#111827] block text-base font-semibold">3. Consistent Visual Hierarchy</strong>
                    <span className="text-sm text-gray-600 mt-1 block leading-relaxed">
                      Establish clear typographic and component standards so users never have to guess what button to click next.
                    </span>
                  </div>
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <strong className="text-[#111827] block text-base font-semibold">4. Ecosystem Familiarity</strong>
                    <span className="text-sm text-gray-600 mt-1 block leading-relaxed">
                      Use standard collaboration patterns so users feel instantly at home without a steep learning curve.
                    </span>
                  </div>
                </div>
              </section>

              {/* 5. Key Design Decisions */}
              <section className="space-y-8 scroll-mt-24">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                    💡 Key Design Decisions
                  </h3>
                </div>

                {/* Decision 1 */}
                <div className="space-y-3 p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-200/80">
                  <h4 className="text-xl sm:text-2xl font-semibold text-[#111827]">
                    1. A Clean, Mission-Control Dashboard
                  </h4>
                  <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                    The home screen serves as the starting point for daily coordination, designed to reduce pre-meeting chaos:
                  </p>
                  <ul className="list-disc list-outside pl-6 space-y-2 text-base text-[#374151]">
                    <li>
                      <strong className="text-[#111827]">Quick Action Hub:</strong> Prominent options to start an instant meeting, schedule a calendar slot, or join via code sit right at the top of the interface.
                    </li>
                    <li>
                      <strong className="text-[#111827]">Contextual Feed:</strong> Upcoming meetings, recent shared files, and quick notes are organized into modular cards for fast scanning.
                    </li>
                  </ul>
                </div>

                {/* Decision 2 */}
                <div className="space-y-3 p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-200/80">
                  <h4 className="text-xl sm:text-2xl font-semibold text-[#111827]">
                    2. In-Meeting Controls &amp; Ergonomics
                  </h4>
                  <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                    During a live call, distraction-free execution is critical:
                  </p>
                  <ul className="list-disc list-outside pl-6 space-y-2 text-base text-[#374151]">
                    <li>
                      <strong className="text-[#111827]">Pinned Toolbar:</strong> Core controls (mic, camera, screen share, chat, participants) stay anchored within easy reach with instant state feedback.
                    </li>
                    <li>
                      <strong className="text-[#111827]">Contextual Side Panels:</strong> Toggling files, meeting chat, or AI notes opens a smooth side drawer instead of resizing or disrupting the video grid layout.
                    </li>
                  </ul>
                </div>

                {/* Decision 3 */}
                <div className="space-y-3 p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-200/80">
                  <h4 className="text-xl sm:text-2xl font-semibold text-[#111827]">
                    3. Integrating AI Productivity Tools
                  </h4>
                  <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                    To make HiveMeet&apos;s AI features feel like a natural assistant rather than an invasive gimmick:
                  </p>
                  <ul className="list-disc list-outside pl-6 space-y-2 text-base text-[#374151]">
                    <li>
                      <strong className="text-[#111827]">Automated Agendas &amp; Summaries:</strong> AI-generated notes appear instantly post-call in a structured format, ready to export or share with teammates.
                    </li>
                    <li>
                      <strong className="text-[#111827]">Searchable Meeting History:</strong> A unified search bar lets users query past transcripts and action items using natural language without manual tagging.
                    </li>
                  </ul>
                </div>
              </section>

              {/* 6. Visual System & UI Components */}
              <section className="space-y-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                    🎨 Visual System &amp; UI Components
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
                    <h5 className="font-semibold text-gray-900 text-base">Typography</h5>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Clean geometric sans-serif type hierarchy optimized for readability during screen shares and dense data lists.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
                    <h5 className="font-semibold text-gray-900 text-base">Dark &amp; Light Contrast</h5>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      High-contrast control states ensure that active mic/video states are instantly recognizable at a glance even in dim light.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
                    <h5 className="font-semibold text-gray-900 text-base">Modular Cards</h5>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Soft rounded containers and consistent spacing keep the dashboard looking clean, even when displaying heavy team schedules.
                    </p>
                  </div>
                </div>

                {/* State Color Tokens Visual */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-emerald-900">Active Live</p>
                      <p className="text-[10px] text-emerald-700">Mic / Video Active</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 flex items-center gap-2.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#2563EB] shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-blue-900">Primary Hub</p>
                      <p className="text-[10px] text-blue-700">Start / Join / Schedule</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-200 flex items-center gap-2.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-purple-500 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-purple-900">AI Intelligence</p>
                      <p className="text-[10px] text-purple-700">Summary &bull; Action Items</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-gray-100 border border-gray-200 flex items-center gap-2.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-gray-500 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-gray-900">Neutral Surface</p>
                      <p className="text-[10px] text-gray-700">Contextual Side Drawers</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 7. Summary of Improvements Comparison Table */}
              <section className="space-y-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                    📊 Summary of Improvements
                  </h3>
                </div>

                <div className="w-full overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead className="bg-[#F8FAFC] border-b border-gray-200">
                      <tr>
                        <th className="py-4 px-5 font-semibold text-[#111827] w-1/4">
                          Experience Area
                        </th>
                        <th className="py-4 px-5 font-semibold text-[#111827] w-3/8">
                          Standard Meeting Tools
                        </th>
                        <th className="py-4 px-5 font-semibold text-[#111827] w-3/8 text-[#2563EB]">
                          Redesigned HiveMeet Experience
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-[#374151]">
                      <tr className="hover:bg-gray-50/70 transition-colors">
                        <td className="py-4 px-5 font-semibold text-[#111827] align-top">
                          Pre-Meeting Prep
                        </td>
                        <td className="py-4 px-5 leading-relaxed align-top text-[#6B7280]">
                          Scattered calendar invites and manual document searching
                        </td>
                        <td className="py-4 px-5 leading-relaxed align-top font-medium text-[#111827]">
                          Centralized dashboard with instant meeting access and recent files
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/70 transition-colors">
                        <td className="py-4 px-5 font-semibold text-[#111827] align-top">
                          Live Call Experience
                        </td>
                        <td className="py-4 px-5 leading-relaxed align-top text-[#6B7280]">
                          Cluttered overlays and hidden features
                        </td>
                        <td className="py-4 px-5 leading-relaxed align-top font-medium text-[#111827]">
                          Pinned primary toolbars with smooth contextual side drawers
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/70 transition-colors">
                        <td className="py-4 px-5 font-semibold text-[#111827] align-top">
                          Post-Meeting Follow-ups
                        </td>
                        <td className="py-4 px-5 leading-relaxed align-top text-[#6B7280]">
                          Manual note-taking and lost action items
                        </td>
                        <td className="py-4 px-5 leading-relaxed align-top font-medium text-[#111827]">
                          Automated AI summaries, action item extraction, and searchable history
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 8. Key Takeaways */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                    🧠 Key Takeaways
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
                    <span className="text-xs uppercase font-bold text-[#2563EB] tracking-wider">01 &bull; Priority</span>
                    <h4 className="text-base font-semibold text-gray-900">Simplicity requires ruthless prioritization</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      When designing an all-in-one workspace, keeping the primary video and scheduling views clean is essential to avoid overwhelming users.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
                    <span className="text-xs uppercase font-bold text-[#7C3AED] tracking-wider">02 &bull; Utility</span>
                    <h4 className="text-base font-semibold text-gray-900">Contextual AI integration wins</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Placing AI tools where the user naturally looks for notes and transcripts drives higher engagement than burying them in separate menus.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
                    <span className="text-xs uppercase font-bold text-[#2563EB] tracking-wider">03 &bull; Architecture</span>
                    <h4 className="text-base font-semibold text-gray-900">Structure before style</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Mapping out clear user flows from pre-meeting prep to post-meeting follow-ups laid a rock-solid foundation for the UI design.
                    </p>
                  </div>
                </div>
              </section>

            </div>

            {/* ========================================================= */}
            {/* MORE WORKS SECTION                                        */}
            {/* ========================================================= */}
            <MoreWorks currentSlug="hivemeet" />

          </div>
        </div>

      </div>
    </article>
  );
}
