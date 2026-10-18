"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRightSvg } from "@/svg";
import { BLOG_POSTS, BlogPost } from "@/data/blog-posts";

export interface BlogSectionProps {
  posts?: BlogPost[];
}

export default function BlogSection({
  posts = BLOG_POSTS.slice(0, 3),
}: BlogSectionProps) {
  return (
    <section
      id="blog"
      className="relative w-full bg-white py-14 sm:py-20 md:py-24 select-none scroll-mt-24"
    >
      <div className="w-full custom-container mx-auto px-4 sm:px-6">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 sm:pb-12 md:pb-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold text-[#1D2939] tracking-tight leading-[1.15]"
          >
            <span>From my</span>
            <br />
            <span>blog post</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            className="self-start sm:self-auto"
          >
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#FD853A] hover:bg-[#e67329] text-white font-medium text-sm sm:text-base transition-all duration-200 active:scale-95 shadow-sm shadow-[#FD853A]/30 cursor-pointer"
            >
              See All
            </Link>
          </motion.div>
        </div>

        {/* 3-Column Blog Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 lg:gap-8 items-start"
        >
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col cursor-pointer"
            >
              {/* Image Container with Bottom-Right Floating Arrow Button */}
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
              <div className="mt-5 sm:mt-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#F2F4F7] text-[#344054] text-xs sm:text-[13px] font-medium">
                  {post.category}
                </span>
              </div>

              {/* Author & Date Meta Row with Orange Dots */}
              <div className="mt-3 sm:mt-3.5 flex items-center text-xs sm:text-[13.5px] text-[#475467] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#FD853A] shrink-0 mr-2" />
                <span>{post.author}</span>
                <span className="w-2 h-2 rounded-full bg-[#FD853A] shrink-0 mx-2.5" />
                <span>{post.date}</span>
              </div>

              {/* Title */}
              <h3 className="mt-2.5 sm:mt-3 text-lg sm:text-xl md:text-[21px] font-semibold text-[#1D2939] tracking-tight leading-snug group-hover:text-[#FD853A] transition-colors duration-200">
                {post.title}
              </h3>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
