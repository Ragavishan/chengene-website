import { notFound } from "next/navigation";
import Link from "next/link";
import { scientificHighlights } from "../../data/scientificHighlights";

const categoryConfig = {
  events: {
    type: "event",
    label: "Events",
    title: "Scientific & Industry Events",
    description:
      "CHENGENE's participation in scientific events, industry expos and professional engagements.",
  },
  meetings: {
    type: "meeting",
    label: "Meetings",
    title: "Scientific & Business Meetings",
    description:
      "Scientific, research and business meetings supporting collaboration and development.",
  },
  conferences: {
    type: "conference",
    label: "Conferences",
    title: "Conferences & Forums",
    description:
      "CHENGENE's participation in conferences, forums and biopharmaceutical industry platforms.",
  },
  workshops: {
    type: "workshop",
    label: "Workshops",
    title: "Workshops & Training",
    description:
      "Workshops, technical sessions and knowledge-sharing initiatives.",
  },
  publications: {
    type: "publication",
    label: "Publications",
    title: "Scientific Publications",
    description:
      "Research publications, scientific papers and knowledge contributions from CHENGENE.",
  },
  presentations: {
    type: "presentation",
    label: "Presentations",
    title: "Scientific Presentations",
    description:
      "Scientific presentations, technical talks and research-focused knowledge sharing.",
  },
} as const;

type CategoryKey = keyof typeof categoryConfig;

const categories = Object.entries(categoryConfig) as [
  CategoryKey,
  (typeof categoryConfig)[CategoryKey],
][];

export function generateStaticParams() {
  return Object.keys(categoryConfig).map((type) => ({
    type,
  }));
}

export default async function ScientificHighlightCategoryPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;

  if (!(type in categoryConfig)) {
    notFound();
  }

  const config = categoryConfig[type as CategoryKey];

  const items = scientificHighlights.filter(
    (item) => item.type === config.type
  );

  return (
    <main className="min-h-screen bg-[#FAF8FF] text-[#493765]">
      {/* HEADER */}
      <section className="border-b border-purple-100 bg-white px-5 py-12 sm:px-8 sm:py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/#scientific-highlights"
            className="inline-flex items-center gap-2 text-xs font-semibold text-purple-600 transition hover:text-purple-800 sm:text-sm"
          >
            ← Back to Scientific Highlights
          </Link>

          <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-600 sm:mt-8 sm:text-xs">
            {config.label}
          </p>

          <h1 className="mt-3 max-w-3xl text-[2rem] font-semibold leading-[1.08] tracking-tight text-[#493765] sm:text-4xl md:text-5xl">
            {config.title}
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#817393] sm:text-base sm:leading-8">
            {config.description}
          </p>

          {/* CATEGORY NAVIGATION */}
          <div className="mt-7 flex gap-2 overflow-x-auto pb-1 sm:mt-9 sm:flex-wrap sm:overflow-visible sm:pb-0">
            {categories.map(([key, category]) => {
              const isActive = key === type;

              return (
                <Link
                  key={key}
                  href={`/scientific-highlights/${key}`}
                  className={`shrink-0 rounded-full border px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.1em] transition-all duration-300 sm:px-4 sm:py-2 sm:text-[10px] sm:tracking-[0.14em] ${
                    isActive
                      ? "border-purple-600 bg-purple-600 text-white shadow-[0_8px_20px_rgba(91,33,182,0.16)]"
                      : "border-purple-100 bg-[#FAF8FF] text-[#79668F] hover:border-purple-200 hover:bg-[#F3EDFF] hover:text-purple-700"
                  }`}
                >
                  {category.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PHOTOS ONLY — NO TEXT UNDER PHOTOS */}
      <section className="px-4 py-10 sm:px-8 sm:py-14 md:px-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          {items.length === 0 ? (
            <div className="rounded-2xl border border-purple-100 bg-white px-6 py-12 text-center shadow-[0_10px_30px_rgba(91,33,182,0.05)]">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F3EDFF] text-lg text-purple-600">
                ✦
              </div>

              <h2 className="mt-4 text-base font-semibold text-[#594477] sm:text-lg">
                {config.label}
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#89799F]">
                No {config.label.toLowerCase()} have been added yet.
                New scientific activities and contributions will appear here
                as they are added.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <Link
                  key={`${item.title}-${item.date}`}
                  href={`/scientific-highlights/${type}/${item.slug}`}
                  aria-label={`View ${item.title} event history`}
                  className="group block overflow-hidden rounded-[22px] border border-purple-100 bg-white shadow-[0_12px_35px_rgba(91,33,182,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(91,33,182,0.11)]"
                >
                  <div className="relative h-[220px] overflow-hidden sm:h-[240px]">
                    <img
                      src={item.image}
                      alt={`${item.title} - ${item.location}`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}