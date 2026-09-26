"use client";

import { useEffect, useState } from "react";
import Header from "./Header";

export default function IntroScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* MAIN WEBSITE */}
      <div
        className={`transition-opacity duration-700 ease-out ${
          showIntro
            ? "pointer-events-none opacity-0"
            : "opacity-100"
        }`}
      >
        <Header />
        {children}
      </div>

      {/* CHENGENE ANIMATED INTRO */}
      <div
        className={`fixed inset-0 z-[100] overflow-hidden bg-[#06183D] transition-opacity duration-1000 ${
          showIntro
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* MOBILE BACKGROUND - soft blurred image */}
        <img
            src="/dna.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-110 object-cover opacity-30 blur-2xl"
            />

        {/* MAIN DNA IMAGE - fully visible on mobile */}
        <img
            src="/dna.jpg"
            alt="CHENGENE - The Future of Life Sciences"
            className="dna-image relative z-10 h-full w-full object-contain md:absolute md:inset-0"
        />

        {/* BLUE GLOW EFFECT */}
        <div className="dna-glow absolute inset-0" />

        {/* LIGHT SWEEP */}
        <div className="dna-light absolute inset-0" />

        {/* LOADING LINE */}
        <div className="absolute bottom-0 left-0 h-[3px] w-full bg-white/10">
          <div className="dna-loader h-full bg-cyan-300" />
        </div>
      </div>

      {/* ANIMATION */}
      <style jsx global>{`
        .dna-image {
            animation: dnaZoom 4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
            will-change: transform;
            object-fit: contain;
            }

        @media (min-width: 768px) {
            .dna-image {
                object-fit: cover;
            }
        }

        .dna-glow {
          background: radial-gradient(
            ellipse at 75% 45%,
            rgba(0, 195, 255, 0.12),
            transparent 55%
          );

          animation: glowPulse 2.5s ease-in-out infinite;
        }

        .dna-light {
          background: linear-gradient(
            115deg,
            transparent 35%,
            rgba(100, 230, 255, 0.12) 50%,
            transparent 65%
          );

          transform: translateX(-100%);
          animation: lightSweep 2.8s ease-in-out infinite;
        }

        .dna-loader {
          width: 100%;
          transform: scaleX(0);
          transform-origin: left;
          animation: loaderProgress 3.2s linear forwards;
        }

        @keyframes dnaZoom {
          0% {
            transform: scale(1.08);
          }

          100% {
            transform: scale(1);
          }
        }

        @keyframes glowPulse {
          0%,
          100% {
            opacity: 0.3;
          }

          50% {
            opacity: 1;
          }
        }

        @keyframes lightSweep {
          0% {
            transform: translateX(-100%);
          }

          100% {
            transform: translateX(100%);
          }
        }

        @keyframes loaderProgress {
          0% {
            transform: scaleX(0);
          }

          100% {
            transform: scaleX(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dna-image,
          .dna-glow,
          .dna-light,
          .dna-loader {
            animation-duration: 0.01ms;
          }
        }
      `}</style>
    </>
  );
}