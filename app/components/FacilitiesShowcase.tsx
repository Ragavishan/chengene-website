"use client";

import { useState } from "react";

type Facility = {
  number: string;
  title: string;
  description: string;
  image: string;
  details?: string;
};

type FacilitiesShowcaseProps = {
  facilities: Facility[];
};

export default function FacilitiesShowcase({
  facilities,
}: FacilitiesShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isExploring, setIsExploring] = useState(false);

  const activeFacility = facilities[activeIndex];

  const goNext = () => {
    setDirection("next");
    setActiveIndex((current) => (current + 1) % facilities.length);
  };

  const goPrev = () => {
    setDirection("prev");
    setActiveIndex(
      (current) => (current - 1 + facilities.length) % facilities.length,
    );
  };

  if (!facilities.length) return null;

  return (
    <>
      <section
        id="facilities"
        className="scroll-mt-24 bg-white py-14 sm:py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          {/* SECTION HEADING */}
          <div className="mb-8 text-center sm:mb-10 md:mb-12">
            <span className="inline-flex rounded-full border border-purple-100 bg-purple-50 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-purple-600 sm:px-4 sm:py-2 sm:text-[10px]">
              Our Facilities
            </span>

            <h2 className="mx-auto mt-4 max-w-4xl text-[2rem] font-semibold leading-[1.08] tracking-tight text-[#2E2140] sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
              Built for{" "}
              <span className="bg-gradient-to-r from-purple-700 via-violet-600 to-purple-500 bg-clip-text text-transparent">
                Scientific Excellence.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-6 text-[#766981] sm:mt-5 sm:text-sm sm:leading-7 md:text-base">
              Advanced infrastructure and specialized laboratory environments
              supporting research, development, testing, and biopharmaceutical
              innovation.
            </p>
          </div>

          {/* MAIN FACILITY CARD */}
          <div className="overflow-hidden rounded-[22px] border border-purple-100/80 bg-white shadow-[0_18px_55px_rgba(91,33,182,0.10)] sm:rounded-[28px]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* IMAGE */}
              <div className="relative h-[260px] overflow-hidden sm:h-[350px] lg:h-[510px]">
                <img
                  src={activeFacility.image}
                  alt={activeFacility.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#241333]/80 via-[#241333]/10 to-transparent" />

                {/* NUMBER BADGE */}
                <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 backdrop-blur-md sm:left-6 sm:top-6 sm:px-4 sm:py-2">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white sm:text-[10px]">
                    {activeFacility.number}
                  </span>
                </div>

                {/* IMAGE TITLE */}
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/70 sm:text-[10px]">
                    Facility
                  </p>

                  <h3 className="mt-1.5 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
                    {activeFacility.title}
                  </h3>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-center bg-gradient-to-br from-white via-[#FBF9FF] to-[#F5EEFF] p-6 sm:p-10 lg:p-12">
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-purple-500 sm:text-xs">
                  Facility Overview
                </p>

                <div className="mt-2 text-5xl font-semibold tracking-tight text-purple-100 sm:mt-3 sm:text-7xl">
                  {activeFacility.number}
                </div>

                <h3 className="mt-1 text-2xl font-semibold leading-tight tracking-tight text-[#2E2140] sm:text-4xl">
                  {activeFacility.title}
                </h3>

                <p className="mt-4 max-w-xl text-[13px] leading-6 text-[#746680] sm:mt-5 sm:text-base sm:leading-7">
                  {activeFacility.description}
                </p>

                {/* DETAILS */}
                {activeFacility.details && (
                  <div className="mt-5 rounded-xl border border-purple-100 bg-white/70 p-4 sm:mt-7 sm:rounded-2xl sm:p-5">
                    <p className="text-[12px] leading-5 text-[#6F6282] sm:text-sm sm:leading-6">
                      {activeFacility.details}
                    </p>
                  </div>
                )}

                {/* EXPLORE BUTTON */}
                <button
                  onClick={() => setIsExploring(true)}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-purple-700 px-5 py-3 text-xs font-semibold text-white shadow-[0_10px_25px_rgba(91,33,182,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-purple-800 sm:mt-8 sm:px-6 sm:py-3.5 sm:text-sm"
                >
                  Explore Facility
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300"
                  >
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="mt-5 rounded-2xl border border-purple-100 bg-[#FBF9FF] px-4 py-4 sm:mt-6 sm:px-6 sm:py-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* PROGRESS */}
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-purple-500 sm:text-[10px]">
                  0{activeIndex + 1}
                </span>

                <div className="h-px w-16 bg-purple-200 sm:w-24">
                  <div
                    className="h-px bg-purple-600 transition-all duration-500"
                    style={{
                      width: `${
                        ((activeIndex + 1) / facilities.length) * 100
                      }%`,
                    }}
                  />
                </div>

                <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#9A8DA8] sm:text-[10px]">
                  0{facilities.length}
                </span>
              </div>

              {/* DOTS + ARROWS */}
              <div className="flex items-center justify-between gap-4 sm:justify-end">
                <div className="flex items-center gap-1.5">
                  {facilities.map((facility, index) => (
                    <button
                      key={facility.number}
                      onClick={() => {
                        setDirection(index > activeIndex ? "next" : "prev");
                        setActiveIndex(index);
                      }}
                      aria-label={`View ${facility.title}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? "w-6 bg-purple-600"
                          : "w-1.5 bg-purple-200 hover:bg-purple-400"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={goPrev}
                    aria-label="Previous facility"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-purple-100 bg-white text-purple-700 shadow-sm transition hover:border-purple-200 hover:bg-purple-50 sm:h-10 sm:w-10"
                  >
                    ←
                  </button>

                  <button
                    onClick={goNext}
                    aria-label="Next facility"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-purple-100 bg-white text-purple-700 shadow-sm transition hover:border-purple-200 hover:bg-purple-50 sm:h-10 sm:w-10"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM CAPTION */}
          <div className="mt-5 text-center sm:mt-6">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#9A8DA8] sm:text-xs">
              Explore CHENGENE's specialized laboratory infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* EXPLORE MODAL */}
      {isExploring && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1D1029]/70 px-4 backdrop-blur-md"
          onClick={() => setIsExploring(false)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl sm:rounded-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setIsExploring(false)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg text-purple-700 shadow-md backdrop-blur sm:right-5 sm:top-5"
            >
              ×
            </button>

            <div className="grid md:grid-cols-2">
              <div className="relative h-60 md:h-[420px]">
                <img
                  src={activeFacility.image}
                  alt={activeFacility.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#241333]/70 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                    Facility
                  </p>

                  <h3 className="mt-1 text-2xl font-semibold text-white">
                    {activeFacility.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-500">
                  {activeFacility.number}
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-[#2E2140] sm:text-3xl">
                  {activeFacility.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#746680]">
                  {activeFacility.description}
                </p>

                {activeFacility.details && (
                  <div className="mt-5 rounded-2xl border border-purple-100 bg-[#FBF9FF] p-4">
                    <p className="text-sm leading-6 text-[#6F6282]">
                      {activeFacility.details}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}