import type { Project, SkillCategory, SkillRow, TimelineEntry, NavLink, SocialLink } from "@/types";

export const siteConfig = {
  name: "Yousef Jaber",
  title: "Software Engineer",
  tagline: "Living fully, building deliberately, and engineering what comes next.",
  email: "yjcareers@gmail.com",
  resumeUrl: "/resume.pdf",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/JaberYousef", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yousef-jaber2", icon: "linkedin" },
  { label: "Email", href: "mailto:yjcareers@gmail.com", icon: "email" },
];

export const aboutSpecs = [
  { label: "Name", value: "Yousef Jaber" },
  { label: "Education", value: "BS Computer Science, UC Santa Cruz '25" },
  { label: "Focus", value: "Full-Stack Development, AI/ML, Distributed Systems" },
  { label: "Location", value: "California, USA" },
];

export const aboutBioWork = [
  "Computer Science graduate from UC Santa Cruz with a passion for building production-grade software. I specialize in full-stack development with TypeScript and Next.js, and I'm deeply interested in AI-driven applications and distributed systems.",
  "I thrive at the intersection of clean architecture and real-world impact, turning complex problems into elegant, maintainable solutions. When I'm not coding, I'm exploring new tools, contributing to open source, and pushing the boundaries of what software can do.",
];

export const personalIntro = "Outside of engineering, I care deeply about growth, physically, mentally, and strategically.";

export const hobbies = [
  {
    emoji: "dog",
    title: "Spending time with my dog",
    description: "I genuinely enjoy being outside, walking, and just disconnecting from screens. It keeps me grounded and reminds me life isn't just code and startups.",
  },
  {
    emoji: "gaming",
    title: "Gaming (PC & strategy games)",
    description: "I've always enjoyed competitive and strategy-based games. I like understanding mechanics, optimizing builds, and thinking a few steps ahead. Games like Minecraft, Fortnite, Age of Empires, and survival/strategy games are fun for me not just because they're games, but because they're systems.",
  },
  {
    emoji: "golf",
    title: "Golf",
    description: "Precision, patience, and small adjustments over time. I like sports that reward discipline and focus.",
  },
  {
    emoji: "snowboard",
    title: "Snowboarding",
    description: "I enjoy pushing myself physically and mentally. There's something about speed + control + risk that sharpens you.",
  },
  {
    emoji: "swim",
    title: "Swimming & Training",
    description: "I train consistently and focus on strength, mobility, and building an aesthetic but athletic physique. I care about longevity and performance.",
  },
  {
    emoji: "markets",
    title: "Studying Markets & Investing",
    description: "I actively manage investments and enjoy thinking about capital allocation, macro trends, and long-term strategy. I like understanding how incentives drive behavior, in markets and in systems.",
  },
  {
    emoji: "ai",
    title: "Experimenting with AI & New Tech",
    description: "Even outside of formal projects, I enjoy exploring new APIs, building prototypes, and testing ideas. I learn by building.",
  },
  {
    emoji: "backpack",
    title: "Backpacking",
    description: "Loading up a pack and heading into the backcountry. I enjoy the self-reliance, the quiet, and the challenge of carrying everything you need on your back.",
  },
  {
    emoji: "hike",
    title: "Hiking",
    description: "Getting out on a trail clears my head like nothing else. Whether it's a quick morning hike or a full day on the mountain, it resets perspective.",
  },
  {
    emoji: "camp",
    title: "Camping",
    description: "Disconnecting completely. No Wi-Fi, no notifications. Just fire, fresh air, and simplicity. It's one of the best ways to recharge.",
  },
  {
    emoji: "learning",
    title: "Learning Across Industries",
    description: "I naturally explore healthcare, legal systems, finance, infrastructure. I like understanding how different industries operate at a systems level.",
  },
];

export const personalValues = [
  "Ownership",
  "Self-discipline",
  "Strategic thinking",
  "Long-term vision",
  "Continuous learning",
];

export const personalTagline = "I prefer building quietly and letting results speak.";

export interface GalleryAlbum {
  title: string;
  photos: string[];
}

