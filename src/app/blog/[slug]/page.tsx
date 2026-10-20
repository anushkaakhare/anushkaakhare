import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blog-posts";
import { ArrowUpRightSvg } from "@/svg";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Anushka Akhare`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `https://anushkaakhare.vercel.app/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Anushka Akhare`,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <article className="w-full min-h-screen bg-white select-none">
      {/* Header Container */}
      <section className="relative w-full pt-8 sm:pt-12 md:pt-14 pb-12 sm:pb-16 bg-gradient-to-b from-[#F9FAFB] to-white border-b border-[#F2F4F7]">
        <div className="w-full custom-container mx-auto px-4 sm:px-6">
          {/* Top Navigation Bar */}
          <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group cursor-pointer"
            >
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#182230] group-hover:bg-[#FD853A] text-white flex items-center justify-center font-bold text-sm sm:text-base transition-colors duration-200 shadow-sm">
                AA
              </span>
              <span className="text-[#1D2939] font-semibold text-sm sm:text-base tracking-tight group-hover:text-[#FD853A] transition-colors">
                Anushka Akhare
              </span>
            </Link>

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-white border border-[#E4E7EC] hover:border-[#FD853A]/40 text-xs sm:text-sm font-medium text-[#344054] hover:text-[#FD853A] shadow-sm transition-all duration-200 cursor-pointer"
            >
              <span>← Back to all articles</span>
            </Link>
          </div>

          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#667085] mb-5">
            <Link href="/" className="hover:text-[#FD853A] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#FD853A] transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-[#1D2939] font-medium truncate max-w-[200px] sm:max-w-none">
              {post.category}
            </span>
          </div>

          {/* Category Pill Tag */}
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FD853A]/10 text-[#FD853A] text-xs sm:text-sm font-semibold">
            {post.category}
          </span>

          {/* Article Title */}
          <h1 className="mt-4 text-2xl sm:text-4xl md:text-5xl font-semibold text-[#1D2939] tracking-tight leading-[1.2] max-w-4xl">
            {post.title}
          </h1>

          {/* Meta Details: Author, Date, Read Time */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-y-2 text-xs sm:text-sm text-[#475467] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#FD853A] shrink-0 mr-2" />
            <span>Written by {post.author}</span>
            <span className="w-2 h-2 rounded-full bg-[#FD853A] shrink-0 mx-2.5" />
            <span>{post.date}</span>
            <span className="w-2 h-2 rounded-full bg-[#FD853A] shrink-0 mx-2.5" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-[860px] mx-auto px-4 sm:px-6">
          {/* Featured Image */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[24px] sm:rounded-[36px] overflow-hidden shadow-xl mb-10 sm:mb-14">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 860px) 100vw, 860px"
            />
          </div>

          {/* Excerpt Intro Callout */}
          <div className="p-6 sm:p-8 rounded-[20px] bg-[#FFF8F5] border-l-4 border-[#FD853A] text-[#1D2939] text-base sm:text-lg font-medium leading-relaxed mb-10">
            {post.excerpt}
          </div>

          {/* Body Paragraphs */}
          <div className="prose prose-lg max-w-none space-y-6 text-[#344054] text-sm sm:text-base md:text-[17px] leading-relaxed font-normal">
            {post.content?.map((paragraph, index) => {
              const colonIndex = paragraph.indexOf(":");
              if (/^\d+\./.test(paragraph) && colonIndex !== -1) {
                const heading = paragraph.slice(0, colonIndex);
                const body = paragraph.slice(colonIndex + 1);
                return (
                  <div key={index} className="pt-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#1D2939] mb-1.5">
                      {heading}
                    </h3>
                    <p className="text-[#344054]">{body.trim()}</p>
                  </div>
                );
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-[#E4E7EC] flex flex-wrap items-center gap-2">
            <span className="text-xs sm:text-sm text-[#667085] font-medium mr-2">
              Tags:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full bg-[#F2F4F7] text-[#344054] text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Back to Blog Button */}
          <div className="mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#182230] hover:bg-[#FD853A] text-white text-sm font-medium transition-colors duration-200"
            >
              <span>← Back to all articles</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="w-full py-16 sm:py-24 bg-white border-t border-[#F2F4F7]">
          <div className="w-full custom-container mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 sm:pb-12 md:pb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1D2939] tracking-tight leading-[1.15]">
                <span>Related</span>
                <br />
                <span>Articles</span>
              </h2>

              <Link
                href="/blog"
                className="self-start sm:self-auto inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#FD853A] hover:bg-[#e67329] text-white font-medium text-sm sm:text-base transition-all duration-200 active:scale-95 shadow-sm shadow-[#FD853A]/30 cursor-pointer"
              >
                See All
              </Link>
            </div>

            {/* 3-Column Blog Cards Grid matching Homepage Blog Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 lg:gap-8 items-start">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="group flex flex-col cursor-pointer"
                >
                  {/* Image Container with Bottom-Right Floating Arrow Button */}
                  <div className="relative w-full aspect-[1/0.95] rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#F2F4F7]">
                    <Image
                      src={related.image}
                      alt={related.title}
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
                      {related.category}
                    </span>
                  </div>

                  {/* Author & Date Meta Row with Orange Dots */}
                  <div className="mt-3 sm:mt-3.5 flex items-center text-xs sm:text-[13.5px] text-[#475467] font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#FD853A] shrink-0 mr-2" />
                    <span>{related.author}</span>
                    <span className="w-2 h-2 rounded-full bg-[#FD853A] shrink-0 mx-2.5" />
                    <span>{related.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-2.5 sm:mt-3 text-lg sm:text-xl md:text-[21px] font-semibold text-[#1D2939] tracking-tight leading-snug group-hover:text-[#FD853A] transition-colors duration-200">
                    {related.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Minimal Bottom Bar */}
      <footer className="w-full py-8 border-t border-[#F2F4F7] bg-white">
        <div className="w-full custom-container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#667085]">
          <p>© 2026 Anushka Akhare. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/blog"
              className="hover:text-[#FD853A] font-medium transition-colors"
            >
              ← All Articles
            </Link>
            <span>•</span>
            <Link
              href="/"
              className="hover:text-[#FD853A] font-medium transition-colors"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </footer>
    </article>
  );
}
