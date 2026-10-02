import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { experience, sectionNotes } from "@/lib/data";
import type { Role } from "@/types";
import Reveal from "./Reveal";
import Section from "./Section";

function Mark({ role }: { role: Role }) {
  if (role.logo) {
    return (
      <span className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-md border border-line bg-white p-1.5">
        <Image src={role.logo} alt="" width={40} height={40} className="size-full object-contain" />
      </span>
    );
  }
  const initials = role.organization
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <span
      aria-hidden="true"
      className="grid size-11 shrink-0 place-items-center rounded-md border border-line bg-bg-elev font-mono text-[12px] text-fg"
    >
      {initials}
    </span>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title={<>Where I&rsquo;ve shipped.</>} note={sectionNotes.experience}>
      <ol className="border-b border-line">
        {experience.map((role, i) => (
          <Reveal
            as="li"
            key={`${role.organization}-${role.title}`}
            delay={Math.min(i, 4) * 0.04}
            className="grid gap-4 border-t border-line py-8 lg:grid-cols-12 lg:gap-6 lg:py-10"
          >
            <div className="flex flex-col gap-1 font-mono text-[12px] lg:col-span-3">
              <span className="text-fg">{role.period}</span>
              <span className="text-fg-dim">{role.location}</span>
            </div>

            <div className="flex gap-4 lg:col-span-9">
              <Mark role={role} />
              <div className="flex min-w-0 flex-col gap-3">
                <div>
                  <h3 className="font-display text-[22px] font-semibold leading-tight tracking-[-0.02em]">
                    {role.link ? (
                      <a
                        href={role.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-draw inline-flex items-center gap-1.5"
                      >
                        {role.organization}
                        <ArrowUpRight size={15} className="text-fg-dim" aria-hidden="true" />
                      </a>
                    ) : (
                      role.organization
                    )}
                  </h3>
                  <p className="mt-1 text-[15px] text-fg-muted">{role.title}</p>
                </div>
                <ul className="flex max-w-[68ch] flex-col gap-2">
                  {role.bullets.map((b) => (
                    <li key={b.slice(0, 24)} className="relative pl-4 text-[15px] leading-relaxed text-fg-muted">
                      <span aria-hidden="true" className="absolute left-0 top-[0.7em] h-px w-2 bg-fg-dim" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
