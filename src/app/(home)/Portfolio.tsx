"use client"

import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const projects = [
    {
      title: "Smile Doctors",
      url: "https://smiledoctors.com",
      imageSrc: "/static/smile-doctors.png",
      imageWidth: 400,
      imageHeight: 150,
      imageAlt: "Smile Doctors.",
      hasImage: true,
    },
    {
      title: "PlaceholderJS",
      url: "https://placeholderjs.com",
      imageSrc: "",
      imageWidth: 0,
      imageHeight: 0,
      imageAlt: "",
      description: "Ridiculously simple and lightweight placeholders",
      hasImage: false,
    },
    {
      title: "Devgigs",
      url: "https://devgigs.com",
      imageSrc: "/static/devgigs.png",
      imageWidth: 400,
      imageHeight: 25,
      imageAlt: "Devgigs.",
      description: "Coming Summer 2025",
      hasImage: true,
    },
    {
      title: "@genzswe",
      url: "https://instagram.com/genzswe",
      imageSrc: "/static/genzswe.png",
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: "genzswe.",
      description: "I post software engineering memes sometimes",
      hasImage: true,
      customImageClasses: "py-6 px-0",
    },
  ]

  const cardStyles =
    "inline-block portfolio-item bg-black border border-[rgba(255,255,255,0.2)] mb-4 p-0 w-full rounded-xl no-underline box-border break-inside-avoid rounded-lg overflow-hidden min-w-full hover:border-[#666] transition-colors duration-200"

  return (
    <section className="mt-12" id="projects">
      <div className="container">
        <h2>🤘 Current Projects</h2>
        <div className="mt-8 md:grid md:grid-cols-2 md:gap-8">
          {projects.map((project, index) => (
            <Link key={index} className={cardStyles} href={project.url} target="_blank" rel="nofollow">
              {project.hasImage ? (
                <Image
                  src={project.imageSrc}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  alt={project.imageAlt}
                  className={`h-auto max-h-32 w-full bg-[#111] object-contain ${project.customImageClasses || (index % 2 === 0 ? "odd:px-20 odd:py-12" : "even:p-20")}`}
                />
              ) : (
                <div className="flex h-32 items-center justify-center bg-[#111] text-2xl font-semibold">
                  {project.title}
                </div>
              )}
              <div className="p-4">
                {project.description && (
                    <blockquote className="m-0 mb-8 p-0 text-lg leading-normal block">
                      {project.description}
                    </blockquote>
                )}
                <h3 className="mb-0 text-lg font-semibold after:ml-1 after:align-top after:text-xs after:font-medium after:leading-none after:opacity-50 after:content-['↗']">
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
