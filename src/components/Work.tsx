"use client";

import { ArrowUpRight, Plus } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { projects, sectionNotes } from "@/lib/data";
import type { Project } from "@/types";
import Reveal from "./Reveal";
import Section from "./Section";

const pill =
  "inline-flex h-9 items-center gap-1.5 rounded-full border border-line-strong px-4 font-mono text-[12px] text-fg transition-colors duration-200 hover:bg-fg hover:text-bg";

function Status({ status }: { status: Project["status"] }) {
  const live = status === "Live" || status === "Early access";
  return (
    <span className={`flex items-center gap-2 font-mono text-[12px] ${live ? "text-live" : "text-fg-dim"}`}>
      {live && <span className="live-dot" aria-hidden="true" />}
      {status}
    </span>
  );
}

function Links({ project }: { project: Project }) {
  if (!project.links.live && !project.links.repo) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {project.links.live && (
        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className={pill}>
          Visit site <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      )}
      {project.links.repo && (
        <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className={pill}>
          Source <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

function Highlights({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="flex flex-col gap-2">
      {items.map((h) => (
        <li key={h} className="relative pl-4 text-[15px] leading-relaxed text-fg">
          <span aria-hidden="true" className="absolute left-0 top-[0.7em] h-px w-2 bg-fg-dim" />
          {h}
        </li>
      ))}
    </ul>
  );
}

/** Large card for the projects that carry the most weight. */
function FeaturedCard({ project }: { project: Project }) {
  const shot = (
    <Image
      src={project.image!}
      alt={`Screenshot of the ${project.title} website`}
      width={1200}
      height={750}
      sizes="(min-width: 1024px) 34vw, (min-width: 640px) 45vw, 100vw"
      className="h-auto w-full transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.03]"
    />
  );

  return (
    <article className="group flex flex-col">
      {project.links.live ? (
        <a
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden="true"
          className="block overflow-hidden rounded-md border border-line"
        >
          {shot}
        </a>
      ) : (
        <div className="overflow-hidden rounded-md border border-line">{shot}</div>
      )}

      <div className="mt-6 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-[30px] font-semibold leading-tight tracking-[-0.025em]">{project.title}</h3>
        <Status status={project.status} />
      </div>
      <p className="mt-1 text-[15px] text-accent">{project.proof}</p>
      <p className="mt-4 text-[15px] leading-relaxed text-fg-muted">{project.description}</p>
      <div className="mt-4">
        <Highlights items={project.highlights} />
      </div>
      <p className="mt-5 font-mono text-[12px] leading-relaxed text-fg-dim">{project.tech.join(", ")}</p>
      <div className="mt-5">
        <Links project={project} />
      </div>
    </article>
  );
}

function Panel({ project }: { project: Project }) {
  const hasMedia = Boolean(project.image || project.logo);

  return (
    <div className="grid gap-8 pb-10 pt-2 md:grid-cols-12 md:pl-[calc(100%/12)]">
      {hasMedia && (
        <div className="md:col-span-5">
          {project.image ? (
            <div className="overflow-hidden rounded-md border border-line">
              <Image
                src={project.image}
                alt={`Screenshot of the ${project.title} website`}
                width={1200}
                height={750}
                className="h-auto w-full"
              />
            </div>
          ) : (
            <div className="grid aspect-[16/10] place-items-center rounded-md border border-line bg-bg-elev">
              <Image
                src={project.logo!}
                alt={`${project.title} logo`}
                width={96}
                height={96}
                className="size-16 object-contain"
              />
            </div>
          )}
        </div>
      )}

      <div className={`flex flex-col gap-5 ${hasMedia ? "md:col-span-7" : "md:col-span-10"}`}>
        <p className="max-w-[60ch] text-[16px] leading-relaxed text-fg-muted">{project.description}</p>
        <Highlights items={project.highlights} />
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-4">
          <span className="font-mono text-[12px] text-fg">{project.tech.join(", ")}</span>
          <Status status={project.status} />
        </div>
        <Links project={project} />
      </div>
    </div>
  );
}

export default function Work() {
  const [open, setOpen] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const featured = projects.filter((p) => p.featured && p.image);
  const rest = projects.filter((p) => !featured.includes(p));

  return (
    <Section id="work" title="Proof of work." note={sectionNotes.work}>
      <div className="grid gap-14 sm:grid-cols-2 sm:gap-8">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <FeaturedCard project={project} />
          </Reveal>
        ))}
      </div>

      <ul className="mt-16 border-t border-line md:mt-20">
        {rest.map((project, i) => {
          const isOpen = open === project.slug;
          const panelId = `project-${project.slug}`;
          return (
            <Reveal as="li" key={project.slug} delay={Math.min(i, 5) * 0.04} className="border-b border-line">
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : project.slug)}
                  className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-center gap-x-3 py-5 text-left transition-colors duration-300 hover:bg-bg-elev md:grid-cols-12 md:gap-x-5 md:py-6"
                >
                  <span className="font-mono text-[12px] text-fg-dim md:col-span-1 md:pl-3">{project.year}</span>
                  <span
                    className={`font-display text-[clamp(20px,2.1vw,26px)] font-semibold leading-tight tracking-[-0.02em] transition-transform duration-500 ease-out-expo group-hover:translate-x-2 md:col-span-6 ${
                      isOpen ? "translate-x-2" : ""
                    }`}
                  >
                    {project.title}
                  </span>
                  <span className="hidden text-[15px] text-fg-muted transition-colors duration-300 group-hover:text-fg md:col-span-4 md:block">
                    {project.proof}
                  </span>
                  <span className="flex items-center justify-end md:col-span-1 md:pr-3">
                    <Plus
                      size={16}
                      aria-hidden="true"
                      className={`text-fg-muted transition-transform duration-500 ease-out-expo ${isOpen ? "rotate-45" : ""}`}
                    />
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-label={project.title}
                    initial={reduce ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <Panel project={project} />
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
