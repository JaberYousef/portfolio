"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeaderProps {
  number: string;
  title: string;
  id?: string;
}

export default function SectionHeader({ number, title, id }: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mb-12"
      id={id}
    >
      <div className="flex items-center gap-3 font-[family-name:var(--font-jetbrains)] text-xs tracking-[0.2em] uppercase opacity-50">
        <span>Section {number}</span>
        <span className="h-px w-12 bg-current" />
      </div>
      <h2 className="mt-2 font-[family-name:var(--font-poppins)] text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </motion.div>
  );
}
