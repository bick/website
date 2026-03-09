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
    slug: "smile-doctors",
    title: "Smile Doctors",
    year: "2024 – Present",
    type: "Engineering Leadership",
    url: "https://smiledoctors.com",
    image: "/static/smile-doctors.png",
    summary:
      "Leading engineering and product for one of the largest orthodontic support organizations in the US, building the digital infrastructure that powers 350+ locations nationwide.",
    challenge:
      "Smile Doctors needed a modern digital platform to unify patient experiences across hundreds of locations, replacing fragmented legacy systems with a cohesive web presence that drives patient acquisition and streamlines operations.",
    approach:
      "Built and led a cross-functional engineering team to deliver a full-stack platform overhaul. Established technical strategy, hired senior talent, and drove product roadmaps focused on patient conversion and operational efficiency.",
    results: [
      "Rebuilt the patient-facing platform serving 350+ locations",
      "Improved site performance and SEO driving increased patient acquisition",
      "Established engineering processes and hiring practices for sustainable growth",
      "Delivered technical roadmap aligned with business objectives",
    ],
    tech: ["Next.js", "TypeScript", "React", "Node.js", "Vercel"],
  },
  {
    slug: "devgigs",
    title: "DevGigs",
    year: "2023",
    type: "Product Development",
    url: "",
    image: "/static/devgigs.png",
    summary:
      "A curated job board built specifically for developers, focused on quality over quantity with a clean, no-nonsense interface.",
    challenge:
      "The developer job market is flooded with generic listings on bloated platforms. Developers needed a fast, focused job board that respects their time and surfaces only relevant, high-quality opportunities.",
    approach:
      "Designed and built the platform from scratch with a developer-first mindset. Prioritized speed, clean UX, and strong filtering. Kept the stack lean and the interface distraction-free.",
    results: [
      "Launched MVP in under 4 weeks",
      "Built automated job ingestion and curation pipeline",
      "Clean, fast interface with sub-second page loads",
      "Developer-focused filtering by stack, location, and role type",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  },
  {
    slug: "genzswe",
    title: "GenZ SWE",
    year: "2023",
    type: "Community Platform",
    url: "",
    image: "/static/genzswe.png",
    summary:
      "A community and content platform aimed at the next generation of software engineers, bridging the gap between learning to code and landing your first role.",
    challenge:
      "New developers face an overwhelming landscape of resources, conflicting advice, and unclear career paths. There was no single destination that combined practical career guidance with an authentic community voice.",
    approach:
      "Built a content-driven platform with a strong editorial voice that speaks directly to early-career developers. Combined practical guides, career resources, and community features in a modern, engaging package.",
    results: [
      "Built and launched content platform with editorial pipeline",
      "Created career resources and guides for early-career developers",
      "Designed engaging UI targeting a younger developer audience",
      "Established content strategy and voice for the brand",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "MDX"],
  },
]
