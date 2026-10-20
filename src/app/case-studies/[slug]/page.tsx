import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import OGcollegeCaseStudy from "@/views/case-study/ogcollege-case-study";
import HivePropertyCaseStudy from "@/views/case-study/hiveproperty-case-study";
import MoreWorks from "@/components/more-works";

interface CaseStudySlugProps {
  params: Promise<{
    slug: string;
  }>;
}

interface ProjectDetail {
  title: string;
  category: string;
  role: string;
  timeline: string;
  client: string;
  description: string;
  image: string;
}

const PROJECTS_DATA: Record<string, ProjectDetail> = {
  ogcollege: {
    title: "OGcollege",
    category: "EdTech • Product Design • UX Case Study",
    role: "UI/UX Designer (End-to-End: Audit, User Flows, UI, Mobile)",
    timeline: "8 Weeks",
    client: "OGcollege",
    description:
      "Redesigning college guidance for Indian students — unifying AI counselling, data-driven choice filling, and 1:1 senior mentorship.",
    image: "/OGcollege.png",
  },
  hiveproperty: {
    title: "HiveProperty",
    category: "PropTech • Web App • UX Case Study",
    role: "UI/UX Designer (IA, Discovery, Detail Pages, Lead Flows)",
    timeline: "2 Weeks",
    client: "YashWorld Products Private Limited",
    description:
      "Streamlining real estate discovery & lead generation — transparent listings, verified construction tracker, and automated CRM lead flows.",
    image: "/Property_case.png",
  },
  "apex-studio": {
    title: "HiveProperty",
    category: "PropTech • Web App • UX Case Study",
    role: "UI/UX Designer (IA, Discovery, Detail Pages, Lead Flows)",
    timeline: "2 Weeks",
    client: "YashWorld Products Private Limited",
    description:
      "Streamlining real estate discovery & lead generation — transparent listings, verified construction tracker, and automated CRM lead flows.",
    image: "/Property_case.png",
  },
  luminary: {
    title: "Luminary",
    category: "Mobile App • UIUX Design",
    role: "Lead Mobile UX Designer",
    timeline: "10 Weeks",
    client: "Luminary Health",
    description:
      "Creative digital experiences designed with clarity, speed, and care for daily mindfulness and wellness routines.",
    image: "/demo-3.webp",
  },
  vanguard: {
    title: "Vanguard",
    category: "Framer Website • Product Design",
    role: "Interaction & Framer Developer",
    timeline: "4 Weeks",
    client: "Vanguard Media",
    description:
      "Interactive editorial platform with bespoke micro-interactions, responsive layouts, and lightning fast page performance.",
    image: "/demo-4.webp",
  },
};

export async function generateStaticParams() {
  return Object.keys(PROJECTS_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudySlugProps): Promise<Metadata> {
  const { slug } = await params;
  const project = slug ? PROJECTS_DATA[slug] : undefined;

  if (project) {
    return {
      title: `${project.title} | Case Study`,
      description: project.description,
    };
  }

  const formattedTitle = slug
    ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "Case Study";

  return {
    title: `${formattedTitle} | Case Study`,
    description: `In-depth case study for ${formattedTitle} by Anushka Akhare.`,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudySlugProps) {
  const { slug } = await params;

  // If slug is ogcollege or default, render the full deep-dive UX case study
  if (!slug || slug === "ogcollege" || slug === "og-college") {
    return <OGcollegeCaseStudy />;
  }

  // If slug is hiveproperty, render the full dedicated case study from YashWorld Products
  if (slug === "hiveproperty" || slug === "hive-property" || slug === "apex-studio") {
    return <HivePropertyCaseStudy />;
  }

  const project = (slug && PROJECTS_DATA[slug]) || {
    title: slug
      ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
      : "Case Study",
    category: "Product Design • Case Study",
    role: "UI/UX Designer",
    timeline: "6 Weeks",
    client: "Client Project",
    description:
      "Detailed breakdown of product design challenges, UX research, wireframes, and design solutions.",
    image: "/Property_case.png",
  };

  return (
    <article className="w-full min-h-screen bg-[#F5F6F8] pt-20 sm:pt-24 md:pt-28 pb-20">
      <div className="w-full max-w-[1240px] mx-auto px-3 sm:px-6 lg:px-8">

        {/* Top Hero Preview Visual Banner */}
        <div className="relative w-full h-[240px] sm:h-[340px] md:h-[420px] rounded-t-[28px] sm:rounded-t-[36px] md:rounded-t-[44px] overflow-hidden bg-[#1E293B] shadow-2xl">
          <Image
            src={project.image}
            alt={`${project.title} Case Study Preview`}
            fill
            priority
            className="object-cover object-center opacity-90 transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-white/20 backdrop-blur-md text-white border border-white/30 mb-3">
              {project.category}
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md">
              {project.title}
            </h1>
          </div>
        </div>

        {/* Main Case Study White Sheet */}
        <div className="relative w-full bg-white rounded-b-[28px] sm:rounded-b-[36px] md:rounded-b-[44px] shadow-[0_30px_90px_rgba(0,0,0,0.08)] px-5 sm:px-10 md:px-14 lg:px-18 py-10 sm:py-14 md:py-16">

          {/* Header Row: Title & Close Button */}
          <div className="flex items-start justify-between gap-4 pb-8 border-b border-gray-100">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#111827]">
                {project.title}
              </h2>
              <p className="mt-2 text-base sm:text-lg text-[#6B7280] font-normal max-w-2xl">
                {project.description}
              </p>
            </div>

            <Link
              href="/#project"
              aria-label="Close Case Study"
              className="group shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80 flex items-center justify-center text-gray-600 hover:text-black hover:border-gray-400 hover:scale-105 active:scale-95 transition-all"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:rotate-90 duration-300"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </Link>
          </div>

          {/* 2-Column Metadata & Overview Grid */}
          <section className="py-10 sm:py-12 border-b border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">

              <div className="md:col-span-4 lg:col-span-3 space-y-5 text-sm">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#9CA3AF] font-semibold block mb-1">
                    Role
                  </span>
                  <p className="text-[#1F2937] font-medium leading-snug">
                    {project.role}
                  </p>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-[#9CA3AF] font-semibold block mb-1">
                    Timeline
                  </span>
                  <p className="text-[#1F2937] font-medium leading-snug">
                    {project.timeline}
                  </p>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-[#9CA3AF] font-semibold block mb-1">
                    Client
                  </span>
                  <p className="text-[#1F2937] font-medium leading-snug">
                    {project.client}
                  </p>
                </div>
              </div>

              <div className="md:col-span-8 lg:col-span-9 space-y-6 text-[#374151] text-base sm:text-lg leading-relaxed">
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-[#9CA3AF] font-semibold mb-2">
                    Overview
                  </h3>
                  <p className="text-[#111827] font-normal leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#F9FAFB] border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-[#111827]">
                      Explore Featured UX Case Study
                    </h4>
                    <p className="text-sm text-[#6B7280] mt-1">
                      Check out the end-to-end breakdown for OGcollege with user flows, wireframes, and design decisions.
                    </p>
                  </div>
                  <Link
                    href="/case-studies/ogcollege"
                    className="shrink-0 px-5 py-2.5 rounded-full bg-[#FD853A] hover:bg-[#ea6f24] text-white text-sm font-semibold transition-colors shadow-sm"
                  >
                    View OGcollege &rarr;
                  </Link>
                </div>
              </div>

            </div>
          </section>

          {/* More works common section */}
          <MoreWorks currentSlug={slug} />

        </div>
      </div>
    </article>
  );
}
