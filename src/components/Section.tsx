import Reveal from "./Reveal";

/**
 * Editorial section: the title (and optional note) pins in a left column on desktop
 * while the content scrolls past on the right. Stacks on mobile.
 */
export default function Section({
  id,
  title,
  note,
  children,
}: {
  id: string;
  title: React.ReactNode;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="container-page pt-28 md:pt-40">
      <div className="grid gap-10 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4 lg:col-span-3">
          <div className="md:sticky md:top-28">
            <Reveal>
              <h2 id={`${id}-title`} className="section-title">
                {title}
              </h2>
              {note && <p className="mt-5 max-w-[34ch] text-[15px] leading-relaxed text-fg-muted">{note}</p>}
            </Reveal>
          </div>
        </div>
        <div className="min-w-0 md:col-span-8 lg:col-span-9">{children}</div>
      </div>
    </section>
  );
}
