"use client";

import { List, X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = navLinks.map((l) => l.href.slice(1));

export default function Nav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between gap-6">
        <a href="#top" className="group flex items-center gap-2.5" aria-label={`${site.name}, back to top`}>
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center rounded-full bg-accent font-display text-[13px] font-bold tracking-tight text-bg transition-transform duration-300 group-hover:rotate-[-8deg]"
          >
            YJ
          </span>
          <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-fg">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`font-mono text-[12px] transition-colors duration-200 ${
                    isActive ? "text-fg" : "text-fg-dim hover:text-fg"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 items-center rounded-full border border-line-strong px-4 font-mono text-[12px] text-fg transition-colors duration-200 hover:bg-fg hover:text-bg sm:inline-flex"
          >
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-9 place-items-center rounded-full border border-line-strong text-fg md:hidden"
          >
            {open ? <X size={15} aria-hidden="true" /> : <List size={15} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-line bg-bg md:hidden"
          >
            <ul className="container-page flex flex-col py-3">
              {[...navLinks, { label: "Resume", href: site.resume }].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-2xl font-medium tracking-tight text-fg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
