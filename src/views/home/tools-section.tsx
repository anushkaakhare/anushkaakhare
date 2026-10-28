"use client";

import React from "react";
import Image from "next/image";

const TOOLS = [
  { name: "Figma", src: "/figma.avif" },
  { name: "Framer", src: "/frammer.avif" },
  { name: "Notion", src: "/notion.avif" },
  { name: "LottieFiles", src: "/lottefile.avif" },
  { name: "Medium", src: "/whatever.avif" },
];

export default function ToolsSection() {
  return (
    <section id="tools" className="w-full py-8 sm:py-12 md:py-16 bg-white select-none">
      <div className="w-full custom-container mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="relative flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <Image
                src={tool.src}
                alt={tool.name}
                width={64}
                height={64}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain select-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
