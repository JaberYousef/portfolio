"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";
import { useActiveSection } from "@/hooks/useActiveSection";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-bp-border/50 bg-bp-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          className="font-[family-name:var(--font-jetbrains)] text-sm font-bold tracking-wider"
        >
          YJ<span className="text-bp-accent">.</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-[family-name:var(--font-jetbrains)] text-xs tracking-wider uppercase transition-opacity ${
                activeSection === link.href.slice(1)
                  ? "opacity-100 text-bp-accent"
                  : "opacity-50 hover:opacity-100"
              }`}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`h-px w-5 bg-current transition-transform ${
                mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-current transition-transform ${
                mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-bp-border/50 bg-bp-bg/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2 font-[family-name:var(--font-jetbrains)] text-xs tracking-wider uppercase transition-opacity ${
                    activeSection === link.href.slice(1)
                      ? "opacity-100 text-bp-accent"
                      : "opacity-50"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
