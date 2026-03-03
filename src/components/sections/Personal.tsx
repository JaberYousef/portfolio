"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import {
  personalIntro,
  hobbies,
  personalValues,
  personalTagline,
  galleryAlbums,
} from "@/lib/data";
import BlueprintCard from "@/components/ui/BlueprintCard";
import CornerMarks from "@/components/ui/CornerMarks";
import SectionHeader from "@/components/ui/SectionHeader";

const hobbyIcons: Record<string, string> = {
  dog: "🐶",
  gaming: "🎮",
  golf: "🏌️",
  snowboard: "🏂",
  swim: "🏊",
  markets: "📈",
  ai: "🤖",
  backpack: "🎒",
  hike: "🥾",
  camp: "🏕️",
  learning: "📚",
};

export default function Personal() {
  const [activeAlbum, setActiveAlbum] = useState(0);
  const [activePhoto, setActivePhoto] = useState(0);

  const album = galleryAlbums[activeAlbum];
  const allPhotos = album.photos;

  const handleAlbumChange = (index: number) => {
    setActiveAlbum(index);
    setActivePhoto(0);
  };

  return (
    <div className="space-y-0">
      {/* Hobbies & Interests */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <SectionHeader number="02" title="Life Outside Code" />

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 max-w-2xl text-sm leading-relaxed text-bp-text-dim"
          >
            {personalIntro}
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {hobbies.map((hobby) => (
              <BlueprintCard key={hobby.title}>
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-lg">{hobbyIcons[hobby.emoji]}</span>
                  <h3 className="font-[family-name:var(--font-poppins)] text-sm font-semibold">
                    {hobby.title}
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-bp-text-dim">
                  {hobby.description}
                </p>
              </BlueprintCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <SectionHeader number="03" title="Gallery" />

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Album tabs */}
            <div className="mb-6 flex flex-wrap gap-2">
              {galleryAlbums.map((a, i) => (
                <button
                  key={a.title}
                  onClick={() => handleAlbumChange(i)}
                  className={`border px-4 py-2 font-[family-name:var(--font-jetbrains)] text-xs tracking-wider uppercase transition-all ${
                    i === activeAlbum
                      ? "border-bp-accent bg-bp-accent/10 text-bp-accent"
                      : "border-bp-border text-bp-text-dim hover:border-bp-card-hover"
                  }`}
                >
                  {a.title}
                  <span className="ml-2 opacity-50">{a.photos.length}</span>
                </button>
              ))}
            </div>

            {/* Main photo */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeAlbum}-${activePhoto}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative aspect-[16/10] w-full overflow-hidden border border-bp-border bg-bp-surface/50"
              >
                <CornerMarks size={20} />
                <Image
                  src={allPhotos[activePhoto]}
                  alt={`${album.title} photo ${activePhoto + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1000px"
                />
                <div className="absolute bottom-3 right-3 border border-bp-border bg-bp-bg/80 px-3 py-1 font-[family-name:var(--font-jetbrains)] text-[10px] tracking-wider uppercase text-bp-accent backdrop-blur-sm">
                  {album.title} // {activePhoto + 1} of {allPhotos.length}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Photo navigation arrows */}
            {allPhotos.length > 1 && (
              <div className="mt-4 flex items-center gap-4">
                <button
                  onClick={() =>
                    setActivePhoto((p) =>
                      (p - 1 + allPhotos.length) % allPhotos.length
                    )
                  }
                  className="flex h-10 w-10 items-center justify-center border border-bp-border transition-colors hover:border-bp-accent hover:text-bp-accent"
                  aria-label="Previous photo"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                {/* Thumbnails */}
                <div className="flex flex-1 gap-2 overflow-x-auto">
                  {allPhotos.map((photo, i) => (
                    <button
                      key={photo}
                      onClick={() => setActivePhoto(i)}
                      className={`relative h-14 w-20 shrink-0 overflow-hidden border transition-all sm:h-16 sm:w-24 ${
                        i === activePhoto
                          ? "border-bp-accent"
                          : "border-bp-border opacity-50 hover:opacity-80"
                      }`}
                    >
                      <Image
                        src={photo}
                        alt={`${album.title} thumbnail ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="100px"
                      />
                    </button>
                  ))}
                </div>

                <button
                  onClick={() =>
                    setActivePhoto((p) => (p + 1) % allPhotos.length)
                  }
                  className="flex h-10 w-10 items-center justify-center border border-bp-border transition-colors hover:border-bp-accent hover:text-bp-accent"
                  aria-label="Next photo"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Values & Philosophy */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-8 md:grid-cols-2"
          >
            <BlueprintCard>
              <div className="mb-4 font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.2em] uppercase text-bp-text-dim">
                Values
              </div>
              <div className="flex flex-wrap gap-2">
                {personalValues.map((value) => (
                  <span
                    key={value}
                    className="border border-bp-border px-3 py-1.5 font-[family-name:var(--font-jetbrains)] text-xs tracking-wider text-bp-accent"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </BlueprintCard>

            <BlueprintCard>
              <div className="mb-4 font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.2em] uppercase text-bp-text-dim">
                Philosophy
              </div>
              <p className="font-[family-name:var(--font-poppins)] text-lg font-semibold leading-relaxed">
                &ldquo;{personalTagline}&rdquo;
              </p>
            </BlueprintCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
