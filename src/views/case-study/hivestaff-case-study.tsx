"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import MoreWorks from "@/components/more-works";

export default function HivestaffCaseStudy() {
  return (
    <article className="w-full min-h-screen bg-[#0F172A] relative overflow-x-clip pb-24">
      {/* Soft Ambient Background Atmosphere */}
      <div className="absolute top-0 left-0 right-0 h-[640px] sm:h-[720px] md:h-[800px] overflow-hidden pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 filter blur-[70px] opacity-45"
          style={{ backgroundImage: "url('/hivestaff_redesign_v2.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E293B]/60 via-[#0F172A]/75 to-[#0F172A]" />
      </div>

      {/* Hero Container */}
      <div className="relative w-full">
        {/* ========================================================= */}
        {/* TOP HERO VISUAL (Exact Luzia Framer Pulma Window Mockup)  */}
        {/* ========================================================= */}
        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-6 sm:pt-10 md:pt-14 pb-0">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] max-h-[520px] sm:max-h-[640px] md:max-h-[740px] rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.35),0_12px_32px_rgba(0,0,0,0.2)] border border-white/20 bg-[#FFFBEB]">
            <Image
              src="/hivestaff_redesign_v2.png"
              alt="Hivestaff V2 Case Study Hero"
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
                  Hivestaff V2
                </h1>
                <p className="text-base sm:text-lg text-[#64748B] mt-2 font-normal">
                  Redesigning Mobile Operations for Business Management
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
                    Hivestaff is an all-in-one business management platform that helps companies handle operations, property listings, and incoming customer leads. While the desktop platform offered deep functionality, moving those complex business workflows to mobile was creating heavy cognitive overload for users on the go.
                  </p>
                  <p>
                    For Version 2, I worked closely with our Business Analyst to transform dense operational structures into a clean, intuitive mobile experience. I redesigned key mobile workflows—focusing on visual hierarchy, card modularity, and quick actions so business owners and managers can monitor leads and track tasks seamlessly on smaller screens.
                  </p>
                </div>
              </div>

              {/* Row 2: Categories */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start">
                <div className="md:col-span-3 lg:col-span-2 text-[#71717A] font-normal pt-0.5">
                  Categories
                </div>
                <div className="md:col-span-9 lg:col-span-10 text-[#18181B] font-normal">
                  Enterprise Mobile App &bull; Product Design &bull; Operations UX
                </div>
              </div>

              {/* Row 3: Role */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start">
                <div className="md:col-span-3 lg:col-span-2 text-[#71717A] font-normal pt-0.5">
                  Role
                </div>
                <div className="md:col-span-9 lg:col-span-10 text-[#18181B] font-normal">
                  UI/UX Designer (End-to-End: Mobile Workflows, IA, Component Library, Interaction Design)
                </div>
              </div>

              {/* Row 4: Platform */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start">
                <div className="md:col-span-3 lg:col-span-2 text-[#71717A] font-normal pt-0.5">
                  Platform
                </div>
                <div className="md:col-span-9 lg:col-span-10 text-[#18181B] font-normal">
                  Mobile Application (iOS &amp; Android)
                </div>
              </div>

              {/* Row 5: Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start">
                <div className="md:col-span-3 lg:col-span-2 text-[#71717A] font-normal pt-0.5">
                  Timeline
                </div>
                <div className="md:col-span-9 lg:col-span-10 text-[#18181B] font-normal">
                  14 Weeks
                </div>
              </div>

              {/* Row 6: Collaboration */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start">
                <div className="md:col-span-3 lg:col-span-2 text-[#71717A] font-normal pt-0.5">
                  Collaboration
                </div>
                <div className="md:col-span-9 lg:col-span-10 text-[#18181B] font-normal">
                  Business Analyst, Product Team, Mobile Engineering Team
                </div>
              </div>

              {/* Row 7: Tools */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-start">
                <div className="md:col-span-3 lg:col-span-2 text-[#71717A] font-normal pt-0.5">
                  Tools
                </div>
                <div className="md:col-span-9 lg:col-span-10 text-[#18181B] font-normal">
                  Figma, FigJam, Notion, Linear
                </div>
              </div>

            </div>

            {/* ========================================================= */}
            {/* INTERACTIVE MOBILE DESIGN SHOWCASE                        */}
            {/* ========================================================= */}
            <section className="py-10 sm:py-14">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Mobile Preview Card 1: Lead Card & Status Badges */}
                <div className="rounded-3xl border border-gray-200/90 bg-[#F8FAFC] p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-gray-200/80">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                        01 &bull; Scannable Card
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold">
                        New Lead
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div>
                        <h4 className="text-base font-semibold text-gray-900">Oberoi Sky City &bull; Unit 1402</h4>
                        <p className="text-xs text-gray-500 mt-0.5">Inquiry via HiveProperty Portal</p>
                      </div>

                      <div className="p-3 rounded-2xl bg-white border border-gray-100 space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Buyer</span>
                          <span className="font-medium text-gray-800">Rajesh Malhotra</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Budget</span>
                          <span className="font-semibold text-emerald-600">₹3.85 Cr</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Assigned To</span>
                          <span className="font-medium text-blue-600">Pooja Verma</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-gray-200/80 grid grid-cols-3 gap-2">
                    <button className="py-2 rounded-xl bg-blue-50 text-[#2563EB] text-xs font-semibold text-center hover:bg-blue-100 transition-colors">
                      Call
                    </button>
                    <button className="py-2 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-semibold text-center hover:bg-emerald-100 transition-colors">
                      WhatsApp
                    </button>
                    <button className="py-2 rounded-xl bg-gray-100 text-gray-800 text-xs font-semibold text-center hover:bg-gray-200 transition-colors">
                      Status
                    </button>
                  </div>
                </div>

                {/* Mobile Preview Card 2: Quick-Action Activity Timeline */}
                <div className="rounded-3xl border border-gray-200/90 bg-[#F8FAFC] p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-gray-200/80">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                        02 &bull; Activity Timeline
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-semibold">
                        In Progress
                      </span>
                    </div>
                    <div className="mt-4 space-y-3">
                      <h4 className="text-base font-semibold text-gray-900">Interaction History</h4>
                      
                      <div className="space-y-3 pl-2 border-l-2 border-blue-200 text-xs">
                        <div className="relative pl-3">
                          <span className="absolute -left-[11px] top-1 w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                          <p className="font-semibold text-gray-800">Site Visit Scheduled</p>
                          <p className="text-gray-500 text-[11px]">Today, 4:30 PM with Client</p>
                        </div>
                        <div className="relative pl-3">
                          <span className="absolute -left-[11px] top-1 w-2.5 h-2.5 rounded-full bg-gray-300" />
                          <p className="font-semibold text-gray-800">WhatsApp Brochure Sent</p>
                          <p className="text-gray-500 text-[11px]">Yesterday by Pooja V.</p>
                        </div>
                        <div className="relative pl-3">
                          <span className="absolute -left-[11px] top-1 w-2.5 h-2.5 rounded-full bg-gray-300" />
                          <p className="font-semibold text-gray-800">Lead Captured from HiveProperty</p>
                          <p className="text-gray-500 text-[11px]">2 days ago</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-gray-200/80">
                    <span className="text-xs text-gray-500 block text-center">
                      ✓ Instant one-tap note logging
                    </span>
                  </div>
                </div>

                {/* Mobile Preview Card 3: Bottom Sheet Filtering */}
                <div className="rounded-3xl border border-gray-200/90 bg-[#F8FAFC] p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-gray-200/80">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                        03 &bull; Bottom Sheet Filter
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[11px] font-semibold">
                        Contextual
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      <h4 className="text-base font-semibold text-gray-900">Sticky Filter Controls</h4>
                      
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="px-3 py-1 rounded-full bg-[#2563EB] text-white text-xs font-medium">All Leads (142)</span>
                        <span className="px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 text-xs font-medium">Hot (18)</span>
                        <span className="px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 text-xs font-medium">Follow-Up (34)</span>
                        <span className="px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 text-xs font-medium">Site Visit (12)</span>
                      </div>

                      <div className="p-3 rounded-2xl bg-white border border-gray-100 text-xs text-gray-600 mt-2">
                        <p className="font-medium text-gray-800 mb-1">Live Result Counter</p>
                        <p className="text-[11px] text-gray-500">Zero full-page reloads. Bottom sheets slide up with instant live count updates.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-gray-200/80">
                    <span className="text-xs text-emerald-600 font-medium block text-center">
                      ✓ Non-disruptive slide up sheets
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
                    Executive Summary
                  </h3>
                </div>
                <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl p-6 sm:p-8 space-y-4 text-base sm:text-lg text-[#1E3A8A] leading-relaxed">
                  <p>
                    Hivestaff is an all-in-one business management platform that helps companies handle operations, property listings, and incoming customer leads. While the desktop platform offered deep functionality, moving those complex business workflows to mobile was creating heavy cognitive overload for users on the go.
                  </p>
                  <p className="font-medium text-[#1E3A8A]">
                    For Version 2, I worked closely with our Business Analyst to transform dense operational structures into a clean, intuitive mobile experience. I redesigned key mobile workflows—focusing on visual hierarchy, card modularity, and quick actions so business owners and managers can monitor leads and track tasks seamlessly on smaller screens.
                  </p>
                </div>
              </section>

              {/* 2. What Hivestaff Is (and Why It Matters) */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                    What Hivestaff Is (and Why It Matters)
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                  Hivestaff serves as the central operational backbone for businesses. It handles team workflows, property management, and lead tracking (including inquiries generated from external portals like HiveProperty).
                </p>
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80">
                  <p className="text-base sm:text-lg text-[#111827] font-medium leading-relaxed">
                    The mobile app exists for one primary purpose: <strong>To give business teams instant visibility and quick control over day-to-day operations without needing to sit at a desktop desk.</strong>
                  </p>
                </div>
              </section>

              {/* 3. The Problem */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                    The Problem
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                  Designing mobile interfaces for enterprise tools comes with unique challenges:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="p-6 rounded-2xl bg-[#FFF1F2] border border-[#FECDD3] space-y-2">
                    <span className="text-xs uppercase font-bold text-[#BE123C] tracking-wider">01 &bull; Friction</span>
                    <h4 className="text-lg font-semibold text-gray-900">Information Overload</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Desktop tables packed with status tags, dates, team assignments, and client details felt claustrophobic and unreadable on phone screens.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] space-y-2">
                    <span className="text-xs uppercase font-bold text-[#B45309] tracking-wider">02 &bull; Latency</span>
                    <h4 className="text-lg font-semibold text-gray-900">High Friction Actions</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Simple tasks—like updating a lead state, reassigning a task, or contacting an inquiry—required too many taps through nested menus.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                    <span className="text-xs uppercase font-bold text-[#475569] tracking-wider">03 &bull; Quality</span>
                    <h4 className="text-lg font-semibold text-gray-900">Inconsistent UI Patterns</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      As new operational features were added over time, components lost visual consistency, making navigation feel disjointed.
                    </p>
                  </div>
                </div>
              </section>

              {/* 4. The Goal & Design Principles */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                    The Goal &amp; Design Principles
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                  My main objective was simple: <strong className="text-[#111827]">Make heavy business data scannable at a glance, and make daily actions fast.</strong>
                </p>
                <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                  I anchored my design decisions to four core rules:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <strong className="text-[#111827] block text-base font-semibold">1. Mobile-First Hierarchy</strong>
                    <span className="text-sm text-gray-600 mt-1 block leading-relaxed">
                      Prioritize high-value operational metrics upfront; place deeper specs inside progressive sheets or drawers.
                    </span>
                  </div>
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <strong className="text-[#111827] block text-base font-semibold">2. Thumb-Friendly Ergonomics</strong>
                    <span className="text-sm text-gray-600 mt-1 block leading-relaxed">
                      Keep primary conversion points, filters, and quick actions within easy reach of a single thumb.
                    </span>
                  </div>
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <strong className="text-[#111827] block text-base font-semibold">3. Component Modularity</strong>
                    <span className="text-sm text-gray-600 mt-1 block leading-relaxed">
                      Build a unified design system of cards, status badges, and input controls that scale across all modules.
                    </span>
                  </div>
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <strong className="text-[#111827] block text-base font-semibold">4. Clarity Over Complexity</strong>
                    <span className="text-sm text-gray-600 mt-1 block leading-relaxed">
                      Group related data into clear visual sections instead of endless text lists.
                    </span>
                  </div>
                </div>
              </section>

              {/* 5. Key Design Decisions */}
              <section className="space-y-8 scroll-mt-24">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                    Key Design Decisions
                  </h3>
                </div>

                {/* Decision 1 */}
                <div className="space-y-3 p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-200/80">
                  <h4 className="text-xl sm:text-2xl font-semibold text-[#111827]">
                    1. High-Density Layouts Made Scannable
                  </h4>
                  <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                    To prevent operational dashboards from looking like chaotic text walls, I replaced dense data grids with clean, modular card components.
                  </p>
                  <ul className="list-disc list-outside pl-6 space-y-2 text-base text-[#374151]">
                    <li>
                      <strong className="text-[#111827]">Contextual Badging:</strong> Color-coded status tags (e.g., <em>New Lead</em>, <em>In Progress</em>, <em>Action Required</em>) help managers spot bottlenecks immediately.
                    </li>
                    <li>
                      <strong className="text-[#111827]">Scannable Metrics:</strong> Key data points—like monetary value, follow-up dates, and assigned team members—are visually prioritized using structured typographic scale.
                    </li>
                  </ul>
                </div>

                {/* Decision 2 */}
                <div className="space-y-3 p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-200/80">
                  <h4 className="text-xl sm:text-2xl font-semibold text-[#111827]">
                    2. Streamlined Lead &amp; Task Management
                  </h4>
                  <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                    Managing incoming customer leads requires fast response times. I redesigned the lead details screen to minimize multi-step navigation:
                  </p>
                  <ul className="list-disc list-outside pl-6 space-y-2 text-base text-[#374151]">
                    <li>
                      <strong className="text-[#111827]">Quick-Action Toolbar:</strong> Dedicated one-tap actions (Call, WhatsApp, Assign, Update Status) sit directly at the top of lead profiles.
                    </li>
                    <li>
                      <strong className="text-[#111827]">Activity Timelines:</strong> Complex interaction histories were organized into a clean vertical timeline, making past notes and status updates easy to review on the go.
                    </li>
                  </ul>
                </div>

                {/* Decision 3 */}
                <div className="space-y-3 p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-200/80">
                  <h4 className="text-xl sm:text-2xl font-semibold text-[#111827]">
                    3. Smart Filtering &amp; Bottom Sheet Controls
                  </h4>
                  <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                    Sifting through hundreds of leads or properties on a small screen can be frustrating.
                  </p>
                  <ul className="list-disc list-outside pl-6 space-y-2 text-base text-[#374151]">
                    <li>
                      <strong className="text-[#111827]">Sticky Filter Chips:</strong> Frequently used quick filters sit as scrollable pills right below the page header.
                    </li>
                    <li>
                      <strong className="text-[#111827]">Interactive Bottom Sheets:</strong> Instead of redirecting users to separate filter pages, granular controls slide up as mobile-friendly bottom sheets, keeping the user in context.
                    </li>
                  </ul>
                </div>

                {/* Decision 4 */}
                <div className="space-y-3 p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-200/80">
                  <h4 className="text-xl sm:text-2xl font-semibold text-[#111827]">
                    4. Edge States &amp; System Reliability
                  </h4>
                  <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
                    To ensure business users are never left confused during real-world edge cases:
                  </p>
                  <ul className="list-disc list-outside pl-6 space-y-2 text-base text-[#374151]">
                    <li>
                      Designed clear, actionable empty states with helpful callouts (e.g., <em>&ldquo;No pending leads for today. View all leads&rdquo;</em>).
                    </li>
                    <li>
                      Created non-intrusive offline banners and sync indicators so users know whether their updates were saved locally or updated live on the server.
                    </li>
                  </ul>
                </div>

              </section>

              {/* 6. Visual System & UI Components */}
              <section className="space-y-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                    Visual System &amp; UI Components
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
                    <h5 className="font-semibold text-gray-900 text-base">Typography</h5>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Clean geometric sans-serif engineered for fast reading of dense numbers and text tables on smaller mobile viewports.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
                    <h5 className="font-semibold text-gray-900 text-base">Status Palette</h5>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Standardized color tokens across the app—Success Green, Warning Amber, Neutral Gray, and Primary Blue—ensuring consistent meaning across screens.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
                    <h5 className="font-semibold text-gray-900 text-base">Card &amp; Form Patterns</h5>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Rounded containers with subtle borders and consistent internal padding, giving every operational module a cohesive look and feel.
                    </p>
                  </div>
                </div>

                {/* Status Color Tokens Visual */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-emerald-900">Success Green</p>
                      <p className="text-[10px] text-emerald-700">Closed Won &bull; Active</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 flex items-center gap-2.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#2563EB] shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-blue-900">Primary Blue</p>
                      <p className="text-[10px] text-blue-700">New Lead &bull; Actions</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-2.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-amber-500 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-amber-900">Warning Amber</p>
                      <p className="text-[10px] text-amber-700">Action Required &bull; Pending</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-gray-100 border border-gray-200 flex items-center gap-2.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-gray-500 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-gray-900">Neutral Gray</p>
                      <p className="text-[10px] text-gray-700">Archived &bull; Draft</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 7. Summary of Improvements Comparison Table */}
              <section className="space-y-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111827]">
                    Summary of Improvements
                  </h3>
                </div>

                <div className="w-full overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead className="bg-[#F8FAFC] border-b border-gray-200">
                      <tr>
                        <th className="py-4 px-5 font-semibold text-[#111827] w-1/4">
                          Operational Area
                        </th>
                        <th className="py-4 px-5 font-semibold text-[#111827] w-3/8">
                          Version 1 / Desktop Port
                        </th>
                        <th className="py-4 px-5 font-semibold text-[#111827] w-3/8 text-[#2563EB]">
                          Hivestaff V2 Mobile Experience
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-[#374151]">
                      <tr className="hover:bg-gray-50/70 transition-colors">
                        <td className="py-4 px-5 font-semibold text-[#111827] align-top">
                          Data Viewing
                        </td>
                        <td className="py-4 px-5 leading-relaxed align-top text-[#6B7280]">
                          Horizontal-scrolling desktop tables on mobile viewports
                        </td>
                        <td className="py-4 px-5 leading-relaxed align-top font-medium text-[#111827]">
                          Clean, vertically stacked mobile cards with primary stats highlighted
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/70 transition-colors">
                        <td className="py-4 px-5 font-semibold text-[#111827] align-top">
                          Workflow Actions
                        </td>
                        <td className="py-4 px-5 leading-relaxed align-top text-[#6B7280]">
                          Hidden deep inside multi-level dropdown menus
                        </td>
                        <td className="py-4 px-5 leading-relaxed align-top font-medium text-[#111827]">
                          One-tap primary action bar pinned for quick execution (Call, WhatsApp, Assign)
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/70 transition-colors">
                        <td className="py-4 px-5 font-semibold text-[#111827] align-top">
                          Filtering
                        </td>
                        <td className="py-4 px-5 leading-relaxed align-top text-[#6B7280]">
                          Full-screen form reloads that break user context
                        </td>
                        <td className="py-4 px-5 leading-relaxed align-top font-medium text-[#111827]">
                          Non-disruptive bottom sheets with live result counts &amp; sticky chips
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
                    Key Takeaways
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
                    <span className="text-xs uppercase font-bold text-[#2563EB] tracking-wider">Alignment</span>
                    <h4 className="text-base font-semibold text-gray-900">Cross-functional alignment is key</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Collaborating closely with the Business Analyst upfront saved hours of UI rework by ensuring all business edge cases were mapped early.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
                    <span className="text-xs uppercase font-bold text-[#2563EB] tracking-wider">Context</span>
                    <h4 className="text-base font-semibold text-gray-900">Design for mobile contexts</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Business users on mobile aren&apos;t doing heavy setup—they want fast status checks, quick updates, and immediate communication.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
                    <span className="text-xs uppercase font-bold text-[#2563EB] tracking-wider">Velocity</span>
                    <h4 className="text-base font-semibold text-gray-900">Consistency builds speed</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Standardizing card layouts and status badges drastically reduced the learning curve for existing users adapting to V2.
                    </p>
                  </div>
                </div>
              </section>

            </div>

            {/* ========================================================= */}
            {/* MORE WORKS SECTION                                        */}
            {/* ========================================================= */}
            <MoreWorks currentSlug="hivestaff-v2" />

          </div>
        </div>

      </div>
    </article>
  );
}
