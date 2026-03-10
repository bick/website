"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function CallbackContent() {
  const searchParams = useSearchParams()
  const code = searchParams.get("code")

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="container max-w-lg text-center">
        <h1 className="text-2xl font-bold">Spotify Auth Code</h1>
        {code ? (
          <div className="mt-4">
            <p className="text-white/60 mb-4">Copy this code and paste it in your terminal:</p>
            <code className="block break-all rounded-lg bg-white/10 p-4 text-sm text-white/90">{code}</code>
          </div>
        ) : (
          <p className="mt-4 text-white/60">No code found in URL.</p>
        )}
      </div>
    </div>
  )
}

export default function CallbackPage() {
  return (
    <Suspense>
      <CallbackContent />
    </Suspense>
  )
}
