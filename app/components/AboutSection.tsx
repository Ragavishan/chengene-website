"use client";

import { useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  const [showChengeneSummary, setShowChengeneSummary] = useState(false);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#F8F6FF] text-[#291844] lg:scroll-mt-28"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-200/25 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-violet-200/25 blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1800px]">

        {/* ABOUT INTRO */}
        <div className="relative grid lg:grid-cols-[0.92fr_1.08fr]">

          {/* Content */}
          <div className="relative z-20 flex flex-col justify-center px-5 py-14 sm:px-10 sm:py-20 md:px-16 lg:px-20 lg:py-28">

            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.30em] text-purple-600 sm:text-xs sm:tracking-[0.35em]">
                About Us
              </span>

              <span
                aria-hidden="true"
                className="h-[2px] w-8 bg-purple-400 sm:w-10"
              />
            </div>

            <h2
              id="about-heading"
              className="max-w-[680px] text-[2.15rem] font-semibold leading-[1.08] tracking-tight text-[#291844] sm:text-5xl md:text-6xl lg:text-[64px]"
            >
              Turning Science
              <span className="block">
                into{" "}
                <span className="bg-gradient-to-r from-purple-700 via-violet-600 to-purple-500 bg-clip-text text-transparent">
                  Better Tomorrows.
                </span>
              </span>
            </h2>

            <p className="mt-5 max-w-[600px] text-[14px] leading-7 text-[#6F6282] sm:mt-7 sm:text-base sm:leading-8 md:text-lg">
              CHENGENE Private Limited is a biotechnology company
              committed to advancing the frontiers of life sciences
              through innovative research, high-quality biologics,
              and world-class manufacturing solutions.
            </p>

            {/* CHENGENE SUMMARY */}
            <div className="mt-5 sm:mt-7">
              <button
                type="button"
                onClick={() => setShowChengeneSummary(true)}
                className="group inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-purple-700 shadow-[0_8px_25px_rgba(91,33,182,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-300 hover:bg-purple-50 hover:shadow-[0_12px_30px_rgba(91,33,182,0.12)] sm:px-5 sm:py-3 sm:text-xs"
              >
                <span>Discover CHENGENE</span>

                <span className="text-purple-400 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

            {/* Key capabilities */}
            <div className="mt-4 grid grid-cols-2 gap-x-1 gap-y-2 sm:mt-6 sm:grid-cols-4 sm:gap-y-2 sm:gap-0">

              <div className="group flex flex-col items-center px-2 text-center sm:px-3 sm:border-r sm:border-purple-200/70">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100/70 text-lg text-purple-700 transition duration-300 group-hover:scale-105 sm:h-14 sm:w-14 sm:text-2xl">
                  ⚗
                </div>

                <p className="mt-2 text-[10px] font-medium leading-4 text-[#38245F] sm:mt-3 sm:text-sm sm:leading-5">
                  Innovative
                  <span className="block">Research</span>
                </p>
              </div>

              <div className="group flex flex-col items-center px-2 text-center sm:px-3 sm:border-r sm:border-purple-200/70">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100/70 text-purple-700 transition duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
                  <svg
                    viewBox="0 0 64 64"
                    className="h-7 w-7 sm:h-9 sm:w-9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M17 8c0 12 30 12 30 24S17 44 17 56" />
                    <path d="M47 8c0 12-30 12-30 24s30 12 30 24" />
                    <path d="M22 17h20" />
                    <path d="M20 27h24" />
                    <path d="M20 37h24" />
                    <path d="M22 47h20" />
                    <circle cx="51" cy="16" r="4" />
                    <circle cx="57" cy="28" r="4" />
                    <circle cx="51" cy="40" r="4" />
                    <path d="M53 19l2 5" />
                    <path d="M55 31l-2 5" />
                  </svg>
                </div>

                <p className="mt-2 text-[10px] font-medium leading-4 text-[#38245F] sm:mt-3 sm:text-sm sm:leading-5">
                  High-Quality
                  <span className="block">Biologics</span>
                </p>
              </div>

              <div className="group flex flex-col items-center px-2 text-center sm:px-3 sm:border-r sm:border-purple-200/70">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100/70 text-lg text-purple-700 transition duration-300 group-hover:scale-105 sm:h-14 sm:w-14 sm:text-2xl">
                  ⚙
                </div>

                <p className="mt-2 text-[10px] font-medium leading-4 text-[#38245F] sm:mt-3 sm:text-sm sm:leading-5">
                  Advanced
                  <span className="block">Manufacturing</span>
                </p>
              </div>

              <div className="group flex flex-col items-center px-2 text-center sm:px-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100/70 text-lg text-purple-700 transition duration-300 group-hover:scale-105 sm:h-14 sm:w-14 sm:text-2xl">
                  ✧
                </div>

                <p className="mt-2 text-[10px] font-medium leading-4 text-[#38245F] sm:mt-3 sm:text-sm sm:leading-5">
                  A Healthier
                  <span className="block">Tomorrow</span>
                </p>
              </div>

            </div>
          </div>

          {/* Microscope image */}
          <div className="relative min-h-[310px] overflow-hidden sm:min-h-[600px] lg:min-h-[700px]">

            <Image
              src="/microscope.jpg"
              alt="Scientific research and laboratory microscopy at CHENGENE Private Limited"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="scale-[0.9] object-cover object-center"
            />

            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-[#F8F6FF] via-[#F8F6FF]/80 to-transparent"
            />

            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#F8F6FF] via-[#F8F6FF]/35 to-transparent"
            />

            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#F8F6FF]/30 to-transparent"
            />

            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#F8F6FF]/15 to-transparent"
            />

            <div className="absolute bottom-6 right-4 rounded-full border border-purple-400/40 bg-purple-700 px-3.5 py-2.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white shadow-lg sm:bottom-10 sm:right-10 sm:px-5 sm:py-3 sm:text-[14px] sm:tracking-[0.22em]">
              Science · Research · Innovation
            </div>
          </div>
        </div>

        {/* MISSION */}
        <div className="relative grid items-center lg:grid-cols-[1.15fr_0.85fr]">

          {/* Building image */}
          <div className="relative min-h-[280px] overflow-hidden sm:min-h-[500px] lg:min-h-[560px]">

            <Image
              src="/chengene-building.jpg"
              alt="CHENGENE Private Limited biotechnology facility in Chennai"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center"
            />

            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-2/5 bg-gradient-to-l from-[#F8F6FF] via-[#F8F6FF]/65 to-transparent"
            />

            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#F8F6FF]/20 to-transparent"
            />

            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#F8F6FF]/30 to-transparent"
            />

            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F8F6FF]/60 to-transparent"
            />

            <div className="absolute bottom-6 left-4 rounded-full border border-purple-400/40 bg-purple-700 px-3.5 py-2.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-white shadow-lg sm:bottom-10 sm:left-10 sm:px-5 sm:py-3 sm:text-[14px] sm:tracking-[0.18em]">
              CHENGENE PRIVATE LIMITED
            </div>
          </div>

          {/* Mission content */}
          <div className="relative z-10 px-5 py-12 sm:px-10 sm:py-16 md:px-16 lg:px-20 lg:py-24">

            <div
              aria-hidden="true"
              className="mb-4 h-[3px] w-10 rounded-full bg-gradient-to-r from-purple-700 to-violet-400 sm:mb-5 sm:w-12"
            />

            <p className="text-[10px] font-semibold uppercase tracking-[0.27em] text-purple-600 sm:text-xs sm:tracking-[0.3em]">
              Our Mission
            </p>

            <h3 className="mt-4 max-w-xl text-[1.9rem] font-semibold leading-[1.10] tracking-tight text-[#38205F] sm:mt-5 sm:text-4xl md:text-5xl">
              Advancing Science.
              <span className="block bg-gradient-to-r from-purple-700 to-violet-500 bg-clip-text text-transparent">
                Enabling Better Health.
              </span>
            </h3>

            <p className="mt-5 max-w-xl text-[14px] leading-7 text-[#6F6282] sm:mt-6 sm:text-base sm:leading-8">
              To advance biotechnology and biopharmaceutical
              innovation through scientific excellence, reliable
              research, and the development of solutions that
              contribute to global health.
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-2.5 text-base font-medium italic text-purple-600 sm:mt-9 sm:gap-2 sm:text-xl">
              <span>Science</span>
              <span className="text-purple-300">•</span>
              <span>Innovation</span>
              <span className="text-purple-300">•</span>
              <span>Impact</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          CHENGENE SUMMARY POPUP
      ========================= */}
      {showChengeneSummary && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#291844]/35 px-4 py-6 backdrop-blur-sm"
          onClick={() => setShowChengeneSummary(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="chengene-summary-title"
            className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-[28px] border border-purple-100 bg-white shadow-[0_30px_90px_rgba(41,24,68,0.22)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Popup header */}
            <div className="relative overflow-hidden border-b border-purple-100 bg-gradient-to-br from-[#F8F3FF] via-white to-[#F4EDFF] px-6 py-6 sm:px-9 sm:py-8">

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-200/30 blur-3xl"
              />

              <div className="relative flex items-start justify-between gap-5">

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-purple-600 sm:text-xs">
                    CHENGENE PRIVATE LIMITED
                  </p>

                  <h3
                    id="chengene-summary-title"
                    className="mt-2 max-w-2xl text-xl font-semibold leading-tight text-[#38205F] sm:text-3xl"
                  >
                    Our Journey Towards
                    <span className="block bg-gradient-to-r from-purple-700 to-violet-500 bg-clip-text text-transparent">
                      Affordable Biologics &amp; Cell Therapy
                    </span>
                  </h3>
                </div>

                <button
                  type="button"
                  aria-label="Close CHENGENE summary"
                  onClick={() => setShowChengeneSummary(false)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-purple-100 bg-white text-lg text-[#6F6282] shadow-sm transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-700"
                >
                  ×
                </button>

              </div>
            </div>

            {/* Popup content */}
            <div className="max-h-[calc(90vh-170px)] overflow-y-auto px-6 py-6 sm:px-9 sm:py-8">

              <div className="space-y-5 text-sm leading-7 text-[#6F6282] sm:text-base sm:leading-8">

                <p>
                  CHENGENE is created with the intention of creating our
                  own monoclonal antibodies. By specific antibodies,
                  tri-specific antibodies, and drug-ADC complexes —
                  monoclonal antibodies with chemical payloads.
                </p>

                <p>
                  Examples include Trastuzumab (Deruxtecan) and other
                  advanced antibody-based medicines used in cancer and
                  other diseases. These drugs are highly expensive and
                  can cost lakhs of rupees.
                </p>

                <p>
                  There are currently no Indian manufacturers for many
                  of these antibodies, and we are dependent on imports.
                  Our aim is to develop these drugs from{" "}
                  <strong className="font-semibold text-[#4B2675]">
                    gene to fill-finished
                  </strong>{" "}
                  so that these medicines can become more easily
                  available to millions of our population.
                </p>

                <p>
                  This approach also aims to reduce the significant
                  funds currently spent on purchasing imported drugs.
                  We have started this journey, and our team is now
                  capable of developing monoclonal antibodies from gene
                  to cloning and through pilot-scale upstream,
                  downstream, full-finished quality control, toxicity
                  studies, and in-vitro studies — all in-house.
                </p>

                {/* Capability highlight */}
                <div className="rounded-2xl border border-purple-100 bg-[#FAF7FF] p-5 sm:p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-600">
                    In-House Capabilities
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">

                    <div className="rounded-xl bg-white px-4 py-3 text-sm text-[#625375] shadow-sm">
                      Gene → Cloning
                    </div>

                    <div className="rounded-xl bg-white px-4 py-3 text-sm text-[#625375] shadow-sm">
                      Pilot-Scale Upstream
                    </div>

                    <div className="rounded-xl bg-white px-4 py-3 text-sm text-[#625375] shadow-sm">
                      Downstream Processing
                    </div>

                    <div className="rounded-xl bg-white px-4 py-3 text-sm text-[#625375] shadow-sm">
                      Fill-Finished Development
                    </div>

                    <div className="rounded-xl bg-white px-4 py-3 text-sm text-[#625375] shadow-sm">
                      Quality Control
                    </div>

                    <div className="rounded-xl bg-white px-4 py-3 text-sm text-[#625375] shadow-sm">
                      Toxicity &amp; In-Vitro Studies
                    </div>

                  </div>
                </div>

                <p>
                  In the future, very soon, CHENGENE will also be
                  starting CAR-T cell therapy, CAR-NK cell therapy,
                  and related advanced therapeutic approaches at an
                  affordable cost.
                </p>

                <p>
                  This will pave the way for cell and gene therapy
                  solutions for some of the most difficult diseases,
                  helping make advanced healthcare technologies more
                  accessible.
                </p>

              </div>

              {/* Bottom statement */}
              <div className="mt-7 flex flex-wrap items-center gap-2 border-t border-purple-100 pt-6">
                <span className="h-2 w-2 rounded-full bg-purple-600" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#79668F] sm:text-xs">
                  Science · Innovation · Accessibility · Impact
                </span>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}