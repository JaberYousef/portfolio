"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { aboutSpecs, aboutBioWork } from "@/lib/data";
import { useMode } from "@/components/layout/ContentSwitcher";
import SectionHeader from "@/components/ui/SectionHeader";
import BlueprintCard from "@/components/ui/BlueprintCard";

export default function About() {
  const { mode, toggle } = useMode();

  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeader number="01" title="About" />

        {/* Toggle switch */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 flex items-center justify-center gap-3"
        >
          <span
            className={`font-[family-name:var(--font-jetbrains)] text-xs tracking-wider uppercase transition-colors ${
              mode === "work" ? "text-bp-accent" : "text-bp-text-dim"
            }`}
          >
            Work
          </span>
          <button
            onClick={toggle}
            className="relative h-7 w-12 rounded-full border border-bp-border bg-bp-surface transition-colors"
            aria-label={`Switch to ${mode === "work" ? "personal" : "work"} mode`}
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute top-0.5 h-5 w-5 rounded-full bg-bp-accent"
              style={{ left: mode === "work" ? 2 : "calc(100% - 22px)" }}
            />
          </button>
          <span
            className={`font-[family-name:var(--font-jetbrains)] text-xs tracking-wider uppercase transition-colors ${
              mode === "personal" ? "text-bp-accent" : "text-bp-text-dim"
            }`}
          >
            Personal
          </span>
        </motion.div>

        {/* Work bio (only shown in work mode) */}
        {mode === "work" && (
          <motion.div
            key="work-about"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid gap-8 md:grid-cols-2"
            >
              <BlueprintCard>
                <div className="mb-4 font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.2em] uppercase text-bp-text-dim">
                  Technical Specification
                </div>
                <div className="space-y-3">
                  {aboutSpecs.map((spec) => (
                    <div key={spec.label} className="flex flex-col gap-0.5">
                      <span className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-wider uppercase text-bp-accent">
                        {spec.label}
                      </span>
                      <span className="text-sm text-bp-text-dim">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </BlueprintCard>

              <BlueprintCard>
                <div className="mb-4 font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.2em] uppercase text-bp-text-dim">
                  Overview
                </div>
                <div className="space-y-4">
                  {aboutBioWork.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-sm leading-relaxed text-bp-text-dim"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </BlueprintCard>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
