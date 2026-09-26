import Link from "next/link";
import { notFound } from "next/navigation";

const waterSystems = {
  "type-1-water": {
    title: "Type-I Water",
    subtitle: "High-Purity Laboratory Water",
    description:
      "Type-I Water is intended for laboratory applications that require highly purified water. It supports precision-focused research and analytical workflows.",
    applications: [
      "Analytical laboratory procedures",
      "Research and development activities",
      "Preparation of laboratory solutions",
    ],
    image: "/water-systems/type-1-water.jpg",
  },

  "type-2-water": {
    title: "Type-2 Water",
    subtitle: "Laboratory-Grade Purified Water",
    description:
      "Type-2 Water is used in laboratory workflows that require purified water for routine research and general laboratory applications.",
    applications: [
      "General laboratory applications",
      "Reagent and solution preparation",
      "Research laboratory workflows",
    ],
    image: "/water-systems/type-2-water.jpg",
  },

  "distilled-water": {
    title: "Distilled Water",
    subtitle: "Purified Water for Laboratory Use",
    description:
      "Distilled Water is produced through distillation and can support laboratory processes where distilled water is specified.",
    applications: [
      "Laboratory solution preparation",
      "General research applications",
      "Suitable laboratory procedures",
    ],
    image: "/water-systems/distilled-water.jpg",
  },

  "ro-water-plant": {
    title: "RO Water Plant",
    subtitle: "Reverse Osmosis Water System",
    description:
      "The RO Water Plant uses reverse osmosis technology to reduce dissolved impurities in feed water. It can serve as a water-treatment stage within laboratory utility infrastructure.",
    applications: [
      "Water pre-treatment",
      "Laboratory utility support",
      "Feed water preparation for further purification",
    ],
    image: "/water-systems/ro-water-plant.jpg",
  },
};

type WaterSystemSlug = keyof typeof waterSystems;

export function generateStaticParams() {
  return Object.keys(waterSystems).map((slug) => ({
    slug,
  }));
}

export default async function WaterSystemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!Object.prototype.hasOwnProperty.call(waterSystems, slug)) {
    notFound();
  }

  const system = waterSystems[slug as WaterSystemSlug];

  return (
    <main className="min-h-screen bg-[#FAF8FF] px-6 pb-20 pt-32 md:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Back Button */}
        <Link
          href="/#facilities"
          className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-5 py-3 text-sm font-medium text-purple-800 transition hover:bg-purple-50"
        >
          ← Back to Water Systems
        </Link>

        {/* Main Content */}
        <section className="mt-8 overflow-hidden rounded-[2rem] border border-purple-100 bg-white shadow-sm">
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative min-h-[300px] bg-[#F0E9FF] md:min-h-[520px]">
              <img
                src={system.image}
                alt={system.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center p-7 sm:p-10 md:p-14">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">
                CHENGENE · WATER SYSTEMS
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#291844] sm:text-4xl md:text-5xl">
                {system.title}
              </h1>

              <h2 className="mt-4 text-lg font-medium text-purple-700">
                {system.subtitle}
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#817393]">
                {system.description}
              </p>

              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#291844]">
                  Applications
                </h3>

                <ul className="mt-4 space-y-3">
                  {system.applications.map((application) => (
                    <li
                      key={application}
                      className="flex items-start gap-3 text-sm leading-6 text-[#665779]"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-500" />
                      {application}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/#facilities"
                className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-purple-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-purple-800"
              >
                Explore Water Systems <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}