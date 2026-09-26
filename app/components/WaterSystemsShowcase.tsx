"use client";

import { useState } from "react";

const waterSystems = [
  {
    name: "Type-I Water",
    image: "/water/type-1.jpg",
    tag: "Ultrapure Water",
    description:
      "High-purity water used in laboratory applications that require very low levels of impurities.",
    applications: [
      "Sensitive analytical procedures",
      "Laboratory reagent preparation",
      "Research applications requiring ultrapure water",
    ],
  },
  {
    name: "Type-2 Water",
    image: "/water/type-2.jpg",
    tag: "Pure Laboratory Water",
    description:
      "Purified water designed to support routine laboratory activities and general analytical workflows.",
    applications: [
      "Routine laboratory preparation",
      "General analytical applications",
      "Laboratory equipment support",
    ],
  },
  {
    name: "Distilled Water",
    image: "/water/distilled-water.jpg",
    tag: "Distillation System",
    description:
      "Water produced through distillation for laboratory and other suitable facility applications.",
    applications: [
      "General laboratory use",
      "Solution preparation",
      "Suitable equipment applications",
    ],
  },
  {
    name: "RO Water",
    image: "/water/ro-water.jpg",
    tag: "Reverse Osmosis",
    description:
      "Water treated through reverse osmosis as part of the facility's water purification infrastructure.",
    applications: [
      "Water pre-treatment",
      "Laboratory utility support",
      "Purified water system feed",
    ],
  },
];

export default function WaterSystemsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const active = waterSystems[activeIndex];

  const selectWater = (index: number) => {
    setActiveIndex(index);
    setImageError(false);
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF8FF] px-6 py-20 md:px-16 md:py-24">
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[4px] text-purple-600">
            Water Systems
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#291844] md:text-5xl">
            Essential Laboratory
            <span className="block text-purple-700">Utilities.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#817393] md:text-base">
            Explore our water purification systems and their roles in
            supporting laboratory operations.
          </p>
        </div>

        {/* Water system selectors */}
        <div className="mb-7 flex flex-wrap gap-3">
          {waterSystems.map((water, index) => (
            <button
              key={water.name}
              type="button"
              onClick={() => selectWater(index)}
              className={`rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                activeIndex === index
                  ? "border-purple-700 bg-purple-700 text-white shadow-lg shadow-purple-700/20"
                  : "border-purple-200 bg-white text-purple-800 hover:border-purple-400 hover:bg-purple-50"
              }`}
            >
              {water.name}
            </button>
          ))}
        </div>

        {/* Selected water system */}
        <div
          key={activeIndex}
          className="grid overflow-hidden rounded-[2rem] border border-purple-100 bg-white shadow-[0_20px_70px_rgba(91,33,182,0.08)] md:grid-cols-2"
          style={{
            animation: "waterReveal 500ms ease-out both",
          }}
        >
          {/* Image */}
          <div className="relative min-h-[280px] overflow-hidden bg-[#F0E9FC] md:min-h-[440px]">
            {!imageError ? (
              <img
                src={active.image}
                alt={active.name}
                onError={() => setImageError(true)}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <span className="text-5xl text-purple-300">◈</span>
                <p className="mt-4 text-sm font-semibold text-purple-800">
                  {active.name}
                </p>
                <p className="mt-2 text-xs text-purple-500">
                  Add image: {active.image}
                </p>
              </div>
            )}

            <div className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/90 px-4 py-2 text-xs font-semibold text-purple-800 backdrop-blur">
              {active.tag}
            </div>

            <div className="absolute bottom-5 left-5 rounded-xl bg-white/90 px-4 py-2 text-xs font-semibold text-purple-800 backdrop-blur">
              CHENGENE · WATER INFRASTRUCTURE
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[3px] text-purple-600">
              System Overview · 0{activeIndex + 1}
            </p>

            <h3 className="mt-4 text-3xl font-semibold text-[#291844] md:text-4xl">
              {active.name}
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#766985] md:text-base">
              {active.description}
            </p>

            <div className="mt-8">
              <h4 className="text-sm font-semibold text-[#291844]">
                Applications
              </h4>

              <ul className="mt-4 space-y-3">
                {active.applications.map((application) => (
                  <li
                    key={application}
                    className="flex items-start gap-3 text-sm leading-6 text-[#766985]"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-500" />
                    {application}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`mailto:team@chengene.org?subject=${encodeURIComponent(
                `Water Systems Enquiry - ${active.name}`
              )}`}
              className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-purple-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-purple-800"
            >
              Enquire About This System ↗
            </a>
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-[#9587A6]">
          Select a water system above to explore its details.
        </p>
      </div>

      <style jsx>{`
        @keyframes waterReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}