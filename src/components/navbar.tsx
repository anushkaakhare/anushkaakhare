"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
    name: string;
    href: string;
    openInNewTab?: boolean;
}

const LEFT_NAV_ITEMS: NavItem[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Project", href: "#project" },
];

const RIGHT_NAV_ITEMS: NavItem[] = [
    { name: "Testimonials", href: "#testimonials" },
    { name: "Resume", href: "/AnushkaAkhareResume.pdf", openInNewTab: true },
    { name: "Contact", href: "#contact" },
];

const ALL_NAV_ITEMS: NavItem[] = [...LEFT_NAV_ITEMS, ...RIGHT_NAV_ITEMS];

interface SectionSpyItem {
    name: string;
    id: string;
}

const SPY_SECTIONS: SectionSpyItem[] = [
    { name: "Home", id: "home" },
    { name: "Project", id: "project" },
    { name: "Resume", id: "resume" },
    { name: "About", id: "about" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
];

interface NavbarProps {
    activeItem?: string;
    onItemChange?: (item: string) => void;
}

export default function Navbar({
    activeItem: controlledActiveItem,
    onItemChange,
}: NavbarProps) {
    const pathname = usePathname();
    const [internalActive, setInternalActive] = useState<string>("Home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const active = controlledActiveItem ?? internalActive;
    const activeRef = useRef<string>(active);
    const isClickScrollingRef = useRef<boolean>(false);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        activeRef.current = active;
    }, [active]);

    const handleSetActive = useCallback(
        (name: string) => {
            setInternalActive(name);
            onItemChange?.(name);
        },
        [onItemChange]
    );

    // Scroll spy for automatic active section detection
    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;
        setIsScrolled(scrollY > 15);

        // If clicking to navigate, don't override active item during the smooth scroll
        if (isClickScrollingRef.current) return;

        // If on a subpage like /blog, don't spy home sections
        if (typeof window !== "undefined" && window.location.pathname !== "/") {
            return;
        }

        // If near top of page, always Home
        if (scrollY < 120) {
            if (activeRef.current !== "Home") {
                handleSetActive("Home");
            }
            return;
        }

        const scrollBottom = scrollY + window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        // If near bottom of page, always Contact
        if (scrollBottom >= docHeight - 90) {
            if (activeRef.current !== "Contact") {
                handleSetActive("Contact");
            }
            return;
        }

        // Check which section is in view relative to viewport top threshold (180px)
        const threshold = 180;
        let currentActive = "Home";

        for (const section of SPY_SECTIONS) {
            if (section.id === "home") continue;
            const el = document.getElementById(section.id);
            if (!el) continue;
            const rect = el.getBoundingClientRect();
            if (rect.top <= threshold) {
                currentActive = section.name;
            } else {
                break;
            }
        }

        if (currentActive && currentActive !== activeRef.current) {
            handleSetActive(currentActive);
        }
    }, [handleSetActive]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Also attach to lenis scroll event if available
        const lenis = (window as unknown as { lenis?: { on: (event: string, callback: () => void) => void; off: (event: string, callback: () => void) => void } }).lenis;
        if (lenis?.on) {
            lenis.on("scroll", handleScroll);
        }

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (lenis?.off) {
                lenis.off("scroll", handleScroll);
            }
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, [handleScroll]);

    // Close mobile menu on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMobileMenuOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Prevent background scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    const handleNavClick = (
        name: string,
        href: string,
        e: React.MouseEvent<HTMLAnchorElement>
    ) => {
        handleSetActive(name);
        setMobileMenuOpen(false);

        // Briefly lock scroll spy while smooth scrolling
        isClickScrollingRef.current = true;
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }
        scrollTimeoutRef.current = setTimeout(() => {
            isClickScrollingRef.current = false;
        }, 1100);

        // If on a subpage (e.g. /blog or /case-studies), redirect to home with hash
        if (typeof window !== "undefined" && window.location.pathname !== "/") {
            if (href.startsWith("#")) {
                e.preventDefault();
                window.location.href = `/${href}`;
                return;
            }
        }

        if (href.startsWith("#")) {
            const targetId = href.replace("#", "");
            e.preventDefault();

            const lenis = (window as unknown as { lenis?: { scrollTo: (target: number | HTMLElement, opts?: { offset?: number; duration?: number }) => void } }).lenis;

            if (targetId === "" || targetId === "home") {
                if (lenis) {
                    lenis.scrollTo(0, { duration: 1.0 });
                } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }
                window.history.pushState(null, "", "#home");
            } else {
                const element = document.getElementById(targetId);
                if (element) {
                    if (lenis) {
                        lenis.scrollTo(element, { offset: -85, duration: 1.0 });
                    } else {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                    window.history.pushState(null, "", href);
                }
            }
        }
    };

    // Hide navbar on dedicated case study pages and blog pages
    if (
        pathname?.startsWith("/case-studies") ||
        pathname?.startsWith("/case-study") ||
        pathname?.startsWith("/blog/")
    ) {
        return null;
    }

    return (
        <header
            className={`sticky top-0 z-[100] w-full px-4 sm:px-6 transition-all duration-300 ${isScrolled
                ? "pt-2 pb-2 sm:pt-3 sm:pb-2 backdrop-blur-[2px]"
                : "pt-3 pb-3 sm:pt-4 sm:pb-3"
                }`}
        >
            <nav
                className="hidden lg:flex w-full max-w-[1298px] mx-auto h-[68px] xl:h-[74px] bg-[#171717] rounded-full px-[15px] items-center justify-between border border-black/10 shadow-[0_12px_36px_rgba(0,0,0,0.25)] relative select-none"
                aria-label="Main navigation"
            >
                <div className="flex-1 flex items-center justify-between pr-2 xl:pr-4">
                    {LEFT_NAV_ITEMS.map((item) => {
                        const isActive = active === item.name;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleNavClick(item.name, item.href, e)}
                                className={`h-[50px] xl:h-[54px] rounded-full flex items-center justify-center transition-all duration-200 text-[16px] lg:text-[18px] xl:text-[20px] font-medium leading-[100%] tracking-[-0.015em] cursor-pointer ${isActive
                                    ? "bg-[#fd853a] text-white min-w-[104px] xl:min-w-[124px] px-6 xl:px-8 shadow-sm shadow-[#fd853a]/30"
                                    : "text-white hover:text-white hover:bg-white/5 px-4 xl:px-6 active:scale-95"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                <Link
                    href="#home"
                    onClick={(e) => handleNavClick("Home", "#home", e)}
                    className="shrink-0 flex items-center justify-center gap-2 xl:gap-2.5 px-2.5 xl:px-3.5 py-1.5 rounded-full select-none cursor-pointer group transition-transform duration-200 active:scale-95"
                    aria-label="Anushka Akhare Home"
                >
                    <div className="w-[34px] h-[34px] xl:w-[38px] xl:h-[38px] rounded-full bg-[#fd853a] flex items-center justify-center shrink-0 shadow-sm shadow-[#fd853a]/30 transition-transform duration-200 group-hover:scale-105">
                        <span className="text-white text-[13px] xl:text-[15px] font-semibold tracking-tight">
                            AA
                        </span>
                    </div>

                    <div className="flex flex-col text-left leading-[1.08] tracking-[-0.015em]">
                        <span className="text-white text-[13px] lg:text-[15px] xl:text-[17px] font-semibold group-hover:text-[#fd853a] transition-colors duration-200">
                            Anushka
                        </span>
                        <span className="text-white text-[13px] lg:text-[15px] xl:text-[17px] font-semibold group-hover:text-[#fd853a] transition-colors duration-200">
                            Akhare
                        </span>
                    </div>
                </Link>

                <div className="flex-1 flex items-center justify-between pl-2 xl:pl-4">
                    {RIGHT_NAV_ITEMS.map((item) => {
                        const isActive = active === item.name;
                        if (item.openInNewTab) {
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-[46px] xl:h-[50px] rounded-full flex items-center justify-center transition-all duration-200 text-[15px] lg:text-[16px] xl:text-[18px] font-medium leading-[100%] tracking-[-0.015em] cursor-pointer text-white hover:text-white hover:bg-white/5 px-3.5 xl:px-5 active:scale-95"
                                >
                                    {item.name}
                                </Link>
                            );
                        }
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleNavClick(item.name, item.href, e)}
                                className={`h-[46px] xl:h-[50px] rounded-full flex items-center justify-center transition-all duration-200 text-[15px] lg:text-[16px] xl:text-[18px] font-medium leading-[100%] tracking-[-0.015em] cursor-pointer ${isActive
                                    ? "bg-[#fd853a] text-white min-w-[90px] xl:min-w-[110px] px-5 xl:px-7 shadow-sm shadow-[#fd853a]/30"
                                    : "text-white hover:text-white hover:bg-white/5 px-3.5 xl:px-5 active:scale-95"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Mobile Header Bar */}
            <div className="flex lg:hidden w-full max-w-[1298px] mx-auto flex-col relative">
                <div className="w-full h-[62px] sm:h-[66px] bg-[#171717] rounded-full px-[15px] flex items-center justify-between border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.38)] relative select-none">
                    <Link
                        href="#home"
                        onClick={(e) => handleNavClick("Home", "#home", e)}
                        className="flex items-center gap-2.5 select-none cursor-pointer group active:scale-95 transition-transform"
                        aria-label="Anushka Akhare Home"
                    >
                        <div className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] rounded-full bg-[#fd853a] flex items-center justify-center shrink-0 shadow-sm shadow-[#fd853a]/30">
                            <span className="text-white text-[13px] sm:text-[14px] font-semibold tracking-tight">
                                AA
                            </span>
                        </div>
                        <div className="flex flex-col text-left leading-[1.08] tracking-[-0.015em]">
                            <span className="text-white text-[13px] sm:text-[15px] font-semibold">
                                Anushka
                            </span>
                            <span className="text-white text-[13px] sm:text-[15px] font-semibold">
                                Akhare
                            </span>
                        </div>
                    </Link>

                    <div className="flex items-center gap-2 sm:gap-2.5">
                        <span className="inline-flex items-center px-3 sm:px-3.5 py-1 rounded-full text-[12px] sm:text-[14px] font-medium leading-[100%] tracking-[-0.015em] bg-[#fd853a] text-white shadow-sm shadow-[#fd853a]/30">
                            {active}
                        </span>

                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen((prev) => !prev)}
                            className="w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] rounded-full bg-white/5 hover:bg-white/10 active:scale-90 flex items-center justify-center text-white border border-white/10 transition-all cursor-pointer"
                            aria-expanded={mobileMenuOpen}
                            aria-label="Toggle navigation menu"
                        >
                            <div className="w-5 h-4 relative flex flex-col justify-between">
                                <span
                                    className={`w-full h-0.5 bg-white rounded-full transition-transform duration-300 origin-left ${mobileMenuOpen ? "rotate-45 translate-x-0.5" : ""
                                        }`}
                                />
                                <span
                                    className={`w-full h-0.5 bg-white rounded-full transition-opacity duration-200 ${mobileMenuOpen ? "opacity-0" : "opacity-100"
                                        }`}
                                />
                                <span
                                    className={`w-full h-0.5 bg-white rounded-full transition-transform duration-300 origin-left ${mobileMenuOpen ? "-rotate-45 translate-x-0.5" : ""
                                        }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu Drawer */}
                {mobileMenuOpen && (
                    <>
                        {/* Dimmed backdrop overlay */}
                        <div
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] transition-opacity"
                            onClick={() => setMobileMenuOpen(false)}
                            aria-hidden="true"
                        />

                        {/* Floating Menu Card */}
                        <div
                            className="absolute top-[70px] sm:top-[76px] left-0 right-0 z-[120] bg-[#171717] border border-white/10 rounded-3xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl animate-in fade-in slide-in-from-top-3 duration-200"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Mobile Navigation Menu"
                        >
                            <div className="flex flex-col gap-1.5">
                                {ALL_NAV_ITEMS.map((item) => {
                                    const isActive = active === item.name;
                                    if (item.openInNewTab) {
                                        return (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="h-[48px] sm:h-[54px] rounded-full flex items-center justify-center text-[16px] sm:text-[18px] font-medium leading-[100%] tracking-[-0.015em] transition-all duration-200 cursor-pointer text-white/80 hover:text-white hover:bg-white/5 active:scale-98"
                                            >
                                                {item.name}
                                            </Link>
                                        );
                                    }
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={(e) => handleNavClick(item.name, item.href, e)}
                                            className={`h-[48px] sm:h-[54px] rounded-full flex items-center justify-center text-[16px] sm:text-[18px] font-medium leading-[100%] tracking-[-0.015em] transition-all duration-200 cursor-pointer ${isActive
                                                ? "bg-[#fd853a] text-white shadow-sm shadow-[#fd853a]/30"
                                                : "text-white/80 hover:text-white hover:bg-white/5 active:scale-98"
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
}
