const cw = 226
const ch = 184
const y0 = 56
const bw = 194
const bh = 56
const r1 = 96
const r2 = 168

const ink = "hsl(var(--foreground))"
const quiet = "hsl(var(--muted-foreground))"
const edge = "hsl(var(--border))"
const tint = "hsl(var(--muted) / 0.5)"
const accent = "hsl(var(--chart-1))"

type Round = { title: string; question: string; main?: boolean }
type Group = { x: number; label: string; rounds: Round[] }

const groups: Group[] = [
  {
    x: 24,
    label: "AI off",
    rounds: [
      { title: "FizzBuzz", question: "Can you code at all?" },
      { title: "Algorithm problem", question: "Do you understand it?" },
    ],
  },
  {
    x: 267,
    label: "AI on",
    rounds: [
      { title: "Workflow walkthrough", question: "How do you really work?" },
      { title: "PR review", question: "Can you judge AI code?", main: true },
    ],
  },
  {
    x: 510,
    label: "Bar scales with level",
    rounds: [{ title: "Architecture", question: "Can you weigh trade-offs?" }],
  },
]

export default function InterviewLoopDiagram() {
  return (
    <figure className="my-8 w-full overflow-x-auto">
      <svg
        viewBox="0 0 760 264"
        role="img"
        aria-label="Every round tests understanding, not output"
        fontSize="13"
        className="h-auto w-full min-w-[520px]"
      >
        <text x="24" y="34" fontSize="15" fontWeight="600" fill={ink}>
          Every round tests understanding, not output
        </text>
        {groups.map((g) => (
          <g key={g.label}>
            <rect x={g.x} y={y0} width={cw} height={ch} rx="8" fill={tint} stroke={edge} strokeWidth="1" />
            <text x={g.x + 16} y={y0 + 22} fontWeight="600" fill={ink}>
              {g.label}
            </text>
            {g.rounds.map((r, i) => {
              const y = i === 0 ? r1 : r2
              return (
                <g key={r.title}>
                  <rect
                    x={g.x + 16}
                    y={y}
                    width={bw}
                    height={bh}
                    rx="8"
                    fill={r.main ? accent : "none"}
                    fillOpacity={r.main ? 0.12 : 1}
                    stroke={r.main ? accent : edge}
                    strokeWidth={r.main ? 2 : 1.25}
                  />
                  <text x={g.x + 32} y={y + 24} fontWeight="600" fill={ink}>
                    {r.title}
                  </text>
                  <text x={g.x + 32} y={y + 40} fontSize="11.5" fill={r.main ? ink : quiet}>
                    {r.question}
                  </text>
                </g>
              )
            })}
          </g>
        ))}
      </svg>
    </figure>
  )
}
