import Image from "next/image";
import { about } from "@/lib/data";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="How I work.">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
        <Reveal className="max-w-[420px] lg:col-span-5 lg:max-w-none">
          <div className="overflow-hidden rounded-md border border-line">
            <Image
              src={about.photo.src}
              alt={about.photo.alt}
              width={about.photo.width}
              height={about.photo.height}
              sizes="(min-width: 1024px) 28vw, 420px"
              className="aspect-[4/5] h-auto w-full object-cover object-[50%_55%]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08} className="flex flex-col gap-6 lg:col-span-7">
          <p className="font-display text-[clamp(22px,2.3vw,30px)] font-medium leading-[1.3] tracking-[-0.02em] text-balance">
            {about.lead}
            <span className="text-fg-dim">{about.leadRest}</span>
          </p>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="max-w-[62ch] text-[17px] leading-relaxed text-fg-muted">
              {p}
            </p>
          ))}

          <dl className="mt-4 grid gap-6 border-t border-line pt-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {about.facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1.5">
                <dt className="label">{fact.label}</dt>
                <dd className="text-[14px] leading-snug text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
