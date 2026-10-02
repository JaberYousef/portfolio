import type { Photo, Project, Role, StackGroup } from "@/types";

export const site = {
  name: "Yousef Jaber",
  role: "Software Engineer",
  email: "yjcareers@gmail.com",
  resume: "/YousefJaber_Resume.pdf",
  github: "https://github.com/JaberYousef",
  linkedin: "https://linkedin.com/in/yousef-jaber2",
  location: "SF Bay Area",
  // The second part is set in the accent color.
  headline: ["Software engineer building things people", "actually use."],
  intro:
    "I work across full-stack and AI, most recently on Clovent, an AI agent now used by active real estate agents.",
  description:
    "Yousef Jaber is a software engineer in the SF Bay Area building full-stack products, AI pipelines, and real-time systems. UC Santa Cruz CS ’25.",
};

export const heroLine = "SF Bay Area. Currently building Clovent and Avern.";

export const sectionNotes = {
  work: "Six projects, three you can try today. Repos are private; happy to walk through the code.",
  experience: "Three roles since 2023, from data pipelines to client products.",
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const stack: StackGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Python", "C/C++", "SQL", "GraphQL"] },
  { label: "Product", items: ["React", "Next.js", "Node.js", "Express", "FastAPI", "PostgreSQL", "Supabase"] },
  { label: "AI & data", items: ["OpenAI", "Anthropic", "Gemini", "Whisper", "Pandas", "NumPy", "scikit-learn"] },
  { label: "Infrastructure", items: ["AWS", "GCP", "Docker", "Redis", "BullMQ", "Vercel", "Vitest"] },
];

// Order is deliberate: live products with real users first, then depth (pipelines,
// team systems work, C++), then the public demo. Repos are private, so only live
// sites get a link.
export const projects: Project[] = [
  {
    slug: "clovent",
    featured: true,
    proof: "Used by 5 agents",
    title: "Clovent",
    description:
      "A multi-tenant AI agent for real estate, currently used by 5 active agents. A GPT-4o Vision pipeline pulls leads straight off open house sign-in sheets, and the agent uses multi-agent chat and 14+ callable tools to work directly with client and deal data.",
    highlights: [
      "OAuth with role-based access per tenant",
      "CI/CD pipeline shipping releases every 2 days",
    ],
    tags: ["AI", "SaaS", "Multi-tenant"],
    tech: ["Next.js", "React", "Node.js", "Supabase", "PostgreSQL", "GPT-4o"],
    status: "Live",
    year: "2026",
    logo: "/logos/clovent.svg",
    image: "/work/clovent.jpg",
    links: { live: "https://clovent.xyz" },
  },
  {
    slug: "avern",
    featured: true,
    proof: "Security-first marketplace",
    title: "Avern",
    description:
      "A trusted network for commodity and energy trade, where verified buyers and sellers find each other and move deals forward in an auditable workflow. Built security-first: every table is locked down with row-level security, every sensitive action is written to an append-only audit log, and documents are shared through private deal rooms.",
    highlights: [
      "Two-step verification with TOTP multi-factor auth",
      "Private storage with short-lived document links",
    ],
    tags: ["Marketplace", "Security"],
    tech: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Vercel"],
    status: "Early access",
    year: "2026",
    image: "/work/avern.jpg",
    links: { live: "https://www.useavern.com" },
  },
  {
    slug: "sentineldocs",
    proof: "Whisper + GPT pipeline",
    title: "SentinelDocs",
    description:
      "An async pipeline that turns uploaded video and documents into structured reports. Files land in AWS S3, jobs queue through BullMQ and Redis, and Python workers transcribe with Whisper and run GPT-based extraction into a multi-tenant PostgreSQL model.",
    highlights: ["JWT-secured API", "End-to-end monitoring across the pipeline"],
    tags: ["AI", "Pipelines"],
    tech: ["Node.js", "Express", "Python", "FastAPI", "Redis", "BullMQ", "AWS S3", "PostgreSQL"],
    status: "In progress",
    year: "2025",
    links: {},
  },
  {
    slug: "parking",
    proof: "Led a team of 6",
    title: "Campus Parking System",
    description:
      "Replaced a paper-based campus parking operation with online registration, permits, and ticket management. I led backend and frontend development across a team of 6, on a microservice architecture of 4 Docker services talking over REST and GraphQL.",
    highlights: [
      "Stripe payments, Mailgun email, and OAuth sign-in",
      "Internationalized for English and Mandarin",
    ],
    tags: ["Full-stack", "Team of 6"],
    tech: ["Next.js", "PostgreSQL", "Docker", "TypeGraphQL", "TSOA", "Stripe"],
    status: "Complete",
    year: "2025",
    logo: "/logos/parkwise.png",
    links: {},
  },
  {
    slug: "drone",
    proof: "Kalman + PID in C++",
    title: "Real-Time Drone Tracker",
    description:
      "A real-time multi-object tracker in C++ using MOG2 background subtraction and Kalman filtering, with PID control steering a servo gimbal through an Arduino Nano over POSIX serial.",
    highlights: [],
    tags: ["C++", "Computer vision", "Hardware"],
    tech: ["C++", "Arduino", "POSIX serial"],
    status: "Complete",
    year: "2026",
    links: {},
  },
  {
    slug: "mapreduce",
    proof: "Try the live demo",
    title: "Mini-MapReduce",
    description:
      "An interactive simulation of how Hadoop and Spark process text at scale: input is split into shards, mapped in parallel, and reduced into one result, with live progress tracking and a timeline of each phase.",
    highlights: [],
    tags: ["Distributed systems"],
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "AWS S3"],
    status: "Live",
    year: "2024",
    image: "/work/mapreduce.jpg",
    links: { live: "https://mini-map-reduce.vercel.app" },
  },
];

