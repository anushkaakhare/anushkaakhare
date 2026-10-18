export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  content?: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "design-unraveled-behind-the-scenes",
    title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
    excerpt:
      "A deep dive into the design philosophy, micro-interactions, and visual hierarchy that turn complex applications into delightful, effortless digital experiences.",
    category: "UI/ UX Design",
    author: "Jayesh Patil",
    date: "10 Nov, 2023",
    readTime: "5 min read",
    image: "/blog/blog-1.jpg",
    tags: ["UI/UX Design", "Glassmorphism", "Micro-interactions", "Figma"],
    content: [
      "Creating modern user interfaces is more than just arranging pretty pixels. It is about understanding human cognitive load, crafting visual harmony, and guiding users through an intuitive digital journey.",
      "In this exploration, we dissect the layers of glassmorphism, contextual lighting, and tactile feedback in mobile music experiences. We examine how subtle gradients and deliberate spacing can drastically elevate user engagement and product retention.",
      "Key takeaways include reducing cognitive friction through clean typography, orchestrating fluid 60fps transitions, and maintaining accessibility standards without sacrificing cutting-edge aesthetics.",
    ],
  },
  {
    id: 2,
    slug: "sugee-loan-management-system-rural-sector",
    title: "Sugee: Loan Management System for Rural Sector.",
    excerpt:
      "How we designed an enterprise SaaS banking and loan origination dashboard tailored specifically for cooperative banks and agricultural financial institutions.",
    category: "App Design",
    author: "Jayesh Patil",
    date: "09 Oct, 2023",
    readTime: "7 min read",
    image: "/blog/blog-2.jpg",
    tags: ["App Design", "Fintech", "SaaS Dashboard", "Data Visualization"],
    content: [
      "Rural financial institutions often grapple with legacy software that suffers from cluttered interfaces and inefficient data entry flows. Sugee was conceived to revolutionize this landscape.",
      "We engineered a modern, modular design system prioritizing high data density with zero visual clutter. By leveraging interactive line charts, instant status badges, and simplified KYC verification pipelines, loan approval turnaround times dropped by 42%.",
      "This case study highlights our user research in regional cooperative banks, usability testing with non-technical bank officers, and the architectural choices behind the green-themed visual system.",
    ],
  },
  {
    id: 3,
    slug: "cinetrade-innovative-way-to-invest-in-digital-media",
    title: "Cinetrade: Innovative way to invest in Digital Media",
    excerpt:
      "Designing a groundbreaking mobile trading platform that allows movie fans and retail investors to invest in upcoming cinema projects and digital film assets.",
    category: "App Design",
    author: "Jayesh Patil",
    date: "13 Aug, 2023",
    readTime: "6 min read",
    image: "/blog/blog-3.jpg",
    tags: ["App Design", "Mobile Trading", "Cinema Tech", "Dark Mode UI"],
    content: [
      "Cinetrade bridges the exciting world of blockbuster cinema with modern financial technology. The app allows users to trade media futures, participate in box-office prediction contests, and fund independent cinema projects.",
      "Our design strategy focused on a sleek, dark-mode-first aesthetic inspired by neon cinema marquees and premium investment terminals. High-contrast typography and fluid bottom navigation enable effortless transitions between movie catalogs and real-time portfolio charts.",
      "We share insights into gamified trading mechanics, compliance-first onboarding, and building high-trust financial interfaces for creative audiences.",
    ],
  },
  {
    id: 4,
    slug: "mastering-framer-motion-in-nextjs",
    title: "Mastering Fluid Animations: Framer & Next.js in Harmony",
    excerpt:
      "Tactical techniques to build buttery smooth 120fps scroll interactions and page transitions without sacrificing Core Web Vitals or lighthouse performance.",
    category: "UI/ UX Design",
    author: "Anushka Akhare",
    date: "28 Jul, 2023",
    readTime: "4 min read",
    image: "/blog/blog-1.jpg",
    tags: ["Frontend", "Animation", "Next.js", "Performance"],
    content: [
      "Modern web experiences demand fluid motion that feels physical and tactile. However, poorly implemented scroll listeners can devastate rendering performance.",
      "Learn how to leverage hardware-accelerated transforms, Lenis smooth scrolling, and CSS keyframe tracks to build award-winning micro-animations that load instantaneously.",
    ],
  },
  {
    id: 5,
    slug: "building-scalable-design-systems-from-scratch",
    title: "Building Scalable Design Systems: From Tokens to Code",
    excerpt:
      "A complete guide to establishing atomic design tokens, typography scales, and component libraries that bridge the gap between design and development.",
    category: "Design System",
    author: "Anushka Akhare",
    date: "15 Jun, 2023",
    readTime: "8 min read",
    image: "/blog/blog-2.jpg",
    tags: ["Design System", "Figma", "Tailwind CSS", "Architecture"],
    content: [
      "A great design system is not just a UI kit—it is a shared language between product, design, and engineering teams. Discover how to structure semantic tokens and enforce consistency across multi-platform products.",
    ],
  },
  {
    id: 6,
    slug: "the-psychology-of-minimalist-interfaces",
    title: "The Psychology of Simplicity: Less Noise, More Signal",
    excerpt:
      "Why minimal interfaces consistently outperform cluttered layouts in conversion rates, user satisfaction, and long-term product engagement.",
    category: "User Research",
    author: "Jayesh Patil",
    date: "02 May, 2023",
    readTime: "5 min read",
    image: "/blog/blog-3.jpg",
    tags: ["UX Research", "Psychology", "Minimalism", "Conversion"],
    content: [
      "Every element on a screen demands attention. By strategically employing whitespace, clear typographic hierarchy, and intuitive affordances, we empower users to achieve their goals with zero distraction.",
    ],
  },
];
