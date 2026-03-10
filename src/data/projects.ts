export interface Project {
  slug: string
  title: string
  year: string
  type: string
  url: string
  image: string
  summary: string
  challenge: string
  approach: string
  results: string[]
  tech: string[]
}

export const projects: Project[] = [
  {
    slug: "flosstime",
    title: "Flosstime",
    year: "2023 - Present",
    type: "Booking Platform",
    url: "https://flosstime.com",
    image: "/static/flosstime.png",
    summary:
      "Built the booking platform for Flosstime, a mobile dental service that brings cleanings, exams, X-rays, ZOOM whitening, and fillings directly to corporate offices through on-site pop-up events staffed by licensed dentists and hygienists.",
    challenge:
      "Flosstime coordinates multi-day on-site dental pop-ups at corporate offices, partnering with HR teams to bring licensed providers on-site. They needed a booking tool that could handle the full workflow: HR coordination, event scheduling, employee-facing appointment booking, and insurance verification across providers like Delta Dental, Aetna, Cigna, and MetLife.",
    approach:
      "Built a booking platform with two sides: an HR-facing coordination flow for scheduling 3-5 day on-site visits with marketing support, and an employee-facing booking interface with custom links for each company event. Designed the system around reducing the friction that causes employees to skip dental benefits, making it as easy as picking a time slot.",
    results: [
      "Built end-to-end booking platform covering HR coordination and employee scheduling",
      "Created custom booking links per company for multi-day on-site dental events",
      "Integrated support for major insurance providers including Delta Dental, Aetna, and Cigna",
      "Reduced friction in employee dental benefit utilization through streamlined UX",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "discount-drug-network",
    title: "Discount Drug Network",
    year: "2022 - 2025",
    type: "Web Development",
    url: "https://discountdrugnetwork.com",
    image: "/static/discountdrugnetwork.png",
    summary:
      "Built the web platform for Discount Drug Network, a service that helps consumers find discounted prescription drug pricing and compare costs across pharmacies.",
    challenge:
      "Prescription drug pricing in the US is notoriously opaque. Discount Drug Network needed a consumer-facing platform where users could quickly search for medications, compare prices across pharmacies, and access discount pricing without the friction and confusion that plagues most healthcare tools.",
    approach:
      "Built a fast, search-first web application where drug lookup speed was the top priority. Designed the interface to get users from landing page to actionable pricing in as few steps as possible. Kept the UI clean and accessible for a broad consumer audience that includes people who aren't tech-savvy.",
    results: [
      "Delivered a fast web platform with search-first UX for drug pricing",
      "Built pharmacy comparison and discount card functionality",
      "Optimized the lookup flow to minimize steps between search and results",
      "Created an accessible interface designed for a broad consumer demographic",
    ],
    tech: ["PHP", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "boston-junior-bruins",
    title: "Boston Junior Bruins",
    year: "2022 – 2023",
    type: "Web Platform",
    url: "https://bostonjuniorbruins.com",
    image: "/static/bostonjuniorbruins.png",
    summary:
      "Built a network of websites for the Boston Junior Bruins, a Top 10 amateur hockey program in North America founded in 1991. The organization's alumni have earned over $50 million in college scholarship money, and their web presence needed to match that legacy.",
    challenge:
      "The Boston Junior Bruins run multiple teams across different age groups and competitive levels, each needing their own content for rosters, schedules, news, and recruitment. They needed a unified web platform that could scale across this network while keeping a consistent brand tied to the Bruins identity. The existing setup was fragmented and hard to maintain.",
    approach:
      "Architected and built a network of interconnected websites sharing a common design system and component library. Each team site manages its own rosters, schedules, tournament listings, tryout information, and news through a shared content layer. Built the platform to support their player development pipeline, highlighting alumni advancement to college and professional hockey.",
    results: [
      "Shipped a multi-site network serving teams across age groups and leagues",
      "Built shared content infrastructure for rosters, events, tryouts, and news",
      "Unified the brand across the full organization under one platform",
      "Created a scalable architecture that supports adding new team sites without rebuilding",
    ],
    tech: ["PHP", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "palmer-pads",
    title: "Palmer Pads",
    year: "2022",
    type: "Design & Development",
    url: "https://palmerpads.com",
    image: "/static/palmerpads.png",
    summary:
      "Designed and developed the website for Palmer Pads, North America's largest manufacturer of protective elevator pads, headquartered in Boston. The site covers their full catalog of custom elevator pads, proprietary hanging systems like StudStrip and Adapt-A-Clamps, and accessories.",
    challenge:
      "Palmer Pads had outgrown their old site. They needed a modern storefront that could present a deep product catalog spanning custom elevator pads, proprietary mounting hardware like StudStrip and Adapt-A-Clamps, floor mats, and accessories, while handling quote requests and same-day rush orders for customers across North America.",
    approach:
      "Designed the entire site from scratch and built it end-to-end. Structured the product catalog around their three main lines: protective pads with custom colors and embroidered logos, their proprietary hanging and mounting solutions, and accessories. Built a streamlined quoting flow and made sure the site communicated their key differentiators like fire-retardant ASTM E84 Class A materials and domestic manufacturing in Boston.",
    results: [
      "Designed and built the full website from the ground up",
      "Organized a deep product catalog across pads, hanging systems, and accessories",
      "Built quote request and rush order flows supporting same-day fulfillment",
      "Showcased fire-retardant certifications and domestic manufacturing as key differentiators",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
  },
]
