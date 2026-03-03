"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <motion.span
      variants={fadeInUp}
      className="inline-block border border-bp-border px-3 py-1.5 font-[family-name:var(--font-jetbrains)] text-xs tracking-wider transition-colors hover:border-bp-card-hover hover:text-bp-accent"
    >
      {skill}
    </motion.span>
  );
}
