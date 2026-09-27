import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/archivio", label: "Archivio" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-bone/10 bg-primary/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl font-semibold tracking-tight text-bone">
            Telesis
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-bone/60">
            Magazine
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-bone/80 transition-colors hover:text-secondary"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.instagram.com/magazine.telesis"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-bone px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-secondary sm:inline-block"
          >
            Instagram
          </a>
        </nav>
      </div>
    </header>
  );
}
