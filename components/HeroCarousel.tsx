"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { Article } from "@/lib/types";
import { formatDate } from "@/lib/format";
import CategoryPill from "./CategoryPill";

export default function HeroCarousel({ articles }: { articles: Article[] }) {
  const [index, setIndex] = useState(0);
  const featured = articles[index];

  if (!featured) return null;

  return (
    <section className="bg-bone">
      <div className="mx-auto grid max-w-content gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-16">
        <Link
          href={`/archivio/${featured.slug}`}
          className="group relative block aspect-[4/3] w-full overflow-hidden rounded-3xl bg-ink/5 lg:order-2"
        >
          <AnimatePresence mode="wait">
            {featured.cover && (
              <motion.div
                key={featured.slug}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={featured.cover}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <span className="absolute left-5 top-5 rounded-full bg-bone/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            In evidenza
          </span>
        </Link>

        <div className="lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={featured.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <CategoryPill category={featured.category} />

              <h1 className="mt-4 font-display text-3xl font-semibold leading-[1.1] text-ink sm:text-4xl lg:text-5xl">
                <Link href={`/archivio/${featured.slug}`} className="hover:text-primary">
                  {featured.title}
                </Link>
              </h1>

              {featured.subtitle && (
                <p className="mt-4 text-lg text-ink/60">{featured.subtitle}</p>
              )}

              <div className="mt-6 flex items-center gap-2 text-sm text-ink/50">
                <span className="font-medium text-ink/80">{featured.author}</span>
                <span aria-hidden>·</span>
                <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                <span aria-hidden>·</span>
                <span>{featured.readingTime} min di lettura</span>
              </div>

              <Link
                href={`/archivio/${featured.slug}`}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-bone transition-colors hover:bg-secondary hover:text-primary"
              >
                Leggi l&rsquo;articolo
                <span aria-hidden>→</span>
              </Link>
            </motion.div>
          </AnimatePresence>

          {articles.length > 1 && (
            <div className="mt-10 flex items-center gap-3">
              {articles.map((a, i) => (
                <button
                  key={a.slug}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Mostra: ${a.title}`}
                  aria-current={i === index}
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                    i === index
                      ? "bg-primary text-bone"
                      : "bg-ink/5 text-ink/40 hover:bg-ink/10 hover:text-ink/70"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
