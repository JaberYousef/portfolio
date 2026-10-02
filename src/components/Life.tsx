import Image from "next/image";
import { life } from "@/lib/data";
import type { Photo } from "@/types";
import Reveal from "./Reveal";
import Section from "./Section";

function Tile({ photo, className, sizes }: { photo: Photo; className: string; sizes: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-md bg-bg-elev ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        style={photo.position ? { objectPosition: photo.position } : undefined}
        className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.04]"
      />
    </div>
  );
}

export default function Life() {
  const { ridge, king, camp, coast } = life.photos;

  return (
    <Section id="life" title={life.title} note={life.body}>
      {/*
        Mobile: ridge full width, two portraits side by side, campfire full width.
        Desktop: ridge spans two rows on the left, King tall in the middle, two stacked on the right.
      */}
      <Reveal className="grid grid-cols-2 gap-3 md:grid-cols-12 md:grid-rows-[repeat(2,minmax(0,220px))] md:gap-4 lg:grid-rows-[repeat(2,minmax(0,280px))]">
        <Tile photo={ridge} sizes="(min-width: 768px) 38vw, 100vw" className="col-span-2 aspect-[4/3] md:col-span-6 md:row-span-2 md:aspect-auto" />
        <Tile photo={king} sizes="(min-width: 768px) 25vw, 50vw" className="aspect-[3/4] md:col-span-3 md:row-span-2 md:aspect-auto" />
        <Tile photo={coast} sizes="(min-width: 768px) 25vw, 50vw" className="aspect-[3/4] md:order-last md:col-span-3 md:aspect-auto" />
        <Tile photo={camp} sizes="(min-width: 768px) 25vw, 100vw" className="col-span-2 aspect-[16/10] md:col-span-3 md:aspect-auto" />
      </Reveal>
    </Section>
  );
}
