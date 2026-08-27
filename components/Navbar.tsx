import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/archivio", label: "Archivio" },
  { href: "/team", label: "Team" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl font-semibold tracking-tight text-ink">
            Telesis
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-ink/50">
            Magazine
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-ink/70 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.instagram.com/magazine.telesis"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-accent sm:inline-block"
          >
            Instagram
          </a>
        </nav>
      </div>
    </header>
  );
}
