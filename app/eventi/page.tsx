import type { Metadata } from "next";

// Pagina intenzionalmente non presente nella navigazione:
// raggiungibile solo digitando /eventi nell'URL.
export const metadata: Metadata = {
  title: "Eventi",
  description: "Gli eventi futuri di Telesis Magazine.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function EventiPage() {
  return (
    <div className="mx-auto flex max-w-content flex-col items-center px-4 py-24 text-center sm:px-6">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        Eventi
      </span>
      <h1 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
        Presto novità
      </h1>
      <p className="mt-4 max-w-md text-ink/60">
        Stiamo preparando i prossimi eventi di Telesis Magazine. Torna a
        trovarci su questa pagina o seguici su Instagram per non perderteli.
      </p>
      <a
        href="https://www.instagram.com/magazine.telesis"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-bone transition-colors hover:bg-secondary hover:text-primary"
      >
        Seguici su Instagram
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}
