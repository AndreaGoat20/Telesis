"use client";

import { useMemo, useState } from "react";
import type { Article } from "@/lib/types";
import ArticleCard from "./ArticleCard";

const PAGE_SIZE = 6;

function getYear(dateString: string): string {
  const year = dateString.slice(0, 4);
  return year || "Sconosciuto";
}

export default function ArchivioExplorer({ articles }: { articles: Article[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tutte");
  const [year, setYear] = useState("Tutti");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const categories = useMemo(
    () => ["Tutte", ...Array.from(new Set(articles.map((a) => a.category)))],
    [articles]
  );

  const years = useMemo(
    () => ["Tutti", ...Array.from(new Set(articles.map((a) => getYear(a.date)))).sort().reverse()],
    [articles]
  );

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        article.title.toLowerCase().includes(normalizedQuery) ||
        (article.subtitle ?? "").toLowerCase().includes(normalizedQuery) ||
        (article.excerpt ?? "").toLowerCase().includes(normalizedQuery) ||
        article.content.toLowerCase().includes(normalizedQuery) ||
        article.author.toLowerCase().includes(normalizedQuery);

      const matchesCategory = category === "Tutte" || article.category === category;
      const matchesYear = year === "Tutti" || getYear(article.date) === year;

      return matchesQuery && matchesCategory && matchesYear;
    });
  }, [articles, query, category, year]);

  const visibleArticles = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  function resetPagination() {
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white p-5 sm:flex-row sm:items-center sm:gap-6">
        <div className="relative flex-1">
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              resetPagination();
            }}
            placeholder="Cerca per titolo o contenuto..."
            className="w-full rounded-full border border-ink/15 bg-paper px-5 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-accent focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              resetPagination();
            }}
            className="rounded-full border border-ink/15 bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent focus:outline-none"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c === "Tutte" ? "Tutte le categorie" : c}
              </option>
            ))}
          </select>

          <select
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
              resetPagination();
            }}
            className="rounded-full border border-ink/15 bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent focus:outline-none"
          >
            {years.map((y) => (
              <option key={y} value={y}>
                {y === "Tutti" ? "Tutte le date" : y}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-5 text-sm text-ink/50">
        {filtered.length} articol{filtered.length === 1 ? "o" : "i"} trovat
        {filtered.length === 1 ? "o" : "i"}
      </p>

      {visibleArticles.length > 0 ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center text-ink/50">
          Nessun articolo corrisponde alla tua ricerca.
        </div>
      )}

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Carica altri articoli
          </button>
        </div>
      )}
    </div>
  );
}
