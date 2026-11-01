import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  experimental: {
    optimizePackageImports: ["framer-motion", "react-icons", "lucide-react"],
  },
  redirects: async () => [
    { source: "/projects", destination: "https://weekendlabs.net", permanent: false },
    { source: "/projects/:slug", destination: "https://weekendlabs.net", permanent: false },
    { source: "/journal", destination: "/blog", permanent: true },
    { source: "/journal/:slug", destination: "/blog/:slug", permanent: true },
  ],
  headers: async () => [
    {
      source: "/fonts/:path*",
      headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
    },
    {
      source: "/static/:path*",
      headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
    },
  ],
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
