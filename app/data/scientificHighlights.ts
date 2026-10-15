
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
    | "certification";
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
  date: "2026",
  category: "International Workshop",
  type: "workshop",
  slug: "in-vitro-non-animal-testing-workshop-2026",
  title:
    "International Workshop on In Vitro Non-Animal Testing Approaches",
  location: "National Institute of Biologicals, Noida, India",
  description:
    "Mr. Sivashakthi, Senior Research Associate, and Dr. V. K. Prasannaswaamy, Chief Scientist, CHENGENE Pvt. Ltd., successfully completed the International Workshop on \"In Vitro Non-Animal Testing Approaches in Biomedical Research and Quality Evaluation of Pharmaceuticals\" at the National Institute of Biologicals, Noida, India.\n\nAdvanced Research Methods: Exploring cutting-edge, non-animal in vitro models for biomedical research.\n\nPharmaceutical Quality: Implementing humane, scientifically robust methodologies for drug evaluation and safety testing.\n\nGlobal Collaboration: Engaging with international experts and regulatory frameworks to drive forward sustainable and ethical scientific innovation.\n\nThis workshop marks a significant milestone in their professional journey and contributes to CHENGENE's commitment to advancing ethical, scientifically robust and sustainable approaches in biomedical and pharmaceutical research.",
  image:
    "/engagement/in-vitro-non-animal-testing-workshop-2026-1.jpeg",
  gallery: [
    "/engagement/in-vitro-non-animal-testing-workshop-2026-2.jpeg",
    "/engagement/in-vitro-non-animal-testing-workshop-2026-3.jpeg",
    "/engagement/in-vitro-non-animal-testing-workshop-2026-4.jpeg",
    "/engagement/in-vitro-non-animal-testing-workshop-2026-5.jpeg",
    "/engagement/in-vitro-non-animal-testing-workshop-2026-6.jpeg",
  ],
},
{
  year: "2026",
  date: "2026",
  category: "International Scientific Meeting",
  type: "conference",
  slug: "in-vitro-non-animal-studies-global-meeting-2026",
  title:
    "Global Meeting on In Vitro Non-Animal Studies",
  location: "National Institute of Biologicals, Noida, India",
  description:
    "An intensive meeting was held between CHENGENE professionals and leading global organizations, PETA Science Consortium International and the Institute for In Vitro Sciences (IIVS), USA. The discussions focused on approaches to the development of in vitro non-animal studies and the advancement of scientifically robust, ethical and sustainable methodologies in biomedical research and pharmaceutical evaluation. The meeting was held at the National Institute of Biologicals (NIB), Noida, India.",
  image:
    "/engagement/in-vitro-non-animal-studies-global-meeting-2026-1.jpeg",
},

{
  year: "2026",
  date: "19–21 August 2026",
  category: "Preclinical Research Workshop",
  type: "workshop",
  slug: "preclinical-research-small-animals-workshop-2026",
  title:
    "Preclinical Research in Small Animals: Ethical Guidelines to Experiment Execution",
  location:
    "Centre for Laboratory Animal Technology and Research (CLATR), Sathyabama Institute of Science and Technology, Chennai, India",
  description:
    "Mr. Sivasakthi Paramasivam, Senior Research Associate in the Department of Cell and Molecular Biology at CHENGENE Private Limited, attended the workshop on “Preclinical Research in Small Animals: Ethical Guidelines to Experiment Execution,” held from 19–21 August 2026 at the Centre for Laboratory Animal Technology and Research (CLATR), Sathyabama Institute of Science and Technology, Chennai.\n\nThe workshop provided valuable hands-on training and practical exposure to key aspects of preclinical research, including laboratory animal handling, ethical guidelines for animal experimentation, drug administration techniques, estrous cycle detection, and established preclinical research methodologies.\n\nThis professional development initiative reinforces CHENGENE Private Limited’s commitment to fostering scientific excellence, promoting ethical research practices, and strengthening expertise in preclinical research and drug development.",
  image:
    "/engagement/preclinical-research-small-animals-workshop-2026-1.jpeg",
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
    image: "/engagement/vel-tech-mini-project-review-2026-1.png",
    gallery: [
    "/engagement/vel-tech-mini-project-review-2026.jpeg",
    ],
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

  {
    year: "2026",
    date: "28 September 2026",
    category: "ISO 13485:2016 Certification",
    type: "certification",
    slug: "iso-13485-internal-auditor-certification-2026",
    title:
      "Chengene Private Limited Achieves ISO 13485:2016 Internal Auditor Certification",
    location: "Chengene Private Limited, Chennai, India",
    description:
      "We are delighted to announce that our team at Chengene Private Limited has successfully completed the ISO 13485:2016 Internal Auditor Program, conducted by Times Certification Services UK Ltd.\n\nThis certification, awarded on 28th September 2026, validates our competency in auditing and maintaining compliance with the Medical Devices – Quality Management System (QMS) standards. By qualifying as Internal Auditors, our team is now fully equipped to ensure that our processes align with international regulatory requirements, reinforcing our commitment to quality, safety, and continuous improvement.\n\nCertified Internal Auditors from Chengene Private Limited:\n\nDr. V. K. Prasannaswaamy\nMr. Huthya Prakash K\nMr. Saranraj S\nMr. Sivasabariraj A",
    image:
      "/engagement/iso-13485-internal-auditor-dr-v-k-prasannaswaamy-2026-1.jpg",
    gallery: [
      "/engagement/iso-13485-internal-auditor-dr-v-k-prasannaswaamy.jpg",
      "/engagement/iso-13485-internal-auditor-huthya-prakash-k-2026.jpg",
      "/engagement/iso-13485-internal-auditor-saranraj-s-2026.jpg",
      "/engagement/iso-13485-internal-auditor-sivasabariraj-a-2026.jpg",
    ],
  },

  {
  year: "2026",
  date: "14 October 2026",
  category: "Cell Sorting Training",
  type: "workshop",
  slug: "sony-ma900-cell-sorter-training-2026",
  title: "Hands-on Training on Sony MA900 Multi-Application Cell Sorter",
  location:
    "Centre for Biomaterials, Cellular and Molecular Theranostics (CBCMT), VIT, Vellore, India",
  description:
    "Mr. Sivasakthi P, Senior Research Associate, and Mrs. Sugapriya S, Research Associate, attended hands-on training on the Sony MA900 Multi-Application Cell Sorter on 14 October 2026. The training was conducted at the Centre for Biomaterials, Cellular and Molecular Theranostics (CBCMT), Vellore Institute of Technology (VIT), Vellore.",
  image: "/engagement/sony-ma900-cell-sorter-training-2026.jpeg",

  gallery: [
      "/engagement/sony-ma900-cell-sorter-training-2026-1.jpeg",
    ],
},
];
