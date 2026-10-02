import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/data";
import CopyEmail from "./CopyEmail";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="container-page pb-10 pt-32 md:pt-48">
      <Reveal>
        <h2 className="font-display text-[clamp(42px,6.4vw,92px)] font-semibold leading-[0.98] tracking-[-0.035em]">
          Got something
          <span className="block text-accent">worth building?</span>
        </h2>
      </Reveal>

      <Reveal delay={0.06} className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12 md:items-end">
        <p className="max-w-[40ch] text-[17px] leading-relaxed text-fg-muted md:col-span-5">
          Email is the fastest way to reach me. I read everything and usually reply within a day.
        </p>
        <div className="flex flex-col gap-4 md:col-span-7 md:items-end">
          <a
            href={`mailto:${site.email}`}
            className="group inline-flex items-center gap-3 border-b border-line-strong pb-2 font-mono text-[clamp(20px,2.6vw,34px)] tracking-tight text-fg transition-colors duration-200 hover:border-fg"
          >
            {site.email}
            <ArrowUpRight
              size={24}
              aria-hidden="true"
              className="transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
          <CopyEmail email={site.email} />
        </div>
      </Reveal>

      <dl className="mt-20 grid grid-cols-2 gap-8 border-t border-line pt-8 md:mt-28 md:grid-cols-3">
        <div className="flex flex-col gap-2">
          <dt className="label">Elsewhere</dt>
          <dd className="flex gap-4 text-[15px]">
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="link-draw text-fg">
              GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="link-draw text-fg">
              LinkedIn
            </a>
          </dd>
        </div>
        <div className="flex flex-col gap-2">
          <dt className="label">Resume</dt>
          <dd className="text-[15px]">
            <a href={site.resume} target="_blank" rel="noopener noreferrer" className="link-draw text-fg">
              Download PDF
            </a>
          </dd>
        </div>
        <div className="col-span-2 flex flex-col gap-2 md:col-span-1">
          <dt className="label">Based</dt>
          <dd className="text-[15px] text-fg">{site.location}</dd>
        </div>
      </dl>
    </section>
  );
}
