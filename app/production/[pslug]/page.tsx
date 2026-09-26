import Link from "next/link";
import { notFound } from "next/navigation";

const productionItems = {
  ferticyclinpro: {
    name: "FerticyclinPro Flushing Media",
    category: "IVF Media",
    image: "/production/ferticyclinpro.jpg",
    overview:
      "FerticyclinPro Flushing Media is part of Chengene's IVF media portfolio, developed for laboratory workflows associated with assisted reproductive technology.",
    application:
      "Used in IVF laboratory workflows where flushing media is required. Product-specific usage should follow the approved product instructions.",
    features: [
      "Part of the IVF media product portfolio",
      "Designed for specialized laboratory workflows",
      "Product information available through our team",
    ],
  },
  "pvp-media": {
    name: "PVP Media",
    category: "IVF Media",
    image: "/production/pvp-media.jpeg",
    overview:
      "PVP Media is included in Chengene's IVF media portfolio for specialized assisted reproductive technology laboratory applications.",
    application:
      "Used in relevant IVF laboratory procedures according to the product's intended use and instructions.",
    features: [
      "Specialized IVF laboratory media",
      "Developed for assisted reproductive technology workflows",
      "Enquiries welcome for product information",
    ],
  },
  "vitrification-media": {
    name: "Vitrification Media",
    category: "IVF Media",
    image: "/production/vitrification-media.jpg",
    overview:
      "Vitrification Media is part of Chengene's IVF media range for laboratory workflows involving vitrification procedures.",
    application:
      "Intended for relevant vitrification workflows in IVF laboratories, subject to product-specific instructions.",
    features: [
      "Part of the IVF media range",
      "Designed for specialized laboratory use",
      "Contact our team for product-specific details",
    ],
  },
  "thawing-media": {
    name: "Thawing Media",
    category: "IVF Media",
    image: "/production/thawing-media.jpeg",
    overview:
      "Thawing Media is included in Chengene's IVF media portfolio for laboratory workflows involving thawing procedures.",
    application:
      "Used in relevant IVF laboratory thawing workflows according to the product's intended use and instructions.",
    features: [
      "Specialized IVF laboratory media",
      "Part of Chengene's production portfolio",
      "Product information available on enquiry",
    ],
  },
  pbs: {
    name: "PBS",
    category: "Buffer Solutions",
    image: "/production/pbs.jpg",
    overview:
      "Phosphate Buffered Saline (PBS) is part of Chengene's buffer solution portfolio for laboratory applications.",
    application:
      "Used in applicable laboratory workflows where PBS is required. Please refer to product-specific information for intended use.",
    features: [
      "Laboratory buffer solution",
      "Part of Chengene's buffer portfolio",
      "Contact our team for product details",
    ],
  },
  "pbs-bsa": {
    name: "PBS with 1% BSA",
    category: "Buffer Solutions",
    image: "/production/pbs-bsa.jpg",
    overview:
      "PBS with 1% BSA is part of Chengene's buffer solution portfolio, combining phosphate buffered saline with 1% bovine serum albumin.",
    application:
      "For laboratory workflows requiring PBS with 1% BSA, according to the relevant product instructions.",
    features: [
      "PBS-based buffer solution",
      "Contains 1% BSA",
      "Product information available through our team",
    ],
  },
};

type ProductionSlug = keyof typeof productionItems;

export function generateStaticParams() {
  return Object.keys(productionItems).map((pslug) => ({
    pslug,
  }));
}

export default async function ProductionDetailPage({
  params,
}: {
  params: Promise<{ pslug: string }>;
}) {
  const { pslug } = await params;

  if (!Object.prototype.hasOwnProperty.call(productionItems, pslug)) {
    notFound();
  }

  const product = productionItems[pslug as ProductionSlug];

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-violet-50 to-purple-100">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <Link
            href="/#production"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-violet-700 transition hover:text-purple-900"
          >
            <span aria-hidden="true">←</span>
            Back to Production
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
                {product.category}
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
                {product.name}
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                {product.overview}
              </p>

              <a
                href={`mailto:production@chengene.org?subject=${encodeURIComponent(
                  `Product Enquiry - ${product.name}`
                )}`}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-violet-700 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-800"
              >
                Enquire About This Product
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-200/60 to-purple-100/40 blur-xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-4 shadow-2xl shadow-violet-200/40">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[300px] w-full rounded-2xl object-cover md:h-[440px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-700">
            Product Overview
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Designed for specialized laboratory workflows
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            {product.overview}
          </p>

          <div className="mt-10 rounded-3xl border border-violet-100 bg-violet-50/60 p-7 md:p-9">
            <h3 className="text-xl font-bold text-slate-900">
              Application
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              {product.application}
            </p>
          </div>
        </div>

        <aside className="h-fit rounded-3xl border border-slate-100 bg-white p-7 shadow-lg shadow-slate-100">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
            Product Highlights
          </p>

          <ul className="mt-6 space-y-5">
            {product.features.map((feature, index) => (
              <li key={index} className="flex gap-3 text-sm leading-6 text-slate-600">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-slate-100 pt-6">
            <p className="text-sm font-semibold text-slate-800">
              Need more information?
            </p>

            <a
              href="mailto:production@chengene.org"
              className="mt-2 inline-block text-sm font-semibold text-violet-700 hover:text-violet-900"
            >
              Contact Production Team →
            </a>
          </div>
        </aside>
      </section>

      <section className="bg-gradient-to-r from-violet-700 to-purple-800">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center md:px-10">
          <div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Interested in our production portfolio?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-violet-100">
              Connect with Chengene to enquire about product information
              and relevant documentation.
            </p>
          </div>

          <a
            href="mailto:production@chengene.org"
            className="inline-flex shrink-0 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-violet-800 transition hover:bg-violet-50"
          >
            Contact Us →
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-100 bg-white px-6 py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Chengene Private Limited
      </footer>
    </main>
  );
}