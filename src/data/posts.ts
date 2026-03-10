export interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  badge?: string
  badgeType?: string
  image?: string
}

export const posts: Post[] = [
  {
    slug: "10-commandments",
    title: "The 10 Commandments of the Hustle",
    excerpt:
      "What they don't teach you in school -but should. Rules that actually hold up, pulled from real failures and hard-won wins.",
    date: "March 9, 2026",
    badge: "Latest",
    badgeType: "default",
    image: "/static/god.webp",
  },
]
