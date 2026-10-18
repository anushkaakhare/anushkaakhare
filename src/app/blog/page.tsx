import type { Metadata } from "next";
import BlogListingClient from "./blog-listing-client";

export const metadata: Metadata = {
  title: "Blog & Design Insights",
  description:
    "Deep dives into product strategy, modern UI/UX workflows, micro-interactions, and design systems by Anushka Akhare.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog & Design Insights | Anushka Akhare",
    description:
      "Deep dives into product strategy, modern UI/UX workflows, micro-interactions, and design systems by Anushka Akhare.",
    url: "https://anushka-portfolio.com/blog",
    images: [
      {
        url: "/blog/blog-1.jpg",
        width: 1200,
        height: 630,
        alt: "Anushka Akhare Design Articles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Design Insights | Anushka Akhare",
    description:
      "Deep dives into product strategy, modern UI/UX workflows, and design engineering by Anushka Akhare.",
    images: ["/blog/blog-1.jpg"],
  },
};

export default function BlogListingPage() {
  return <BlogListingClient />;
}
