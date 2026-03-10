"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import { Skeleton } from "@/components/ui/skeleton"

interface SpotifyData {
  isPlaying: boolean
  title?: string
  artist?: string
  url?: string
}

const FALLBACK = {
  title: "For A Better Day",
  artist: "Avicii",
  url: "https://open.spotify.com/track/2MVGnFCmBRI5LxODz0aLaV",
}

function SoundBars({ active }: { active: boolean }) {
  if (!active) {
    return (
      <div className="flex h-3.5 items-end gap-[3px]">
        <div className="w-[3px] h-[40%] rounded-full bg-[#1DB954]" />
        <div className="w-[3px] h-[70%] rounded-full bg-[#1DB954]" />
        <div className="w-[3px] h-[50%] rounded-full bg-[#1DB954]" />
      </div>
    )
  }

  return (
    <div className="flex h-3.5 items-end gap-[3px]">
      <motion.div className="w-[3px] rounded-full bg-[#1DB954]" animate={{ height: ["40%", "100%", "60%", "90%", "40%"] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="w-[3px] rounded-full bg-[#1DB954]" animate={{ height: ["100%", "50%", "80%", "40%", "100%"] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="w-[3px] rounded-full bg-[#1DB954]" animate={{ height: ["60%", "90%", "40%", "100%", "60%"] }} transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }} />
    </div>
  )
}

export default function SpotifyWidget() {
  const [data, setData] = useState<SpotifyData | null>(null)

  useEffect(() => {
    async function fetchNowPlaying() {
      try {
        const res = await fetch("/api/spotify")
        const json = await res.json()
        setData(json)
      } catch {
        setData({ isPlaying: false })
      }
    }

    fetchNowPlaying()
    const interval = setInterval(fetchNowPlaying, 900000)
    return () => clearInterval(interval)
  }, [])

  if (!data) {
    return (
      <div className="fixed bottom-4 left-4 z-[9999] flex items-center gap-2.5 rounded-[10px] border border-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.25)] px-3.5 py-2 backdrop-blur-md">
        <Skeleton className="h-3.5 w-[15px] rounded-full" />
        <div className="flex flex-col gap-1 max-w-[120px]">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-2.5 w-14" />
        </div>
      </div>
    )
  }

  const title = data.isPlaying ? data.title : FALLBACK.title
  const artist = data.isPlaying ? data.artist : FALLBACK.artist
  const url = data.isPlaying ? data.url : FALLBACK.url
  const isPlaying = data.isPlaying

  return (
    <Link
      href={url!}
      target="_blank"
      rel="nofollow"
      className="portfolio-item fixed bottom-4 left-4 z-[9999] flex items-center gap-2.5 rounded-[10px] border border-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.25)] px-3.5 py-2 no-underline backdrop-blur-md transition-all duration-200 hover:border-[rgba(255,255,255,0.4)]"
    >
      <SoundBars active={isPlaying} />
      <div className="flex flex-col max-w-[120px]">
        <span className="text-xs font-medium text-white/90 leading-tight truncate">{title}</span>
        <span className="text-[10px] text-white/40 leading-tight truncate">{artist}</span>
      </div>
    </Link>
  )
}
