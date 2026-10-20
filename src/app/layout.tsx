import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: "#FD853A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://anushkaakhare.vercel.app"),
  title: {
    default: "Anushka Akhare | UI/UX Designer & Product Designer",
    template: "%s | Anushka Akhare",
  },
  description:
    "Portfolio of Anushka Akhare, a professional UI/UX and Product Designer crafting intuitive digital products, SaaS dashboards, Framer prototypes, and design systems with measurable impact. Contact: anushkaakhare@gmail.com | +91 9975693424.",
  applicationName: "Anushka Akhare Portfolio",
  authors: [{ name: "Anushka Akhare", url: "https://anushkaakhare.vercel.app" }],
  creator: "Anushka Akhare",
  publisher: "Anushka Akhare",
  keywords: [
    "Anushka Akhare",
    "UI/UX Designer",
    "Product Designer",
    "UX Architecture",
    "User Interface Designer",
    "Framer Expert",
    "Design System Specialist",
    "Web Design Portfolio",
    "SaaS UI Design",
    "Mobile App Designer",
    "User Research",
    "Interaction Design",
    "Hire UI/UX Designer",
    "Freelance Product Designer India",
    "anushkaakhare@gmail.com",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anushkaakhare.vercel.app",
    title: "Anushka Akhare | UI/UX Designer & Product Designer",
    description:
      "Explore the design portfolio of Anushka Akhare. Crafting intuitive, conversion-driven digital products and scalable design systems. Contact: anushkaakhare@gmail.com | +91 9975693424.",
    siteName: "Anushka Akhare Portfolio",
    images: [
      {
        url: "/anushka-hero.png",
        width: 1200,
        height: 630,
        alt: "Anushka Akhare - UI/UX Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anushka Akhare | UI/UX Designer & Product Designer",
    description:
      "Crafting intuitive digital products, SaaS dashboards, and design systems with measurable impact. Contact: anushkaakhare@gmail.com.",
    creator: "@anushka_akhare",
    images: ["/anushka-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://anushkaakhare.vercel.app/#person",
      name: "Anushka Akhare",
      jobTitle: "UI/UX Designer & Product Designer",
      url: "https://anushkaakhare.vercel.app",
      image: "https://anushkaakhare.vercel.app/anushka-hero.png",
      email: "mailto:anushkaakhare@gmail.com",
      telephone: "+91-9975693424",
      sameAs: [
        "https://www.instagram.com/theanushkalab/?hl=en",
        "http://www.linkedin.com/in/anushka-akhare-9b9560220",
        "https://wa.me/919975693424",
      ],
      description:
        "UI/UX Designer specializing in SaaS dashboards, product design, Framer websites, and design systems.",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9975693424",
          contactType: "customer service",
          email: "anushkaakhare@gmail.com",
          url: "https://anushkaakhare.vercel.app/#contact",
          availableLanguage: ["English", "Hindi"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://anushkaakhare.vercel.app/#website",
      url: "https://anushkaakhare.vercel.app",
      name: "Anushka Akhare Portfolio",
      publisher: {
        "@id": "https://anushkaakhare.vercel.app/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable} ${urbanist.className} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#171717]">
        <Suspense fallback={null}>
          <SmoothScroll />
        </Suspense>
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        {children}
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
