/**
 * Spotify OAuth Helper
 *
 * 1. Deploy your site first (need the /callback page live)
 * 2. Run: export $(grep SPOTIFY .env.local | head -2 | xargs) && node scripts/spotify-auth.mjs
 * 3. Open the URL it prints, authorize with Spotify
 * 4. You'll land on owenbick.com/callback with a code displayed
 * 5. Copy the code and paste it here
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

const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${encodeURIComponent(SCOPES)}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`

console.log("\n1. Open this URL in your browser:\n")
console.log(authUrl)
console.log("\n2. Authorize with Spotify")
console.log("3. You'll see a code on the callback page")
console.log("4. Copy the code and paste it below:\n")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

rl.question("Paste the code: ", async (code) => {
  rl.close()

  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code: code.trim(),
      redirect_uri: REDIRECT_URI,
    }),
  })

  const data = await res.json()

  if (data.refresh_token) {
    console.log("\nAdd this to your .env.local and Vercel env vars:\n")
    console.log(`SPOTIFY_REFRESH_TOKEN=${data.refresh_token}`)
    console.log("\nDone!")
  } else {
    console.error("\nError:", data)
  }
})
