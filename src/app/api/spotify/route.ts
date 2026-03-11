import { NextResponse } from "next/server"

const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token"
const SPOTIFY_NOW_PLAYING_URL = "https://api.spotify.com/v1/me/player/currently-playing"

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const CACHE_TTL = 15 * 60 * 1000 // 15 minutes

let cachedResponse: { data: Record<string, unknown>; timestamp: number } | null = null
let lastKnownTrack: { title: string; artist: string; url: string } | null = null

async function getAccessToken() {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64")

  const response = await fetch(SPOTIFY_TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token!,
    }),
  })

  return response.json()
}

export const dynamic = "force-dynamic"

export async function GET() {
  // Return cached response if still fresh
  if (cachedResponse && Date.now() - cachedResponse.timestamp < CACHE_TTL) {
    return NextResponse.json(cachedResponse.data)
  }

  if (!client_id || !client_secret || !refresh_token) {
    return NextResponse.json({ isPlaying: false, ...lastKnownTrack })
  }

  try {
    const { access_token } = await getAccessToken()

    if (!access_token) {
      const fallback = { isPlaying: false, ...lastKnownTrack }
      cachedResponse = { data: fallback, timestamp: Date.now() }
      return NextResponse.json(fallback)
    }

    const response = await fetch(SPOTIFY_NOW_PLAYING_URL, {
      headers: { Authorization: `Bearer ${access_token}` },
    })

    if (response.status === 204 || response.status > 400) {
      const fallback = { isPlaying: false, ...lastKnownTrack }
      cachedResponse = { data: fallback, timestamp: Date.now() }
      return NextResponse.json(fallback)
    }

    const data = await response.json()

    if (!data.item) {
      const fallback = { isPlaying: false, ...lastKnownTrack }
      cachedResponse = { data: fallback, timestamp: Date.now() }
      return NextResponse.json(fallback)
    }

    const track = {
      title: data.item.name,
      artist: data.item.artists.map((a: { name: string }) => a.name).join(", "),
      url: data.item.external_urls.spotify,
    }

    // Always remember the last track we saw
    lastKnownTrack = track

    const result = { isPlaying: data.is_playing, ...track }
    cachedResponse = { data: result, timestamp: Date.now() }
    return NextResponse.json(result)
  } catch {
    const fallback = { isPlaying: false, ...lastKnownTrack }
    cachedResponse = { data: fallback, timestamp: Date.now() }
    return NextResponse.json(fallback)
  }
}
