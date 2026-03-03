"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { socialLinks, siteConfig } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import BlueprintCard from "@/components/ui/BlueprintCard";

const iconSvgs: Record<string, React.ReactNode> = {
  github: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  linkedin: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  email: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeader number="05" title="Contact" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="text-center">
            <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold sm:text-3xl">
              Let&apos;s build something together.
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-bp-text-dim">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of something great.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid gap-4 sm:grid-cols-3"
          >
            {socialLinks.map((link) => (
              <BlueprintCard key={link.label} className="text-center">
                <a
                  href={link.href}
                  target={link.icon !== "email" ? "_blank" : undefined}
                  rel={link.icon !== "email" ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-center gap-3 transition-colors hover:text-bp-accent"
                >
                  <span className="text-bp-text-dim">{iconSvgs[link.icon]}</span>
                  <span className="font-[family-name:var(--font-jetbrains)] text-xs tracking-wider uppercase">
                    {link.label}
                  </span>
                  <span className="text-xs text-bp-text-dim">
                    {link.icon === "email"
                      ? siteConfig.email
                      : link.href.replace("https://", "")}
                  </span>
                </a>
              </BlueprintCard>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