export const galleryAlbums: GalleryAlbum[] = [
  {
    title: "King",
    photos: [
      "/king/IMG_2277.jpeg",
      "/king/IMG_3497.jpeg",
      "/king/IMG_5733.jpeg",
    ],
  },
  {
    title: "Backpacking",
    photos: [
      "/backpacking/IMG_3102.jpeg",
      "/backpacking/IMG_3191.jpeg",
    ],
  },
  {
    title: "Hiking",
    photos: [
      "/hiking/IMG_1516.jpeg",
    ],
  },
  {
    title: "Camping",
    photos: [
      "/camping/IMG_1939.jpeg",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "C", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "React Router", "Vite"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "GraphQL", "TypeGraphQL", "JWT Authentication"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    category: "Infrastructure & DevOps",
    skills: ["Docker", "AWS (ECS, RDS, S3, Lambda)", "Cloudflare", "NGINX", "Netlify", "Vercel"],
  },
  {
    category: "Version Control & Collaboration",
    skills: ["Git", "GitHub", "GitLab", "NPM"],
  },
  {
    category: "Data & Analytical Libraries",
    skills: ["Pandas", "NumPy"],
  },
];

export const skillRows: SkillRow[] = [
  {
    label: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "C", "HTML5", "CSS3"],
    direction: "left",
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "React Router", "Vite"],
    direction: "right",
  },
  {
    label: "Backend & Databases",
    skills: ["Node.js", "Express.js", "GraphQL", "TypeGraphQL", "JWT Authentication", "PostgreSQL", "MySQL"],
    direction: "left",
  },
  {
    label: "Infrastructure, DevOps & Tools",
    skills: ["Docker", "AWS (ECS, RDS, S3, Lambda)", "Cloudflare", "NGINX", "Netlify", "Vercel", "Git", "GitHub", "GitLab", "NPM", "Pandas", "NumPy"],
    direction: "right",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Clovent",
    description:
      "AI-driven real estate CRM with deal intelligence, lead prioritization, and automated pipeline management.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "AI"],
    status: "Live",
    featured: true,
    logo: "/logos/clovent.svg",
    date: "2026",
    links: {
      live: "https://clovent.xyz",
    },
  },
  {
    id: 2,
    title: "Cryop",
    description:
      "AI-governed treasury platform with automated capital allocation and DeFi yield optimization.",
    tech: ["TypeScript", "Solidity", "React"],
    status: "In Progress",
    featured: true,
    logo: "/logos/cryop.png",
    date: "2026",
    links: {},
  },
  {
    id: 3,
    title: "SentinelDocs",
    description:
      "Multi-tenant SaaS platform that uses AI to automate report generation from video footage, reducing manual paperwork and accelerating documentation workflows.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "LLM"],
    status: "In Progress",
    featured: true,
    date: "2025",
    links: {},
  },
  {
    id: 4,
    title: "Mini-MapReduce",
    description:
      "Distributed text-processing system simulating Hadoop/Spark MapReduce with fault tolerance and job scheduling.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "AWS S3"],
    status: "Complete",
    date: "2024",
    links: {
      live: "https://mini-map-reduce.vercel.app/",
    },
  },
  {
    id: 5,
    title: "Parkwise",
    description:
      "Virtualized campus parking system. Collaborated in a team of 6 developers to build a digital solution for campus parking operations, replacing paper-based systems with streamlined online processes for vehicle registration, permit purchasing, and ticket management.",
    tech: ["TypeScript", "Docker", "PostgreSQL"],
    status: "Complete",
    logo: "/logos/parkwise.png",
    date: "April 2025",
    links: {
      live: "https://parkwise.net",
    },
  },
];

export const timeline: TimelineEntry[] = [
  {
    id: 1,
    title: "Founder & Software Engineer",
    organization: "YJ Tech Ventures",
    location: "Remote, USA",
    period: "July 2025 - Present",
    link: "https://yjtechventures.com",
    bullets: [
      "Designed and shipped full-stack web apps for fintech and entertainment clients, handling 10K+ concurrent users",
      "Built performant, accessible interfaces using React, Next.js, and CSS-in-JS with attention to layout and animation",
      "Deployed on Netlify and Vercel with CI/CD pipelines, reducing deployment time by ~40%",
      "Implemented WCAG accessibility and responsive design ensuring inclusive cross-platform experiences",
    ],
    type: "work",
  },
  {
    id: 2,
    title: "Co-Founder & CTO",
    organization: "Clovent",
    location: "Remote, USA",
    period: "2026 - Present",
    logo: "/logos/clovent.svg",
    link: "https://clovent.xyz",
    bullets: [
      "Building an AI-driven real estate CRM from the ground up with Next.js, PostgreSQL, and custom AI pipelines",
      "Architecting deal intelligence and lead prioritization features for automated pipeline management",
    ],
    type: "work",
  },
  {
    id: 3,
    title: "Co-Founder & CTO",
    organization: "Cryop",
    location: "Remote, USA",
    period: "2026 - Present",
    logo: "/logos/cryop.png",
    bullets: [
      "Developing an AI-governed DeFi treasury platform with automated capital allocation strategies",
    ],
    type: "work",
  },
  {
    id: 4,
    title: "Programmer Intern",
    organization: "VerdeVista Investment Group",
    location: "Remote, USA",
    period: "Jan 2025 - Sept 2025",
    logo: "/logos/verdevista.avif",
    bullets: [
      "Built automation scripts and AI-powered tools (Apps Script, JavaScript, Python), cutting manual research time ~35%",
      "Participated in code reviews and contributed to development standards for internal tooling",
    ],
    type: "work",
  },
  {
    id: 5,
    title: "Software Engineering Intern",
    organization: "4L Data Intelligence",
    location: "San Ramon, CA",
    period: "Mar 2023 - July 2023",
    logo: "/logos/4l.svg",
    bullets: [
      "Optimized Python web scraping scripts, increasing data collection efficiency by 20%",
      "Built tools to organize real-time data, supporting healthcare providers with actionable insights",
    ],
    type: "work",
  },
  {
    id: 6,
    title: "Bachelor of Science in Computer Science",
    organization: "University of California, Santa Cruz",
    location: "Santa Cruz, CA",
    period: "2021 - 2025",
    bullets: [
      "Focused on software engineering, distributed systems, and artificial intelligence",
      "Completed coursework in algorithms, databases, operating systems, and machine learning",
    ],
    type: "education",
  },
];
