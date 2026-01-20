"use client"

import { Calendar, MapPin, GraduationCap } from "lucide-react"

export default function ResumeTable() {
  const resumeData = {
    experience: [
      {
        title: "Engineering Manager & Product Lead",
        company: "Smile Doctors",
        period: "Sep 2024 - Present",
        location: "Dallas, Texas, United States",
        duration: "6 mos",
        isPresentJob: true,
        achievements: [
          "Leading cross-functional engineering teams to deliver customer-facing healthcare products",
          "Driving product strategy that directly impacts revenue and patient acquisition",
          "Managing technical roadmaps for client-facing applications with focus on user experience"
        ],
        logoUrl: "https://img.logo.dev/smiledoctors.com?token=pk_uYGtbdV0TfSdEI3LMTyfBA",
      },
      {
        title: "Founder & CEO",
        company: "Weekend Labs",
        period: "Feb 2022 - Present",
        location: "Austin, Texas, United States",
        duration: "3 yrs 1 mo",
        isPresentJob: true,
        achievements: [
          "Built and scaled product development consultancy generating 6-figure ARR",
          "Led engineering teams to deliver revenue-generating products for 15+ clients",
          "Specialized in building customer-facing applications that drive business growth"
        ],
        logoUrl: "https://img.logo.dev/weekendlabs.com?token=pk_uYGtbdV0TfSdEI3LMTyfBA",
      },
      {
        title: "Senior Product Engineer",
        company: "Discount Drug Network",
        period: "May 2022 - Sep 2024",
        location: "Boston, Massachusetts, United States",
        duration: "2 yrs 5 mos",
        isPresentJob: false,
        achievements: [
          "Architected customer-facing pharmacy platform serving 100K+ users",
          "Led product initiatives that increased user engagement by 40%",
          "Managed technical implementation of revenue-critical features"
        ],
        logoUrl: "https://img.logo.dev/discountdrugnetwork.com?token=pk_uYGtbdV0TfSdEI3LMTyfBA",
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
          "Specialized in rapid prototyping and MVP development for market validation"
        ],
        logoUrl: "https://img.logo.dev/freelancer.com?token=pk_uYGtbdV0TfSdEI3LMTyfBA",
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
          "Led small engineering team to deliver market-ready products"
        ],
        logoUrl: "https://img.logo.dev/stacktron.com?token=pk_uYGtbdV0TfSdEI3LMTyfBA",
      },
    ],
    education: [
      {
        degree: "B.S. Business Management",
        institution: "Champlain College",
        period: "2018 - 2022",
        logoUrl: "https://img.logo.dev/champlain.edu?token=pk_uYGtbdV0TfSdEI3LMTyfBA",
      },
    ],
  }

  return (
    <section className="max-w-4xl mx-auto px-4">
      <div className="container">
        <h2 className="mt-12 mb-8 text-3xl font-bold flex items-center gap-3">
          <Calendar className="h-8 w-8 text-blue-500" />
          Professional Experience
        </h2>
        <div className="space-y-8">
          {resumeData.experience.map((job, index) => (
            <div key={index} className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <img 
                    src={job.logoUrl} 
                    alt={`${job.company} logo`}
                    className="w-16 h-16 rounded-xl object-contain bg-white p-2 shadow-lg"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{job.title}</h3>
                      <h4 className="text-lg font-semibold text-blue-400">{job.company}</h4>
                      {job.location && (
                        <p className="text-sm text-gray-400 flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </p>
                      )}
                    </div>
                    <div className="text-right mt-2 lg:mt-0">
                      <time className="text-sm font-medium text-gray-300 block">
                        {job.isPresentJob ? (
                          <>
                            {job.period.split(" - ")[0]} - <span className="text-green-400 font-semibold">Present</span>
                          </>
                        ) : (
                          job.period
                        )}
                      </time>
                      <span className="text-xs text-gray-500">{job.duration}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-16 mb-8 text-3xl font-bold flex items-center gap-3">
          <GraduationCap className="h-8 w-8 text-green-500" />
          Education
        </h2>
        <div className="space-y-6">
          {resumeData.education.map((edu, index) => (
            <div key={index} className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-200">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <img 
                    src={edu.logoUrl} 
                    alt={`${edu.institution} logo`}
                    className="w-16 h-16 rounded-xl object-contain bg-white p-2 shadow-lg"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
                <div className="flex-grow flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <h4 className="text-lg font-semibold text-green-400">{edu.institution}</h4>
                  </div>
                  <time className="text-sm font-medium text-gray-300 mt-2 lg:mt-0">{edu.period}</time>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
