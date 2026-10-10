
export type ScientificHighlight = {
  year: string;
  date: string;
  category: string;
  type:
    | "event"
    | "meeting"
    | "conference"
    | "workshop"
    | "publication"
    | "presentation";
  slug: string;
  title: string;
  location: string;
  description: string;
  image: string;
  gallery?: string[];
};

export const scientificHighlights: ScientificHighlight[] = [
  // ============================
  // OLD CONTENTS (1–4)
  // ============================

  {
    year: "2024",
    date: "22–23 September 2024",
    category: "Industry Expo",
    type: "event",
    slug: "india-lab-expo-2024",
    title: "India Lab Expo 2024",
    location: "Hyderabad, India",
    description:
      "Dr. K. Veluswamy was invited as a Special Guest at India Lab Expo 2024, where Thermo Fisher Scientific India showcased analytical and laboratory technologies.",
    image: "/engagement/india-lab-expo-2024-hyderabad.jpeg",
  },
  {
    year: "2024",
    date: "23 September 2024",
    category: "Scientific Meeting",
    type: "meeting",
    slug: "thermo-fisher-scientific",
    title: "Thermo Fisher Scientific",
    location: "Hyderabad, India",
    description:
      "A meeting between Thermo Fisher Scientific global scientists and Dr. K. Veluswamy focused on research support and discussions related to CHENGENE's biosimilar development activities.",
    image: "/engagement/thermo-fisher-global-scientist-meeting-2024.jpeg",
  },
  {
    year: "2025",
    date: "February 2025",
    category: "Business Meeting",
    type: "meeting",
    slug: "himedia-laboratories-mumbai",
    title: "HiMedia Laboratories",
    location: "Mumbai, India",
    description:
      "Dr. K. Veluswamy was specially invited to HiMedia Laboratories, Mumbai, for an internal business meeting focused on marketing development and strategic discussions related to IVF media.",
    image: "/engagement/himedia-mumbai-business-meeting-2025.jpeg",
  },
  {
    year: "2025",
    date: "2025",
    category: "Biopharmaceutical Forum",
    type: "conference",
    slug: "biopharma-conclave-2025",
    title: "Biopharma Conclave 2025",
    location: "Hyderabad, India",
    description:
      "CHENGENE participated in Biopharma Conclave 2025 in Hyderabad, engaging with the broader biopharmaceutical and biotechnology ecosystem.",
    image: "/engagement/biopharma-conclave-2025-hyderabad.jpeg",
  },

  // ============================
  // NEW CONTENTS (5–10)
  // ============================

  {
    year: "2026",
    date: "2026",
    category: "Technical Collaboration Meeting",
    type: "meeting",
    slug: "biolink-downstream-processing-2026",
    title: "Biolink Downstream Processing Collaboration",
    location: "Biotechnology Trade Show, India",
    description:
      "A meeting between Yu Chen, Director of Biolink, and V. K. Prasannaswaamy, Chief Scientist at CHENGENE Private Limited, highlighted downstream processing solutions including filtration, purification, hydrophobic interaction chromatography, and service and support. The discussion focused on technical collaboration and development for downstream processing at CHENGENE, particularly resin identification and selection for biopharmaceutical manufacturing and recombinant protein purification workflows.",
    image: "/engagement/biolink-downstream-processing-2026.jpeg",
  },
  {
    year: "2026",
    date: "2026",
    category: "Bioprocessing Conference",
    type: "conference",
    slug: "advancing-bioprocessing-conference-2026",
    title: "Advancing Bioprocessing Conference",
    location: "Bangalore, India",
    description:
      "CHENGENE representatives Mr. Huthaya Prakash, Purchase Manager, and V. K. Prasannaswaamy, Chief Scientist, attended the Advancing Bioprocessing Conference in Bangalore, alongside a Bio-Rad Global Administrator.",
    image: "/engagement/advancing-bioprocessing-conference-2026.jpeg",
  },
  {
    year: "2026",
    date: "January 2026",
    category: "Cell Culture Media Conference",
    type: "conference",
    slug: "thermo-fisher-gibco-cell-culture-media-2026",
    title: "Thermo Fisher Gibco Tour & Cell Culture Media Conference",
    location: "Chennai, India",
    description:
      "CHENGENE representatives Mr. Aravind Karthik, Senior Research Associate; Mr. Sambrainath C, Research Scientist; V. K. Prasannaswaamy, Chief Scientist; and Mr. Huthaya Prakash, Technical Associate, attended the Thermo Fisher Gibco Tour and Cell Culture Media Conference in Chennai.",
    image: "/engagement/thermo-fisher-gibco-tour-2026.jpeg",
  },
  {
    year: "2026",
    date: "March 2026",
    category: "FPLC Workshop & Training",
    type: "workshop",
    slug: "thermo-fisher-fplc-workshop-2026",
    title: "Hands-on FPLC Workshop and Training",
    location: "Thermo Fisher R&D Center, Whitefield, Bangalore, India",
    description:
      "Mr. Sivasakthi, Senior Research Associate at CHENGENE, attended hands-on FPLC workshop and training at the Thermo Fisher R&D Center in Whitefield, Bangalore.",
    image: "/engagement/thermo-fisher-fplc-workshop-2026.jpeg",
  },
  {
    year: "2026",
    date: "23 September 2026",
    category: "Academic Collaboration",
    type: "event",
    slug: "vel-tech-mini-project-review-2026",
    title: "Mini Project Review – I at Vel Tech",
    location:
      "Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College, Chennai, India",
    description:
      "CHENGENE Private Limited participated in the Mini Project Review – I organized by the Department of Biotechnology at Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College, Chennai. Mr. Saran Raj S, Senior Project Associate and QC Analyst – Production, served as an Industry Mentor, sharing insights on current biopharmaceutical practices, guiding student projects, and highlighting research trends. This collaboration reflects CHENGENE's commitment to supporting academic growth and bridging the gap between industry and education.",
    image: "/engagement/vel-tech-mini-project-review-2026.jpeg",
  },
  {
    year: "2026",
    date: "6 October 2026",
    category: "Student Visit",
    type: "event",
    slug: "vel-tech-biotechnology-student-visit-2026",
    title: "Biotechnology Student Visit – Vel Tech",
    location: "CHENGENE Private Limited, Chennai, India",
    description:
      "CHENGENE Private Limited was pleased to host students from the Biotechnology Department of Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College on 6 October 2026. Dr. K. Veluswamy addressed the students, sharing insights into instrumentation principles and practical biopharmaceutical workflows. The visit reflects CHENGENE's commitment to strengthening industry–academia collaboration.",
    image:
      "/engagement/vel-tech-biotechnology-student-visit-2026-1.jpeg",
    gallery: [
      "/engagement/vel-tech-biotechnology-student-visit-2026-1.jpeg",
      "/engagement/vel-tech-biotechnology-student-visit-2026-2.jpeg",
      "/engagement/vel-tech-biotechnology-student-visit-2026-3.jpeg",
      "/engagement/vel-tech-biotechnology-student-visit-2026-4.jpeg",
      "/engagement/vel-tech-biotechnology-student-visit-2026-5.jpeg",
    ],
  },
];
