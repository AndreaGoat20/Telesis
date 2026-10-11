import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Chi siamo",
  description:
    "La missione di Telesis Magazine: un giornale indipendente nato dai giovani, per i giovani.",
};

export default function ChiSiamoPage() {
  return (
    <div>
      <section className="bg-primary text-bone">
        <Reveal>
          <div className="mx-auto max-w-content px-4 py-20 sm:px-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Chi siamo
            </span>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.1] sm:text-5xl">
              Un giornale nato dai giovani, per i giovani.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-bone/70">
              Telesis è una realtà giornalistica indipendente e politicamente
              attiva. Nasce dai giovani per passione, e punta ai giovani per
              necessità.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-bone">
        <div className="mx-auto grid max-w-content gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink">
              La nostra missione
            </h2>
            <p className="mt-4 text-ink/60">
              La nostra missione, come giornale, è chiara: creare uno spazio
              di riflessione dove si possa comprendere al meglio
              l&rsquo;attualità. Non siamo un servizio di notizie: non
              vogliamo diffondere l&rsquo;informazione velocemente, ma
              piuttosto prenderci il tempo e lo spazio per analizzare
              approfonditamente quello che succede nel mondo.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Come lavoriamo
            </h2>
            <p className="mt-4 text-ink/60">
              Aspettatevi di trovare informazione ma anche pensiero,
              riflessione critica e analisi su quanto ci circonda. Siamo
              convinti che la conoscenza sia potere: un potere che noi
              giovani dobbiamo riprenderci ora più che mai. Per questo
              abbiamo deciso di fondare un giornale nuovo, piuttosto che
              provare a cambiarne uno vecchio.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-bone">
        <div className="mx-auto max-w-content px-4 pb-20 sm:px-6">
          <Reveal>
            <div className="rounded-3xl bg-primary px-8 py-12 text-center text-bone sm:px-16">
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                Vuoi scrivere con noi o portarci nella tua scuola?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-bone/70">
                Cerchiamo sempre nuove voci per la redazione — scrittura,
                fotografia, grafica e social media — e organizziamo incontri
                ed eventi aperti a chi vuole conoscerci di persona.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/collaborazioni-eventi"
                  className="inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
                >
                  Collabora con noi
                  <span aria-hidden>→</span>
                </Link>
                <a
                  href="https://www.instagram.com/magazine.telesis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-bone/30 px-6 py-3 text-sm font-semibold text-bone hover:border-secondary hover:text-secondary"
                >
                  Seguici su Instagram
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
