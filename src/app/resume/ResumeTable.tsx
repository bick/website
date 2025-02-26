'use client'

export default function ResumeTable() {
    const resumeData = {
        experience: [
            {
                title: "Software Engineer II",
                company: "Smile Doctors",
                period: "Sep 2024 - Present",
                location: "Dallas, Texas, United States",
                duration: "6 mos",
                isPresentJob: true
            },
            {
                title: "Founder",
                company: "Weekend Labs",
                period: "Feb 2022 - Present",
                location: "Austin, Texas, United States",
                duration: "3 yrs 1 mo",
                isPresentJob: true
            },
            {
                title: "Senior Software Engineer",
                company: "Discount Drug Network",
                period: "May 2022 - Sep 2024",
                location: "Boston, Massachusetts, United States",
                duration: "2 yrs 5 mos",
                isPresentJob: false
            },
            {
                title: "Frontend Developer",
                company: "Freelance",
                period: "2017 - 2022",
                location: "",
                duration: "5 yrs",
                isPresentJob: false
            },
            {
                title: "Founder",
                company: "Stacktron",
                period: "2014 - 2016",
                location: "",
                duration: "2 yrs",
                isPresentJob: false
            }
        ],
        education: [
            {
                degree: "B.S. Business Management",
                institution: "Champlain College",
                period: "2018 - 2022"
            }
        ]
    };

    return (
        <section>
            <div className="container">
                <h2 className="text-2xl font-semibold mt-12">
                    Experience
                </h2>
                {resumeData.experience.map((job, index) => (
                    <div key={index} className="flex py-8 border-b border-[rgba(255,255,255,0.2)] last:border-b-0">
                        <div>
                            <h3 className="text-lg font-bold m-0">{job.title}</h3>
                            <h4 className="text-base">{job.company}</h4>
                            {job.location && <p className="text-base text-gray-400">{job.location}</p>}
                        </div>
                        <time className="flex items-center ml-auto">
                            {job.isPresentJob ?
                                <>
                                    {job.period.split(" - ")[0]} - <i className="ml-1">Present</i>
                                </> :
                                job.period
                            }
                        </time>
                    </div>
                ))}
                <h2 className="text-2xl font-semibold mt-12">
                    Education
                </h2>
                {resumeData.education.map((edu, index) => (
                    <div key={index} className="flex py-8 border-b border-[rgba(255,255,255,0.2)] last:border-b-0">
                        <div>
                            <h3 className="text-lg m-0">{edu.degree}</h3>
                            <h4 className="text-lg">{edu.institution}</h4>
                        </div>
                        <time className="flex items-center ml-auto">{edu.period}</time>
                    </div>
                ))}
            </div>
        </section>
    );
}