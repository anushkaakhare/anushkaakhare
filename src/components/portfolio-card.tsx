"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface PortfolioCardProps {
  id?: string | number;
  title?: string;
  description?: string;
  tags?: string[];
  category?: string;
  image: string;
  alt?: string;
  link?: string;
  badge?: React.ReactNode;
  className?: string;
}

export default function PortfolioCard({
  title = "Pulma",
  description,
  tags = ["Framer Website", "Web Design"],
  image,
  alt,
  link = "/case-studies",
  badge,
  className = "",
}: PortfolioCardProps) {
  const content = (
    <div
      className={`relative w-full max-w-[626px] aspect-[626/475] rounded-[24px] sm:rounded-[36px] md:rounded-[48px] overflow-hidden group transition-all duration-500 ease-out  hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.7)] cursor-pointer ${className}`}
      style={{
        maxWidth: 626,
        maxHeight: 475,
      }}
    >
      {/* Inner Frame with overflow-hidden for Inward Image Zoom */}
      <div className="relative w-full h-full rounded-[24px] sm:rounded-[36px] md:rounded-[48px] overflow-hidden bg-[#18202c]">
        {/* Card Image: Zooms inwards on hover */}
        <Image
          src={image}
          alt={alt || title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 626px"
          priority={false}
          className="object-cover w-full h-full transition-transform duration-700 ease-out scale-105 group-hover:scale-100 select-none pointer-events-none"
        />

        {/* Ambient Dark Gradient for Bottom-Left Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none transition-opacity duration-300" />

        {/* Optional Custom Top-Right Badge */}
        {badge && (
          <div className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 md:top-4 md:right-4 z-20 transition-transform duration-300 group-hover:scale-110">
            {typeof badge === "string" ? (
              <div className="px-3 py-1 rounded-full bg-[#1c2434]/85 backdrop-blur-md border border-white/25 shadow-lg flex items-center justify-center text-white font-semibold text-xs sm:text-sm">
                {badge}
              </div>
            ) : (
              badge
            )}
          </div>
        )}

        {/* Bottom Left Corner: Project Name & Design Tags (Matching Reference Image) */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-7 md:left-7 lg:bottom-8 lg:left-8 z-20 flex flex-col items-start max-w-[90%] transition-transform duration-300 ease-out group-hover:-translate-y-1">
          {/* Project Title */}
          {title && (
            <h3 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-normal text-white tracking-tight leading-none mb-1 sm:mb-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              {title}
            </h3>
          )}

          {/* Optional Project Description */}
          

          {/* Design Tags / Pills */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-2.5 mt-0.5">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/50 text-white font-medium text-[11px] sm:text-xs md:text-sm leading-none transition-colors select-none shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Subtle Glassmorphic Hover Sheen */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </div>
  );

  if (link) {
    return (
      <Link
        href={link}
        className="block w-full max-w-[626px] mx-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FD853A] rounded-[24px] sm:rounded-[36px] md:rounded-[48px]"
      >
        {content}
      </Link>
    );
  }

  return content;
}
