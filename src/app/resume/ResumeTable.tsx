"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function ResumeTable() {
  const experience = [
    {
      title: "Engineering Manager & Product Lead",
      company: "Smile Doctors",
      period: "Sep 2024 - Present",
      location: "Dallas, Texas",
      duration: "6 mos",
      isPresentJob: true,
      achievements: [
        "Leading cross-functional engineering teams to deliver customer-facing healthcare products",
        "Driving product strategy that directly impacts revenue and patient acquisition",
        "Managing technical roadmaps for client-facing applications with focus on user experience",
      ],
    },
    {
      title: "Founder & CEO",
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
      title: "Founder & Product Manager",
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
    <section className="pb-20">
      <div className="container">
        <h2 className="mt-12">💼 Experience</h2>
        <Card className="mt-6">
          <CardContent className="p-0">
            <Accordion type="single" collapsible className="w-full">
              {experience.map((job, index) => (
                <AccordionItem key={index} value={`job-${index}`}>
                  <AccordionTrigger className="px-4 py-4 hover:bg-muted/20">
                    <div className="flex w-full items-center gap-3 text-left">
                      <div className="min-w-0 flex-grow">
                        <div className="font-medium">{job.title}</div>
                        <div className="text-sm text-muted-foreground">{job.company}</div>
                      </div>
                      <div className="mr-2 flex flex-shrink-0 items-center gap-2">
                        {job.isPresentJob && (
                          <Badge variant="default" className="text-xs">
                            Current
                          </Badge>
                        )}
                        <span className="hidden whitespace-nowrap text-sm text-muted-foreground sm:block">
                          {job.duration}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 px-4 pb-2">
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span>{job.period}</span>
                        {job.location && <span>{job.location}</span>}
                      </div>
                      <ul className="space-y-2 text-sm">
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

        <h2 className="mt-12">🎓 Education</h2>
        <Card className="mt-6">
          <CardContent className="px-4 py-4">
            {education.map((edu, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{edu.degree}</div>
                  <div className="text-sm text-muted-foreground">{edu.institution}</div>
                </div>
                <span className="text-sm text-muted-foreground">{edu.period}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
