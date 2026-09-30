import FacilitiesShowcase from "./components/FacilitiesShowcase";
import ScientificHighlights from "./components/ScientificHighlights";
import WaterSystemsShowcase from "./components/WaterSystemsShowcase";
import Image from "next/image";
import Link from "next/link";
import EquipmentShowcase from "./components/EquipmentShowcase";
const facilities = [
  {
    number: "01",
    title: "Microbiology Laboratory",
    description:
      "Specialized E. coli-based DNA expansion and plasmid DNA isolation workflows.",
    image: "/facilities/microbiology.jpg",
  },
  {
    number: "02",
    title: "Molecular Biology Laboratory",
    description:
      "Advanced plasmid vector platforms, molecular development and analytical instrumentation.",
    image: "/facilities/molecular-biology.jpg",
  },
  {
    number: "03",
    title: "Cell Biology Laboratory",
    description:
      "Dedicated cell biology laboratories supporting concurrent molecule development.",
    image: "/facilities/cell-biology.jpg",
  },
  {
    number: "04",
    title: "Bio-Analytical Laboratory",
    description:
      "Analytical capabilities supporting biopharmaceutical research and characterization.",
    image: "/facilities/bio-analytical.jpg",
  },
  {
    number: "05",
    title: "Quality Control Laboratory",
    description:
      "Analytical testing infrastructure supporting quality monitoring and process evaluation.",
    image: "/facilities/quality-control.jpg",
  },
  {
    number: "06",
    title: "Upstream Processing",
    description:
      "Pilot-scale bioreactor systems supporting cell culture and bioprocess development.",
    image: "/facilities/upstream.jpg",
  },
  {
    number: "07",
    title: "Downstream Processing",
    description:
      "Purification workflows involving filtration, chromatography and protein processing.",
    image: "/facilities/downstream.jpg",
  },
  {
    number: "08",
    title: "Cold Storage & Clean Rooms",
    description:
      "Supporting infrastructure for cryopreservation, controlled storage and cleanroom operations.",
    image: "/facilities/cold-storage.jpg",
  },
    {
    number: "09",
    title: "Sterilization",
    description:
      "Sterilization infrastructure supporting laboratory equipment, materials and controlled operations.",
    image: "/facilities/sterilization.jpg",
  },
  {
    number: "10",
    title: "Water Systems",
    description:
      "Water purification systems including Type-I, Type-2, distilled water and RO water.",
    image: "/facilities/water-systems.jpg",
  },
];
const products = [
  {
    category: "HORMONES",
    name: "FSH",
    fullName: "Follicle-Stimulating Hormone",
    image: "/research/fsh.jpg",
  },
  {
    category: "HORMONES",
    name: "hCG",
    fullName: "Human Chorionic Gonadotropin",
    image: "/research/hcg.jpg",
  },
  {
    category: "MONOCLONAL ANTIBODIES",
    name: "Pembrolizumab",
    fullName: "Monoclonal Antibody",
    image: "/research/pembrolizumab.jpg",
  },
  {
    category: "MONOCLONAL ANTIBODIES",
    name: "Trastuzumab",
    fullName: "Monoclonal Antibody",
    image: "/research/trastuzumab.jpg",
  },
  {
    category: "MONOCLONAL ANTIBODIES",
    name: "Daratumumab",
    fullName: "Monoclonal Antibody",
    image: "/research/daratumumab.jpg",
  },
  {
    category: "MONOCLONAL ANTIBODIES",
    name: "Pertuzumab",
    fullName: "Monoclonal Antibody",
    image: "/research/pertuzumab.jpg",
  },
];

const productionGroups = [
  {
    title: "IVF Media",
    items: [
      {
        name: "FerticyclinPro Flushing Media",
        image: "/production/ferticyclinpro.jpg",
      },
      {
        name: "PVP Media",
        image: "/production/pvp-media.jpg",
      },
      {
        name: "Vitrification Media",
        image: "/production/vitrification-media.jpg",
      },
      {
        name: "Thawing Media",
        image: "/production/thawing-media.jpg",
      },
    ],
  },
  {
    title: "Buffer Solutions",
    items: [
      {
        name: "Phosphate-buffered saline (PBS)",
        image: "/production/pbs.jpg",
      },
      {
        name: "PBS with 1% BSA",
        image: "/production/pbs-bsa.jpg",
      },
    ],
  },
];

const approvals = [
  "RCGM Approval",
  "CDSCO Test License",
  "Wholesale Drug License",
];

const equipment = [
  {
    name: "Biosafety Cabinet – B2 Class",
    image: "/equipment/biosafety-cabinet-b2-class2.jpg",
  },
  {
    name: "Cell Counter",
    image: "/equipment/cell-counter.jpg",
  },
  {
    name: "Centrifuge",
    image: "/equipment/centrifuge.jpg",
  },
  {
    name: "CO₂ Incubator",
    image: "/equipment/co2-incubator.jpg",
  },
  {
    name: "Electroporator",
    image: "/equipment/electroporator.jpg",
  },
  {
    name: "ELISA Reader",
    image: "/equipment/elisa-reader.jpg",
  },
  {
    name: "Eppendorf CO₂ Incubator",
    image: "/equipment/eppendorf-co2-incubator.png",
  },
  {
    name: "FPLC",
    image: "/equipment/fplc.jpg",
  },
  {
    name: "HPLC",
    image: "/equipment/hplc.jpg",
  },
  {
    name: "Inverted Microscope",
    image: "/equipment/inverted-microscope.jpg",
  },
  {
    name: "Laminar Air Flow",
    image: "/equipment/laminar-air-flow.jpg",
  },
  {
    name: "NanoDrop",
    image: "/equipment/nanodrop.jpg",
  },
  {
    name: "PCR",
    image: "/equipment/pcr.jpg",
  },
  {
    name: "Stackable CO₂ Incubator",
    image: "/equipment/stackable-co2-incubator.jpg",
  },
];

