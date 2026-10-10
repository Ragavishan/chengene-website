import { notFound } from "next/navigation";
import Link from "next/link";
import { scientificHighlights } from "../../../data/scientificHighlights";

const validTypes = [
  "events",
  "meetings",
  "conferences",
  "workshops",
  "publications",
  "presentations",
];

export function generateStaticParams() {
  return validTypes.flatMap((type) =>
    scientificHighlights
      .filter((item) => {
        const singularType =
          type === "events"
            ? "event"
            : type === "meetings"
              ? "meeting"
              : type === "conferences"
                ? "conference"
                : type === "workshops"
                  ? "workshop"
                  : type === "publications"
                    ? "publication"
                    : "presentation";

        return item.type === singularType;
      })
      .map((item) => ({
        type,
        slug: item.slug,
      }))
  );
}

export default async function ScientificHighlightDetailPage({
  params,
}: {
  params: Promise<{ type: string; slug: string }>;
}) {
  const { type, slug } = await params;

  if (!validTypes.includes(type)) {
    notFound();
  }

  const item = scientificHighlights.find(
    (highlight) => highlight.slug === slug
  );

  if (!item || !item.type || !validTypes.includes(`${item.type}s`)) {
    notFound();
  }

  const images: string[] = item.gallery?.length
  ? item.gallery
  : [item.image];
  return (
    <main className="min-h-screen bg-[#FAF8FF] text-[#493765]">
      {/* HEADER */}
      <section className="border-b border-purple-100 bg-white px-5 py-12 sm:px-8 sm:py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <Link
            href={`/scientific-highlights/${type}`}
            className="inline-flex items-center gap-2 text-xs font-semibold text-purple-600 transition hover:text-purple-800 sm:text-sm"
          >
            ← Back to {item.category}
          </Link>

          <div className="mt-8">
            <span className="inline-flex rounded-full bg-[#F3EDFF] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-purple-700">
              {item.category}
            </span>

            <h1 className="mt-4 text-[2rem] font-semibold leading-[1.08] tracking-tight text-[#493765] sm:text-4xl md:text-5xl">
              {item.title}
            </h1>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#89799F] sm:text-sm">
              <span>{item.date}</span>
              <span>•</span>
              <span>{item.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* DETAIL */}
      <section className="px-4 py-10 sm:px-8 sm:py-14 md:px-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <article className="overflow-hidden rounded-[24px] border border-purple-100 bg-white shadow-[0_18px_50px_rgba(91,33,182,0.08)] sm:rounded-[30px]">
            {/* IMAGE GALLERY */}
            {images.length === 1 ? (
              <div className="relative h-[260px] overflow-hidden sm:h-[400px] md:h-[500px]">
                <img
                  src={images[0]}
                  alt={`${item.title} - ${item.location}`}
                  className="h-full w-full object-cover"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-purple-700 shadow-sm backdrop-blur-sm sm:left-6 sm:top-6 sm:px-4 sm:py-2 sm:text-[10px]">
                  {item.year}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 sm:gap-4 sm:p-5">
                {images.map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className={`group relative overflow-hidden rounded-xl bg-[#F3EDFF] ${
                      index === 0 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${item.title} - Photo ${index + 1}`}
                      className={`w-full object-cover transition duration-500 group-hover:scale-[1.02] ${
                        index === 0
                          ? "h-[240px] sm:h-[380px]"
                          : "h-[200px] sm:h-[230px]"
                      }`}
                    />

                    {index === 0 && (
                      <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-purple-700 shadow-sm backdrop-blur-sm sm:left-6 sm:top-6 sm:px-4 sm:py-2 sm:text-[10px]">
                        {item.year}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* CONTENT */}
            <div className="p-5 sm:p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#F3EDFF] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-purple-700">
                  {item.category}
                </span>

                <span className="text-xs text-[#9A8BAA]">
                  {item.date}
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-semibold leading-tight text-[#594477] sm:text-3xl">
                {item.title}
              </h2>

              <p className="mt-2 text-sm font-medium text-purple-500">
                {item.location}
              </p>

              <div className="mt-6 h-px w-12 bg-purple-200" />

              <p className="mt-6 max-w-3xl whitespace-pre-line text-sm leading-7 text-[#89799F] sm:text-base sm:leading-8">
                {item.description}
              </p>
            </div>
          </article>

          {/* BACK */}
          <div className="mt-8 text-center">
            <Link
              href={`/scientific-highlights/${type}`}
              className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-white px-5 py-2.5 text-xs font-semibold text-purple-700 shadow-[0_8px_25px_rgba(91,33,182,0.05)] transition hover:border-purple-200 hover:bg-[#F3EDFF]"
            >
              ← Back to {item.category}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}