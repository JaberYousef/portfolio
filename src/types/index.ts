export type ProjectStatus = "Live" | "Early access" | "In progress" | "Complete";

export interface Project {
  slug: string;
  /** Featured projects render as large cards above the list. */
  featured?: boolean;
  title: string;
  /** Short result shown in the collapsed row. */
  proof: string;
  description: string;
  highlights: string[];
  tags: string[];
  tech: string[];
  status: ProjectStatus;
  year: string;
  logo?: string;
  image?: string;
  links: {
    live?: string;
    repo?: string;
  };
}

export interface Role {
  organization: string;
  title: string;
  location: string;
  period: string;
  bullets: string[];
  logo?: string;
  link?: string;
}

export interface StackGroup {
  label: string;
  items: string[];
}

export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** CSS object-position when the photo is cropped into a tile. */
  position?: string;
}
