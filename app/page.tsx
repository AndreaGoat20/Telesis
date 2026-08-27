import Image from "next/image";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import { formatDate } from "@/lib/format";
import ArticleCard from "@/components/ArticleCard";
import CategoryPill from "@/components/CategoryPill";

export default function HomePage() {
  const articles = getAllArticles();
  const [featured, ...rest] = articles;
  const latest = rest.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      {featured && (
        <section className="border-b border-ink/10 bg-white">
          <div className="mx-auto grid max-w-content gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-16">
            <Link
              href={`/archivio/${featured.slug}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-3xl bg-ink/5 lg:order-2"
            >
              {featured.cover && (
                <Image
                  src={featured.cover}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
            </Link>

            <div className="lg:order-1">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                In evidenza
              </span>

              <div className="mt-4">
                <CategoryPill category={featured.category} />
              </div>

              <h1 className="mt-4 font-display text-3xl font-semibold leading-[1.1] text-ink sm:text-4xl lg:text-5xl">
                <Link href={`/archivio/${featured.slug}`} className="hover:text-accent">
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
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent"
              >
                Leggi l&rsquo;articolo
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Ultimi articoli */}
      <section className="mx-auto max-w-content px-4 py-14 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Ultimi articoli
          </h2>
          <Link
            href="/archivio"
            className="hidden text-sm font-semibold text-accent hover:underline sm:inline-flex"
          >
            Vedi l&rsquo;archivio →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Link
            href="/archivio"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink hover:border-accent hover:text-accent"
          >
            Vedi l&rsquo;archivio completo →
          </Link>
        </div>
      </section>

      {/* CTA archivio */}
      <section className="border-t border-ink/10 bg-white">
        <div className="mx-auto max-w-content px-4 py-14 text-center sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Tutti i nostri articoli, in un unico posto
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink/60">
            Cerca per titolo, filtra per categoria o data: l&rsquo;archivio raccoglie
            ogni storia pubblicata da Telesis Magazine.
          </p>
          <Link
            href="/archivio"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent"
          >
            Vai all&rsquo;archivio
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
