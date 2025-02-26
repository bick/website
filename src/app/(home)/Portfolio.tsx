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
      imageAlt: "Discount Drug Network.",
      description: "Building an enterprise-grade pharmaceutical API",
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
        <div className="md:grid md:grid-cols-2 md:gap-8 mt-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              className={cardStyles}
              href={project.url}
              target="_blank"
              rel="nofollow"
            >
              {project.hasImage ? (
                <Image
                  src={project.imageSrc}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  alt={project.imageAlt}
                  className={`w-full h-auto object-contain bg-[#111] max-h-32 ${project.customImageClasses || (index % 2 === 0 ? "odd:py-12 odd:px-20" : "even:p-20")}`}
                />
              ) : (
                <div className="flex items-center justify-center text-2xl font-semibold h-32 bg-[#111]">
                  {project.title}
                </div>
              )}
              <div className="p-4">
                <blockquote className="p-0 m-0 mb-8 text-lg leading-normal hidden md:block">
                  {project.description}
                </blockquote>
                <h3 className="mb-0 text-lg font-semibold after:content-['↗'] after:text-xs after:font-medium after:leading-none after:ml-1 after:align-top after:opacity-50">
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
