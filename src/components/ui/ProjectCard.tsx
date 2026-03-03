"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import type { Project } from "@/types";
import CornerMarks from "./CornerMarks";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const statusColors: Record<Project["status"], string> = {
    Live: "text-green-400 border-green-400/30 bg-green-400/5",
    "In Progress": "text-yellow-400 border-yellow-400/30 bg-yellow-400/5",
    Complete: "text-bp-accent border-bp-accent/30 bg-bp-accent/5",
  };

  return (
    <motion.div
      variants={fadeInUp}
      className={`group relative flex h-full flex-col overflow-hidden border border-bp-border bg-bp-surface/50 backdrop-blur-sm transition-all duration-300 hover:border-bp-card-hover hover:shadow-[0_0_30px_var(--bp-glow)] hover:scale-[1.02] ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      <CornerMarks />

      {/* Card content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Top row: logo/title + status */}
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.logo && (
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded border border-bp-border bg-bp-bg/50 p-1.5">
                <img
                  src={project.logo}
                  alt={`${project.title} logo`}
                  className="h-full w-full object-contain"
                />
              </div>
            )}
            <div>
              <h3 className="font-[family-name:var(--font-poppins)] text-lg font-bold leading-tight">
                {project.title}
              </h3>
              {project.date && (
                <span className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-wider text-bp-text-dim">
                  {project.date}
                </span>
              )}
            </div>
          </div>
          <span
            className={`shrink-0 border px-2 py-0.5 font-[family-name:var(--font-jetbrains)] text-[10px] tracking-wider uppercase ${statusColors[project.status]}`}
          >
            {project.status}
          </span>
        </div>

        {/* Description - clamp to 3 lines, expand on hover */}
        <p className="mb-5 flex-1 text-sm leading-relaxed text-bp-text-dim line-clamp-3 group-hover:line-clamp-none transition-all">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="border border-bp-border px-2 py-0.5 font-[family-name:var(--font-jetbrains)] text-[10px] tracking-wider text-bp-text-dim transition-colors group-hover:border-bp-card-hover"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 font-[family-name:var(--font-jetbrains)] text-xs tracking-wider uppercase">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-bp-accent transition-opacity hover:opacity-80"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Visit Live
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bp-text-dim transition-colors hover:text-bp-text"
            >
              GitHub
            </a>
          )}
          {!project.links.live && !project.links.github && (
            <span className="text-bp-text-dim opacity-50">Coming Soon</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
