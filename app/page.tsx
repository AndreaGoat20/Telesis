import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import Reveal from "@/components/Reveal";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryShowcase from "@/components/CategoryShowcase";

export default function HomePage() {
  const articles = getAllArticles();
  const heroArticles = articles.slice(0, 3);
  const latest = articles.slice(heroArticles.length, heroArticles.length + 6);

  return (
    <div>
      <HeroCarousel articles={heroArticles} />
      <CategoryShowcase />

      <section className="bg-bone">
        <div className="mx-auto max-w-content px-4 py-14 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Ultimi articoli
            </h2>
            <Link
              href="/archivio"
              className="hidden text-sm font-semibold text-primary hover:text-secondary sm:inline-flex"
            >
              Vedi l&rsquo;archivio →
            </Link>
          </div>

          {latest.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {latest.map((article, index) => (
                <Reveal key={article.slug} delay={index * 0.08}>
                  <ArticleCard article={article} />
                </Reveal>
              ))}
            </div>
          ) : null}

          <div className="mt-10 flex justify-center">
            <Link
              href="/archivio"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
            >
              Vedi l&rsquo;archivio completo →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
