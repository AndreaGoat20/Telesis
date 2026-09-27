export default function CategoryPill({ category }: { category: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
      {category}
    </span>
  );
}
