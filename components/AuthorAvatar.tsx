function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function AuthorAvatar({
  name,
  className = "h-8 w-8",
}: {
  name: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-bone ${className}`}
    >
      {getInitials(name)}
    </span>
  );
}
