"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import type { TimelineEntry } from "@/types";

interface TimelineItemProps {
  entry: TimelineEntry;
  index: number;
}

const typeIcons: Record<TimelineEntry["type"], string> = {
  work: "W",
  education: "E",
};

export default function TimelineItem({ entry, index }: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="relative flex w-full items-start gap-6 md:gap-8"
    >
      <div className={`flex-1 ${isLeft ? "md:text-right" : "md:order-2"}`}>
        <div
          className={`border border-bp-border bg-bp-surface/50 p-5 backdrop-blur-sm ${
            isLeft ? "md:mr-8" : "md:ml-8"
          }`}
        >
          {/* Logo */}
          {entry.logo && (
            <div className={`mb-3 flex ${isLeft ? "md:justify-end" : ""}`}>
              <img
                src={entry.logo}
                alt={`${entry.organization} logo`}
                className="h-8 w-auto max-w-[96px] object-contain"
              />
            </div>
          )}

          <div className="mb-1 flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-3">
            <span className="font-[family-name:var(--font-jetbrains)] text-xs tracking-wider uppercase text-bp-text-dim">
              {entry.period}
            </span>
            <span className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-wider text-bp-text-dim">
              {entry.location}
            </span>
          </div>
          <h3 className="font-[family-name:var(--font-poppins)] text-base font-semibold">
            {entry.title}
          </h3>
          <div className="mb-3 font-[family-name:var(--font-jetbrains)] text-xs text-bp-accent">
            {entry.link ? (
              <a
                href={entry.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
              >
                {entry.organization} ↗
              </a>
            ) : (
              entry.organization
            )}
          </div>
          <ul className={`space-y-1.5 ${isLeft ? "md:text-left" : ""}`}>
            {entry.bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm leading-relaxed text-bp-text-dim"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-bp-accent" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute left-0 z-10 flex h-8 w-8 shrink-0 items-center justify-center border border-bp-accent bg-bp-bg font-[family-name:var(--font-jetbrains)] text-xs text-bp-accent md:left-1/2 md:-translate-x-1/2">
        {typeIcons[entry.type]}
      </div>

      <div className={`hidden flex-1 md:block ${isLeft ? "md:order-2" : ""}`} />
    </motion.div>
  );
}
