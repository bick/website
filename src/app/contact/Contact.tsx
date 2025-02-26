"use client"

import React from "react"
import Clock from "react-live-clock"

import Hero from "@/components/Hero"
import Social from "@/components/Social"

export default function Home() {
  return (
    <>
      <Hero title="🛰️ Contact Me" />
      <section className="social">
        <div className="container">
          <h3 className="mb-2 text-lg">✉ Email me</h3>
          <a href="mailto:owenbick@gmail.com">owenbick@gmail.com</a>
          <div className="flex flex-col my-12">
            <Clock
              format={"MMMM Mo, YYYY, h:mm:ss A"}
              ticking={true}
              timezone={"US/Central"}
            ></Clock>
            <span className="opacity-50 mt-2">UTC-06:00 - Austin, TX</span>
          </div>
        </div>
      </section>
      <Social />
    </>
  )
}
