"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { timeline } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import TimelineItem from "@/components/ui/TimelineItem";

export default function Timeline() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeader number="03" title="Experience" />

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute left-[15px] top-0 h-full w-px origin-top bg-bp-border md:left-1/2"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative space-y-12 pl-14 md:pl-0"
          >
            {timeline.map((entry, index) => (
              <TimelineItem key={entry.id} entry={entry} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
