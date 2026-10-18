"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export interface StatItem {
  id: number;
  value: string;
  label: string;
}

export interface HireMeSectionProps {
  titlePrefix?: string;
  titleHighlight?: string;
  titleSuffix?: string;
  description?: string;
  stats?: StatItem[];
  buttonText?: string;
  buttonHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const DEFAULT_STATS: StatItem[] = [
  {
    id: 1,
    value: "20+",
    label: "Project Completed",
  },
  {
    id: 2,
    value: "98%",
    label: "Client Satisfaction",
  },
];

export default function HireMeSection({
  titlePrefix = "About",
  titleHighlight = " me",
  titleSuffix = "",
  description = "I bridge the gap between user needs and business goals. Over the past two years, I’ve learned that the best designs don't come from guessing they come from listening to users, testing early, and iterating quickly with dev teams.",
  stats = DEFAULT_STATS,
  buttonText = "Hire me",
  buttonHref = "#contact",
  imageSrc = "/anushka-hireme.png",
  imageAlt = "Anushka Akhare - UIUX Designer",
}: HireMeSectionProps) {
  return (
    <section
      id="about"
      className="relative w-full py-10 sm:py-14 md:py-18 lg:py-20 bg-white overflow-hidden select-none scroll-mt-24"
    >
      <span id="hireme" className="sr-only" />
      <span id="why-hire-me" className="sr-only" />

      <div className="w-full custom-container mx-auto">
        <div className="relative w-full bg-[#F2F4F7] rounded-[28px] sm:rounded-[36px] md:rounded-[44px] lg:rounded-[48px] px-6 py-10 xs:px-8 xs:py-12 sm:p-12 md:p-14 lg:px-14 lg:py-16 xl:px-18 xl:py-20 border border-[#E9EBEF] shadow-[0_8px_30px_rgba(0,0,0,0.03)] overflow-hidden">
          <div className="relative w-full flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-12 lg:gap-12 xl:gap-20">
            {/* Visual Portrait Card on Left */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center shrink-0 w-full lg:w-auto"
            >
              <div className="relative w-[270px] xs:w-[300px] sm:w-[330px] md:w-[350px] lg:w-[370px] xl:w-[390px] h-[370px] xs:h-[410px] sm:h-[450px] md:h-[480px] lg:h-[490px] xl:h-[520px] bg-[#feb273] rounded-[60px] xs:rounded-[70px] sm:rounded-[85px] md:rounded-[95px] lg:rounded-[105px] xl:rounded-[115px] overflow-hidden flex items-end justify-center shadow-[0_12px_40px_rgba(254,178,115,0.32)]">
                <div className="relative w-full h-[98%] flex items-end justify-center pointer-events-none">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={1090}
                    height={1596}
                    priority
                    className="w-full h-full object-contain object-bottom select-none filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.1)]"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Text Content */}
            <div className="flex-1 w-full max-w-xl lg:max-w-none text-left">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl xs:text-[44px] sm:text-5xl md:text-[54px] lg:text-[58px] xl:text-[64px] font-semibold tracking-[-0.02em] leading-[1.08] text-[#171717]"
              >
                <span>{titlePrefix}</span>
                <span className="text-[#FD853A] font-semibold">{titleHighlight}</span>
                <span>{titleSuffix}</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
                className="mt-4 sm:mt-5 md:mt-6 text-[#667085] text-sm xs:text-[15px] sm:text-base md:text-[17px] leading-[1.65] max-w-[480px]"
              >
                {description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
                className="mt-8 sm:mt-10 md:mt-12 flex flex-row items-center gap-8 xs:gap-10 sm:gap-14 md:gap-18"
              >
                {stats.map((stat) => (
                  <div key={stat.id} className="flex flex-col text-left">
                    <span className="text-2xl xs:text-3xl sm:text-[36px] md:text-[40px] font-normal text-[#171717] tracking-tight leading-none">
                      {stat.value}
                    </span>
                    <span className="text-xs xs:text-sm sm:text-[15px] text-[#667085] font-normal mt-1.5 sm:mt-2 tracking-normal">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="mt-8 sm:mt-10 md:mt-12"
              >
                <Link
                  href={buttonHref}
                  className="inline-flex items-center justify-center px-10 sm:px-12 py-3.5 sm:py-4 rounded-[20px] sm:rounded-[24px] border border-[#171717] text-[#171717] bg-transparent hover:bg-[#171717] hover:text-white font-semibold text-base sm:text-[17px] tracking-tight transition-all duration-300 ease-out active:scale-95 shadow-xs hover:shadow-lg cursor-pointer"
                >
                  <span>{buttonText}</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
