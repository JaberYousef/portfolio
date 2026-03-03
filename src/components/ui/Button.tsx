"use client";

import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"a"> {
  variant?: "primary" | "outline";
}

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "group relative inline-flex items-center gap-2 px-6 py-3 font-[family-name:var(--font-jetbrains)] text-sm font-medium tracking-wider uppercase transition-all duration-300",
        variant === "primary" &&
          "bg-bp-accent text-bp-bg hover:bg-bp-accent-hover",
        variant === "outline" &&
          "border border-bp-border opacity-70 hover:border-bp-accent hover:opacity-100",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
