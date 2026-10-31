import type { Metadata } from "next"





type PageMetadata = {
  [key: string]: Metadata
}

export const siteMetadata: PageMetadata = {
  home: {
    title: "Owen Bick – A software engineer based in Austin and Dallas",
    description: "Owen Bick is a software engineer based in Austin and Dallas.",
    openGraph: {
      title: "Owen Bick – A software engineer based in Austin and Dallas",
      description: "Owen Bick is a software engineer based in Austin and Dallas.",
    },
  },
  about: {
    title: "About – Owen Bick",
    description: "Who is Owen Bick?",
    openGraph: {
      title: "About – Owen Bick",
      description: "Who is Owen Bick?",
    },
  },
  resume: {
    title: "Resume – Owen Bick",
    description: "Owen Bick's resume.",
    openGraph: {
      title: "Resume – Owen Bick",
      description: "Owen Bick's resume.",
    },
  },
  journal: {
    title: "Blog – Owen Bick",
    description: "Thoughts on engineering, leadership, and building things.",
    openGraph: {
      title: "Blog – Owen Bick",
      description: "Thoughts on engineering, leadership, and building things.",
    },
  },
  reviews: {
    title: "Reviews – Owen Bick",
    description: "Owen Bick's reviews where I review random stuff.",
    openGraph: {
      title: "Reviews – Owen Bick",
      description: "Owen Bick's reviews where I review random stuff.",
    },
  },
  speaking: {
    title: "Speaking – Owen Bick",
    description: "Owen Bick speaks about building engineering teams, shipping with craft, and where software companies go next.",
    openGraph: {
      title: "Speaking – Owen Bick",
      description: "Owen Bick speaks about building engineering teams, shipping with craft, and where software companies go next.",
    },
  },
  contact: {
    title: "Contact – Owen Bick",
    description: "Get in touch with Owen Bick.",
    openGraph: {
      title: "Contact – Owen Bick",
      description: "Get in touch with Owen Bick.",
    },
  },
}
