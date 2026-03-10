/**
 * Spotify OAuth Helper
 *
 * 1. Create a Spotify app at https://developer.spotify.com/dashboard
 * 2. Set the redirect URI to https://owenbick.com/callback
 * 3. Run: export $(grep SPOTIFY .env.local | xargs) && node scripts/spotify-auth.mjs
 * 4. Open the URL it prints, authorize with Spotify
 * 5. You'll be redirected to a page that won't load - that's fine
 * 6. Copy the FULL URL from your browser's address bar and paste it here
 */

import readline from "node:readline"

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET
const REDIRECT_URI = "https://owenbick.com/callback"
const SCOPES = "user-read-currently-playing"

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("Set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET env vars")
  process.exit(1)
}

const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(SCOPES)}`

console.log("\n1. Open this URL in your browser:\n")
console.log(authUrl)
console.log("\n2. Authorize with Spotify")
console.log("3. You'll be redirected to a page that won't load - that's OK")
console.log("4. Copy the FULL URL from your address bar and paste it below:\n")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

rl.question("Paste the redirect URL: ", async (input) => {
  rl.close()

  try {
    const url = new URL(input.trim())
    const code = url.searchParams.get("code")

    if (!code) {
      console.error("No code found in URL")
      process.exit(1)
    }

    const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")

    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,
      }),
    })

    const data = await res.json()

    if (data.refresh_token) {
      console.log("\nAdd this to your .env.local:\n")
      console.log(`SPOTIFY_REFRESH_TOKEN=${data.refresh_token}`)
      console.log("\nDone!")
    } else {
      console.error("\nError:", data)
    }
  } catch (e) {
    console.error("Invalid URL:", e.message)
  }
})
