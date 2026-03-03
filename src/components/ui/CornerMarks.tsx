"use client";

import { cn } from "@/lib/utils";

interface CornerMarksProps {
  className?: string;
  size?: number;
}

export default function CornerMarks({ className, size = 16 }: CornerMarksProps) {
  const markClass =
    "absolute border-blueprint-accent dark:border-blueprint-accent [data-theme='light']_&:border-blueprint-light-accent";

  return (
    <div className={cn("pointer-events-none absolute inset-0", className)} aria-hidden="true">
      {/* Top-left */}
      <div
        className="absolute top-0 left-0 border-t-2 border-l-2 border-current opacity-40"
        style={{ width: size, height: size }}
      />
      {/* Top-right */}
      <div
        className="absolute top-0 right-0 border-t-2 border-r-2 border-current opacity-40"
        style={{ width: size, height: size }}
      />
      {/* Bottom-left */}
      <div
        className="absolute bottom-0 left-0 border-b-2 border-l-2 border-current opacity-40"
        style={{ width: size, height: size }}
      />
      {/* Bottom-right */}
      <div
        className="absolute bottom-0 right-0 border-b-2 border-r-2 border-current opacity-40"
        style={{ width: size, height: size }}
      />
    </div>
  );
}
