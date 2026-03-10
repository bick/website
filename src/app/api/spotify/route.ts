import { NextResponse } from "next/server"

const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token"
const SPOTIFY_NOW_PLAYING_URL = "https://api.spotify.com/v1/me/player/currently-playing"

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

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
  if (!client_id || !client_secret || !refresh_token) {
    return NextResponse.json({ isPlaying: false, debug: "missing env vars" }, { status: 200 })
  }

  try {
    const tokenData = await getAccessToken()

    if (!tokenData.access_token) {
      return NextResponse.json({ isPlaying: false, debug: "token error", tokenData }, { status: 200 })
    }

    const response = await fetch(SPOTIFY_NOW_PLAYING_URL, {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    })

    if (response.status === 204) {
      return NextResponse.json({ isPlaying: false, debug: "nothing playing (204)" }, { status: 200 })
    }

    if (response.status > 400) {
      return NextResponse.json({ isPlaying: false, debug: `spotify error ${response.status}` }, { status: 200 })
    }

    const data = await response.json()

    if (!data.item) {
      return NextResponse.json({ isPlaying: false, debug: "no item in response", data }, { status: 200 })
    }

    return NextResponse.json(
      {
        isPlaying: data.is_playing,
        title: data.item.name,
        artist: data.item.artists.map((a: { name: string }) => a.name).join(", "),
        url: data.item.external_urls.spotify,
      },
      { status: 200 },
    )
  } catch (e) {
    return NextResponse.json({ isPlaying: false, debug: "catch error", error: String(e) }, { status: 200 })
  }
}
