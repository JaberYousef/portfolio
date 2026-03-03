"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/animations";
import CornerMarks from "./CornerMarks";

interface BlueprintCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function BlueprintCard({
  children,
  className,
  hover = true,
}: BlueprintCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        "relative border border-bp-border bg-bp-surface/50 p-6 backdrop-blur-sm",
        hover && "transition-all duration-300 hover:border-bp-card-hover hover:shadow-[0_0_20px_var(--bp-glow)]",
        className
      )}
    >
      <CornerMarks />
      {children}
    </motion.div>
  );
}
