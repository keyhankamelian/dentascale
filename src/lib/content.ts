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
      { value: 17.86, label: "Cost per lead", decimals: 2, prefix: "$" },
      { value: 750, label: "Total ad spend", prefix: "$" },
      { value: 18000, label: "Booked case value", prefix: "$", suffix: "+" },
    ],
    comparisons: [
      {
        metric: "Cost per lead",
        yours: "$17.86",
        average: "$76",
        badge: "77% below avg",
      },
      {
        metric: "Leads per $1k spend",
        yours: "56",
        average: "29",
        badge: "1.9x higher",
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

/** "Why practices stay stuck": the six places consults get lost. Used on the About page. */
export const stuckPoints = [
  {
    icon: "waves",
    title: "Referrals only",
    body: "Word of mouth is great, but it goes up and down and you can't predict it. A strong month is followed by a slow one, and there's no way to turn it up when you need more consults.",
  },
  {
    icon: "globe",
    title: "Missing the biggest audience",
    body: "Billions of people are on Meta's apps every day. If your practice isn't showing up there, you're missing a huge market of attention, and the practices that are there get the patients who are ready to start.",
  },
  {
    icon: "pen",
    title: "Generic ads and offers",
    body: "Most practices aren't ad pros, and they shouldn't have to be. The ad and the offer end up generic, the same as everyone else's, and nothing in them stops the scroll.",
  },
  {
    icon: "timer",
    title: "Slow to answer leads",
    body: "Speed is everything. A lead who fills out a form is comparing practices right now, and a busy front desk can't call back in seconds. By the time someone does, they've moved on.",
  },
  {
    icon: "repeat",
    title: "Little or no follow-up",
    body: "Most leads don't say yes on the first call. Without a system that keeps following up, kindly and persistently, they drift away and the ad spend is wasted.",
  },
  {
    icon: "filter",
    title: "No real qualifying",
    body: "Without a proper qualifying process, the calendar fills with people who were never a good fit. We qualify every lead first, so the consults that reach you are worth your time.",
  },
] as const;
