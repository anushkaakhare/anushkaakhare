"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface FloatingBgObjectProps {
  src: string;
  alt: string;
  baseRotation: number;
  className: string;
  sizes: string;
  mousePos: { clientX: number; clientY: number } | null;
  animationClass?: string;
  opacity?: string;
}

export default function FloatingBgObject({
  src,
  alt,
  baseRotation,
  className,
  sizes,
  mousePos,
  animationClass = "animate-float-slow-1",
  opacity = "opacity-100",
}: FloatingBgObjectProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isDirectHover, setIsDirectHover] = useState(false);

  let offsetX = 0;
  let offsetY = 0;
  let rotateOffset = 0;
  let scaleOffset = 1;

  if (mousePos && elementRef.current) {
    const rect = elementRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = centerX - mousePos.clientX;
    const dy = centerY - mousePos.clientY;
    const dist = Math.hypot(dx, dy);

    // Reactive radius: object detects cursor when hovering around it
    const radius = 380;
    if (dist < radius) {
      // Easing for smooth organic deflection
      const proximity = Math.pow(1 - dist / radius, 1.3);
      const angle = Math.atan2(dy, dx);

      // Moves slowly away from cursor with gentle deflection (up to 42px)
      offsetX = Math.cos(angle) * proximity * 42;
      offsetY = Math.sin(angle) * proximity * 42;
      rotateOffset = (dx > 0 ? 1 : -1) * proximity * 10;
      scaleOffset = 1 + proximity * 0.06;
    }
  }

  // Extra slow float & tilt on direct hover
  if (isDirectHover) {
    offsetY -= 14;
    scaleOffset += 0.08;
    rotateOffset += 6;
  }

  return (
    <div
      ref={elementRef}
      onMouseEnter={() => setIsDirectHover(true)}
      onMouseLeave={() => setIsDirectHover(false)}
      className={`absolute ${className} ${opacity} select-none z-10 pointer-events-auto cursor-pointer`}
    >
      {/* Interactive Transform Wrapper (Separated from outer positioning to avoid class conflict) */}
      <div
        className="w-full h-full will-change-transform"
        style={{
          transform: `translate3d(${offsetX}px, ${offsetY}px, 0) rotate(${baseRotation + rotateOffset}deg) scale(${scaleOffset})`,
          transition: "transform 1.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Ambient Slow Floating Layer */}
        <div className={`relative w-full h-full ${animationClass}`}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)] select-none pointer-events-none"
            sizes={sizes}
          />
        </div>
      </div>
    </div>
  );
}
