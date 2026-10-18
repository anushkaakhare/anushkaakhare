"use client";

import React from "react";
import Link from "next/link";
import PortfolioCard, { PortfolioCardProps } from "@/components/portfolio-card";

export interface MoreWorksProps {
  currentSlug?: string;
  title?: string;
  className?: string;
}

export const ALL_PROJECTS: (PortfolioCardProps & { slug: string })[] = [
  {
    slug: "ogcollege",
    id: 1,
    title: "OGcollege",
    description:
      "Redesigning college guidance for Indian students — unifying AI counselling, data-driven choice filling, and 1:1 senior mentorship.",
    tags: ["EdTech", "Product Design", "UX Architecture"],
    image: "/demo-1.png",
    alt: "OGcollege: Redesigning College Guidance for Indian Students",
    link: "/case-studies/ogcollege",
  },
  {
    slug: "apex-studio",
    id: 2,
    title: "Apex Studio",
    description:
      "Thoughtful visual identity and digital craft for modern companies.",
    tags: ["Brand Identity", "Web Design"],
    image: "/demo-2.webp",
    alt: "Apex Studio Brand & Design",
    link: "/case-studies/apex-studio",
  },
  {
    slug: "luminary",
    id: 3,
    title: "Luminary",
    description:
      "Creative digital experiences designed with clarity, speed, and care.",
    tags: ["Mobile App", "UIUX Design"],
    image: "/demo-3.webp",
    alt: "Luminary UIUX Design",
    link: "/case-studies/luminary",
  },
  {
    slug: "vanguard",
    id: 4,
    title: "Vanguard",
    description:
      "Interactive editorial platform with bespoke micro-interactions.",
    tags: ["Framer Website", "Product Design"],
    image: "/demo-4.webp",
    alt: "Vanguard Framer Website",
    link: "/case-studies/vanguard",
  },
];

export default function MoreWorks({
  currentSlug,
  title = "More works",
  className = "",
}: MoreWorksProps) {
  // Filter out the active project so we only display other works
  const filteredProjects = currentSlug
    ? ALL_PROJECTS.filter(
        (p) => p.slug !== currentSlug && p.slug !== currentSlug.replace(/-/g, "")
      )
    : ALL_PROJECTS.slice(1);

  return (
    <section className={`pt-16 sm:pt-20 md:pt-24 border-t border-gray-100 ${className}`}>
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8 sm:mb-10">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#111827]">
          {title}
        </h3>
        <Link
          href="/#project"  
          className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-[#FD853A] hover:text-[#e06d27] transition-colors group"
        >
          <span>View all projects</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
        </Link>
      </div>

      {/* Grid of Portfolio Cards matching Home Page Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {filteredProjects.map((project) => (
          <div key={project.id || project.slug} className="flex justify-center w-full">
            <PortfolioCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              alt={project.alt}
              link={project.link}
              className="w-full shadow-lg hover:shadow-2xl transition-all duration-300"
            />
          </div>
        ))}
      </div>

      {/* Return to Portfolio button */}
      <div className="pt-12 sm:pt-16 text-center">
        <Link
          href="/#project"
          className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#18181B] hover:bg-black text-white text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-95 group"
        >
          <span className="transition-transform group-hover:-translate-x-1">&larr;</span>
          <span>Back to Portfolio</span>
        </Link>
      </div>
    </section>
  );
}
