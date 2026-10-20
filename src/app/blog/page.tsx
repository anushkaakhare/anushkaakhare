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
    url: "https://anushkaakhare.vercel.app/blog",
    images: [
      {
        url: "/blog1.jpeg",
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
    images: ["/blog1.jpeg"],
  },
};

import { BLOG_POSTS } from "@/data/blog-posts";

export default function BlogListingPage() {
  return <BlogListingClient posts={BLOG_POSTS} />;
}
