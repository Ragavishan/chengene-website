"use client";

import { useState } from "react";

type Facility = {
  number: string;
  title: string;
  description: string;
  image: string;
};

export default function FacilitiesShowcase({
  facilities,
}: {
  facilities: Facility[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isExploring, setIsExploring] = useState(false);

  const activeFacility = facilities[activeIndex];

  const goToDepartment = (index: number) => {
    if (index === activeIndex) return;

    setDirection(index > activeIndex ? "next" : "prev");
    setActiveIndex(index);
    setIsExploring(false);
  };

  const goNext = () => {
    setDirection("next");
    setActiveIndex((prev) => (prev + 1) % facilities.length);
    setIsExploring(false);
  };

  const goPrev = () => {
    setDirection("prev");
    setActiveIndex(
      (prev) => (prev - 1 + facilities.length) % facilities.length
    );
    setIsExploring(false);
  };

  if (!activeFacility) return null;

  return (
    <section
      id="facilities"
      className="relative overflow-hidden bg-gradient-to-b from-white via-violet-50/50 to-white py-20 sm:py-28"
    >
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
              <span className="h-2 w-2 rounded-full bg-violet-500" />
              Our Infrastructure
            </span>

            <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Explore our
              <span className="block text-violet-700">
                research facilities.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-600 sm:text-base">
            Discover our specialized departments, one at a time. Navigate
            through our facilities and explore the infrastructure supporting
            our research and development.
          </p>
        </div>

        {/* Main showcase */}
        <div className="relative overflow-hidden rounded-[2rem] border border-violet-100 bg-white p-3 shadow-[0_25px_90px_rgba(91,33,182,0.10)] sm:p-5 lg:p-7">
          <div
            key={activeIndex}
            className={`facility-slide-${direction} grid min-h-[420px] grid-cols-1 overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-violet-50 to-white lg:grid-cols-2`}
          >
            {/* Image */}
            <div className="relative min-h-[280px] overflow-hidden lg:min-h-[510px]">
              <img
                src={activeFacility.image}
                alt={activeFacility.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-violet-950/10" />

              {/* Image number */}
              <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                DEPARTMENT {activeFacility.number}
              </div>

              {/* Image bottom label */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/75">
                  Chengene Private Limited
                </p>
                <h3 className="mt-2 max-w-lg text-2xl font-semibold text-white sm:text-3xl">
                  {activeFacility.title}
                </h3>
              </div>

              {/* Decorative circle */}
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/30" />
              <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full border border-white/20" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-10 bg-violet-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-700">
                  Facility Overview
                </span>
              </div>

              <div className="mb-5 text-6xl font-light tracking-tight text-violet-200 sm:text-7xl">
                {activeFacility.number}
              </div>

              <h3 className="max-w-xl text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl">
                {activeFacility.title}
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                {activeFacility.description}
              </p>

              {/* Explore details */}
              {isExploring && (
                <div className="mt-6 rounded-2xl border border-violet-100 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-violet-700">
                    Department Details
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {activeFacility.description}
                  </p>

                  <a
                    href={`mailto:team@chengene.org?subject=${encodeURIComponent(
                      `Enquiry - ${activeFacility.title}`
                    )}`}
                    className="mt-4 inline-flex text-sm font-semibold text-violet-700 underline underline-offset-4 hover:text-violet-900"
                  >
                    Enquire about this department ↗
                  </a>
                </div>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsExploring((prev) => !prev)}
                  className="inline-flex items-center gap-3 rounded-full bg-violet-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-800"
                >
                  {isExploring ? "Close Details" : "Explore Department"}
                  <span aria-hidden="true">
                    {isExploring ? "↑" : "↗"}
                  </span>
                </button>

                <span className="text-xs font-medium text-slate-400">
                  {activeIndex + 1} of {facilities.length} departments
                </span>
              </div>
            </div>
          </div>

          {/* Navigation bar */}
          <div className="flex flex-col gap-6 px-3 pb-3 pt-7 sm:px-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Progress */}
            <div className="w-full lg:max-w-xs">
              <div className="mb-2 flex items-center justify-between text-xs font-medium text-slate-500">
                <span>Department Journey</span>
                <span>
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(facilities.length).padStart(2, "0")}
                </span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-violet-100">
                <div
                  className="h-full rounded-full bg-violet-600 transition-all duration-500"
                  style={{
                    width: `${
                      ((activeIndex + 1) / facilities.length) * 100
                    }%`,
                  }}
                />
              </div>
            </div>

            {/* Department dots */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {facilities.map((facility, index) => (
                <button
                  key={facility.number}
                  type="button"
                  onClick={() => goToDepartment(index)}
                  aria-label={`View ${facility.title}`}
                  aria-current={index === activeIndex ? "step" : undefined}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-violet-700"
                      : "w-2.5 bg-violet-200 hover:bg-violet-400"
                  }`}
                />
              ))}
            </div>

            {/* Previous / Next */}
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous department"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-violet-200 text-xl text-violet-800 transition hover:bg-violet-700 hover:text-white"
              >
                ←
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next department"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-700 text-xl text-white transition hover:bg-violet-800"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom caption */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 px-2">
          <p className="text-xs tracking-wide text-slate-500">
            DISCOVER · NAVIGATE · EXPLORE
          </p>
          <p className="text-xs text-slate-400">
            Select a dot or use the arrows to navigate
          </p>
        </div>
      </div>
    </section>
  );
}