import type { Metadata } from "next";
import OGcollegeCaseStudy from "@/views/case-study/ogcollege-case-study";

export const metadata: Metadata = {
  title: "OGcollege: Redesigning College Guidance for Indian Students | Case Study",
  description:
    "An in-depth UI/UX case study by Anushka Akhare on redesigning college guidance for Indian students — unifying AI counselling, data-driven choice filling, and 1:1 senior mentorship.",
};

export default function CaseStudiesPage() {
  return <OGcollegeCaseStudy />;
}
