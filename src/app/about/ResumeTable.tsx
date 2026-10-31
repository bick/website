"use client"

import Image from "next/image"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

function Achievements({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-base leading-normal">
      {items.map((achievement, i) => (
        <li key={i} className="flex gap-2">
          <span className="mt-0.5 text-muted-foreground">•</span>
          <span>{achievement}</span>
        </li>
      ))}
    </ul>
  )
}

export default function ResumeTable() {
  const experience = [
    {
      title: "Engineering Manager",
      company: "FieldPulse",
      logo: "/static/logos/fieldpulse.webp",
      period: "Mar 2026 - Present",
      location: "Dallas, Texas",
      achievements: [
        "Leading engineering teams building field service management software for trade contractors across HVAC, plumbing, electrical, and other service industries",
        "Driving technical strategy and roadmap for customer-facing tooling that powers scheduling, dispatching, invoicing, and payments for thousands of service businesses",
        "Partnering with product and design to deliver revenue-critical features and improve experience for owners and field technicians",
      ],
    },
    {
      title: "Senior Software Engineer → Senior Engineering Manager",
      company: "Smile Doctors",
      logo: "/static/logos/smiledoctors.jpeg",
      period: "Sep 2024 - Mar 2026",
      location: "Dallas, Texas",
      achievements: [],
      roles: [
        {
          title: "Senior Engineering Manager",
          period: "Jan 2025 - Mar 2026",
          achievements: [
            "Led a team of 8 engineers across booking, payments, and mobile systems for a $1B+ healthcare platform processing $250MM in annual transactions across 600+ locations",
            "Architected a headless CMS platform to replace legacy website infrastructure across 300+ location sites, enabling marketing self-service and reducing engineering maintenance overhead",
            "Built HIPAA, SOC 2, and CCPA compliant systems including automated audit logging, access controls, and encryption standards for regulated healthcare data",
            "Architected core platform systems including real-time scheduling, payment processing, and patient data services, maintaining 99.99% uptime across distributed infrastructure",
            "Partnered with product, design, and data teams to define roadmaps and run experiments, reducing time-to-market by 30%",
            "Drove CI/CD pipeline modernization and hybrid cloud migration, reducing deployment time by 75% and infrastructure costs by 40% through architecture simplification",
            "Scaled mobile app from greenfield to production with 4.9-star App Store rating",
          ],
        },
        {
          title: "Senior Software Engineer",
          period: "Sep 2024 - Jan 2025",
          achievements: ["Internal tooling"],
        },
      ],
    },
    {
      title: "Founder",
      company: "Weekend Labs",
      logo: "/static/logos/weekendlabs.jpeg",
      period: "Feb 2022 - Present",
      location: "Austin, Texas",
      achievements: [
        "Built and scaled product development consultancy generating 6-figure ARR",
        "Led engineering teams to deliver revenue-generating products for 15+ clients",
        "Specialized in building customer-facing applications that drive business growth",
      ],
    },
    {
      title: "Lead Software Engineer",
      company: "Discount Drug Network",
      logo: "/static/logos/ddn.jpeg",
      period: "May 2022 - Sep 2024",
      location: "Boston, Massachusetts",
      achievements: [
        "Architected and scaled a B2B pharmaceutical pricing API (Node.js/TypeScript, C# backend, PostgreSQL) processing millions of daily requests, enabling enterprise clients to surface real-time drug pricing across 70,000+ US pharmacies",
        "Architected API gateway architecture, rate limiting, and resilience patterns that ensured platform stability at scale; reduced computing costs by 25% through algorithm optimization",
        "Built ML pipelines analyzing large pharmaceutical datasets to optimize pricing accuracy, directly improving product value for enterprise customers",
        "Led a team of 5 engineers and established HIPAA, GDPR, and CCPA compliance frameworks including encryption, access controls, and automated audit systems",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Freelance",
      logo: "/static/logos/rocket.jpeg",
      period: "2019 - 2022",
      location: "",
      achievements: ["Worked with Liberty Mutual, Boston Bruins, 829 Studios, FlossTime, Spot Easy, and Tadzilla"],
    },
    {
      title: "Software Engineer",
      company: "Loud Canvas Media",
      logo: "/static/logos/loudcanvas.png",
      period: "2017 - 2019",
      location: "",
      achievements: ["Frontend, ecommerce, and mobile apps"],
    },
    {
      title: "Software Engineer",
      company: "Stacktron",
      logo: "/static/logos/stacktron.jpeg",
      period: "2014 - 2017",
      location: "",
      achievements: ["Founding engineer", "Built billing and cloud infrastructure management systems"],
    },
  ]

  const education = [
    {
      degree: "B.S. Business Management",
      institution: "Champlain College",
      period: "2018 - 2022",
    },
  ]

  return (
    <section className="subtext-in pb-20" style={{ animationDelay: "0.6s" }}>
      <div className="container">
        <h2 className="label mt-12">Experience</h2>
        <Card className="mt-6">
          <CardContent className="p-0">
            <Accordion type="single" collapsible className="w-full">
              {experience.map((job, index) => (
                <AccordionItem key={index} value={`job-${index}`}>
                  <AccordionTrigger className="py-4 transition-colors hover:text-muted-foreground">
                    <div className="flex w-full items-center gap-3 text-left">
                      {job.logo ? (
                        <Image
                          src={job.logo}
                          alt={job.company}
                          width={36}
                          height={36}
                          className="flex-shrink-0 rounded-md object-cover"
                        />
                      ) : (
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-foreground/10 text-sm font-semibold text-foreground/60">
                          {job.company.charAt(0)}
                        </div>
                      )}
                      <div className="min-w-0 flex-grow">
                        <div className="font-medium leading-snug">{job.roles ? job.company : job.title}</div>
                        <div className="mt-1 text-[15px] font-normal leading-snug text-muted-foreground">
                          {job.roles ? job.title : job.company}
                        </div>
                      </div>
                      <div className="mr-2 flex flex-shrink-0 items-center gap-2">
                        <span className="hidden whitespace-nowrap font-mono text-[13px] font-normal text-muted-foreground sm:block">
                          {job.period}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pb-2">
                      {job.roles ? (
                        <ol className="space-y-6">
                          {job.roles.map((role, i) => (
                            <li key={i} className="relative pl-6">
                              <span className="absolute left-0 top-[7px] h-2 w-2 rounded-full bg-muted-foreground" />
                              {i < job.roles.length - 1 && (
                                <span className="absolute -bottom-6 left-[3.5px] top-5 w-px bg-border" />
                              )}
                              <div className="font-medium leading-snug">{role.title}</div>
                              <div className="mb-3 mt-1 font-mono text-[13px] text-muted-foreground">{role.period}</div>
                              <Achievements items={role.achievements} />
                            </li>
                          ))}
                        </ol>
                      ) : (
                        <Achievements items={job.achievements} />
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <h2 className="label mt-12">Education</h2>
        <Card className="mt-6">
          <CardContent className="px-0 py-4">
            {education.map((edu, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{edu.degree}</div>
                  <div className="mt-1 text-[15px] text-muted-foreground">{edu.institution}</div>
                </div>
                <span className="font-mono text-[13px] text-muted-foreground">{edu.period}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
