import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllArticleSlugs, getAllArticles, getArticleBySlug } from "@/lib/articles";
import { formatDate } from "@/lib/format";
import CategoryPill from "@/components/CategoryPill";
import ArticleCard from "@/components/ArticleCard";

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt || article.subtitle,
  };
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = getAllArticles()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <article>
      <div className="mx-auto max-w-3xl px-4 pt-12 sm:px-6">
        <Link href="/archivio" className="text-sm font-medium text-ink/50 hover:text-accent">
          ← Torna all&rsquo;archivio
        </Link>

        <div className="mt-6">
          <CategoryPill category={article.category} />
        </div>

        <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
          {article.title}
        </h1>

        {article.subtitle && (
          <p className="mt-4 text-lg text-ink/60">{article.subtitle}</p>
        )}

        <div className="mt-6 flex items-center gap-2 border-b border-ink/10 pb-8 text-sm text-ink/50">
          <span className="font-medium text-ink/80">{article.author}</span>
          <span aria-hidden>·</span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span aria-hidden>·</span>
          <span>{article.readingTime} min di lettura</span>
        </div>
      </div>

      {article.cover && (
        <div className="relative mx-auto mt-8 aspect-[16/9] w-full max-w-5xl overflow-hidden bg-ink/5 sm:rounded-3xl">
          <Image
            src={article.cover}
            alt={article.title}
            fill
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        </div>
      )}

      <div
        className="prose-article mx-auto max-w-3xl px-4 py-10 text-ink/80 sm:px-6"
        dangerouslySetInnerHTML={{ __html: article.contentHtml }}
      />

      {related.length > 0 && (
        <section className="border-t border-ink/10 bg-white">
          <div className="mx-auto max-w-content px-4 py-14 sm:px-6">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Continua a leggere
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
