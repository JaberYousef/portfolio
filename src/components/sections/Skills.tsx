"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { skillRows } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

function InfiniteCarousel({
  skills,
  direction,
  label,
}: {
  skills: string[];
  direction: "left" | "right";
  label: string;
}) {
  // Duplicate the list enough times for seamless loop
  const items = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="space-y-2">
      <div className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.2em] uppercase text-bp-accent">
        {label}
      </div>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--bp-bg)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--bp-bg)] to-transparent" />

        <div
          className={`flex w-max gap-3 ${
            direction === "left" ? "animate-[scroll-left_30s_linear_infinite]" : "animate-[scroll-right_30s_linear_infinite]"
          }`}
          style={{
            animationPlayState: "running",
          }}
        >
          {items.map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="inline-flex shrink-0 items-center border border-bp-border px-4 py-2 font-[family-name:var(--font-jetbrains)] text-xs tracking-wider whitespace-nowrap transition-colors hover:border-bp-card-hover hover:text-bp-accent"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader number="02" title="Skills" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {skillRows.map((row) => (
            <motion.div key={row.label} variants={fadeInUp}>
              <InfiniteCarousel
                skills={row.skills}
                direction={row.direction}
                label={row.label}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