const utilities = [
  "Type-I Water",
  "Type-2 Water",
  "Distilled Water",
  "RO Water Plant",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[4px] text-purple-600">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-[#514568]">

      {/* HERO */}
      <section
        id="home"
        className="relative isolate flex min-h-[100svh] scroll-mt-0 flex-col overflow-hidden bg-[#EEF8FF] text-[#173B5C] lg:bg-[#160D2B] lg:text-white"
      >
        {/* DESKTOP — STATIC FULL-SCREEN BIOTECH BACKGROUND */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <img
            src="/hero-lab.png"
            alt="Biotechnology research laboratory"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>

        {/* MOBILE — LIGHT BLUE PREMIUM BACKGROUND */}
        <div className="absolute inset-0 z-0 bg-[#EEF8FF] lg:hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(125,211,252,0.30),transparent_38%),radial-gradient(circle_at_88%_72%,rgba(147,197,253,0.25),transparent_42%)]" />

          <div className="absolute inset-0 bg-gradient-to-br from-white/75 via-[#EAF7FF]/70 to-[#DDF2FF]/85" />
        </div>

        {/* DESKTOP IMAGE OVERLAYS */}
        <div className="pointer-events-none absolute inset-0 z-[1] hidden bg-[#160D2B]/10 lg:block" />

        <div className="pointer-events-none absolute inset-0 z-[1] hidden bg-gradient-to-r from-[#160D2B]/85 via-[#160D2B]/55 to-[#160D2B]/5 lg:block" />

        <div className="pointer-events-none absolute inset-0 z-[1] hidden bg-gradient-to-t from-[#160D2B]/80 via-transparent to-[#160D2B]/20 lg:block" />

        {/* HERO MAIN CONTENT */}
        <div className="relative z-10 mx-auto grid w-full max-w-[1600px] flex-1 grid-cols-1 items-center gap-6 px-5 pb-7 pt-28 sm:gap-10 sm:px-10 sm:pb-12 sm:pt-36 md:px-16 lg:min-h-[calc(100svh-105px)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-20 lg:pb-14 lg:pt-32">

          {/* LEFT — BRAND MESSAGE */}
          <div className="flex flex-col justify-center">

            {/* BRAND LABEL */}
            <div className="mb-4 flex items-center gap-3 sm:mb-6">
              <span className="h-px w-10 bg-purple-500/70 lg:bg-purple-400" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#557991] sm:text-[18px] lg:text-white/70">
                Chengene Private Limited
              </span>
            </div>

            {/* HEADLINE */}
            <div className="max-w-[800px]">

              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8B5CF6] drop-shadow-none sm:mb-5 sm:text-[20px] lg:text-[#D8B4FE] lg:drop-shadow-[0_0_10px_rgba(216,180,254,0.45)]">
                Biotechnology
              </p>

              <h1 className="text-[2.05rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#173B5C] sm:text-5xl lg:text-6xl lg:text-white xl:text-[4rem]">
                Engineering Biopharma.

                <span className="mt-1 block text-[#A855F7] sm:text-purple-500 xl:text-[3rem]">
                  Advancing Reproductive Science.
                </span>
              </h1>

              <p className="mt-5 max-w-[620px] text-[13px] leading-6 text-[#55758D] sm:mt-7 sm:text-base sm:leading-8 lg:text-lg lg:text-white/85">
                CHENGENE brings together biologics development, monoclonal
                antibody expertise, and specialized IVF media — powered by
                scientific rigor, precision-led innovation, and a commitment
                to quality across life sciences.
              </p>
            </div>

            {/* SCIENTIFIC FOCUS */}
            <div className="mt-6 max-w-2xl sm:mt-8">

              <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#6B899E] sm:text-[15px] lg:text-white/55">
                Our Scientific Focus
              </p>

              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {[
                  "Biologics",
                  "Monoclonal Antibodies",
                  "IVF Media",
                  "Life Science R&D",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#B9D8E8] bg-white/60 px-3.5 py-2 text-[11px] font-medium text-[#41647D] shadow-[0_4px_15px_rgba(80,140,180,0.06)] backdrop-blur-sm transition-colors duration-300 hover:border-purple-400 hover:bg-white/80 sm:px-4 sm:py-2.5 sm:text-sm lg:border-white/25 lg:bg-white/[0.08] lg:text-white/90 lg:shadow-none lg:hover:border-purple-700/70 lg:hover:bg-white/15"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-10">

              <a
                href="#research"
                className="group inline-flex items-center gap-3 rounded-full bg-purple-600 px-5 py-3.5 text-[12px] font-semibold text-white shadow-[0_10px_25px_rgba(124,58,237,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-500 sm:gap-5 sm:px-7 sm:py-4 sm:text-sm"
              >
                Explore Our Expertise

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#about"
                className="group inline-flex items-center gap-2 rounded-full border border-[#B9D8E8] bg-white/50 px-5 py-3.5 text-[12px] font-medium text-[#41647D] shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-purple-400 hover:bg-white/75 sm:gap-3 sm:px-7 sm:py-4 sm:text-sm lg:border-white/35 lg:bg-white/[0.07] lg:text-white lg:shadow-none lg:hover:border-white/60 lg:hover:bg-white/15"
              >
                About Chengene

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>

            {/* BRAND SIGNATURE */}
            <div className="mt-7 flex items-center gap-3 border-t border-[#B9D8E8] pt-4 sm:mt-10 sm:pt-5 sm:max-w-[600px] lg:border-white/20">

              <span className="h-12 w-[3px] rounded-full bg-purple-400 sm:h-14" />

              <div>
                <p className="text-[14px] font-medium tracking-wide text-[#355B75] sm:text-[20px] lg:text-white/90">
                  Research · Development · Quality
                </p>

                <p className="mt-1 text-[11px] text-[#6C879A] sm:text-[15px] lg:text-white/55">
                  Biotechnology-driven life science solutions
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — OPEN SCIENTIFIC VISUAL */}
          <div className="relative hidden h-full min-h-[420px] items-end justify-end pb-12 lg:flex">

            <div className="max-w-[330px] border-l border-purple-300/80 pl-6">

              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-purple-200 sm:text-[16px]">
                Scientific Excellence
              </p>

              <h2 className="mt-3 text-2xl font-medium leading-snug tracking-tight text-white xl:text-3xl">
                Science Shaping

                <span className="block text-purple-200">
                  What Comes Next.
                </span>
              </h2>

              <p className="mt-3 text-[16px] leading-7 text-white/85">
                Focused research and specialized capabilities across
                biologics and reproductive science.
              </p>
            </div>
          </div>
        </div>

        {/* INTEGRATED EXPERTISE BAR */}
        <div className="relative z-10 mt-auto">

          <div className="mx-auto grid max-w-[1600px] grid-cols-2 divide-x divide-y divide-[#B9D8E8]/70 sm:grid-cols-4 sm:divide-y-0 lg:divide-white/10">

            {[
              {
                number: "01",
                title: "Biologics",
                subtitle: "Research & Development",
              },
              {
                number: "02",
                title: "IVF Media",
                subtitle: "Specialized Media Solutions",
              },
              {
                number: "03",
                title: "Monoclonal Antibodies",
                subtitle: "Biologics Portfolio",
              },
              {
                number: "04",
                title: "Research Infrastructure",
                subtitle: "Specialized Laboratory Facilities",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group flex items-start gap-2 px-3 py-4 transition-colors duration-300 hover:bg-white/40 sm:gap-3 sm:px-6 sm:py-5 lg:px-8 lg:py-6 lg:hover:bg-white/[0.07]"
              >
                <span className="pt-0.5 text-[10px] font-semibold tracking-wider text-purple-500 sm:pt-1 sm:text-[15px] lg:text-purple-300">
                  {item.number}
                </span>

                <div>
                  <p className="text-[11px] font-semibold leading-snug text-[#355B75] sm:text-[18px] lg:text-white">
                    {item.title}
                  </p>

                  <p className="mt-1 text-[9px] leading-4 text-[#6C879A] sm:mt-1.5 sm:text-[14px] sm:leading-5 lg:text-white/55">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ABOUT */}
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

          {/* =========================
              ABOUT INTRO
          ========================= */}
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

              {/* Key capabilities */}
              <div className="mt-2 grid grid-cols-2 gap-x-1 gap-y-2 sm:mt-4 sm:grid-cols-4 sm:gap-y-2 sm:gap-0">

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

              {/* Soft edge blending */}
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

          {/* =========================
              MISSION
          ========================= */}
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

              {/* Soft edge blending */}
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
      </section>

      <EquipmentShowcase />
      {/* PRODUCTION SECTION */}
      <section
        id="production"
        className="relative overflow-hidden bg-white py-14 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-8">

          {/* Section Heading */}
          <div className="mb-9 grid gap-5 sm:mb-12 sm:gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[11px] font-semibold text-violet-700 sm:px-4 sm:py-1.5 sm:text-sm">
                Our Production
              </span>

              <h2 className="mt-4 max-w-2xl text-[2rem] font-semibold leading-[1.08] tracking-tight text-slate-900 sm:mt-5 sm:text-5xl">
                Specialized solutions
                <span className="block text-violet-700">
                  for research.
                </span>
              </h2>
            </div>

            <div className="lg:justify-self-end lg:max-w-lg">
              <p className="text-[13px] leading-6 text-slate-600 sm:text-lg sm:leading-7">
                Explore our IVF media and buffer product categories,
                designed to support specialized research applications
                across the biotechnology landscape.
              </p>

              <div className="mt-3 flex items-center gap-2.5 text-[11px] font-medium text-violet-700 sm:mt-4 sm:gap-3 sm:text-sm">
                <span className="h-px w-7 bg-violet-600 sm:w-9" />
                Our Product Portfolio
              </div>
            </div>
          </div>

          {/* IVF + BUFFER CATEGORY CARDS */}
          <div className="grid items-stretch gap-4 sm:gap-6 xl:grid-cols-2">

            {productionGroups.map((group, groupIndex) => {
              const items = group.items;
              const featuredItem = items[0];
              const previewItems = items.slice(1, 4);
              const remainingItems = items.slice(4);

              const slugMap: Record<string, string> = {
                "FerticyclinPro Flushing Media": "ferticyclinpro",
                "PVP Media": "pvp-media",
                "Vitrification Media": "vitrification-media",
                "Thawing Media": "thawing-media",
                "PBS": "pbs",
                "PBS with 1% BSA": "pbs-bsa",
              };

              const renderProduct = (
                item: (typeof items)[number],
                featured = false
              ) => {
                const slug = slugMap[item.name];

                return (
                  <a
                    key={item.name}
                    href={slug ? `/production/${slug}` : "#production"}
                    className={`group block overflow-hidden rounded-xl border border-violet-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg ${
                      featured ? "h-full p-2.5 sm:p-4" : "p-2 sm:p-2.5"
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden rounded-lg bg-gradient-to-br from-violet-50 to-slate-100 ${
                        featured
                          ? "aspect-[4/3]"
                          : "aspect-[5/3]"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {featured && (
                        <span className="absolute left-2 top-2 rounded-full border border-white/70 bg-white/90 px-2 py-1 text-[9px] font-semibold text-violet-800 shadow-sm sm:left-3 sm:top-3 sm:px-3 sm:text-xs">
                          Featured Product
                        </span>
                      )}
                    </div>

                    <div
                      className={`flex items-center justify-between gap-2 ${
                        featured
                          ? "px-0.5 py-3 sm:px-1 sm:py-4"
                          : "px-0.5 py-2 sm:px-1 sm:py-2.5"
                      }`}
                    >
                      <h3
                        className={`min-w-0 font-semibold leading-snug text-slate-900 group-hover:text-violet-700 ${
                          featured
                            ? "text-[13px] sm:text-lg"
                            : "text-[10px] sm:text-sm"
                        }`}
                      >
                        {item.name}
                      </h3>

                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-700 text-[11px] text-white transition-transform group-hover:translate-x-0.5 sm:h-7 sm:w-7 sm:text-sm">
                        →
                      </span>
                    </div>

                    {featured && (
                      <div className="h-0.5 overflow-hidden rounded-full bg-violet-100 sm:h-1">
                        <div className="h-full w-1/4 bg-violet-700" />
                      </div>
                    )}
                  </a>
                );
              };

              return (
                <div
                  key={group.title}
                  className="flex h-full min-w-0 flex-col rounded-2xl border border-violet-200/80 bg-gradient-to-br from-white to-violet-50/60 p-3.5 shadow-sm sm:p-5"
                >
                  {/* Category Header */}
                  <div className="mb-4 flex items-start justify-between gap-2.5 sm:mb-5 sm:gap-3">
                    <div className="flex min-w-0 items-start gap-2.5 sm:gap-3">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-base text-violet-700 sm:h-12 sm:w-12 sm:text-xl">
                        {groupIndex === 0 ? "✳" : "⬡"}
                      </div>

                      <div className="min-w-0">
                        <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.14em] text-violet-500 sm:text-[11px] sm:tracking-[0.16em]">
                          Production Category {String(groupIndex + 1).padStart(2, "0")}
                        </p>

                        <h3 className="text-[17px] font-semibold leading-tight text-slate-900 sm:text-2xl">
                          {group.title}
                        </h3>

                        <p className="mt-1 text-[11px] leading-4 text-slate-500 sm:text-sm sm:leading-5">
                          {groupIndex === 0
                            ? "Specialized media for IVF and reproductive research."
                            : "Reliable buffer solutions for consistent research."}
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 rounded-full border border-violet-200 bg-white px-2 py-1 text-[9px] font-semibold text-violet-700 sm:px-3 sm:py-1.5 sm:text-xs">
                      {items.length} Products
                    </span>
                  </div>

                  {/* Featured Product + Side Products */}
                  {featuredItem && (
                    <div className="flex flex-1 flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-3">

                      {/* Featured Product */}
                      <div className="min-w-0">
                        {renderProduct(featuredItem, true)}
                      </div>

                      {/* Side Products + Explore More */}
                      <div className="flex min-w-0 flex-col gap-3">

                        {/* Preview Products */}
                        <div className="grid grid-cols-2 gap-2.5">
                          {previewItems.map((item) => renderProduct(item))}
                        </div>

                        {/* Expandable Remaining Products */}
                        {remainingItems.length > 0 && (
                          <details className="group/explore mt-auto">
                            <summary className="flex min-h-[42px] cursor-pointer list-none items-center justify-center gap-1.5 rounded-full border border-violet-300 bg-white px-3 py-2.5 text-center text-[10px] font-semibold text-violet-800 transition-all hover:border-violet-500 hover:bg-violet-50 sm:min-h-[46px] sm:gap-2 sm:py-3 sm:text-sm [&::-webkit-details-marker]:hidden">

                              <span className="group-open/explore:hidden">
                                Explore More {group.title}
                              </span>

                              <span className="hidden group-open/explore:inline">
                                Show Less
                              </span>

                              <span className="transition-transform group-open/explore:rotate-180">
                                ↓
                              </span>
                            </summary>

                            <div className="mt-2.5 grid grid-cols-2 gap-2.5 sm:mt-3">
                              {remainingItems.map((item) => renderProduct(item))}
                            </div>
                          </details>
                        )}

                        {/* CTA when there are no extra items */}
                        {remainingItems.length === 0 && (
                          <a
                            href="#contact"
                            className="mt-auto flex min-h-[42px] items-center justify-center gap-1.5 rounded-full border border-violet-300 bg-white px-3 py-2.5 text-center text-[10px] font-semibold text-violet-800 transition-all hover:bg-violet-50 sm:min-h-[46px] sm:gap-2 sm:py-3 sm:text-sm"
                          >
                            Product Enquiry <span>→</span>
                          </a>
                        )}
                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Portfolio Banner */}
          <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50 via-white to-violet-50 p-4 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:p-7">

            <div className="flex items-start gap-3 sm:items-center sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-base text-violet-700 sm:h-12 sm:w-12 sm:text-xl">
                ✦
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  Precision-Focused Product Portfolio
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-slate-600 sm:text-sm sm:leading-6">
                  Explore Chengene’s IVF media and buffer categories
                  through our specialized production portfolio.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-violet-700 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-violet-800 sm:w-auto sm:py-3 sm:text-sm"
            >
              Contact Us <span>→</span>
            </a>
          </div>

        </div>
      </section>



      {/* RESEARCH & DEVELOPMENT */}
      <section
        id="research"
        className="relative scroll-mt-24 overflow-hidden bg-[#FAF8FF] px-4 py-14 md:scroll-mt-28 md:px-16 md:py-24"
      >
        {/* Background Accents */}
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-purple-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-violet-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          {/* Section Header */}
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <SectionLabel>Research & Development</SectionLabel>

              <h2 className="mt-4 max-w-2xl text-[2rem] font-semibold leading-[1.08] tracking-tight text-[#291844] sm:mt-5 sm:text-6xl">
                Advancing the science
                <span className="block text-purple-700">
                  of biologics.
                </span>
              </h2>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-xl text-[13px] leading-6 text-[#766985] sm:text-lg sm:leading-8">
                Our R&D portfolio spans hormone and monoclonal antibody
                development categories, supporting scientific exploration
                and biopharmaceutical innovation.
              </p>

              <div className="mt-4 flex items-center gap-2.5 text-[11px] font-semibold text-purple-800 sm:mt-6 sm:gap-3 sm:text-sm">
                <span className="h-px w-8 bg-purple-400 sm:w-10" />
                Research-driven. Science-focused.
              </div>
            </div>
          </div>

          {/* Research Categories */}
          <div className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:mt-14 sm:gap-6 xl:grid-cols-2">

            {[
              {
                title: "Recombinant Hormones",
                subtitle: "Hormone research & development",
                icon: "✳",
                items: products.filter((product) =>
                  ["fsh", "hcg"].includes(product.name.toLowerCase())
                ),
              },
              {
                title: "Monoclonal Antibodies",
                subtitle: "Advanced antibody development",
                icon: "◈",
                items: products.filter((product) =>
                  [
                    "pembrolizumab",
                    "trastuzumab",
                    "daratumumab",
                    "pertuzumab",
                  ].includes(product.name.toLowerCase())
                ),
              },
            ].map((group, groupIndex) => {

              const slugMap: Record<string, string> = {
                FSH: "fsh",
                hCG: "hcg",
                Pembrolizumab: "pembrolizumab",
                Trastuzumab: "trastuzumab",
                Daratumumab: "daratumumab",
                Pertuzumab: "pertuzumab",
              };

              const items = group.items;
              const featuredItem = items[0];
              const previewItems = items.slice(1, 3);
              const remainingItems = items.slice(3);

              /* -----------------------------------------
                PRODUCT-SPECIFIC MOBILE IMAGE SETTINGS
                ----------------------------------------- */

              const getMobileImageClass = (productName: string) => {
                switch (productName) {
                  case "FSH":
                    return "object-contain scale-[1.32]";

                  case "hCG":
                    return "object-contain scale-[1.32]";

                  case "Pembrolizumab":
                    return "object-cover scale-100";

                  case "Trastuzumab":
                    return "object-contain scale-[1.38]";

                  case "Daratumumab":
                    return "object-contain scale-[1.38]";

                  case "Pertuzumab":
                    return "object-contain scale-[1.32]";

                  default:
                    return "object-cover scale-100";
                }
              };

              const getMobileObjectPosition = (productName: string) => {
                switch (productName) {
                  case "FSH":
                    return "object-center";

                  case "hCG":
                    return "object-center";

                  case "Pembrolizumab":
                    return "object-center";

                  case "Trastuzumab":
                    return "object-center";

                  case "Daratumumab":
                    return "object-center";

                  case "Pertuzumab":
                    return "object-center";

                  default:
                    return "object-center";
                }
              };

              const renderResearchProduct = (
                product: (typeof products)[number],
                itemIndex: number,
                featured = false
              ) => {
                const slug = slugMap[product.name];

                const mobileImageClass = getMobileImageClass(product.name);
                const mobileObjectPosition = getMobileObjectPosition(product.name);

                return (
                  <a
                    key={product.name}
                    href={`/research/${slug}`}
                    className={`group relative block min-w-0 overflow-hidden rounded-2xl border border-purple-100/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-900/10 ${
                      featured
                        ? "h-full p-2.5 sm:p-4"
                        : "p-2.5"
                    }`}
                  >

                    {/* Product Image */}
                    <div
                      className={`relative overflow-hidden rounded-xl bg-[#F0E8FF] ${
                        featured
                          ? "aspect-[4/3] sm:h-60"
                          : "aspect-[4/3] sm:h-28"
                      }`}
                    >

                      {/* MOBILE IMAGE */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`
                          h-full
                          w-full
                          ${mobileImageClass}
                          ${mobileObjectPosition}
                          transition-transform
                          duration-500
                          group-hover:scale-[1.03]

                          sm:object-cover
                          sm:object-center
                          sm:scale-100
                        `}
                      />

                      {/* Soft mobile image overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-purple-950/10 via-transparent to-white/5 sm:from-purple-950/0" />

                      {featured && (
                        <span className="absolute left-2.5 top-2.5 rounded-full border border-white/70 bg-white/90 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-purple-800 backdrop-blur-sm sm:left-3 sm:top-3 sm:px-3 sm:py-1.5 sm:text-[9px]">
                          Featured Research
                        </span>
                      )}

                      {!featured && (
                        <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[8px] font-semibold text-purple-800 sm:text-[9px]">
                          Research 0{itemIndex + 1}
                        </span>
                      )}
                    </div>

                    {/* Product Details */}
                    <div
                      className={`flex items-center justify-between gap-2 ${
                        featured
                          ? "px-0.5 py-3.5 sm:px-1 sm:py-4"
                          : "px-0.5 py-2.5 sm:px-1 sm:py-2.5"
                      }`}
                    >
                      <div className="min-w-0">

                        <h4
                          className={`font-semibold leading-snug text-[#493765] transition group-hover:text-purple-700 ${
                            featured
                              ? "text-[15px] sm:text-lg"
                              : "text-[12px] sm:text-sm"
                          }`}
                        >
                          {product.name}
                        </h4>

                        {featured && (
                          <p className="mt-1.5 line-clamp-2 text-[11px] leading-5 text-[#817393] sm:mt-2 sm:text-sm">
                            {product.fullName}
                          </p>
                        )}
                      </div>

                      <span
                        className={`flex shrink-0 items-center justify-center rounded-full bg-[#F3EDFF] text-purple-700 transition group-hover:bg-purple-700 group-hover:text-white ${
                          featured
                            ? "h-8 w-8 text-xs sm:h-9 sm:w-9 sm:text-sm"
                            : "h-6 w-6 text-[10px] sm:text-xs"
                        }`}
                      >
                        ↗
                      </span>
                    </div>

                    {featured && (
                      <div className="mx-1 h-px bg-purple-100">
                        <div className="h-px w-12 bg-purple-400 transition-all duration-500 group-hover:w-full" />
                      </div>
                    )}
                  </a>
                );
              };

              return (
                <div
                  key={group.title}
                  className="flex min-w-0 flex-col overflow-hidden rounded-[1.5rem] border border-purple-100/80 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-900/5 sm:rounded-[1.75rem]"
                >

                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-2.5 border-b border-purple-100 bg-gradient-to-r from-[#F4EDFF] to-white p-4 sm:items-center sm:gap-3 sm:p-6">

                    <div className="flex min-w-0 items-start gap-2.5 sm:items-center sm:gap-4">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-700 text-base text-white shadow-lg shadow-purple-700/20 sm:h-14 sm:w-14 sm:rounded-2xl sm:text-2xl">
                        {group.icon}
                      </div>

                      <div className="min-w-0">

                        <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-purple-600 sm:text-[10px] sm:tracking-[0.2em]">
                          Research Category 0{groupIndex + 1}
                        </p>

                        <h3 className="mt-1 text-[18px] font-semibold leading-tight tracking-tight text-[#291844] sm:text-2xl">
                          {group.title}
                        </h3>

                        <p className="mt-1 text-[11px] leading-4 text-[#817393] sm:text-sm">
                          {group.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 rounded-full border border-purple-200 bg-white px-2 py-1 text-[8px] font-semibold text-purple-800 sm:px-3 sm:py-1.5 sm:text-xs">
                      {items.length} Products
                    </span>
                  </div>

                  {/* Category Product Showcase */}
                  <div className="flex flex-1 flex-col p-3.5 sm:p-5">

                    {featuredItem ? (

                      <div className="flex flex-1 flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-4">

                        {/* Featured Product */}
                        <div className="min-w-0">
                          {renderResearchProduct(
                            featuredItem,
                            0,
                            true
                          )}
                        </div>

                        {/* Compact Cards + Explore */}
                        <div className="flex min-w-0 flex-col gap-3">

                          {/* Preview Products */}
                          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                            {previewItems.map((product, index) =>
                              renderResearchProduct(
                                product,
                                index + 1
                              )
                            )}
                          </div>

                          {/* Expandable Remaining Products */}
                          {remainingItems.length > 0 ? (

                            <details className="group/research mt-auto">

                              <summary className="flex min-h-[42px] cursor-pointer list-none items-center justify-center gap-1.5 rounded-xl border border-purple-200 bg-gradient-to-r from-[#F4EDFF] to-white px-3 py-2.5 text-center text-[10px] font-semibold text-purple-800 transition hover:border-purple-400 hover:bg-purple-50 sm:min-h-[46px] sm:gap-3 sm:px-3 sm:py-3 sm:text-xs [&::-webkit-details-marker]:hidden">

                                <span className="group-open/research:hidden">
                                  Explore More
                                </span>

                                <span className="hidden group-open/research:inline">
                                  Show Less
                                </span>

                                <span className="transition-transform duration-300 group-open/research:rotate-180">
                                  ↓
                                </span>

                              </summary>

                              <div className="mt-2.5 grid grid-cols-2 gap-2.5 sm:mt-3 sm:gap-3">
                                {remainingItems.map((product, index) =>
                                  renderResearchProduct(
                                    product,
                                    index + 3
                                  )
                                )}
                              </div>

                            </details>

                          ) : (

                            <a
                              href={
                                groupIndex === 0
                                  ? "/research/hcg"
                                  : "/research/pembrolizumab"
                              }
                              className="mt-auto flex min-h-[42px] items-center justify-center gap-1.5 rounded-xl border border-purple-200 bg-gradient-to-r from-[#F4EDFF] to-white px-3 py-2.5 text-center text-[10px] font-semibold text-purple-800 transition hover:border-purple-400 hover:bg-purple-50 sm:min-h-[46px] sm:gap-3 sm:px-3 sm:py-3 sm:text-xs"
                            >
                              Explore Research
                              <span>→</span>
                            </a>

                          )}

                        </div>
                      </div>

                    ) : (

                      <p className="py-8 text-sm text-[#817393]">
                        Research products will be updated soon.
                      </p>

                    )}

                  </div>
                </div>
              );
            })}
          </div>

          {/* Regulatory Note */}
          <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-purple-100 bg-white/80 p-4 sm:mt-8 sm:flex-row sm:items-start sm:gap-4 sm:p-7">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-sm text-purple-800 sm:h-11 sm:w-11 sm:text-lg">
              i
            </div>

            <div>
              <h3 className="text-[13px] font-semibold text-[#493765] sm:text-sm">
                Regulatory & Development Information
              </h3>

              <p className="mt-1.5 text-[11px] leading-5 text-[#817393] sm:mt-2 sm:text-sm sm:leading-7">
                RCGM approval is referenced in the supplied website
                content. Specific approval scope and individual product
                development status should be confirmed before publication.
              </p>
            </div>

          </div>

        </div>
      </section>

      <ScientificHighlights />

      {/* FACILITIES SHOWCASE */}
      <FacilitiesShowcase facilities={facilities} />

      {/* WATER SYSTEMS */}
      <section
        className="relative overflow-hidden bg-[#FAF8FF] px-4 pb-14 md:px-16 md:pb-28"
      >
        <div className="mx-auto max-w-7xl">

          <div className="relative mt-3 overflow-hidden rounded-[1.5rem] border border-purple-100 bg-white p-4 shadow-sm sm:mt-4 sm:rounded-[2rem] sm:p-9 md:p-11">

            {/* Background accent */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-purple-100/50 blur-3xl sm:h-48 sm:w-48" />

            <div className="relative">

              {/* Header */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5">

                <div className="min-w-0">
                  <SectionLabel>Water Systems</SectionLabel>

                  <h3 className="mt-3 text-[1.55rem] font-semibold leading-tight tracking-tight text-[#291844] sm:mt-4 sm:text-2xl md:text-3xl">
                    Essential Laboratory Utilities
                  </h3>

                  <p className="mt-2.5 max-w-2xl text-[12px] leading-5 text-[#817393] sm:mt-3 sm:text-sm sm:leading-7">
                    Dedicated water system categories supporting laboratory
                    and research infrastructure.
                  </p>
                </div>

                {/* Desktop / Tablet Icon */}
                <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F3EDFF] text-3xl text-purple-700 sm:flex">
                  ◈
                </div>

              </div>

              {/* Utility List */}
              <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3">

                {utilities.map((utility) => (
                  <Link
                    key={utility}
                    href={
                      utility === "Type-I Water"
                        ? "/water-systems/type-1-water"
                        : utility === "Type-2 Water"
                          ? "/water-systems/type-2-water"
                          : utility === "Distilled Water"
                            ? "/water-systems/distilled-water"
                            : "/water-systems/ro-water-plant"
                    }
                    className="group flex min-h-[48px] items-center justify-center rounded-xl border border-purple-200 bg-[#FAF8FF] px-3 py-2.5 text-center text-[11px] font-medium leading-4 text-purple-800 transition duration-300 hover:-translate-y-0.5 hover:border-purple-400 hover:bg-purple-100 sm:min-h-0 sm:rounded-full sm:px-5 sm:py-3 sm:text-sm sm:leading-normal"
                  >
                    <span>{utility}</span>
                    <span className="ml-1.5 text-purple-500 transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                ))}

              </div>

              {/* Mobile supporting line */}
              <div className="mt-5 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-purple-500 sm:hidden">
                <span className="h-px w-6 bg-purple-300" />
                Laboratory Water Infrastructure
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section
        id="careers"
        className="scroll-mt-24 overflow-hidden bg-[#F8F4FF] px-4 py-14 sm:px-6 sm:py-20 md:px-16 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-9 sm:gap-12 md:gap-14 lg:grid-cols-[1.05fr_0.95fr]">

            {/* Left Content */}
            <div>
              <SectionLabel>Careers at CHENGENE</SectionLabel>

              <h2 className="mt-4 text-[2rem] font-semibold leading-[1.08] tracking-tight text-[#493765] sm:mt-5 sm:text-4xl md:text-6xl">
                Your curiosity.
                <br />
                Your ambition.
                <br />
                <span className="text-purple-600">
                  A future in science.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-[13px] leading-6 text-[#817393] sm:mt-6 sm:text-base sm:leading-8">
                Explore opportunities to learn, contribute and grow
                in the evolving world of biotechnology. CHENGENE
                welcomes enquiries from life science graduates
                interested in project and internship opportunities.
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3">
                {["Learn", "Research", "Grow"].map((value) => (
                  <span
                    key={value}
                    className="rounded-full border border-purple-200 bg-white px-4 py-2 text-xs font-medium text-[#71558F] sm:px-5 sm:py-2.5 sm:text-sm"
                  >
                    {value}
                  </span>
                ))}
              </div>

              {/* Qualification Note */}
              <div className="mt-7 border-l-2 border-purple-300 pl-4 sm:mt-10 sm:pl-5">
                <p className="text-[12px] leading-6 text-[#89799F] sm:text-sm sm:leading-7">
                  Opportunities for B.Sc., M.Sc., B.Tech and M.Tech
                  life science graduates.
                </p>
              </div>
            </div>

            {/* Right Opportunity Panel */}
            <div className="relative">
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-purple-200/40 blur-3xl sm:h-40 sm:w-40" />

              <div className="relative overflow-hidden rounded-[22px] border border-purple-100 bg-white p-5 shadow-[0_18px_55px_rgba(111,76,170,0.09)] sm:rounded-[2rem] sm:p-8 md:p-10">

                {/* Card Header */}
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[#F1E8FF] px-3 py-1.5 text-[9px] font-semibold tracking-[0.14em] text-purple-700 sm:px-4 sm:py-2 sm:text-xs sm:tracking-wider">
                    PROJECTS & INTERNSHIPS
                  </span>

                  <span className="text-xl text-purple-300 sm:text-2xl">
                    ✳
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#493765] sm:mt-8 sm:text-2xl md:text-3xl">
                  Life Science Graduates
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#89799F] sm:text-sm sm:leading-7">
                  Take the next step in your scientific journey.
                  Connect with our team to enquire about project
                  and internship opportunities.
                </p>

                {/* Degree Cards */}
                <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-7 sm:gap-3">
                  {["B.Sc.", "M.Sc.", "B.Tech", "M.Tech"].map(
                    (degree) => (
                      <div
                        key={degree}
                        className="flex items-center gap-2.5 rounded-xl border border-purple-100 bg-[#FCFAFF] px-3 py-3 transition hover:border-purple-300 hover:bg-[#F7F1FF] sm:gap-3 sm:px-4 sm:py-4"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-xs text-purple-700 sm:h-8 sm:w-8 sm:text-sm">
                          ✓
                        </span>

                        <span className="text-xs font-semibold text-[#594477] sm:text-sm">
                          {degree}
                        </span>
                      </div>
                    )
                  )}
                </div>

                {/* Career Enquiries */}
                <div className="mt-6 border-t border-purple-100 pt-6 sm:mt-8 sm:pt-7">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#A08DB9] sm:text-xs">
                    Career Enquiries
                  </p>

                  <a
                    href="mailto:team@chengene.org?subject=Project%20%26%20Internship%20Enquiry"
                    className="mt-2 inline-block break-all text-sm font-medium text-purple-700 transition hover:text-purple-900 sm:text-base"
                  >
                    team@chengene.org
                  </a>

                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeC5-z-gltLAhmKDnJpcXx5pQC4FRRSFs432NhUZUsVDFwFpQ/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-purple-600 px-5 py-3.5 text-xs font-semibold text-white transition duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-200 sm:mt-6 sm:px-6 sm:py-4 sm:text-sm"
                  >
                    Apply / Enquire
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="scroll-mt-24 overflow-hidden bg-[#FAF8FF] px-4 py-14 sm:px-6 sm:py-16 md:px-16 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div
            className="relative overflow-hidden rounded-[1.5rem] border border-purple-100 bg-white shadow-[0_20px_70px_rgba(91,33,182,0.08)] sm:rounded-[2rem] md:rounded-[2.5rem]"
            itemScope
            itemType="https://schema.org/Organization"
          >
            {/* Premium Background Accents */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-200/30 blur-[80px] sm:-right-32 sm:-top-32 sm:h-96 sm:w-96 sm:blur-[100px]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-violet-200/25 blur-[80px] sm:-bottom-40 sm:h-96 sm:w-96 sm:blur-[110px]"
            />

            <div className="relative grid lg:grid-cols-[0.95fr_1.05fr]">

              {/* =========================================================
                  LEFT — CONTACT INTRO
              ========================================================= */}
              <div className="relative overflow-hidden px-5 py-7 sm:px-8 sm:py-9 md:px-12 md:py-10 lg:px-14 lg:py-12">

                {/* Decorative line */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-600 via-violet-400 to-purple-100"
                />

                <SectionLabel>Contact CHENGENE</SectionLabel>

                <h2
                  id="contact-heading"
                  className="mt-4 max-w-xl text-[2rem] font-semibold leading-[1.08] tracking-tight text-[#38205F] sm:text-4xl md:text-6xl"
                >
                  Let&apos;s connect
                  <br />
                  <span className="bg-gradient-to-r from-purple-700 via-violet-600 to-purple-500 bg-clip-text text-transparent">
                    through science.
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-[13px] leading-6 text-[#817393] sm:mt-5 sm:text-base sm:leading-8 md:text-lg">
                  Connect with CHENGENE Private Limited for biotechnology,
                  biopharmaceutical research, production, collaboration and
                  project enquiries in Chennai, India.
                </p>

                {/* Quick Contact Actions */}
                <div className="mt-7 flex flex-col gap-2.5 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-3">
                  <a
                    href="mailto:team@chengene.org"
                    aria-label="Email CHENGENE Private Limited"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-purple-700 px-5 py-3.5 text-xs font-semibold text-white shadow-[0_10px_25px_rgba(109,40,217,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-purple-800 hover:shadow-[0_16px_35px_rgba(109,40,217,0.25)] sm:px-7 sm:py-4 sm:text-sm"
                  >
                    Email Our Team
                    <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    href="https://wa.me/919363465290"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact CHENGENE Private Limited on WhatsApp"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-purple-200 bg-[#FBF9FF] px-5 py-3.5 text-xs font-semibold text-purple-700 transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:bg-purple-50 sm:px-7 sm:py-4 sm:text-sm"
                  >
                    WhatsApp Us
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>

                {/* Business Identity */}
                <div className="mt-7 rounded-2xl border border-purple-100 bg-[#FBF9FF] p-4 shadow-[0_10px_30px_rgba(91,33,182,0.05)] sm:mt-8 sm:p-5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-base text-purple-700 sm:h-11 sm:w-11 sm:text-lg"
                    >
                      ✦
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-purple-500 sm:text-xs sm:tracking-[0.18em]">
                        CHENGENE PRIVATE LIMITED
                      </p>

                      <p className="mt-1.5 text-[12px] leading-5 text-[#817393] sm:mt-2 sm:text-sm sm:leading-6">
                        Biotechnology · Biopharmaceutical Research · Production
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-purple-100 pt-3.5 sm:mt-5 sm:pt-4">
                    <p className="text-[11px] leading-5 text-[#89799F] sm:text-xs sm:leading-6">
                      Connect with our team for research, production,
                      biotechnology and project enquiries.
                    </p>

                    <a
                      href="mailto:team@chengene.org?subject=CHENGENE%20Business%20Enquiry"
                      className="mt-2.5 inline-flex items-center gap-2 text-xs font-semibold text-purple-700 transition hover:text-purple-900 sm:mt-3 sm:text-sm"
                    >
                      Start a conversation
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* =========================================================
                  RIGHT — CONTACT INFORMATION
              ========================================================= */}
              <div className="relative bg-gradient-to-br from-[#F8F4FF] via-[#FCFAFF] to-[#F1E8FF] px-5 py-6 sm:px-8 sm:py-7 md:px-12 md:py-8 lg:px-14 lg:py-10">

                {/* Header */}
                <div className="flex items-center justify-between gap-4 border-b border-purple-200/70 pb-5 sm:pb-7">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-purple-500 sm:text-xs">
                      Get in touch
                    </p>

                    <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-[#493765] sm:mt-2 sm:text-2xl md:text-3xl">
                      Contact Information
                    </h3>
                  </div>

                  <div
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-100 bg-white text-base text-purple-700 shadow-sm sm:h-12 sm:w-12 sm:rounded-2xl sm:text-xl"
                  >
                    ✦
                  </div>
                </div>

                <div className="divide-y divide-purple-100/80">

                  {/* ADDRESS */}
                  <div className="flex gap-3 py-5 sm:gap-4 sm:py-5">
                    <div
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-100 bg-white text-base text-purple-700 shadow-sm sm:h-11 sm:w-11 sm:text-lg"
                    >
                      ⌖
                    </div>

                    <address
                      className="min-w-0 not-italic"
                      itemProp="address"
                      itemScope
                      itemType="https://schema.org/PostalAddress"
                    >
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-purple-500 sm:text-xs">
                        Address
                      </p>

                      <p className="mt-1.5 text-[12px] leading-6 text-[#77688D] sm:mt-2 sm:text-sm sm:leading-7">
                        <span itemProp="streetAddress">
                          A-8, Phase-II, 3rd Main Road,
                          <br />
                          Madras Export Processing Zone - SEZ, Tambaram
                        </span>
                        <br />
                        <span itemProp="addressLocality">Chennai</span> -{" "}
                        <span itemProp="postalCode">600 045</span>
                        <br />
                        <span itemProp="addressRegion">Tamil Nadu</span>,{" "}
                        <span itemProp="addressCountry">India</span>
                      </p>

                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Chengene%20Private%20Limited&query_place_id=Chengene%20Private%20Limited"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Get directions to CHENGENE Private Limited in Chennai"
                        className="mt-2.5 inline-flex items-center gap-2 text-[11px] font-semibold text-purple-700 transition hover:text-purple-900 sm:mt-3 sm:text-sm"
                      >
                        View Location on Google Maps
                        <span aria-hidden="true">↗</span>
                      </a>
                    </address>
                  </div>

                  {/* MOBILE / WHATSAPP */}
                  <div className="flex gap-3 py-5 sm:gap-4 sm:py-7">
                    <div
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-100 bg-white text-base text-purple-700 shadow-sm sm:h-11 sm:w-11 sm:text-lg"
                    >
                      ☎
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-purple-500 sm:text-xs">
                        Mobile / WhatsApp
                      </p>

                      <a
                        href="tel:+919363465290"
                        aria-label="Call CHENGENE Private Limited at plus 91 9363465290"
                        itemProp="telephone"
                        className="mt-1.5 inline-block text-[13px] font-medium text-[#77688D] transition hover:text-purple-700 sm:mt-2 sm:text-sm"
                      >
                        +91 9363465290
                      </a>

                      <a
                        href="https://wa.me/919363465290"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat with CHENGENE Private Limited on WhatsApp"
                        className="mt-1.5 block text-[10px] font-semibold text-purple-600 hover:text-purple-800 sm:mt-2 sm:text-xs"
                      >
                        Chat on WhatsApp ↗
                      </a>
                    </div>
                  </div>

                  {/* LANDLINE */}
                  <div className="flex gap-3 py-5 sm:gap-4 sm:py-7">
                    <div
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-100 bg-white text-base text-purple-700 shadow-sm sm:h-11 sm:w-11 sm:text-lg"
                    >
                      ☏
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-purple-500 sm:text-xs">
                        Landline
                      </p>

                      <a
                        href="tel:+914445896954"
                        aria-label="Call CHENGENE Private Limited landline at plus 91 44 4589 6954"
                        className="mt-1.5 inline-block text-[13px] font-medium text-[#77688D] transition hover:text-purple-700 sm:mt-2 sm:text-sm"
                      >
                        +91 44 4589 6954
                      </a>
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="flex gap-3 py-5 sm:gap-4 sm:py-7">
                    <div
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-100 bg-white text-base text-purple-700 shadow-sm sm:h-11 sm:w-11 sm:text-lg"
                    >
                      ✉
                    </div>

                    <div className="min-w-0">
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-purple-500 sm:text-xs">
                        Email
                      </p>

                      <a
                        href="mailto:team@chengene.org"
                        aria-label="Email CHENGENE Private Limited at team@chengene.org"
                        itemProp="email"
                        className="mt-1.5 inline-block break-all text-[13px] font-medium text-[#77688D] transition hover:text-purple-700 sm:mt-2 sm:text-sm"
                      >
                        team@chengene.org
                      </a>
                    </div>
                  </div>

                  {/* WORKING HOURS */}
                  <div className="flex gap-3 py-5 sm:gap-4 sm:py-7">
                    <div
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-100 bg-white text-base text-purple-700 shadow-sm sm:h-11 sm:w-11 sm:text-lg"
                    >
                      ◷
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-purple-500 sm:text-xs">
                        Availability
                      </p>

                      <p className="mt-1.5 text-[13px] font-medium text-[#77688D] sm:mt-2 sm:text-sm">
                        24 / 7
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative overflow-hidden border-t border-purple-100 bg-[#F8F6FF] text-[#291844]">

        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-20 h-[320px] w-[320px] rounded-full bg-purple-200/30 blur-[100px] sm:h-[420px] sm:w-[420px] sm:blur-[120px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-violet-200/30 blur-[110px] sm:h-[500px] sm:w-[500px] sm:blur-[130px]"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-16">

          {/* =========================================================
              PREMIUM SCIENTIFIC COLLABORATION CTA
          ========================================================= */}
          <div className="relative overflow-hidden border-b border-purple-100 py-12 sm:py-16 md:py-20">

            {/* Building Image */}
            <img
              src="/chengene-footer.jpg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 hidden h-full w-full object-cover object-center lg:block"
            />

            {/* Mobile Background */}
            <div className="absolute inset-0 z-0 bg-[#F8F6FF] lg:hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(167,139,250,0.18),transparent_35%),radial-gradient(circle_at_85%_75%,rgba(139,92,246,0.14),transparent_40%)]" />
            </div>

            {/* Premium light overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[#F8F6FF] via-[#F8F6FF]/95 to-[#F8F6FF]/45"
            />

            {/* Soft lavender overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-purple-100/15"
            />

            {/* Subtle right-side fade */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-white/10 to-transparent lg:block"
            />

            <div className="relative grid items-center gap-6 sm:gap-8 lg:grid-cols-[1fr_auto]">

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-purple-600 sm:text-xs sm:tracking-[0.32em]">
                  Scientific Collaboration
                </p>

                <h2 className="mt-3 max-w-3xl text-[1.9rem] font-semibold leading-[1.08] tracking-tight text-[#291844] sm:mt-4 sm:text-4xl md:text-5xl">
                  Where Scientific Discovery
                  <span className="block bg-gradient-to-r from-purple-700 via-violet-600 to-purple-500 bg-clip-text text-transparent">
                    Meets Translational Innovation.
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-[13px] leading-6 text-[#6F6282] sm:mt-5 sm:text-sm sm:leading-7 md:text-base">
                  CHENGENE brings together expertise in biologics,
                  biopharmaceutical development, reproductive biotechnology,
                  and advanced research platforms to accelerate the journey
                  from scientific discovery to development.
                </p>
              </div>

              <a
                href="mailto:team@chengene.org?subject=Scientific%20Collaboration%20with%20CHENGENE"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-purple-700 px-5 py-3.5 text-xs font-semibold text-white shadow-[0_10px_28px_rgba(91,33,182,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-purple-800 hover:shadow-[0_18px_40px_rgba(91,33,182,0.28)] sm:px-7 sm:py-4 sm:text-sm"
              >
                Initiate a Scientific Collaboration
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>

            </div>
          </div>


          {/* =========================================================
              MAIN FOOTER
          ========================================================= */}
          <div className="grid gap-9 py-10 sm:gap-12 sm:py-14 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1fr]">

            {/* BRAND */}
            <div>

              <a href="#home" className="inline-block">
                <p className="text-2xl font-bold tracking-wide text-purple-700 sm:text-3xl">
                  CHENGENE
                </p>

                <p className="mt-1 text-[8px] font-semibold tracking-[4px] text-purple-400 sm:text-[10px] sm:tracking-[5px]">
                  BIOTECHNOLOGY
                </p>
              </a>

              <p className="mt-4 max-w-sm text-[12px] leading-6 text-[#817393] sm:mt-6 sm:text-sm sm:leading-7">
                Advancing biotechnology through research,
                innovation and scientific development.
              </p>

              {/* Expertise pills */}
              <div className="mt-5 flex max-w-md flex-wrap gap-2 sm:mt-7">
                {[
                  "Biologics",
                  "IVF Media",
                  "Monoclonal Antibodies",
                  "Research",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-purple-200 bg-white/70 px-2.5 py-1.5 text-[9px] font-medium text-purple-700 sm:px-3 sm:py-2 sm:text-[11px]"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>


            {/* EXPLORE */}
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#493765] sm:text-xs sm:tracking-[0.22em]">
                Explore
              </h3>

              <div className="mt-4 space-y-2.5 sm:mt-6 sm:space-y-3.5">
                {[
                  ["About Us", "#about"],
                  ["Production", "#production"],
                  ["Research & Development", "#research"],
                  ["Facilities", "#facilities"],
                  ["Careers", "#careers"],
                  ["Contact Us", "#contact"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-center gap-2 text-xs text-[#817393] transition duration-200 hover:text-purple-700 sm:text-sm"
                  >
                    <span
                      aria-hidden="true"
                      className="h-px w-0 bg-purple-500 transition-all duration-200 group-hover:w-4"
                    />
                    {label}
                  </a>
                ))}
              </div>
            </div>


            {/* CAPABILITIES */}
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#493765] sm:text-xs sm:tracking-[0.22em]">
                Capabilities
              </h3>

              <div className="mt-4 space-y-2.5 sm:mt-6 sm:space-y-3.5">
                {[
                  "Biotechnology Research",
                  "Biopharmaceutical Development",
                  "IVF Media Production",
                  "Cell Biology",
                  "Molecular Biology",
                  "Bio-Analytical Research",
                ].map((item) => (
                  <p
                    key={item}
                    className="text-xs text-[#817393] sm:text-sm"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>


            {/* CONNECT */}
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#493765] sm:text-xs sm:tracking-[0.22em]">
                Connect
              </h3>

              <div className="mt-4 space-y-4 sm:mt-6 sm:space-y-5">

                <a
                  href="mailto:team@chengene.org"
                  className="group block"
                >
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-purple-700 sm:text-[10px] sm:tracking-[0.18em]">
                    Email
                  </span>

                  <span className="mt-1 block break-all text-xs text-[#817393] transition hover:text-purple-700 sm:text-sm">
                    team@chengene.org
                  </span>
                </a>

                <a
                  href="tel:+919363465290"
                  className="group block"
                >
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-purple-700 sm:text-[10px] sm:tracking-[0.18em]">
                    Phone
                  </span>

                  <span className="mt-1 block text-xs text-[#817393] transition hover:text-purple-700 sm:text-sm">
                    +91 9363465290
                  </span>
                </a>

                <div>
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-purple-700 sm:text-[10px] sm:tracking-[0.18em]">
                    Location
                  </span>

                  <p className="mt-1 text-xs leading-5 text-[#817393] sm:text-sm sm:leading-6">
                    MEPZ-SEZ, Tambaram,
                    <br />
                    Chennai, Tamil Nadu.
                  </p>
                </div>

              </div>
            </div>

          </div>


          {/* =========================================================
              BOTTOM BAR
          ========================================================= */}
          <div className="border-t border-purple-100 py-5 sm:py-6">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5">

              <div>
                <p className="text-[10px] leading-5 text-[#9A8BAA] sm:text-xs">
                  © {new Date().getFullYear()} CHENGENE Private Limited.
                  All rights reserved.
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 sm:justify-end sm:gap-5">

                <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-[#B0A2BE] sm:block">
                  Science · Innovation · Impact
                </span>

                <a
                  href="#home"
                  className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-purple-600 transition hover:text-purple-800 sm:text-xs"
                >
                  Back to Top
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:-translate-y-1"
                  >
                    ↑
                  </span>
                </a>

              </div>

            </div>

          </div>

        </div>
      </footer>
    </main>
  );
}