import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/types";
import { formatDate } from "@/lib/format";
import CategoryPill from "./CategoryPill";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/archivio/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-ink/10"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink/5">
        {article.cover && (
          <Image
            src={article.cover}
            alt={article.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <CategoryPill category={article.category} />

        <h3 className="font-display text-xl font-semibold leading-snug text-ink group-hover:text-primary">
          {article.title}
        </h3>

        {article.excerpt && (
          <p className="line-clamp-2 text-sm text-ink/60">{article.excerpt}</p>
        )}

        <div className="mt-auto flex items-center gap-2 pt-2 text-xs text-ink/50">
          <span className="font-medium text-ink/70">{article.author}</span>
          <span aria-hidden>·</span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span aria-hidden>·</span>
          <span>{article.readingTime} min</span>
        </div>
      </div>
    </Link>
  );
}
