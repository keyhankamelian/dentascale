/** Shared marketing content reused across multiple pages. */

export type CaseStudyStat = {
  value: number;
  label: string;
  decimals?: number;
  prefix?: string;
  suffix?: string;
};

export type CaseStudyComparison = {
  metric: string;
  /** Your result, e.g. "$7.38". */
  yours: string;
  /** Industry average, e.g. "$76". */
  average: string;
  /** Pill badge, e.g. "90% below avg". */
  badge: string;
};

export type CaseStudy = {
  slug: string;
  industry: string;
  channels: string;
  timeframe: string;
  /** Optional market the practice operates in, e.g. "Los Angeles, CA". */
  location?: string;
  /** Short heading for the study. */
  heading: string;
  featured?: boolean;
  stats: CaseStudyStat[];
  comparisons: CaseStudyComparison[];
  testimonial?: { quote: string; attribution: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "orthodontics",
    industry: "Orthodontics",
    channels: "Facebook & Instagram",
    timeframe: "May 2026 · 30 days",
    location: "Beverly Hills, CA",
    heading: "Beverly Hills orthodontic office, 30-day campaign",
    featured: true,
    stats: [
      { value: 42, label: "Leads" },
      { value: 10, label: "Consults booked" },
      { value: 35.71, label: "Cost per lead", decimals: 2, prefix: "$" },
      { value: 1500, label: "Total ad spend", prefix: "$" },
      { value: 18000, label: "Booked case value", prefix: "$", suffix: "+" },
    ],
    comparisons: [
      {
        metric: "Cost per lead",
        yours: "$35.71",
        average: "$76",
        badge: "53% below avg",
      },
    ],
    testimonial: {
      quote:
        "Working with DentaScale has changed our business's trajectory. We went from the stress of an empty calendar to getting so many patients that we can't keep up, and we're now thinking of opening a second location.",
      attribution: "DentaScale client, orthodontics practice",
    },
  },
];

/** The primary study used on the Home-page teaser. */
export const featuredCaseStudy = caseStudies[0];
