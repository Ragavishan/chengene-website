export type ScientificHighlight = {
  year: string;
  date: string;
  category: string;
  type: "event" | "meeting" | "conference" | "workshop" | "publication" | "presentation";
  slug: string;
  title: string;
  location: string;
  description: string;
  image: string;
};

export const scientificHighlights: ScientificHighlight[] = [
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
];