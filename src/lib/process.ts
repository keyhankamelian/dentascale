/** How the service works, shared by the home page and the ad landing page. */
import {
  Clapperboard,
  Megaphone,
  Phone,
  CalendarCheck,
  type LucideIcon,
} from "lucide-react";

export type Step = { icon: LucideIcon; title: string; body: string };

export const steps: Step[] = [
  {
    icon: Clapperboard,
    title: "We tell you what to shoot",
    body: "A shot list and word-for-word scripts. You film on your phone and send us the footage, plus before-and-afters and pictures of your office. We do the rest.",
  },
  {
    icon: Megaphone,
    title: "We build and run the ads",
    body: "We edit the videos, turn them into ads, and run and optimize the campaigns every day.",
  },
  {
    icon: Phone,
    title: "We respond in 10 seconds, then call",
    body: "An automated system reaches every new lead within 10 seconds. Then a real person from our team calls to qualify them.",
  },
  {
    icon: CalendarCheck,
    title: "We qualify them, then book them into your calendar",
    body: "We qualify every lead first, then book only the right fits straight into your consultation calendar, ready for you to see.",
  },
];

export const fitCriteria = [
  "You offer Invisalign or clear aligners",
  "You can take on 10 to 20 more consults a month",
  "You don't want your busy front desk handling the calls to leads",
];
