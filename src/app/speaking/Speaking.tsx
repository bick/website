"use client"

import { useState, type FormEvent, type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"

const EMAIL = "owenbick@gmail.com"

const BIO =
  "Owen Bick is an engineering leader who builds teams, ships products, and scales startups. He started writing code as a teenager and has spent 15+ years building products and leading engineering teams. He is currently an Engineering Manager at FieldPulse and writes about engineering leadership at owenbick.com."

const talks: { category: string; title: string; description: ReactNode }[] = [
  {
    category: "Leadership",
    title: "Speed Without Slop: Keeping the Quality Bar as You Scale",
    description:
      'Why "move fast" and "build it right" aren\'t opposites, and the team structures, rituals, and ownership models that let a growing engineering org ship quickly without piling up regret.',
  },
  {
    category: "Industry",
    title: "Most SaaS Companies Will Not Survive",
    description: (
      <>
        The argument from <Link href="/blog/most-saas-companies-will-not-survive">my essay</Link>, expanded for the
        stage: what&apos;s changing in software economics, which companies make it through, and what that means for the
        people building them.
      </>
    ),
  },
  {
    category: "AI & engineering",
    title: "Who Cleans Up After the AI?",
    description:
      "What AI-written code is really doing to engineering teams, and how leaders can get the speed without inheriting the mess.",
  },
  {
    category: "Career",
    title: "From Self-Taught to Leading Teams",
    description:
      "Writing code as a teenager, co-founding a company, and the lessons from moving from IC to engineering leadership without a playbook.",
  },
]

const formats = [
  { title: "Keynotes & talks", description: "20 to 45 minutes, conference or company event" },
  { title: "Panels & firesides", description: "Moderated conversation or Q&A" },
  { title: "Podcasts", description: "Audio or video, remote" },
  { title: "Workshops", description: "For engineering managers and leadership teams" },
]

const buttonBase =
  "portfolio-item inline-flex min-h-11 items-center rounded-full px-5 text-[15px] font-medium no-underline transition-opacity hover:opacity-80"
const buttonPrimary = `${buttonBase} bg-foreground text-background`
const buttonSecondary = `${buttonBase} border text-foreground`
const inputStyles = "min-h-11 rounded-md border bg-transparent px-3 text-[15px] text-foreground"

function Row({ label, id, children }: { label: string; id?: string; children: ReactNode }) {
  return (
    <section id={id} className="section scroll-mt-24 md:grid md:grid-cols-[180px_minmax(0,1fr)] md:gap-12">
      <h2 className="label pt-1.5">{label}</h2>
      <div className="min-w-0">{children}</div>
    </section>
  )
}

export default function Speaking() {
  const [copied, setCopied] = useState(false)

  const copyBio = async () => {
    await navigator.clipboard.writeText(BIO)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const sendRequest = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = `Speaking request: ${data.get("event")}`
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Event: ${data.get("event")}`,
      `Date & location: ${data.get("details")}`,
      "",
      `${data.get("message")}`,
    ].join("\n")
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-40">
        <div className="hero-fade-in bg-linear-to-br absolute inset-0 from-orange-200 via-background to-amber-200/80 dark:from-orange-950/70 dark:to-amber-950/40" />
        <div className="hero-fade-in pointer-events-none absolute inset-0 mix-blend-overlay">
          <svg className="h-full w-full">
            <filter id="speakingGrain">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#speakingGrain)" />
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0 md:max-w-[560px]">
              <div className="title-fade-in" style={{ animationDelay: "0.1s" }}>
                <p className="label mb-5">Speaking</p>
                <h1 className="page-title" style={{ fontSize: "clamp(36px, 5vw, 44px)", lineHeight: 1.1 }}>
                  Talks on building engineering teams, shipping with craft, and where software companies go next.
                </h1>
              </div>
              <p
                className="subtext-in mt-6 text-lg leading-normal text-muted-foreground"
                style={{ animationDelay: "0.3s" }}
              >
                I speak at conferences, company offsites, and podcasts about engineering leadership from the inside:
                what it takes to scale a team at a startup without losing the quality bar.
              </p>
              <div className="subtext-in mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.3s" }}>
                <a href="#book" className={buttonPrimary}>
                  Invite me to speak
                </a>
                <a href="#kit" className={buttonSecondary}>
                  Speaker kit
                </a>
              </div>
            </div>
            <div
              className="subtext-in relative aspect-[4/5] w-full max-w-[260px] shrink-0 overflow-hidden rounded-md border"
              style={{ animationDelay: "0.3s" }}
            >
              <Image src="/static/owen2026.jpeg" alt="Owen Bick" fill className="object-cover" priority />
            </div>
          </div>
        </div>

        <div className="bg-linear-to-t absolute bottom-0 left-0 right-0 h-16 from-background to-transparent" />
      </section>

      <div className="subtext-in container pb-8" style={{ animationDelay: "0.3s" }}>
        <Row label="Talks">
          <div className="flex flex-col border-t">
            {talks.map((talk, index) => (
              <article key={talk.title} className="flex flex-col gap-2 border-b py-6">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")} &middot; {talk.category}
                </span>
                <h3 className="page-title" style={{ fontSize: 26 }}>
                  {talk.title}
                </h3>
                <p className="text-muted-foreground">{talk.description}</p>
              </article>
            ))}
          </div>
        </Row>

        <Row label="Formats">
          <ul className="grid gap-6 sm:grid-cols-2">
            {formats.map((format) => (
              <li key={format.title} className="flex flex-col gap-1">
                <span className="font-medium">{format.title}</span>
                <span className="text-[15px] text-muted-foreground">{format.description}</span>
              </li>
            ))}
          </ul>
        </Row>

        <Row label="Appearances">
          <div className="flex flex-col border-t">
            <Link
              href="https://www.kuow.org/stories/the-human-coders-hired-to-mop-up-ai-slop"
              target="_blank"
              rel="nofollow"
              className="portfolio-item row"
            >
              <span className="row-meta">2025 &middot; Radio</span>
              <span>
                <span className="row-name font-normal italic">The human coders hired to mop up AI slop</span>
                <span className="text-muted-foreground">. KUOW, NPR Network</span>
              </span>
            </Link>
          </div>
        </Row>

        <Row label="Speaker kit" id="kit">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2 rounded-md border p-6">
              <span className="label">Short bio</span>
              <p>{BIO}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="/static/owen2026.jpeg" download="owen-bick-headshot.jpeg" className={buttonSecondary}>
                Download headshot
              </a>
              <button type="button" onClick={copyBio} className={`${buttonSecondary} cursor-pointer`}>
                {copied ? "Copied" : "Copy bio"}
              </button>
            </div>
          </div>
        </Row>

        <Row label="Invite me" id="book">
          <form onSubmit={sendRequest} className="grid gap-4 sm:grid-cols-2">
            <p className="page-title sm:col-span-2" style={{ fontSize: 28 }}>
              Tell me about your event.
            </p>
            <label className="flex flex-col gap-1.5 text-sm text-muted-foreground">
              Name
              <input name="name" type="text" required autoComplete="name" className={inputStyles} />
            </label>
            <label className="flex flex-col gap-1.5 text-sm text-muted-foreground">
              Email
              <input name="email" type="email" required autoComplete="email" className={inputStyles} />
            </label>
            <label className="flex flex-col gap-1.5 text-sm text-muted-foreground">
              Event
              <input name="event" type="text" required className={inputStyles} />
            </label>
            <label className="flex flex-col gap-1.5 text-sm text-muted-foreground">
              Date &amp; location
              <input name="details" type="text" className={inputStyles} />
            </label>
            <label className="flex flex-col gap-1.5 text-sm text-muted-foreground sm:col-span-2">
              Audience and what you&apos;d like covered
              <textarea name="message" rows={4} className={`${inputStyles} resize-y py-3`} />
            </label>
            <div className="flex flex-wrap items-center justify-between gap-4 sm:col-span-2">
              <span className="text-sm text-muted-foreground">
                Opens your email app. Or email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </span>
              <button type="submit" className={`${buttonPrimary} cursor-pointer`}>
                Send request
              </button>
            </div>
          </form>
        </Row>
      </div>
    </>
  )
}
