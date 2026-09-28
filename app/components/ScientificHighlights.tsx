"use client";

import Link from "next/link";

const categories = [
  { label: "Events", type: "events" },
  { label: "Meetings", type: "meetings" },
  { label: "Conferences", type: "conferences" },
  { label: "Workshops", type: "workshops" },
  { label: "Publications", type: "publications" },
  { label: "Presentations", type: "presentations" },
];

export default function ScientificHighlights() {
  return (
    <section
      id="scientific-highlights"
      className="relative scroll-mt-24 overflow-hidden bg-[#FAF8FF] px-4 pt-0 pb-12 sm:px-6 sm:pt-0 sm:pb-16 md:scroll-mt-28 md:px-16 md:pt-0 md:pb-28"
    >
      {/* SOFT BACKGROUND DETAILS */}
      <div className="pointer-events-none absolute -left-24 top-20 h-52 w-52 rounded-full bg-purple-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-60 w-60 rounded-full bg-violet-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mx-auto flex w-fit items-center gap-2">
            <span className="h-px w-7 bg-purple-300 sm:w-10" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-purple-600 sm:text-xs sm:tracking-[0.2em]">
              Scientific & Industry Highlights
            </p>

            <span className="h-px w-7 bg-purple-300 sm:w-10" />
          </div>

          <h2 className="mt-4 text-[1.9rem] font-semibold leading-[1.08] tracking-tight text-[#493765] sm:mt-5 sm:text-4xl md:text-5xl">
            Connecting science,
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">
              research & industry.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[330px] text-[11px] leading-5 text-[#817393] sm:mt-6 sm:max-w-xl sm:text-base sm:leading-8">
            A growing record of CHENGENE&apos;s scientific engagements,
            industry interactions, conferences and business initiatives.
          </p>

        </div>

        {/* CATEGORY NAVIGATION */}
        <div className="mx-auto mt-0 max-w-[340px] sm:mt-11 sm:max-w-4xl">
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {categories.map((category) => (
                <Link
                    key={category.type}
                    href={`/scientific-highlights/${category.type}`}
                    className="group relative overflow-hidden rounded-full border border-purple-100/90 bg-white px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#79668F] shadow-[0_7px_24px_rgba(91,33,182,0.055)] transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-200 hover:bg-[#F8F4FF] hover:text-purple-700 hover:shadow-[0_12px_30px_rgba(91,33,182,0.10)] sm:px-5 sm:py-2.5 sm:text-[10px] sm:tracking-[0.14em]"
                >
                <span className="relative z-10 flex items-center gap-1.5">
                    {category.label}
                    <span className="text-purple-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-purple-500">
                        →
                    </span>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-9 flex justify-center sm:mt-14">
          <div className="flex items-center gap-2.5 rounded-full border border-purple-100/80 bg-white/80 px-3.5 py-1.5 shadow-[0_8px_25px_rgba(91,33,182,0.04)] backdrop-blur-sm sm:px-5 sm:py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />

            <span className="text-[8px] font-semibold uppercase tracking-[0.1em] text-[#79668F] sm:text-[10px] sm:tracking-[0.16em]">
              Science · Collaboration · Industry
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}