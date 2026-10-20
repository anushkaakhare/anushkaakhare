"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import MoreWorks from "@/components/more-works";

export default function HivePropertyCaseStudy() {
  return (
    <article className="w-full min-h-screen bg-[#1E293B] relative overflow-x-clip pb-24">
      {/* Soft Ambient Background Atmosphere */}
      <div className="absolute top-0 left-0 right-0 h-[640px] sm:h-[720px] md:h-[800px] overflow-hidden pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 filter blur-[70px] opacity-50"
          style={{ backgroundImage: "url('/Property_case.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/70 via-[#1E293B]/80 to-[#1E293B]" />
      </div>

      {/* Hero Container */}
      <div className="relative w-full">
        {/* Top Hero Visual Banner */}
        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-6 sm:pt-10 md:pt-14 pb-0">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] max-h-[520px] sm:max-h-[640px] md:max-h-[740px] rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.45)] border border-white/20 bg-[#0F172A]">
            <Image
              src="/Property_case.png"
              alt="HiveProperty Case Study Banner"
              fill
              priority
              sizes="(max-width: 1360px) 100vw, 1360px"
              className="object-cover object-center select-none pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            {/* Top-Right Direct Visit Pill */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
              <a
                href="https://property.hivestaff.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/60 hover:bg-[#FD853A] backdrop-blur-md text-white border border-white/20 text-xs sm:text-sm font-medium transition-all shadow-lg group"
              >
                <span>Live Website</span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-10">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold bg-[#FD853A] text-white shadow-md mb-3">
                PropTech • Case Study
              </span>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md">
                HiveProperty
              </h1>
              <p className="text-white/80 text-sm sm:text-base max-w-xl mt-1">
                Streamlining Real Estate Discovery &amp; Lead Generation
              </p>
            </div>
          </div>
        </div>

        {/* Overlapping White Sheet Modal */}
        <div className="relative z-20 w-full -mt-[60px] xs:-mt-[80px] sm:-mt-[110px] md:-mt-[135px] lg:-mt-[155px]">
          <div className="w-full bg-[#FFFFFF] rounded-t-[36px] sm:rounded-t-[44px] md:rounded-t-[52px] shadow-[0_-20px_80px_rgba(0,0,0,0.12)] px-6 sm:px-12 md:px-16 lg:px-20 pt-8 sm:pt-12 md:pt-14 pb-16 sm:pb-24">

            {/* Top Row: Title & Floating Close Button (✕) */}
            <div className="flex items-start justify-between gap-4 pb-6 sm:pb-8 border-b border-gray-100">
              <div>
                <span className="inline-block text-xs uppercase tracking-wider font-semibold text-[#FD853A] mb-1">
                  YashWorld Products Private Limited
                </span>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#111827]">
                  HiveProperty
                </h1>
                <p className="text-base sm:text-xl text-[#6B7280] font-normal mt-2 max-w-3xl">
                  Streamlining Real Estate Discovery &amp; Lead Generation
                </p>
              </div>

              <div className="flex items-center gap-3 self-start sm:self-auto shrink-0">
                {/* Visit Live Website Button */}
                <a
                  href="https://property.hivestaff.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#FD853A] hover:bg-[#ea6f24] text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-[#FD853A]/25 hover:shadow-lg active:scale-95 group shrink-0"
                >
                  <span>Visit Live Site</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>

                {/* Close Button: Routes back to #project on portfolio */}
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
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:rotate-90 duration-300"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Project Metadata Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 py-6 border-b border-gray-100 text-sm">
              <div>
                <span className="block text-xs uppercase font-semibold text-gray-400 tracking-wider">Role</span>
                <span className="font-semibold text-gray-900 mt-0.5 block">UI/UX Designer</span>
              </div>
              <div>
                <span className="block text-xs uppercase font-semibold text-gray-400 tracking-wider">Timeline</span>
                <span className="font-semibold text-gray-900 mt-0.5 block">2 Weeks</span>
              </div>
              <div>
                <span className="block text-xs uppercase font-semibold text-gray-400 tracking-wider">Platform</span>
                <span className="font-semibold text-gray-900 mt-0.5 block">Responsive Web</span>
              </div>
              <div>
                <span className="block text-xs uppercase font-semibold text-gray-400 tracking-wider">Tools</span>
                <span className="font-semibold text-gray-900 mt-0.5 block">Figma</span>
              </div>
              <div>
                <span className="block text-xs uppercase font-semibold text-gray-400 tracking-wider">Live URL</span>
                <a
                  href="https://property.hivestaff.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#FD853A] hover:underline mt-0.5 truncate"
                >
                  <span>property.hivestaff.in</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Scope Tags */}
            <div className="py-4 border-b border-gray-100 flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase font-semibold text-gray-400 mr-2">Scope:</span>
              {[
                "Information Architecture",
                "Discovery Experience",
                "Project & Property Detail Pages",
                "Lead Flows",
              ].map((scopeItem, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-[#F3F4F6] text-gray-700 text-xs font-medium"
                >
                  {scopeItem}
                </span>
              ))}
            </div>

            {/* ⚡ The Short Version */}
            <section className="py-10 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">⚡</span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                  The Short Version
                </h2>
              </div>
              <div className="bg-[#FFF8F3] border border-[#FFE2CF] rounded-2xl p-6 sm:p-8 space-y-4 text-base sm:text-lg text-gray-800 leading-relaxed">
                <p>
                  Searching for a home or commercial space often means drowning in scattered details, confusing pricing, and pushy sales tactics. On the business side, managing incoming inquiries across multiple platforms creates disconnected workflows.
                </p>
                <p className="font-medium text-gray-900">
                  HiveProperty was designed to fix both sides of this equation. Built as the consumer-facing side of the HiveStaff ecosystem, HiveProperty gives buyers a clean, transparent way to explore properties and track construction progress, while seamlessly routing inquiries straight into HiveStaff as actionable business leads.
                </p>
              </div>
            </section>

            {/* 🎯 What HiveProperty Is (and Why It Matters) */}
            <section className="py-10 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🎯</span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                  What HiveProperty Is (and Why It Matters)
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                HiveProperty is a dedicated property discovery platform that bridges the gap between property seekers and real estate businesses. Rather than acting as a direct transactional marketplace, it focuses entirely on <strong className="text-gray-900">high-intent discovery and lead generation</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FD853A] flex items-center justify-center font-bold text-lg mb-3">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    HiveProperty (User-Facing)
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Where buyers explore listings, compare configurations, review amenities, check verified construction updates, and request site visits.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg mb-3">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    HiveStaff (Business-Facing)
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Where property developers manage inventory, publish listings to HiveProperty, and handle incoming user inquiries as actionable Project Leads.
                  </p>
                </div>
              </div>
            </section>

            {/* 🔍 The Problem */}
            <section className="py-10 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🔍</span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                  The Problem
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                Designing real estate portals comes with unique UX friction points:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-red-50/60 border border-red-100">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-red-700 flex items-center justify-center font-bold text-sm mb-3">
                    01
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    Information Overload
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Property detail pages are inherently dense—balancing floor plans, pricing, amenities, and location data without overwhelming the user is tricky.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-100">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm mb-3">
                    02
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    Lack of Transparency
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Buyers struggle to find reliable, up-to-date construction progress, making them hesitant to reach out and inquire.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-100">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm mb-3">
                    03
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    Disconnected Workflows
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Disjointed inquiry forms lead to lost context, leaving businesses with cold leads and buyers with delayed responses.
                  </p>
                </div>
              </div>
            </section>

            {/* 🚀 The Goal & Design Principles */}
            <section className="py-10 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🚀</span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                  The Goal &amp; Design Principles
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-800 font-medium mb-6">
                My objective was clear: <span className="text-[#FD853A]">Help buyers evaluate properties with confidence, and make sending an inquiry feel effortless.</span>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-[#F9FAFB] border border-gray-200/80">
                  <h3 className="font-semibold text-gray-900 text-base mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FD853A]" />
                    Progressive Disclosure
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Show high-level pricing and configurations first; reveal technical specifications as the user dives deeper.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F9FAFB] border border-gray-200/80">
                  <h3 className="font-semibold text-gray-900 text-base mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FD853A]" />
                    Trust Through Visibility
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Prioritize verified construction updates, clear pricing, and floor plans over generic marketing text.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F9FAFB] border border-gray-200/80">
                  <h3 className="font-semibold text-gray-900 text-base mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FD853A]" />
                    Context-Aware Inquiries
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Place inquiry and site-visit actions naturally throughout the journey — not just as generic pop-ups.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F9FAFB] border border-gray-200/80">
                  <h3 className="font-semibold text-gray-900 text-base mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FD853A]" />
                    Ecosystem Synergy
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Ensure every user action on HiveProperty seamlessly populates structured lead data inside HiveStaff.
                  </p>
                </div>
              </div>
            </section>

            {/* 💡 Key Design Decisions */}
            <section className="py-10 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xl">💡</span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                  Key Design Decisions
                </h2>
              </div>

              <div className="space-y-8">
                {/* 1. Discovery-First Homepage */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#F9FAFB] border border-gray-200">
                  <span className="text-xs font-bold uppercase text-[#FD853A] tracking-wider">Decision 1</span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-1 mb-3">
                    A Discovery-First Homepage
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                    Instead of cluttering the landing page with endless ads, the homepage focuses entirely on intent.
                  </p>
                  <ul className="space-y-2.5 text-sm sm:text-base text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FD853A] font-bold mt-1">•</span>
                      <span><strong>High-Intent Search Hub:</strong> Prominent filters for location, budget, and property type sit right at the top so users can start searching in one click.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FD853A] font-bold mt-1">•</span>
                      <span><strong>Curated Collections:</strong> Structured sections highlight featured projects and new launches, helping undecided users explore options quickly.</span>
                    </li>
                  </ul>
                </div>

                {/* 2. Scannable Listing Cards & Comparison */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#F9FAFB] border border-gray-200">
                  <span className="text-xs font-bold uppercase text-[#FD853A] tracking-wider">Decision 2</span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-1 mb-3">
                    Scannable Listing Cards &amp; Comparison
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                    Browsing through dozens of properties can get exhausting fast.
                  </p>
                  <ul className="space-y-2.5 text-sm sm:text-base text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FD853A] font-bold mt-1">•</span>
                      <span><strong>At-a-Glance Metrics:</strong> Listing cards display only essential criteria—price, carpet area, configuration (e.g., 2 &amp; 3 BHK), and location.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FD853A] font-bold mt-1">•</span>
                      <span><strong>Unified Layout:</strong> Standardized card layouts across all property types make side-by-side comparison effortless.</span>
                    </li>
                  </ul>
                </div>

                {/* 3. Modular Project & Unit Detail Pages */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#F9FAFB] border border-gray-200">
                  <span className="text-xs font-bold uppercase text-[#FD853A] tracking-wider">Decision 3</span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-1 mb-3">
                    Modular Project &amp; Unit Detail Pages
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                    Real estate developments hold two layers of information: the overall project (amenities, builder info, location) and the specific unit (floor plan, price breakdown, facing).
                  </p>

                  <div className="overflow-x-auto mt-4 rounded-xl border border-gray-200 bg-white">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-gray-100 text-gray-900 font-semibold border-b border-gray-200">
                        <tr>
                          <th className="px-5 py-3">Page Type</th>
                          <th className="px-5 py-3">Focused Experience</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-gray-700">
                        <tr>
                          <td className="px-5 py-3.5 font-medium text-gray-900 whitespace-nowrap">Project Detail Page</td>
                          <td className="px-5 py-3.5">Highlights overall master plans, shared amenities, neighborhood maps, and builder credentials.</td>
                        </tr>
                        <tr>
                          <td className="px-5 py-3.5 font-medium text-gray-900 whitespace-nowrap">Unit Detail Page</td>
                          <td className="px-5 py-3.5">Zooms in on specific layout configurations, carpet area, exact pricing, and availability.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 4. Dedicated Construction Progress Tracker */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#F9FAFB] border border-gray-200">
                  <span className="text-xs font-bold uppercase text-[#FD853A] tracking-wider">Decision 4</span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-1 mb-3">
                    Dedicated Construction Progress Tracker
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                    Buying an under-construction property involves risk. To build confidence, I designed a dedicated Construction Progress section on project pages:
                  </p>
                  <ul className="space-y-2.5 text-sm sm:text-base text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FD853A] font-bold mt-1">•</span>
                      <span><strong>Visual Timelines:</strong> Clear milestones showing completed vs. ongoing phases.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FD853A] font-bold mt-1">•</span>
                      <span><strong>Verified Photo Updates:</strong> Direct image logs provided by developers through HiveStaff, keeping buyers informed without requiring endless phone calls.</span>
                    </li>
                  </ul>
                </div>

                {/* 5. Seamless Lead Capture to HiveStaff */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#F9FAFB] border border-gray-200">
                  <span className="text-xs font-bold uppercase text-[#FD853A] tracking-wider">Decision 5</span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-1 mb-3">
                    Seamless Lead Capture to HiveStaff
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                    Asking users to submit their contact info requires a balance of timing and value.
                  </p>
                  <ul className="space-y-2.5 text-sm sm:text-base text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FD853A] font-bold mt-1">•</span>
                      <span><strong>Embedded Actions:</strong> High-intent buttons (&ldquo;Schedule a Site Visit&rdquo; or &ldquo;Download Brochure&rdquo;) trigger short, friction-free modal forms.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FD853A] font-bold mt-1">•</span>
                      <span><strong>Direct Lead Pipeline:</strong> Every submission instantly transfers to the business’s HiveStaff dashboard as a structured Project Lead, carrying over the exact property, unit type, and budget the user was looking at.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 🎨 Visual Direction */}
            <section className="py-10 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xl">🎨</span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                  Visual Direction
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-[#F9FAFB] border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Typography</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Clean, highly legible sans-serif type hierarchy engineered for fast scanning of numerical data (pricing, square footage, configuration).
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#F9FAFB] border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Layout &amp; Cards</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Card-based UI with generous whitespace, rounded borders, and clean dividers to organize complex specifications effortlessly.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#F9FAFB] border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Action Colors</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    High-contrast primary accents reserved exclusively for conversion points like inquiry and site-visit buttons.
                  </p>
                </div>
              </div>
            </section>

            {/* 📈 What Changed & Lessons Learned */}
            <section className="py-10 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xl">📈</span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                  What Changed &amp; Lessons Learned
                </h2>
              </div>

              {/* Comparison Table */}
              <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white mb-8">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#111827] text-white font-medium">
                    <tr>
                      <th className="px-5 py-3.5">Journey Stage</th>
                      <th className="px-5 py-3.5">Old / Standard Model</th>
                      <th className="px-5 py-3.5 text-[#FD853A]">Redesigned HiveProperty Experience</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-700">
                    <tr>
                      <td className="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap">Search &amp; Discovery</td>
                      <td className="px-5 py-4 text-gray-500">Cluttered portals with hidden filters</td>
                      <td className="px-5 py-4 font-medium text-gray-900">Streamlined search bar with immediate property type &amp; budget controls</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap">Information Layout</td>
                      <td className="px-5 py-4 text-gray-500">Wall-of-text specifications</td>
                      <td className="px-5 py-4 font-medium text-gray-900">Grouped modular sections (Overview, Amenities, Layouts, Progress)</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap">Business Hand-off</td>
                      <td className="px-5 py-4 text-gray-500">Unstructured email/SMS inquiries</td>
                      <td className="px-5 py-4 font-medium text-gray-900">Automatic lead generation routed directly into HiveStaff CRM</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Core Takeaways */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Core Takeaways:
                </h3>
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#FD853A] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Design for the entire ecosystem</h4>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        A great B2C discovery experience is only half the battle; ensuring the B2B side (HiveStaff) receives structured data is what makes the product successful.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#FD853A] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Information hierarchy is everything</h4>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        Grouping dense technical data into scannable visual chunks reduces user cognitive load drastically.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#FD853A] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Trust drives conversion</h4>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        Providing transparent construction updates and clear pricing upfront leads to higher-quality inquiries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Live Website CTA Callout */}
            <div className="my-10 sm:my-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#FD853A]">
                  Live Project
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Experience HiveProperty Live
                </h3>
                <p className="text-gray-300 text-sm sm:text-base max-w-xl">
                  Explore the live property discovery platform with interactive filters, modular detail views, and real-time CRM lead pipelines.
                </p>
              </div>
              <a
                href="https://property.hivestaff.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-[#FD853A] hover:bg-[#ea6f24] text-white text-sm sm:text-base font-semibold transition-all shadow-lg shadow-[#FD853A]/30 hover:scale-105 active:scale-95 group cursor-pointer"
              >
                <span>Visit property.hivestaff.in</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>

            {/* More Works Section */}
            <MoreWorks currentSlug="hiveproperty" />
          </div>
        </div>
      </div>
    </article>
  );
}
