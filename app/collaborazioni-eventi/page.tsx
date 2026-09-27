import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

// Pagina intenzionalmente non presente nella navigazione:
// raggiungibile solo digitando /collaborazioni-eventi nell'URL.
export const metadata: Metadata = {
  title: "Collaborazioni & Eventi",
  description: "Collabora con Telesis Magazine e scopri i nostri eventi futuri.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CollaborazioniEventiPage() {
  return (
    <div>
      <section className="bg-primary text-bone">
        <Reveal>
          <div className="mx-auto flex max-w-content flex-col items-center px-4 py-24 text-center sm:px-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Collaborazioni &amp; Eventi
            </span>
            <h1 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
              Presto novità
            </h1>
            <p className="mt-4 max-w-md text-bone/70">
              Stiamo preparando le prossime occasioni per collaborare con
              Telesis Magazine e per incontrarci di persona. Torna a trovarci
              su questa pagina o seguici su Instagram per non perderteli.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-bone">
        <div className="mx-auto grid max-w-content gap-10 px-4 py-16 sm:px-6 sm:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Collabora con noi
            </h2>
            <p className="mt-3 text-ink/60">
              Cerchiamo sempre nuove voci da aggiungere alla redazione:
              scrittura, fotografia, grafica e social media. I dettagli su
              come proporsi arriveranno presto su questa pagina.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Eventi
            </h2>
            <p className="mt-3 text-ink/60">
              Presentazioni, incontri e iniziative aperte a lettrici e
              lettori: il calendario dei prossimi eventi sarà pubblicato qui
              non appena disponibile.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto flex max-w-content justify-center px-4 pb-16 sm:px-6">
          <a
            href="https://www.instagram.com/magazine.telesis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-bone transition-colors hover:bg-secondary hover:text-primary"
          >
            Seguici su Instagram
            <span aria-hidden>→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
