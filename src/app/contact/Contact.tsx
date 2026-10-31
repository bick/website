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
      <Hero title="Contact me" gradient="red" />
      <section className="subtext-in social pb-20" style={{ animationDelay: "0.3s" }}>
        <div className="container">
          <div className="section">
            <h2 className="label">Email me</h2>
            <a href="mailto:owenbick@gmail.com">owenbick@gmail.com</a>
          </div>
          <div className="section">
            <h2 className="label">Local time</h2>
            <div className="flex flex-col">
              <LiveClock />
              <span className="mt-2 text-muted-foreground">UTC-06:00 - Austin, TX</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
