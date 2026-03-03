"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMode } from "@/components/layout/ContentSwitcher";
import Skills from "@/components/sections/Skills";
import Timeline from "@/components/sections/Timeline";
import Projects from "@/components/sections/Projects";
import Personal from "@/components/sections/Personal";

export default function SectionRouter() {
  const { mode } = useMode();

  return (
    <AnimatePresence mode="wait">
      {mode === "work" ? (
        <motion.div
          key="work-sections"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <Skills />
          <Timeline />
          <Projects />
        </motion.div>
      ) : (
        <motion.div
          key="personal-sections"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <Personal />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
