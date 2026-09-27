import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-bone">
      <div className="mx-auto max-w-content px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <span className="font-display text-2xl font-semibold">Telesis Magazine</span>
            <p className="mt-3 max-w-xs text-sm text-bone/70">
              La versione estesa delle storie che raccontiamo su Instagram.
              Attualità, cultura e società raccontate da studenti.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-bone/50">
              Naviga
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-bone/80 hover:text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/archivio" className="text-bone/80 hover:text-secondary">
                  Archivio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-bone/50">
              Seguici
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/magazine.telesis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bone/80 hover:text-secondary"
                >
                  @magazine.telesis
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-bone/10 pt-6 text-xs text-bone/50">
          © {new Date().getFullYear()} Telesis Magazine. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
