export type ExperienceEntry = {
  role: string
  org: string
  location: string
  start: string
  end: string
  current?: boolean
  highlights: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: "React Engineer",
    org: "Devfluencers",
    location: "Remote",
    start: "Sep 2023",
    end: "Present",
    current: true,
    highlights: [
      "Built an AI-powered autobiography writing application end to end",
      "Restructured the codebase around a monorepo architecture for faster iteration",
      "Implemented Supabase for authentication, database and realtime updates",
      "Integrated OpenAI services into core product workflows",
    ],
  },
  {
    role: "Full Stack Developer",
    org: "Invogue Solutions",
    location: "Islamabad, Pakistan",
    start: "Mar 2022",
    end: "Aug 2023",
    highlights: [
      "Built multi-tenant SaaS applications from the ground up",
      "Optimized database structure and queries for improved performance",
      "Designed and shipped role-based access control systems",
      "Championed clean code practices across the engineering team",
    ],
  },
  {
    role: "Bachelor of Software Engineering",
    org: "NUST",
    location: "Islamabad, Pakistan",
    start: "Sep 2019",
    end: "Jun 2023",
    highlights: [],
  },
]
