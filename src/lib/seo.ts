import type { Metadata } from "next"

type PageMetadata = {
  [key: string]: Metadata
}

export const siteMetadata: PageMetadata = {
  home: {
    title: "Owen Bick – A software engineer based in Austin",
    description: "Owen Bick is a software engineer based in Austin.",
    openGraph: {
      title: "Owen Bick – A software engineer based in Austin",
      description: "Owen Bick is a software engineer based in Austin.",
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
  reviews: {
    title: "Reviews – Owen Bick",
    description: "Owen Bick's reviews where I review random stuff.",
    openGraph: {
      title: "Reviews – Owen Bick",
      description: "Owen Bick's reviews where I review random stuff.",
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
