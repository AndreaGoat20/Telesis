export default function CategoryPill({
  category,
  variant = "pill",
}: {
  category: string;
  variant?: "pill" | "text";
}) {
  if (variant === "text") {
    return (
      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
        {category}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
      {category}
    </span>
  );
}
