import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { heroLine, portrait, site, stack } from "@/lib/data";

export default function Hero() {
  const [first, second] = site.headline;

  return (
    <section id="top" className="container-page pt-24 md:pt-28">
      <div className="mt-8 grid gap-10 md:mt-14 md:grid-cols-12 md:items-end md:gap-12">
        <div className="md:col-span-7 lg:col-span-8">
          <p className="rise font-mono text-[13px] text-fg-dim" style={{ ["--i" as string]: 0 }}>
            {heroLine}
          </p>
          <h1
            className="rise mt-6 font-display text-[clamp(40px,5.8vw,84px)] font-semibold leading-[1.02] tracking-[-0.035em] text-balance"
            style={{ ["--i" as string]: 1 }}
          >
            {first} <span className="text-accent">{second}</span>
          </h1>

          <p
            className="rise mt-8 max-w-[44ch] text-[18px] leading-relaxed text-fg-muted md:mt-10"
            style={{ ["--i" as string]: 2 }}
          >
            <span className="text-fg">{site.name}.</span> {site.intro}
          </p>

          <div className="rise mt-8 flex flex-wrap gap-3" style={{ ["--i" as string]: 3 }}>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-fg px-6 text-[15px] font-medium text-bg transition-transform duration-200 hover:-translate-y-px active:translate-y-0 active:scale-[0.98]"
            >
              Email me
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-line-strong px-6 text-[15px] font-medium text-fg transition-colors duration-200 hover:border-fg active:scale-[0.98]"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="rise md:col-span-5 lg:col-span-4" style={{ ["--i" as string]: 2 }}>
          <div className="relative isolate mx-auto max-w-[360px] md:max-w-none">
            <div className="overflow-hidden rounded-md">
              <Image
                src={portrait.src}
                alt={portrait.alt}
                width={portrait.width}
                height={portrait.height}
                priority
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 40vw, 360px"
                className="aspect-[4/5] h-auto w-full object-cover object-[50%_35%]"
              />
            </div>
            {/* Offset frame in the accent color: the one decorative move, echoing the old blueprint corners */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 -right-3 -z-10 hidden h-full w-full rounded-md border border-accent/60 sm:block"
            />
          </div>
        </div>
      </div>

      <dl
        className="rise mt-20 grid gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-2 md:mt-24 lg:grid-cols-4"
        style={{ ["--i" as string]: 4 }}
      >
        {stack.map((group) => (
          <div key={group.label} className="flex flex-col gap-2">
            <dt className="label">{group.label}</dt>
            <dd className="text-[14px] leading-relaxed text-fg-muted">{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
