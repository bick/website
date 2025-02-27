"use client"

import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const projects = [
    {
      title: "Smile Doctors",
      url: "https://smiledoctors.com",
      imageSrc: "/static/smile-doctors.png",
      imageWidth: 400,
      imageHeight: 150,
      imageAlt: "Smile Doctors.",
      badge: '2024 - Present',
      badgeType: "default",
      hasImage: true,
    },
    {
      title: "PlaceholderJS",
      description: "Ridiculously simple and lightweight placeholders",
      url: "https://placeholderjs.com",
      imageSrc: "",
      imageWidth: 0,
      imageHeight: 0,
      imageAlt: "",
      badge: 'Open Source',
      badgeType: "outline",
      hasImage: false,
    },
    {
      title: "Devgigs",
      url: "https://devgigs.com",
      imageSrc: "/static/devgigs.png",
      imageWidth: 400,
      imageHeight: 25,
      imageAlt: "Devgigs.",
      badge: 'Summer 2025',
      badgeType: "outline",
      hasImage: true,
    },
    {
      title: "@genzswe",
      url: "https://instagram.com/genzswe",
      imageSrc: "/static/genzswe.png",
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: "genzswe.",
      description: "I post software engineering memes sometimes",
      hasImage: true,
      customImageClasses: "p",
    },
  ]

  const cardStyles =
      "flex flex-col portfolio-item bg-black border border-[rgba(255,255,255,0.2)] mb-4 p-0 w-full rounded-xl no-underline box-border break-inside-avoid rounded-lg overflow-hidden min-w-full hover:border-[#666] transition-colors duration-200"

  return (
      <section className="mt-12" id="projects">
        <div className="container">
          <h2>🤘 Current Projects</h2>
          <div className="mt-8 md:grid md:grid-cols-2 md:gap-8">
            {projects.map((project, index) => (
                <Link key={index} className={cardStyles} href={project.url} target="_blank" rel="nofollow">
                  <div className="w-full h-full bg-[#111] flex justify-center relative">
                    {project.badge && (
                        <Badge variant={project.badgeType as "default" | "secondary" | "destructive" | "outline" | undefined} className="absolute top-4 right-4">
                          {project.badge}
                        </Badge>
                    )}
                  {project.hasImage ? (
                      <Image
                          src={project.imageSrc}
                          width={project.imageWidth}
                          height={project.imageHeight}
                          alt={project.imageAlt}
                          className={`object-contain h-32 py-4 ${
                              project.customImageClasses ||
                              (project.description
                                  ? (index % 2 === 0 ? "h-auto max-h-32 odd:px-20 odd:py-12" : "h-auto max-h-32 even:p-20")
                                  : "h-full px-24")
                          }`}
                      />
                  ) : (
                      <div className={`flex items-center justify-center bg-[#111] text-2xl font-semibold ${!project.description ? "h-48" : "h-32"}`}>
                        {project.title}
                      </div>
                  )}
                  </div>
                  <div className="p-4">
                    {project.description && (
                        <blockquote className="mb-6 p-0 text-lg leading-normal block opacity-75">
                          {project.description}
                        </blockquote>
                    )}
                    <h3 className="mb-0 text-xl font-bold after:ml-1 after:align-top after:text-xs after:font-medium after:leading-none after:opacity-50 after:content-['↗']">
                      {project.title}
                    </h3>
                  </div>
                </Link>
            ))}
          </div>
        </div>
      </section>
  )
}