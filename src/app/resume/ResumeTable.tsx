"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

export default function ResumeTable() {
  const experience = [
    {
      title: "Senior Engineering Manager",
      company: "FieldPulse",
      period: "Apr 2026 - Present",
      location: "Dallas, Texas",
      duration: "1 mo",
      isPresentJob: true,
      achievements: [
        "Leading engineering teams building field service management software for trade contractors",
        "Driving product strategy across customer-facing tooling for HVAC, plumbing, and electrical businesses",
        "Owning technical roadmaps for revenue-critical features serving thousands of service businesses",
      ],
    },
    {
      title: "Engineering Manager & Product Lead",
      company: "Smile Doctors",
      period: "Sep 2024 - Mar 2026",
      location: "Dallas, Texas",
      duration: "1 yr 7 mos",
      isPresentJob: false,
      achievements: [
        "Led cross-functional engineering teams to deliver customer-facing healthcare products",
        "Drove product strategy that directly impacted revenue and patient acquisition",
        "Managed technical roadmaps for client-facing applications with focus on user experience",
      ],
    },
    {
      title: "Founder",
      company: "Weekend Labs",
      period: "Feb 2022 - Present",
      location: "Austin, Texas",
      duration: "3 yrs 1 mo",
      isPresentJob: true,
      achievements: [
        "Built and scaled product development consultancy generating 6-figure ARR",
        "Led engineering teams to deliver revenue-generating products for 15+ clients",
        "Specialized in building customer-facing applications that drive business growth",
      ],
    },
    {
      title: "Senior Product Engineer",
      company: "Discount Drug Network",
      period: "May 2022 - Sep 2024",
      location: "Boston, Massachusetts",
      duration: "2 yrs 5 mos",
      isPresentJob: false,
      achievements: [
        "Architected customer-facing pharmacy platform serving 100K+ users",
        "Led product initiatives that increased user engagement by 40%",
        "Managed technical implementation of revenue-critical features",
      ],
    },
    {
      title: "Product Development Lead",
      company: "Freelance Consulting",
      period: "2017 - 2022",
      location: "",
      duration: "5 yrs",
      isPresentJob: false,
      achievements: [
        "Delivered 50+ customer-facing products for startups and enterprises",
        "Focused on building products that generate measurable business value",
        "Specialized in rapid prototyping and MVP development for market validation",
      ],
    },
    {
      title: "Co-Founder",
      company: "Stacktron",
      period: "2014 - 2016",
      location: "",
      duration: "2 yrs",
      isPresentJob: false,
      achievements: [
        "Founded and managed product development for B2B SaaS platform",
        "Built customer acquisition strategy and managed product-market fit initiatives",
        "Led small engineering team to deliver market-ready products",
      ],
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
    <section className="subtext-in pb-20" style={{ animationDelay: "0.3s" }}>
      <div className="container">
        <h2 className="label mt-12">Experience</h2>
        <Card className="mt-6">
          <CardContent className="p-0">
            <Accordion type="single" collapsible className="w-full">
              {experience.map((job, index) => (
                <AccordionItem key={index} value={`job-${index}`}>
                  <AccordionTrigger className="py-4 transition-colors hover:text-muted-foreground">
                    <div className="flex w-full items-center gap-3 text-left">
                      <div className="min-w-0 flex-grow">
                        <div className="font-medium leading-snug">{job.title}</div>
                        <div className="mt-1 text-[15px] font-normal leading-snug text-muted-foreground">{job.company}</div>
                      </div>
                      <div className="mr-2 flex flex-shrink-0 items-center gap-2">
                        {job.isPresentJob && (
                          <span className="label">Current</span>
                        )}
                        <span className="hidden whitespace-nowrap font-mono text-[13px] font-normal text-muted-foreground sm:block">
                          {job.duration}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pb-2">
                      <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[13px] text-muted-foreground">
                        <span>{job.period}</span>
                        {job.location && <span>{job.location}</span>}
                      </div>
                      <ul className="space-y-2 text-base leading-normal">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="mt-0.5 text-muted-foreground">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
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
