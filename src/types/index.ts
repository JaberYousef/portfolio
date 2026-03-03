export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  status: "Live" | "In Progress" | "Complete";
  featured?: boolean;
  logo?: string;
  image?: string;
  date?: string;
  links: {
    live?: string;
    github?: string;
  };
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface TimelineEntry {
  id: number;
  title: string;
  organization: string;
  location: string;
  period: string;
  bullets: string[];
  link?: string;
  logo?: string;
  type: "work" | "education";
}

export interface SkillRow {
  label: string;
  skills: string[];
  direction: "left" | "right";
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email";
}
