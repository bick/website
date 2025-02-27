"use client"

import { AppProgressBar as ProgressBar } from "next-nprogress-bar"

export default function Loading() {
  return (
      <ProgressBar
        height="4px"
        color="orange"
        options={{ showSpinner: false }}
        shallowRouting
      />
  )
}
