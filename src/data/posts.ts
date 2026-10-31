export interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  badge?: string
  badgeType?: string
}

export const posts: Post[] = [
  {
    slug: "every-level-is-technical-now",
    title: "Every Level Is Technical Now",
    excerpt:
      "I was told I was done being technical the day I became a manager. Here's how I think AI changed what each engineering level needs to be good at.",
    date: "October 30, 2026",
    badge: "Latest",
    badgeType: "default",
  },
  {
    slug: "most-saas-companies-will-not-survive",
    title: "Most SaaS Companies Will Not Survive",
    excerpt:
      "Some of my thoughts on why most SaaS companies will not survive the AI era and which ones I think will.",
    date: "October 19, 2026",
    badgeType: "default",
  },
  {
    slug: "10-commandments",
    title: "The 10 Commandments of My Career",
    excerpt:
      "What they don't teach you in school, but should. Rules that actually hold up, pulled from real failures and hard-won wins.",
    date: "March 9, 2026",
    badgeType: "default",
  },
]
