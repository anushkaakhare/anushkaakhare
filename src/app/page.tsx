import Hero from "@/views/home/hero";
import PortfolioSection from "@/views/home/portfolio";
import ExperienceSection from "@/views/home/experience";
import HireMeSection from "@/views/home/hire-me";
import TestimonialsSection from "@/views/home/testimonials";
import ProjectDiscussionSection from "@/views/home/discuss";
import BlogSection from "@/views/home/blog-section";

export default function Home() {
  return (
    <main className="relative z-10 w-full flex-1 flex flex-col">
      {/* Hero Section: Sticky during overlap transition */}
      <div className="sticky top-[72px] sm:top-[80px] lg:top-[88px] z-0 w-full">
        <Hero />
      </div>

      {/* Second Section: Overlaps directly on top of the Hero Section */}
      <div className="relative z-10 w-full bg-white">
        <PortfolioSection />
      </div>

      {/* Third Section: Work Experience Timeline */}
      <div className="relative z-10 w-full bg-white">
        <ExperienceSection />
      </div>

      {/* Fourth Section: Why Hire Me */}
      <div className="relative z-10 w-full bg-white">
        <HireMeSection />
      </div>

      {/* Fifth Section: Testimonials */}
      <div className="relative z-10 w-full bg-white">
        <TestimonialsSection />
      </div>

      {/* Sixth Section: Blog Posts */}
      <div className="relative z-10 w-full bg-white">
        <BlogSection />
      </div>

      {/* Seventh Section: Project Discussion / CTA */}
      <div className="relative z-10 w-full bg-white">
        <ProjectDiscussionSection />
      </div>
    </main>
  );
}

