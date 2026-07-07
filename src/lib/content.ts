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
    heading: "Orthodontic practice — 30-day campaign",
    featured: true,
    stats: [
      { value: 42, label: "Qualified leads" },
      { value: 7.38, label: "Cost per lead", decimals: 2, prefix: "$" },
      { value: 391, label: "Total ad spend", prefix: "$" },
      { value: 74, label: "New IG followers", prefix: "+" },
    ],
    comparisons: [
      {
        metric: "Cost per lead",
        yours: "$7.38",
        average: "$76",
        badge: "90% below avg",
      },
      {
        metric: "Cost per booking",
        yours: "~$28",
        average: "$240",
        badge: "88% below avg",
      },
      {
        metric: "Leads per $1k spend",
        yours: "107",
        average: "29",
        badge: "3.6x higher",
      },
    ],
    testimonial: {
      quote:
        "Working with DentaScale has changed our business's trajectory. We went from the stress of an empty calendar to getting so many patients that we can't keep up, and we're now thinking of opening a second location.",
      attribution: "— DentaScale client, orthodontic practice",
    },
  },
  {
    slug: "general-dentistry",
    industry: "General dentistry",
    channels: "Facebook & Instagram",
    timeframe: "April 2026",
    heading: "General dentistry practice",
    stats: [
      { value: 29, label: "Qualified leads" },
      { value: 20.69, label: "Cost per lead", decimals: 2, prefix: "$" },
      { value: 600, label: "Total ad spend", prefix: "$" },
      { value: 140, label: "New IG followers", prefix: "+" },
    ],
    comparisons: [
      {
        metric: "Cost per lead",
        yours: "$20.69",
        average: "$76",
        badge: "73% below avg",
      },
    ],
  },
];

/** The primary study used on the Home-page teaser. */
export const featuredCaseStudy = caseStudies[0];

/** "Why both paths fail" copy — agencies vs. AI tools. Used on the About page. */
export const bothPathsFail = {
  agencies: {
    title: "Traditional agencies",
    body: "Charge $3,000–5,000 a month, lock you into long contracts, and spread their attention across dozens of accounts in every industry. You become a line item, your campaigns get generic, and the leads — when they come — rarely turn into booked patients.",
  },
  ai: {
    title: "AI tools",
    body: "Promise to replace a marketing team for a low monthly fee, then hand you generic content and leads with no strategy behind it. There's no one who understands dental, no one to optimize your spend, and no system to turn a lead into someone sitting in your chair.",
  },
} as const;
