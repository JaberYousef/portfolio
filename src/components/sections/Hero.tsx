"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, drawLine } from "@/lib/animations";
import { siteConfig } from "@/lib/data";
import Button from "@/components/ui/Button";
import Typewriter from "@/components/ui/Typewriter";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      {/* Animated corner brackets */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-bp-accent"
        aria-hidden="true"
      >
        <motion.line variants={drawLine} initial="hidden" animate="visible"
          x1="40" y1="40" x2="120" y2="40"
          stroke="currentColor" strokeWidth="1" className="opacity-20" />
        <motion.line variants={drawLine} initial="hidden" animate="visible"
          x1="40" y1="40" x2="40" y2="120"
          stroke="currentColor" strokeWidth="1" className="opacity-20" />
        <motion.line variants={drawLine} initial="hidden" animate="visible"
          x1="calc(100% - 40px)" y1="40" x2="calc(100% - 120px)" y2="40"
          stroke="currentColor" strokeWidth="1" className="opacity-20" />
        <motion.line variants={drawLine} initial="hidden" animate="visible"
          x1="calc(100% - 40px)" y1="40" x2="calc(100% - 40px)" y2="120"
          stroke="currentColor" strokeWidth="1" className="opacity-20" />
        <motion.line variants={drawLine} initial="hidden" animate="visible"
          x1="40" y1="calc(100% - 40px)" x2="120" y2="calc(100% - 40px)"
          stroke="currentColor" strokeWidth="1" className="opacity-20" />
        <motion.line variants={drawLine} initial="hidden" animate="visible"
          x1="40" y1="calc(100% - 40px)" x2="40" y2="calc(100% - 120px)"
          stroke="currentColor" strokeWidth="1" className="opacity-20" />
        <motion.line variants={drawLine} initial="hidden" animate="visible"
          x1="calc(100% - 40px)" y1="calc(100% - 40px)" x2="calc(100% - 120px)" y2="calc(100% - 40px)"
          stroke="currentColor" strokeWidth="1" className="opacity-20" />
        <motion.line variants={drawLine} initial="hidden" animate="visible"
          x1="calc(100% - 40px)" y1="calc(100% - 40px)" x2="calc(100% - 40px)" y2="calc(100% - 120px)"
          stroke="currentColor" strokeWidth="1" className="opacity-20" />
      </svg>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex w-full max-w-5xl flex-col items-center gap-12 md:flex-row md:justify-between md:gap-16"
      >
        {/* Left: text content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            variants={fadeInUp}
            className="font-[family-name:var(--font-poppins)] text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl"
          >
            <span className="block">YOUSEF</span>
            <span className="block text-bp-accent">JABER</span>
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="mt-4 font-[family-name:var(--font-jetbrains)] text-base tracking-wider text-bp-text-dim sm:text-lg"
          >
            <Typewriter
              words={["Software Engineer"]}
              typingSpeed={80}
            />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-lg text-sm leading-relaxed text-bp-text-dim sm:text-base"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start"
          >
            <Button href={siteConfig.resumeUrl} download>
              Download Resume
            </Button>
            <Button href="#contact" variant="outline">
              Get in Touch
            </Button>
          </motion.div>
        </div>

        {/* Right: photo */}
        <motion.div
          variants={fadeInUp}
          className="relative shrink-0"
        >
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-bp-accent/30 sm:h-80 sm:w-80">
            <img
              src="/myself/IMG_8451.jpeg"
              alt="Yousef Jaber"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Blueprint corner accents around photo */}
          <div className="pointer-events-none absolute -inset-3">
            <span className="absolute left-0 top-0 h-6 w-6 border-l border-t border-bp-accent/40" />
            <span className="absolute right-0 top-0 h-6 w-6 border-r border-t border-bp-accent/40" />
            <span className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-bp-accent/40" />
            <span className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-bp-accent/40" />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeInUp}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-bp-text-dim"
        >
          <span className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <motion.svg
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 0v20M1 14l7 8 7-8" />
          </motion.svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
