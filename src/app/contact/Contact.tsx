"use client"

import React, { useEffect, useState } from "react"

import Hero from "@/components/Hero"

function LiveClock() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Chicago",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })

    const tick = () => setTime(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (!time) return null

  return <span>{time}</span>
}

export default function Home() {
  return (
    <>
      <Hero title="🛰️ Contact Me" gradient="red" />
      <section className="social">
        <div className="container">
          <h3 className="mb-2 text-lg">✉ Email me</h3>
          <a href="mailto:owenbick@gmail.com">owenbick@gmail.com</a>
          <div className="my-12 flex flex-col">
            <LiveClock />
            <span className="mt-2 opacity-50">UTC-06:00 - Austin, TX</span>
          </div>
        </div>
      </section>
    </>
  )
}
