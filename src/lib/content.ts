/** Shared marketing content reused across multiple pages. */

export const caseStudyStats = [
  { value: 42, label: "Qualified leads", decimals: 0, prefix: "", suffix: "" },
  { value: 7.38, label: "Cost per lead", decimals: 2, prefix: "$", suffix: "" },
  { value: 391, label: "Total ad spend", decimals: 0, prefix: "$", suffix: "" },
  { value: 74, label: "New IG followers", decimals: 0, prefix: "+", suffix: "" },
] as const;

export const caseStudyComparisons = [
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
] as const;

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
