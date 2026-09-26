import Link from "next/link";
import { notFound } from "next/navigation";

const researchItems = {
  fsh: {
    name: "Follicle-Stimulating Hormone (FSH)",
    category: "Recombinant Hormone",
    image: "/research/fsh.jpg",
    description:
      "Follicle-Stimulating Hormone (FSH) is a key hormone involved in reproductive biology and follicular development.",
    details:
      "FSH plays an important role in reproductive physiology. Explore CHENGENE's research and development focus in the field of reproductive biotechnology.",
  },

  hcg: {
    name: "Human Chorionic Gonadotropin (hCG)",
    category: "Recombinant Hormone",
    image: "/research/hcg.jpg",
    description:
      "Human Chorionic Gonadotropin (hCG) is a hormone associated with reproductive biology.",
    details:
      "hCG has applications in reproductive medicine and biotechnology. This page provides an overview of the molecule and its relevance to CHENGENE's research portfolio.",
  },

  pembrolizumab: {
    name: "Pembrolizumab",
    category: "Monoclonal Antibody",
    image: "/research/pembrolizumab.jpg",
    description:
      "Pembrolizumab is a monoclonal antibody that targets PD-1, an immune checkpoint protein.",
    details:
      "PD-1 pathway research is an important area in cancer immunotherapy. Pembrolizumab is included in CHENGENE's monoclonal antibody research portfolio.",
  },

  trastuzumab: {
    name: "Trastuzumab",
    category: "Monoclonal Antibody",
    image: "/research/trastuzumab.jpg",
    description:
      "Trastuzumab is a monoclonal antibody that targets the HER2 protein.",
    details:
      "HER2 is a protein studied in oncology and targeted therapy. Trastuzumab is part of CHENGENE's monoclonal antibody research portfolio.",
  },

  daratumumab: {
    name: "Daratumumab",
    category: "Monoclonal Antibody",
    image: "/research/daratumumab.jpg",
    description:
      "Daratumumab is a monoclonal antibody that targets CD38.",
    details:
      "CD38 is a target of interest in hematological oncology. Daratumumab is included in CHENGENE's monoclonal antibody research portfolio.",
  },

  pertuzumab: {
    name: "Pertuzumab",
    category: "Monoclonal Antibody",
    image: "/research/pertuzumab.jpg",
    description:
      "Pertuzumab is a monoclonal antibody that targets HER2.",
    details:
      "Pertuzumab binds to a different HER2 region than trastuzumab. It is included in CHENGENE's monoclonal antibody research portfolio.",
  },
};

export function generateStaticParams() {
  return Object.keys(researchItems).map((slug) => ({
    fslug: slug,
  }));
}

export default async function ResearchDetailPage({
  params,
}: {
  params: Promise<{ fslug: string }>;
}) {
  const { fslug } = await params;

  const item =
    researchItems[fslug as keyof typeof researchItems];

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/#research"
          className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 transition hover:text-purple-800"
        >
          ← Back to Research & Development
        </Link>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full bg-purple-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-purple-700">
              {item.category}
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[#493765] md:text-6xl">
              {item.name}
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#817393]">
              {item.description}
            </p>

            <div className="mt-8 h-1 w-16 rounded-full bg-purple-500" />

            <h2 className="mt-8 text-xl font-semibold text-[#594477]">
              Research Overview
            </h2>

            <p className="mt-4 leading-8 text-[#817393]">
              {item.details}
            </p>

            <a
              href="mailto:team@chengene.org?subject=Research%20Enquiry"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-purple-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-purple-700"
            >
              Research Enquiry <span>↗</span>
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-purple-100 bg-[#FAF8FF] p-4">
            <img
              src={item.image}
              alt={item.name}
              className="h-[320px] w-full rounded-[1.5rem] object-cover md:h-[480px]"
            />
          </div>
        </div>

        <div className="mt-20 rounded-3xl bg-[#F8F4FF] p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-500">
            CHENGENE PRIVATE LIMITED
          </p>

          <h2 className="mt-4 text-2xl font-semibold text-[#493765] md:text-3xl">
            Advancing biotechnology through research.
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#817393]">
            Contact our team for further information about
            CHENGENE's research and development portfolio.
            Product availability, development status and
            regulatory details should be confirmed directly
            with the company.
          </p>
        </div>
      </div>
    </main>
  );
}