export const experience: Role[] = [
  {
    organization: "YJ Tech Ventures",
    title: "Software Engineer",
    location: "Remote",
    period: "Jul 2025 - Present",
    bullets: [
      "Built and deployed full-stack web apps for fintech and enterprise clients using React, Node.js, and PostgreSQL, owning everything from the database schema and REST APIs to the frontend.",
      "Shipped LLM-powered features into client applications using the OpenAI, Anthropic, and Gemini APIs.",
      "Scoped projects directly with clients, wrote proposals and contracts, and supported them after launch.",
    ],
  },
  {
    organization: "VerdeVista Investment Group",
    title: "Software Engineer Intern",
    location: "Remote",
    period: "Jan 2025 - Sep 2025",
    logo: "/logos/verdevista.avif",
    bullets: [
      "Built a Python automation tool that consolidated 3 separate processes into one system the team relied on daily.",
      "Developed APIs and a dashboard surfacing real-time investment signals, saving the team 8+ hours per week.",
      "Shipped through code review with unit tests and documentation, working with stakeholders to define requirements and improve data quality.",
    ],
  },
  {
    organization: "4L Data Intelligence",
    title: "Software Engineering Intern",
    location: "San Ramon, CA",
    period: "Mar 2023 - Jul 2023",
    logo: "/logos/4l.svg",
    bullets: [
      "Optimized Python data pipelines, increasing throughput 3x per run for downstream analytics.",
      "Built tooling that surfaced real-time metrics to end users.",
      "Designed data validation checks with a cross-functional team to catch bad data early.",
    ],
  },
];

export const about = {
  lead: "I build software that holds up in production,",
  leadRest: " and I care just as much about how it lands for the people using it.",
  paragraphs: [
    "I studied computer science at UC Santa Cruz and have been shipping ever since. Most of my work is full-stack TypeScript on Next.js and PostgreSQL, with a growing share of AI pipelines: vision models that read paper forms, agents that call real tools, and workers that turn video into reports.",
    "I like understanding how things work at a systems level, whether that is a codebase, a market, or an industry I have not touched yet. I prefer building quietly and letting results speak.",
  ],
  facts: [
    { label: "Studied", value: "UC Santa Cruz, B.S. Computer Science" },
    { label: "Focus", value: "Full-stack, AI pipelines, real-time systems" },
    { label: "Values", value: "Ownership, discipline, long-term thinking" },
  ],
  photo: {
    src: "/photos/standing.jpg",
    alt: "Yousef Jaber standing on a path in front of trees",
    width: 1050,
    height: 1400,
  } satisfies Photo,
};

export const portrait: Photo = {
  src: "/photos/portrait.jpg",
  alt: "Portrait of Yousef Jaber outdoors in a green shirt",
  width: 793,
  height: 733,
};

export const life = {
  title: "Off the clock.",
  body: "Most weekends I am somewhere without signal: backpacking, camping, or on a trail with King, my German Shepherd. The rest of the time it is the gym and the pool, golf, snowboarding in winter, strategy games, and reading about markets.",
  photos: {
    ridge: { src: "/photos/backpacking-ridge.jpg", alt: "Yousef backpacking below a granite ridge", width: 1400, height: 1050 },
    king: { src: "/photos/king-car.jpg", alt: "King, a German Shepherd, resting his head on his paws", width: 1050, height: 1400 },
    camp: { src: "/photos/camping.jpg", alt: "Yousef sitting by a campfire among pine trees", width: 1400, height: 1208 },
    coast: { src: "/photos/hiking-coast.jpg", alt: "A hiking trail running down a grassy hill toward the coast", width: 1050, height: 1400, position: "50% 85%" },
  } satisfies Record<string, Photo>,
};
