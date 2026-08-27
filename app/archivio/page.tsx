import type { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";
import ArchivioExplorer from "@/components/ArchivioExplorer";

export const metadata: Metadata = {
  title: "Archivio",
  description: "Tutti gli articoli pubblicati su Telesis Magazine.",
};

export default function ArchivioPage() {
  const articles = getAllArticles();

  return (
    <div className="mx-auto max-w-content px-4 py-12 sm:px-6">
      <header className="max-w-2xl">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Archivio
        </h1>
        <p className="mt-3 text-ink/60">
          Tutti gli articoli pubblicati da Telesis Magazine. Cerca per parola
          chiave o filtra per categoria e data.
        </p>
      </header>

      <div className="mt-8">
        <ArchivioExplorer articles={articles} />
      </div>
    </div>
  );
}
