import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import CategoryIcon from "./CategoryIcon";

export default function CategoryShowcase() {
  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-content px-4 py-10 sm:px-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {CATEGORIES.map((c) => (
            <Link
              key={c.name}
              href={`/archivio?categoria=${encodeURIComponent(c.name)}`}
              className="group flex flex-col items-center gap-3 text-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-bone">
                <CategoryIcon name={c.name} className="h-7 w-7" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink">
                  {c.name}
                </span>
                <span className="mt-0.5 block text-xs text-ink/50">
                  {c.description}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
