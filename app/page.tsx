import FacilitiesShowcase from "./components/FacilitiesShowcase";
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
        className="relative isolate flex min-h-[100svh] scroll-mt-0 flex-col overflow-hidden bg-[#160D2B] text-white"
      >
        {/* STATIC FULL-SCREEN BIOTECH BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-lab.png"
            alt="Biotechnology research laboratory"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>

        {/* REFINED IMAGE OVERLAY — KEEP THE LAB VISIBLE */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#160D2B]/10" />

        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#160D2B]/85 via-[#160D2B]/55 to-[#160D2B]/5" />

        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#160D2B]/80 via-transparent to-[#160D2B]/20" />

        {/* HERO MAIN CONTENT */}
        <div className="relative z-10 mx-auto grid w-full max-w-[1600px] flex-1 grid-cols-1 items-center gap-10 px-6 pb-12 pt-32 sm:px-10 sm:pt-36 md:px-16 lg:min-h-[calc(100svh-105px)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-20 lg:pb-14 lg:pt-32">

          {/* LEFT — BRAND MESSAGE */}
          <div className="flex flex-col justify-center">

            {/* BRAND LABEL */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-purple-400" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70 sm:text-[18px]">
                Chengene Private Limited
              </span>
            </div>

            {/* HEADLINE */}
            <div className="max-w-[800px]">

              <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#D8B4FE] drop-shadow-[0_0_10px_rgba(216,180,254,0.45)] sm:text-[20px]">
                Biotechnology
              </p>

              <h1 className="text-[2.55rem] font-semibold leading-[1.12] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl xl:text-[4rem]">
                Engineering Biopharma.

                <span className="mt-1 block text-purple-500 xl:text-[3rem]">
                  Advancing Reproductive Science.
                </span>
              </h1>

              <p className="mt-7 max-w-[620px] text-sm leading-7 text-white/85 sm:text-base sm:leading-8 lg:text-lg">
                CHENGENE brings together biologics development, monoclonal
                antibody expertise, and specialized IVF media — powered by
                scientific rigor, precision-led innovation, and a commitment
                to quality across life sciences.
              </p>
            </div>

            {/* SCIENTIFIC FOCUS */}
            <div className="mt-8 max-w-2xl">

              <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/55 sm:text-[15px]">
                Our Scientific Focus
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Biologics",
                  "Monoclonal Antibodies",
                  "IVF Media",
                  "Life Science R&D",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/25 bg-white/[0.08] px-4 py-2.5 text-xs font-medium text-white/90 backdrop-blur-sm transition-colors duration-300 hover:border-purple-700/70 hover:bg-white/15 sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="mt-9 flex flex-wrap items-center gap-10">

              <a
                href="#research"
                className="group inline-flex items-center gap-5 rounded-full bg-purple-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-500"
              >
                Explore Our Expertise

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#about"
                className="group inline-flex items-center gap-3 rounded-full border border-white/35 bg-white/[0.07] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-white/60 hover:bg-white/15"
              >
                About Chengene

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>

            {/* BRAND SIGNATURE */}
            <div className="mt-10 flex items-center gap-3 border-t border-white/20 pt-5 sm:max-w-[600px]">

              <span className="h-14 w-[3px] rounded-full bg-purple-400" />

              <div>
                <p className="text-[20px] font-medium tracking-wide text-white/90">
                  Research · Development · Quality
                </p>

                <p className="mt-1 text-[15px] text-white/55">
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
          <div className="mx-auto grid max-w-[1600px] grid-cols-2 divide-x divide-y divide-white/2 sm:grid-cols-4 sm:divide-y-0">

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
                className="group flex items-start gap-3 px-4 py-5 transition-colors duration-300 hover:bg-white/[0.07] sm:px-6 lg:px-8 lg:py-6"
              >
                <span className="pt-1 text-[15px] font-semibold tracking-wider text-purple-700">
                  {item.number}
                </span>

                <div>
                  <p className="text-xs font-semibold leading-snug text-white sm:text-[18px]">
                    {item.title}
                  </p>

                  <p className="mt-1.5 text-[10px] leading-5 text-white/55 sm:text-[14px]">
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
        className="relative scroll-mt-28 overflow-hidden bg-[#F8F6FF] text-[#291844]"
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
            <div className="relative z-20 flex flex-col justify-center px-6 py-20 sm:px-10 md:px-16 lg:px-20 lg:py-28">

              <div className="mb-6 flex items-center gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-600">
                  About Us
                </span>

                <span
                  aria-hidden="true"
                  className="h-[2px] w-10 bg-purple-400"
                />
              </div>

              <h2
                id="about-heading"
                className="max-w-[680px] text-4xl font-semibold leading-[1.08] tracking-tight text-[#291844] sm:text-5xl md:text-6xl lg:text-[64px]"
              >
                Turning Science
                <span className="block">
                  into{" "}
                  <span className="bg-gradient-to-r from-purple-700 via-violet-600 to-purple-500 bg-clip-text text-transparent">
                    Better Tomorrows.
                  </span>
                </span>
              </h2>

              <p className="mt-7 max-w-[600px] text-base leading-8 text-[#6F6282] md:text-lg">
                CHENGENE Private Limited is a biotechnology company
                committed to advancing the frontiers of life sciences
                through innovative research, high-quality biologics,
                and world-class manufacturing solutions.
              </p>

              {/* Key capabilities */}
              <div className="mt-12 grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-0">

                <div className="group flex flex-col items-center px-3 text-center sm:border-r sm:border-purple-200/70">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100/70 text-2xl text-purple-700 transition duration-300 group-hover:scale-105">
                    ⚗
                  </div>

                  <p className="mt-3 text-sm font-medium leading-5 text-[#38245F]">
                    Innovative
                    <span className="block">Research</span>
                  </p>
                </div>

                <div className="group flex flex-col items-center px-3 text-center sm:border-r sm:border-purple-200/70">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100/70 text-purple-700 transition duration-300 group-hover:scale-105">
                    <svg
                      viewBox="0 0 64 64"
                      className="h-9 w-9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {/* DNA */}
                      <path d="M17 8c0 12 30 12 30 24S17 44 17 56" />
                      <path d="M47 8c0 12-30 12-30 24s30 12 30 24" />

                      {/* DNA bonds */}
                      <path d="M22 17h20" />
                      <path d="M20 27h24" />
                      <path d="M20 37h24" />
                      <path d="M22 47h20" />

                      {/* Molecule nodes */}
                      <circle cx="51" cy="16" r="4" />
                      <circle cx="57" cy="28" r="4" />
                      <circle cx="51" cy="40" r="4" />

                      {/* Molecule connections */}
                      <path d="M53 19l2 5" />
                      <path d="M55 31l-2 5" />
                    </svg>
                  </div>

                  <p className="mt-3 text-sm font-medium leading-5 text-[#38245F]">
                    High-Quality
                    <span className="block">Biologics</span>
                  </p>
                </div>

                <div className="group flex flex-col items-center px-3 text-center sm:border-r sm:border-purple-200/70">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100/70 text-2xl text-purple-700 transition duration-300 group-hover:scale-105">
                    ⚙
                  </div>

                  <p className="mt-3 text-sm font-medium leading-5 text-[#38245F]">
                    Advanced
                    <span className="block">Manufacturing</span>
                  </p>
                </div>

                <div className="group flex flex-col items-center px-3 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100/70 text-2xl text-purple-700 transition duration-300 group-hover:scale-105">
                    ✧
                  </div>

                  <p className="mt-3 text-sm font-medium leading-5 text-[#38245F]">
                    A Healthier
                    <span className="block">Tomorrow</span>
                  </p>
                </div>

              </div>
            </div>

            {/* Microscope image */}
            <div className="relative min-h-[520px] overflow-hidden sm:min-h-[600px] lg:min-h-[700px]">

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

              <div className="absolute bottom-10 right-6 rounded-full border border-purple-400/40 bg-purple-700 px-5 py-3 text-[14px] font-semibold uppercase tracking-[0.22em] text-white shadow-lg sm:right-10">
                Science · Research · Innovation
              </div>
            </div>
          </div>

          {/* =========================
              MISSION
          ========================= */}
          <div className="relative grid items-center lg:grid-cols-[1.15fr_0.85fr]">

            {/* Building image */}
            <div className="relative min-h-[420px] overflow-hidden sm:min-h-[500px] lg:min-h-[560px]">

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

              <div className="absolute bottom-10 left-6 rounded-full border border-purple-400/40 bg-purple-700 px-5 py-3 text-[14px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg sm:left-10">
                CHENGENE PRIVATE LIMITED
              </div>
            </div>

            {/* Mission content */}
            <div className="relative z-10 px-6 py-16 sm:px-10 md:px-16 lg:px-20 lg:py-24">

              <div
                aria-hidden="true"
                className="mb-5 h-[3px] w-12 rounded-full bg-gradient-to-r from-purple-700 to-violet-400"
              />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">
                Our Mission
              </p>

              <h3 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.12] tracking-tight text-[#38205F] sm:text-4xl md:text-5xl">
                Advancing Science.
                <span className="block bg-gradient-to-r from-purple-700 to-violet-500 bg-clip-text text-transparent">
                  Enabling Better Health.
                </span>
              </h3>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#6F6282]">
                To advance biotechnology and biopharmaceutical
                innovation through scientific excellence, reliable
                research, and the development of solutions that
                contribute to global health.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3 text-lg font-medium italic text-purple-600 sm:text-xl">
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
        className="relative overflow-hidden bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          {/* Section Heading */}
          <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-semibold text-violet-700">
                Our Production
              </span>

              <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Specialized solutions
                <span className="block text-violet-700">
                  for research.
                </span>
              </h2>
            </div>

            <div className="lg:justify-self-end lg:max-w-lg">
              <p className="text-base leading-7 text-slate-600 sm:text-lg">
                Explore our IVF media and buffer product categories,
                designed to support specialized research applications
                across the biotechnology landscape.
              </p>

              <div className="mt-4 flex items-center gap-3 text-sm font-medium text-violet-700">
                <span className="h-px w-9 bg-violet-600" />
                Our Product Portfolio
              </div>
            </div>
          </div>

          {/* IVF + BUFFER CATEGORY CARDS */}
          <div className="grid items-stretch gap-6 xl:grid-cols-2">

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
                      featured ? "h-full p-3 sm:p-4" : "p-2.5"
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
                        <span className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-xs font-semibold text-violet-800 shadow-sm">
                          Featured Product
                        </span>
                      )}
                    </div>

                    <div
                      className={`flex items-center justify-between gap-2 ${
                        featured ? "px-1 py-4" : "px-1 py-2.5"
                      }`}
                    >
                      <h3
                        className={`font-semibold leading-snug text-slate-900 group-hover:text-violet-700 ${
                          featured
                            ? "text-base sm:text-lg"
                            : "text-xs sm:text-sm"
                        }`}
                      >
                        {item.name}
                      </h3>

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-700 text-sm text-white transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </div>

                    {featured && (
                      <div className="h-1 overflow-hidden rounded-full bg-violet-100">
                        <div className="h-full w-1/4 bg-violet-700" />
                      </div>
                    )}
                  </a>
                );
              };

              return (
                <div
                  key={group.title}
                  className="flex h-full min-w-0 flex-col rounded-2xl border border-violet-200/80 bg-gradient-to-br from-white to-violet-50/60 p-4 shadow-sm sm:p-5"
                >
                  {/* Category Header */}
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-start gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-xl text-violet-700">
                        {groupIndex === 0 ? "✳" : "⬡"}
                      </div>

                      <div className="min-w-0">
                        <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-violet-500">
                          Production Category {String(groupIndex + 1).padStart(2, "0")}
                        </p>

                        <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                          {group.title}
                        </h3>

                        <p className="mt-1 text-sm leading-5 text-slate-500">
                          {groupIndex === 0
                            ? "Specialized media for IVF and reproductive research."
                            : "Reliable buffer solutions for consistent research."}
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 rounded-full border border-violet-200 bg-white px-3 py-1.5 text-xs font-semibold text-violet-700">
                      {items.length} Products
                    </span>
                  </div>

                  {/* Featured Product + Side Products */}
                  {featuredItem && (
                    <div className="grid flex-1 content-start gap-3 sm:grid-cols-2">

                      {/* Featured Product */}
                      <div className="min-w-0">
                        {renderProduct(featuredItem, true)}
                      </div>

                      {/* Side Products + Explore More */}
                      <div className="flex min-w-0 flex-col gap-3">

                        <div className="grid grid-cols-2 gap-2.5">
                          {previewItems.map((item) => renderProduct(item))}
                        </div>

                        {/* Expandable Remaining Products */}
                        {remainingItems.length > 0 && (
                          <details className="group/explore mt-auto">
                            <summary className="flex min-h-[46px] cursor-pointer list-none items-center justify-center gap-2 rounded-full border border-violet-300 bg-white px-3 py-3 text-center text-xs font-semibold text-violet-800 transition-all hover:border-violet-500 hover:bg-violet-50 sm:text-sm [&::-webkit-details-marker]:hidden">
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

                            <div className="mt-3 grid grid-cols-2 gap-2.5">
                              {remainingItems.map((item) => renderProduct(item))}
                            </div>
                          </details>
                        )}

                        {/* CTA when there are no extra items */}
                        {remainingItems.length === 0 && (
                          <a
                            href="#contact"
                            className="mt-auto flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-violet-300 bg-white px-3 py-3 text-center text-xs font-semibold text-violet-800 transition-all hover:bg-violet-50 sm:text-sm"
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
          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50 via-white to-violet-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-xl text-violet-700">
                ✦
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Precision-Focused Product Portfolio
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Explore Chengene’s IVF media and buffer categories
                  through our specialized production portfolio.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-violet-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-800"
            >
              Contact Us <span>→</span>
            </a>
          </div>

        </div>
      </section>
      {/* RESEARCH & DEVELOPMENT */}
      <section
        id="research"
        className="relative scroll-mt-28 overflow-hidden bg-[#FAF8FF] px-6 py-16 md:px-16 md:py-24"
      >
        {/* Background Accents */}
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-purple-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-violet-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          {/* Section Header */}
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <SectionLabel>Research & Development</SectionLabel>

              <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight text-[#291844] md:text-6xl">
                Advancing the science
                <span className="block text-purple-700">
                  of biologics.
                </span>
              </h2>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-xl text-base leading-8 text-[#766985] md:text-lg">
                Our R&D portfolio spans hormone and monoclonal antibody
                development categories, supporting scientific exploration
                and biopharmaceutical innovation.
              </p>

              <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-purple-800">
                <span className="h-px w-10 bg-purple-400" />
                Research-driven. Science-focused.
              </div>
            </div>
          </div>

          {/* Research Categories */}
          <div className="mt-14 grid grid-cols-1 items-stretch gap-6 xl:grid-cols-2">

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

              const renderResearchProduct = (
                product: (typeof products)[number],
                itemIndex: number,
                featured = false
              ) => {
                const slug = slugMap[product.name];

                return (
                  <a
                    key={product.name}
                    href={`/research/${slug}`}
                    className={`group relative block min-w-0 overflow-hidden rounded-2xl border border-purple-100/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-900/10 ${
                      featured ? "h-full p-3 sm:p-4" : "p-2.5"
                    }`}
                  >
                    {/* Product Image */}
                    <div
                      className={`relative overflow-hidden rounded-xl bg-[#F0E8FF] ${
                        featured ? "h-52 sm:h-60" : "h-24 sm:h-28"
                      }`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {featured && (
                        <span className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-purple-800 backdrop-blur-sm">
                          Featured Research
                        </span>
                      )}

                      {!featured && (
                        <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[9px] font-semibold text-purple-800">
                          Research 0{itemIndex + 1}
                        </span>
                      )}
                    </div>

                    {/* Product Details */}
                    <div
                      className={`flex items-center justify-between gap-2 ${
                        featured ? "px-1 py-4" : "px-1 py-2.5"
                      }`}
                    >
                      <div className="min-w-0">
                        <h4
                          className={`font-semibold leading-snug text-[#493765] transition group-hover:text-purple-700 ${
                            featured
                              ? "text-base sm:text-lg"
                              : "text-xs sm:text-sm"
                          }`}
                        >
                          {product.name}
                        </h4>

                        {featured && (
                          <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#817393] sm:text-sm">
                            {product.fullName}
                          </p>
                        )}
                      </div>

                      <span
                        className={`flex shrink-0 items-center justify-center rounded-full bg-[#F3EDFF] text-purple-700 transition group-hover:bg-purple-700 group-hover:text-white ${
                          featured ? "h-9 w-9 text-sm" : "h-6 w-6 text-xs"
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
                  className="flex min-w-0 flex-col overflow-hidden rounded-[1.75rem] border border-purple-100/80 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-900/5"
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 border-b border-purple-100 bg-gradient-to-r from-[#F4EDFF] to-white p-5 sm:p-6">
                    <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-700 text-xl text-white shadow-lg shadow-purple-700/20 sm:h-14 sm:w-14 sm:rounded-2xl sm:text-2xl">
                        {group.icon}
                      </div>

                      <div className="min-w-0">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-purple-600 sm:text-[10px] sm:tracking-[0.2em]">
                          Research Category 0{groupIndex + 1}
                        </p>

                        <h3 className="mt-1 text-xl font-semibold tracking-tight text-[#291844] sm:text-2xl">
                          {group.title}
                        </h3>

                        <p className="mt-1 text-xs text-[#817393] sm:text-sm">
                          {group.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 rounded-full border border-purple-200 bg-white px-2.5 py-1.5 text-[10px] font-semibold text-purple-800 sm:px-3 sm:text-xs">
                      {items.length} Products
                    </span>
                  </div>

                  {/* Category Product Showcase */}
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    {featuredItem ? (
                      <div className="grid flex-1 grid-cols-2 gap-3 sm:gap-4">

                        {/* Featured Product */}
                        <div className="min-w-0">
                          {renderResearchProduct(featuredItem, 0, true)}
                        </div>

                        {/* Compact Cards + Explore */}
                        <div className="flex min-w-0 flex-col gap-3">

                          <div className="grid grid-cols-2 gap-2 sm:gap-3">
                            {previewItems.map((product, index) =>
                              renderResearchProduct(product, index + 1)
                            )}
                          </div>

                          {/* Expandable Remaining Products */}
                          {remainingItems.length > 0 ? (
                            <details className="group/research mt-auto">
                              <summary className="flex min-h-[46px] cursor-pointer list-none items-center justify-center gap-2 rounded-xl border border-purple-200 bg-gradient-to-r from-[#F4EDFF] to-white px-2 py-3 text-center text-[10px] font-semibold text-purple-800 transition hover:border-purple-400 hover:bg-purple-50 sm:gap-3 sm:px-3 sm:text-xs [&::-webkit-details-marker]:hidden">
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

                              <div className="mt-3 grid grid-cols-2 gap-2 sm:gap-3">
                                {remainingItems.map((product, index) =>
                                  renderResearchProduct(product, index + 3)
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
                              className="mt-auto flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-purple-200 bg-gradient-to-r from-[#F4EDFF] to-white px-2 py-3 text-center text-[10px] font-semibold text-purple-800 transition hover:border-purple-400 hover:bg-purple-50 sm:gap-3 sm:px-3 sm:text-xs"
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
          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-purple-100 bg-white/80 p-6 sm:flex-row sm:items-start sm:p-7">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-lg text-purple-800">
              i
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#493765]">
                Regulatory & Development Information
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#817393]">
                RCGM approval is referenced in the supplied website
                content. Specific approval scope and individual product
                development status should be confirmed before publication.
              </p>
            </div>
          </div>

        </div>
      </section>
      {/* LICENSE & APPROVALS */}
      <section
        id="license"
        className="scroll-mt-28 overflow-hidden bg-white px-6 py-24 md:px-16 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            {/* Left Content */}
            <div>
              <SectionLabel>License & Approvals</SectionLabel>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#493765] md:text-5xl">
                Built on trust.
                <br />
                <span className="text-purple-600">
                  Guided by compliance.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-[#817393]">
                CHENGENE is committed to maintaining a structured
                regulatory framework to support its biotechnology
                research, development and production activities.
              </p>

              <div className="mt-9 rounded-2xl border border-purple-100 bg-[#FAF8FF] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-700">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#594477]">
                      Regulatory transparency
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#89799F]">
                      License details and approval documents can be
                      presented here for reference, subject to
                      verification and applicable disclosure.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-xs leading-6 text-[#9A8BAA]">
                Official documents, validity dates and permitted
                activities should be verified before publication.
              </p>
            </div>

            {/* Right: Approval List */}
            <div className="space-y-4">
              {approvals.map((approval, index) => (
                <div
                  key={approval}
                  className="group rounded-2xl border border-purple-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-[0_16px_45px_rgba(111,76,170,0.10)] md:p-7"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F2EBFF] text-sm font-bold text-purple-700 transition-colors duration-300 group-hover:bg-purple-600 group-hover:text-white">
                      0{index + 1}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#594477] md:text-xl">
                        {approval}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#89799F]">
                        Regulatory documentation and authorization
                        details relevant to this category.
                      </p>
                    </div>

                    <div className="hidden h-9 w-9 items-center justify-center rounded-full bg-[#FAF8FF] text-purple-500 transition-all duration-300 group-hover:bg-purple-100 md:flex">
                      ↗
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl bg-gradient-to-r from-[#F4EEFF] to-[#FBF9FF] p-6">
                <p className="text-sm leading-7 text-[#79668F]">
                  For regulatory or documentation-related enquiries,
                  please contact the CHENGENE team.
                </p>

                <a
                  href="mailto:team@chengene.org"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 transition hover:text-purple-900"
                >
                  Contact our team
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES SHOWCASE */}
      <FacilitiesShowcase facilities={facilities} />

      {/* WATER SYSTEMS */}
      <section className="relative overflow-hidden bg-[#FAF8FF] px-6 pb-20 md:px-16 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative mt-4 overflow-hidden rounded-[2rem] border border-purple-100 bg-white p-7 shadow-sm sm:p-9 md:p-11">
            {/* Background accent */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full bg-purple-100/50 blur-3xl" />

            <div className="relative">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <SectionLabel>Water Systems</SectionLabel>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#291844] md:text-3xl">
                    Essential Laboratory Utilities
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#817393]">
                    Dedicated water system categories supporting laboratory
                    and research infrastructure.
                  </p>
                </div>

                <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F3EDFF] text-3xl text-purple-700 sm:flex">
                  ◈
                </div>
              </div>

              {/* Utility List */}
              <div className="mt-8 flex flex-wrap gap-3">
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
                    className="rounded-full border border-purple-200 bg-[#FAF8FF] px-5 py-3 text-sm font-medium text-purple-800 transition hover:border-purple-400 hover:bg-purple-100"
                  >
                    {utility}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section
        id="careers"
        className="scroll-mt-28 overflow-hidden bg-[#F8F4FF] px-6 py-24 md:px-16 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left Content */}
            <div>
              <SectionLabel>Careers at CHENGENE</SectionLabel>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#493765] md:text-6xl">
                Your curiosity.
                <br />
                Your ambition.
                <br />
                <span className="text-purple-600">
                  A future in science.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#817393]">
                Explore opportunities to learn, contribute and grow
                in the evolving world of biotechnology. CHENGENE
                welcomes enquiries from life science graduates
                interested in project and internship opportunities.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {["Learn", "Research", "Grow"].map((value) => (
                  <span
                    key={value}
                    className="rounded-full border border-purple-200 bg-white px-5 py-2.5 text-sm font-medium text-[#71558F]"
                  >
                    {value}
                  </span>
                ))}
              </div>

              <div className="mt-10 border-l-2 border-purple-300 pl-5">
                <p className="text-sm leading-7 text-[#89799F]">
                  Opportunities for B.Sc., M.Sc., B.Tech and M.Tech
                  life science graduates.
                </p>
              </div>
            </div>

            {/* Right Opportunity Panel */}
            <div className="relative">
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-purple-200/40 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-purple-100 bg-white p-8 shadow-[0_20px_70px_rgba(111,76,170,0.08)] md:p-10">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#F1E8FF] px-4 py-2 text-xs font-semibold tracking-wider text-purple-700">
                    PROJECTS & INTERNSHIPS
                  </span>

                  <span className="text-2xl text-purple-300">✳</span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-[#493765] md:text-3xl">
                  Life Science Graduates
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#89799F]">
                  Take the next step in your scientific journey.
                  Connect with our team to enquire about project
                  and internship opportunities.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {["B.Sc.", "M.Sc.", "B.Tech", "M.Tech"].map(
                    (degree) => (
                      <div
                        key={degree}
                        className="flex items-center gap-3 rounded-xl border border-purple-100 bg-[#FCFAFF] px-4 py-4 transition hover:border-purple-300 hover:bg-[#F7F1FF]"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-sm text-purple-700">
                          ✓
                        </span>

                        <span className="text-sm font-semibold text-[#594477]">
                          {degree}
                        </span>
                      </div>
                    )
                  )}
                </div>

                <div className="mt-8 border-t border-purple-100 pt-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A08DB9]">
                    Career Enquiries
                  </p>

                  <a
                    href="mailto:team@chengene.org?subject=Project%20%26%20Internship%20Enquiry"
                    className="mt-2 inline-block break-all text-base font-medium text-purple-700 transition hover:text-purple-900"
                  >
                    team@chengene.org
                  </a>

                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeC5-z-gltLAhmKDnJpcXx5pQC4FRRSFs432NhUZUsVDFwFpQ/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-purple-600 px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-200"
                  >
                    Apply / Enquire
                    <span>↗</span>
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
        className="scroll-mt-28 overflow-hidden bg-[#FAF8FF] px-6 py-16 md:px-16 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div
            className="relative overflow-hidden rounded-[2.5rem] border border-purple-100 bg-white shadow-[0_25px_90px_rgba(91,33,182,0.08)]"
            itemScope
            itemType="https://schema.org/Organization"
          >
            {/* Premium Background Accents */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-purple-200/30 blur-[100px]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-violet-200/25 blur-[110px]"
            />

            <div className="relative grid lg:grid-cols-[0.95fr_1.05fr]">
              {/* =========================================================
                  LEFT — CONTACT INTRO
              ========================================================= */}
              <div className="relative overflow-hidden px-7 py-8 sm:px-10 md:px-12 md:py-10 lg:px-14 lg:py-12">
                {/* Decorative line */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-600 via-violet-400 to-purple-100"
                />

                <SectionLabel>Contact CHENGENE</SectionLabel>

                <h2
                  id="contact-heading"
                  className="mt-4 max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#38205F] md:text-6xl"
                >
                  Let&apos;s connect
                  <br />
                  <span className="bg-gradient-to-r from-purple-700 via-violet-600 to-purple-500 bg-clip-text text-transparent">
                    through science.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-[#817393] md:text-lg">
                  Connect with CHENGENE Private Limited for biotechnology,
                  biopharmaceutical research, production, collaboration and
                  project enquiries in Chennai, India.
                </p>

                {/* Quick Contact Actions */}
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="mailto:team@chengene.org"
                    aria-label="Email CHENGENE Private Limited"
                    className="inline-flex items-center gap-3 rounded-full bg-purple-700 px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(109,40,217,0.20)] transition duration-300 hover:-translate-y-1 hover:bg-purple-800 hover:shadow-[0_16px_35px_rgba(109,40,217,0.25)]"
                  >
                    Email Our Team
                    <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    href="https://wa.me/919363465290"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact CHENGENE Private Limited on WhatsApp"
                    className="inline-flex items-center gap-3 rounded-full border border-purple-200 bg-[#FBF9FF] px-7 py-4 text-sm font-semibold text-purple-700 transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:bg-purple-50"
                  >
                    WhatsApp Us
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>

                {/* Business Identity */}
                <div className="mt-8 rounded-2xl border border-purple-100 bg-[#FBF9FF] p-5 shadow-[0_12px_35px_rgba(91,33,182,0.06)]">
                  <div className="flex items-start gap-4">
                    <div
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-lg text-purple-700"
                    >
                      ✦
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-500">
                        CHENGENE PRIVATE LIMITED
                      </p>

                      <p className="mt-2 text-sm leading-6 text-[#817393]">
                        Biotechnology · Biopharmaceutical Research · Production
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 border-t border-purple-100 pt-4">
                    <p className="text-xs leading-6 text-[#89799F]">
                      Connect with our team for research, production,
                      biotechnology and project enquiries.
                    </p>

                    <a
                      href="mailto:team@chengene.org?subject=CHENGENE%20Business%20Enquiry"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 transition hover:text-purple-900"
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
              <div className="relative bg-gradient-to-br from-[#F8F4FF] via-[#FCFAFF] to-[#F1E8FF] px-7 py-6 sm:px-10 md:px-12 md:py-8 lg:px-14 lg:py-10">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-purple-200/70 pb-7">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-500">
                      Get in touch
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#493765] md:text-3xl">
                      Contact Information
                    </h3>
                  </div>

                  <div
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-100 bg-white text-xl text-purple-700 shadow-sm"
                  >
                    ✦
                  </div>
                </div>

                <div className="divide-y divide-purple-100/80">
                  {/* =====================================================
                      ADDRESS
                  ===================================================== */}
                  <div className="flex gap-4 py-5">
                    <div
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-100 bg-white text-lg text-purple-700 shadow-sm"
                    >
                      ⌖
                    </div>

                    <address
                      className="not-italic"
                      itemProp="address"
                      itemScope
                      itemType="https://schema.org/PostalAddress"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-purple-500">
                        Address
                      </p>

                      <p className="mt-2 text-sm leading-7 text-[#77688D]">
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
                        href="https://www.google.com/maps/place/Chengene+Private+Limited/@12.9459399,80.1196112,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525f011815ea6f:0xd9912157e940aeb7!8m2!3d12.9459399!4d80.1196112!16s%2Fg%2F11tj34cglc?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Get directions to CHENGENE Private Limited in Chennai"
                        className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 transition hover:text-purple-900"
                      >
                        View Location on Google Maps
                        <span aria-hidden="true">↗</span>
                      </a>
                    </address>
                  </div>

                  {/* =====================================================
                      MOBILE / WHATSAPP
                  ===================================================== */}
                  <div className="flex gap-4 py-7">
                    <div
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-100 bg-white text-lg text-purple-700 shadow-sm"
                    >
                      ☎
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-purple-500">
                        Mobile / WhatsApp
                      </p>

                      <a
                        href="tel:+919363465290"
                        aria-label="Call CHENGENE Private Limited at plus 91 9363465290"
                        itemProp="telephone"
                        className="mt-2 inline-block text-sm font-medium text-[#77688D] transition hover:text-purple-700"
                      >
                        +91 9363465290
                      </a>

                      <a
                        href="https://wa.me/919363465290"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat with CHENGENE Private Limited on WhatsApp"
                        className="mt-2 block text-xs font-semibold text-purple-600 hover:text-purple-800"
                      >
                        Chat on WhatsApp ↗
                      </a>
                    </div>
                  </div>

                  {/* =====================================================
                      LANDLINE
                  ===================================================== */}
                  <div className="flex gap-4 py-7">
                    <div
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-100 bg-white text-lg text-purple-700 shadow-sm"
                    >
                      ☏
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-purple-500">
                        Landline
                      </p>

                      <a
                        href="tel:+914445896954"
                        aria-label="Call CHENGENE Private Limited landline at plus 91 44 4589 6954"
                        className="mt-2 inline-block text-sm font-medium text-[#77688D] transition hover:text-purple-700"
                      >
                        +91 44 4589 6954
                      </a>
                    </div>
                  </div>

                  {/* =====================================================
                      EMAIL
                  ===================================================== */}
                  <div className="flex gap-4 py-7">
                    <div
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-100 bg-white text-lg text-purple-700 shadow-sm"
                    >
                      ✉
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-purple-500">
                        Email
                      </p>

                      <a
                        href="mailto:team@chengene.org"
                        aria-label="Email CHENGENE Private Limited at team@chengene.org"
                        itemProp="email"
                        className="mt-2 inline-block break-all text-sm font-medium text-[#77688D] transition hover:text-purple-700"
                      >
                        team@chengene.org
                      </a>
                    </div>
                  </div>

                  {/* =====================================================
                      WORKING HOURS
                  ===================================================== */}
                  <div className="flex gap-4 py-7">
                    <div
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-100 bg-white text-lg text-purple-700 shadow-sm"
                    >
                      ◷
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-purple-500">
                        Availability
                      </p>

                      <p className="mt-2 text-sm font-medium text-[#77688D]">
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
          className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-purple-200/30 blur-[120px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-200/30 blur-[130px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-16">

          {/* Premium Scientific Collaboration CTA */}
          <div className="relative overflow-hidden border-b border-purple-100 py-16 md:py-20">

            {/* Building Image */}
            <img
              src="/chengene-footer.jpg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

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
              className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/10 to-transparent"
            />

            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-purple-600">
                  Scientific Collaboration
                </p>

                <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.08] tracking-tight text-[#291844] sm:text-4xl md:text-5xl">
                  Where Scientific Discovery
                  <span className="block bg-gradient-to-r from-purple-700 via-violet-600 to-purple-500 bg-clip-text text-transparent">
                    Meets Translational Innovation.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6F6282] md:text-base">
                  CHENGENE brings together expertise in biologics,
                  biopharmaceutical development, reproductive biotechnology,
                  and advanced research platforms to accelerate the journey
                  from scientific discovery to development.
                </p>
              </div>

              <a
                href="mailto:team@chengene.org?subject=Scientific%20Collaboration%20with%20CHENGENE"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-purple-700 px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(91,33,182,0.20)] transition duration-300 hover:-translate-y-1 hover:bg-purple-800 hover:shadow-[0_18px_40px_rgba(91,33,182,0.28)]"
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


          {/* Main Footer */}
          <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1fr]">

            {/* Brand */}
            <div>

              <a href="#home" className="inline-block">
                <p className="text-3xl font-bold tracking-wide text-purple-700">
                  CHENGENE
                </p>

                <p className="mt-1 text-[10px] font-semibold tracking-[5px] text-purple-400">
                  BIOTECHNOLOGY
                </p>
              </a>

              <p className="mt-6 max-w-sm text-sm leading-7 text-[#817393]">
                Advancing biotechnology through research,
                innovation and scientific development.
              </p>

              {/* Expertise pills */}
              <div className="mt-7 flex max-w-md flex-wrap gap-2">
                {[
                  "Biologics",
                  "IVF Media",
                  "Monoclonal Antibodies",
                  "Research",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-purple-200 bg-white/70 px-3 py-2 text-[11px] font-medium text-purple-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>


            {/* Explore */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#493765]">
                Explore
              </h3>

              <div className="mt-6 space-y-3.5">
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
                    className="group flex items-center gap-2 text-sm text-[#817393] transition duration-200 hover:text-purple-700"
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


            {/* Capabilities */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#493765]">
                Capabilities
              </h3>

              <div className="mt-6 space-y-3.5">
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
                    className="text-sm text-[#817393]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>


            {/* Connect */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#493765]">
                Connect
              </h3>

              <div className="mt-6 space-y-5">

                <a
                  href="mailto:team@chengene.org"
                  className="group block"
                >
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-700">
                    Email
                  </span>

                  <span className="mt-1 block text-sm text-[#817393] transition hover:text-purple-700">
                    team@chengene.org
                  </span>
                </a>

                <a
                  href="tel:+919363465290"
                  className="group block"
                >
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-700">
                    Phone
                  </span>

                  <span className="mt-1 block text-sm text-[#817393] transition hover:text-purple-700">
                    +91 9363465290
                  </span>
                </a>

                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-700">
                    Location
                  </span>

                  <p className="mt-1 text-sm leading-6 text-[#817393]">
                    MEPZ-SEZ, Tambaram,
                    <br />
                    Chennai, Tamil Nadu.
                  </p>
                </div>

              </div>
            </div>

          </div>


          {/* Bottom Expertise Line */}
          <div className="border-t border-purple-100 py-6">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-xs text-[#9A8BAA]">
                  © {new Date().getFullYear()} CHENGENE Private Limited.
                  All rights reserved.
                </p>
              </div>

              <div className="flex items-center gap-5">

                <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-[#B0A2BE] sm:block">
                  Science · Innovation · Impact
                </span>

                <a
                  href="#home"
                  className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-purple-600 transition hover:text-purple-800"
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