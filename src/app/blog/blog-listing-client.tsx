"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightSvg } from "@/svg";
import { BLOG_POSTS } from "@/data/blog-posts";

const CATEGORIES = [
  "All",
  "UI/ UX Design",
  "App Design",
  "Design System",
  "User Research",
];

export default function BlogListingClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="w-full min-h-screen bg-white select-none">
      {/* Hero Header Area */}
      <section className="relative w-full pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-16 bg-gradient-to-b from-[#F9FAFB] to-white border-b border-[#F2F4F7]">
        <div className="w-full custom-container mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#667085] mb-4">
            <Link href="/" className="hover:text-[#FD853A] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#1D2939] font-medium">Blog</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-[#1D2939] tracking-tight leading-[1.15]">
              Insights, Thoughts &amp;{" "}
              <span className="text-[#FD853A]">Design Craft</span>
            </h1>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[#475467] leading-relaxed font-normal">
              Deep dives into product strategy, modern UI/UX workflows,
              micro-interactions, and design engineering for ambitious digital
              products.
            </p>
          </div>

          {/* Search Bar & Filter Controls */}
          <div className="mt-8 sm:mt-12 flex flex-col md:flex-row md:items-center justify-between gap-5">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#FD853A] text-white shadow-sm shadow-[#FD853A]/25"
                        : "bg-[#F2F4F7] text-[#475467] hover:bg-[#E4E7EC] hover:text-[#1D2939]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full bg-[#F2F4F7] focus:bg-white border border-transparent focus:border-[#FD853A]/40 rounded-full py-2.5 pl-10 pr-4 text-xs sm:text-sm text-[#1D2939] placeholder:text-[#98A2B3] outline-none transition-all"
              />
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#98A2B3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid Section */}
      <section className="w-full py-14 sm:py-20 md:py-24">
        <div className="w-full custom-container mx-auto px-4 sm:px-6">
          {filteredPosts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-[#667085] font-medium">
                No articles found matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#FD853A] text-white text-sm font-medium cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9 lg:gap-10 items-start">
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col cursor-pointer"
                >
                  {/* Card Image Container */}
                  <div className="relative w-full aspect-[1/0.95] rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#F2F4F7]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Bottom-Right Rounded Notch Container */}
                    <div className="absolute bottom-0 right-0 bg-white pt-2.5 pl-2.5 pb-0 pr-0 rounded-tl-[28px] sm:rounded-tl-[32px] z-10">
                      <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-[#182230] group-hover:bg-[#FD853A] flex items-center justify-center text-white transition-all duration-300 shadow-md">
                        <ArrowUpRightSvg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Category Pill Tag */}
                  <div className="mt-5">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FFF2EB] text-[#FD853A] text-xs sm:text-sm font-semibold tracking-[-0.01em]">
                      {post.category}
                    </span>
                  </div>

                  {/* Author & Date Row */}
                  <div className="mt-3 flex items-center gap-2 text-xs sm:text-sm text-[#475467] font-medium">
                    <span>{post.author}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FD853A] shrink-0" />
                    <span>{post.date}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FD853A] shrink-0" />
                    <span className="text-[#98A2B3]">{post.readTime}</span>
                  </div>

                  {/* Card Title */}
                  <h2 className="mt-3 text-lg sm:text-xl lg:text-[22px] font-semibold text-[#1D2939] group-hover:text-[#FD853A] transition-colors leading-[1.3] tracking-tight">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="mt-2 text-xs sm:text-sm text-[#667085] leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
