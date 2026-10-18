"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function scrollToTop(immediate = true) {
  if (typeof window === "undefined") return;
  window.scrollTo(0, 0);
  const lenis = (window as unknown as { lenis?: Lenis }).lenis;
  if (lenis) {
    lenis.scrollTo(0, { immediate });
  }
}

export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  // Always start from top whenever route/page changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Set scroll restoration to manual so browser doesn't jump to old positions
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // If there is no hash anchor, force scroll position to (0, 0)
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
    } else {
      const targetId = window.location.hash.replace("#", "");
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          lenisRef.current?.scrollTo(el, { offset: -85, duration: 1.0 });
        }, 50);
      }
    }
  }, [pathname]);

  useEffect(() => {
    // Initialize Lenis globally on window
    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;
    (window as unknown as { lenis: Lenis }).lenis = lenis;

    // Animation frame loop for Lenis
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Global anchor click handler for all hash links (#portfolio, #about, #home, etc.)
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // If on subpage (like /blog), redirect to homepage with target hash
      if (typeof window !== "undefined" && window.location.pathname !== "/") {
        e.preventDefault();
        window.location.href = `/${href}`;
        return;
      }

      const targetId = href.replace("#", "");
      e.preventDefault();

      if (targetId === "" || targetId === "home") {
        lenis.scrollTo(0, { duration: 1.2 });
        window.history.pushState(null, "", href);
      } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          lenis.scrollTo(targetElement, { offset: -85, duration: 1.2 });
          window.history.pushState(null, "", href);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });

    // Global scroll reveal observer for down-to-up text animations
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay;
            if (delay) {
              el.style.transitionDelay = `${delay}ms`;
            }
            el.classList.add("revealed");
            revealObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const observeAllReveals = () => {
      document.querySelectorAll("[data-reveal]:not(.revealed)").forEach((el) => {
        revealObserver.observe(el);
      });
    };

    observeAllReveals();

    // Re-check for any newly mounted elements
    const mutationObserver = new MutationObserver(() => {
      observeAllReveals();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      revealObserver.disconnect();
      mutationObserver.disconnect();
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
