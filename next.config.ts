import type { NextConfig } from "next"
import createMDX from "@next/mdx"

// Static export for Cloudflare: redirects and headers live in public/_redirects and public/_headers.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  experimental: {
    optimizePackageImports: ["framer-motion", "react-icons", "lucide-react"],
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
