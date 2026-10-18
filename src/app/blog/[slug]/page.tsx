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
      url: `https://anushka-portfolio.com/blog/${post.slug}`,
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

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <article className="w-full min-h-screen bg-white select-none">
      {/* Header Container */}
      <section className="relative w-full pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-16 bg-gradient-to-b from-[#F9FAFB] to-white border-b border-[#F2F4F7]">
        <div className="w-full custom-container mx-auto px-4 sm:px-6">
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
            {post.content?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
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
        <section className="w-full py-14 sm:py-20 bg-[#F9FAFB] border-t border-[#F2F4F7]">
          <div className="w-full custom-container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1D2939] tracking-tight mb-8">
              Related Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="group flex flex-col sm:flex-row gap-5 p-5 rounded-[24px] bg-white border border-[#E4E7EC] hover:border-[#FD853A]/40 transition-all shadow-sm cursor-pointer"
                >
                  <div className="relative w-full sm:w-44 h-40 rounded-[18px] overflow-hidden shrink-0">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="180px"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-xs font-semibold text-[#FD853A]">
                      {related.category}
                    </span>
                    <h3 className="mt-1.5 text-base sm:text-lg font-semibold text-[#1D2939] group-hover:text-[#FD853A] transition-colors leading-snug">
                      {related.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#667085] line-clamp-2">
                      {related.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
