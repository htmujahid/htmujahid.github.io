export type Project = {
  name: string
  description: string
  href: string
  demoHref?: string
  stars?: string
  tags: string[]
  featured?: boolean
  cover: { light: string; dark: string }
}

export const projects: Project[] = [
  {
    name: "supasheet",
    description:
      "An open-source internal-tools framework built directly on Supabase — auto-generates CRUD screens, data tables and forms for every table in your database, styled with shadcn/ui.",
    href: "https://github.com/supasheet/supasheet",
    demoHref: "https://supasheet.app",
    stars: "19",
    tags: ["Next.js", "Supabase", "shadcn/ui", "TanStack"],
    featured: true,
    cover: {
      light: "/projects/supasheet-light.webp",
      dark: "/projects/supasheet-dark.webp",
    },
  },
  {
    name: "shadcn-editor",
    description:
      "A Lexical-based rich text editor built entirely from shadcn/ui components. The most-starred project in the shadcn ecosystem for editors, used as the base editor in dozens of downstream apps.",
    href: "https://github.com/htmujahid/shadcn-editor",
    demoHref: "https://shadcn-editor.vercel.app",
    stars: "1.3k",
    tags: ["React", "Lexical", "shadcn/ui", "Next.js"],
    cover: {
      light: "/projects/shadcn-editor-light.webp",
      dark: "/projects/shadcn-editor-dark.webp",
    },
  },
  {
    name: "sonnet",
    description:
      "An opinionated frontend framework for crafting web UI from first principles — a from-scratch exploration into framework design, organized as a Turborepo monorepo.",
    href: "https://github.com/sonnetjs/sonnet",
    demoHref: "https://sonnet.js.org",
    stars: "107",
    tags: ["Framework", "TypeScript", "Monorepo", "Turborepo"],
    featured: true,
    cover: {
      light: "/projects/sonnet.webp",
      dark: "/projects/sonnet.webp",
    },
  },
  {
    name: "undocx",
    description:
      "An AI-assisted, real-time collaborative document editor in the spirit of Google Docs — built with Next.js, Lexical, Drizzle and the Vercel AI SDK.",
    href: "https://github.com/htmujahid/undocx",
    demoHref: "https://undocx.com",
    stars: "11",
    tags: ["Next.js", "Lexical", "Realtime", "AI SDK"],
    featured: true,
    cover: {
      light: "/projects/undocx-light.webp",
      dark: "/projects/undocx-dark.webp",
    },
  },
  {
    name: "notifro",
    description:
      "Open-source, self-hostable notification infrastructure that runs on Cloudflare, with a native MCP server so AI agents can send notifications directly.",
    href: "https://github.com/htmujahid/notifro",
    demoHref: "https://notifro.htmujahid.pages.dev",
    stars: "1",
    tags: ["Cloudflare", "MCP", "React Router", "SDK"],
    cover: {
      light: "/projects/notifro-light.webp",
      dark: "/projects/notifro-dark.webp",
    },
  },
  {
    name: "postgrex",
    description:
      "A local, browser-based Postgres GUI for browsing schemas, running queries and managing a cluster without leaving localhost.",
    href: "https://github.com/htmujahid/postgrex",
    stars: "2",
    tags: ["PostgreSQL", "Express", "Vite", "React Router"],
    cover: {
      light: "/projects/postgrex-light.webp",
      dark: "/projects/postgrex-dark.webp",
    },
  },
  {
    name: "cleanough",
    description:
      "Turns any GitHub repository into an interactive, step-through presentation — browse code, walk through commits, and showcase output as a guided tour.",
    href: "https://github.com/htmujahid/cleanough",
    demoHref: "https://cleanough.netlify.app",
    stars: "1",
    tags: ["TanStack Start", "Chakra UI", "Git"],
    cover: {
      light: "/projects/cleanough-light.webp",
      dark: "/projects/cleanough-dark.webp",
    },
  },
  {
    name: "visx",
    description:
      "A browser-based SVG animation editor — compose shapes, gradients and filters on a live SVG canvas as a craft.js node tree, then animate them with a timeline-driven SMIL editor. Built with React 19, craft.js and shadcn/ui.",
    href: "https://github.com/htmujahid/visx",
    demoHref: "https://htmujahid.github.io/visx/",
    tags: ["React", "craft.js", "SVG", "shadcn/ui"],
    cover: {
      light: "/projects/visx-light.webp",
      dark: "/projects/visx-dark.webp",
    },
  },
  {
    name: "awesome-comparisons",
    description:
      "A curated collection of objective, side-by-side comparisons for languages, frameworks, databases and dev tools — built to help developers pick the right tool without wading through opinionated blog posts.",
    href: "https://github.com/awesome-comparisons/awesome-comparisons.github.io",
    demoHref: "https://awesome-comparisons.github.io/",
    tags: ["Astro", "Content", "Awesome List"],
    cover: {
      light: "/projects/awesome-comparisons-light.webp",
      dark: "/projects/awesome-comparisons-dark.webp",
    },
  },
]
