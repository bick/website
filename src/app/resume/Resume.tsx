"use client"

import React from "react"
import ResumeTable from "@/app/resume/ResumeTable"

import Hero from "@/components/Hero"

export default function ResumePage() {
  return (
    <>
      <Hero title="👔 Resume" />
      <ResumeTable />
    </>
  )
}
