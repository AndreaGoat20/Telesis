type Props = {
  name: string;
  className?: string;
};

export default function CategoryIcon({ name, className = "h-6 w-6" }: Props) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };

  switch (name) {
    case "Geopolitica":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.25" />
          <path d="M3.75 12h16.5" />
          <path d="M12 3.75c2.3 2.3 3.6 5.2 3.6 8.25S14.3 17.95 12 20.25c-2.3-2.3-3.6-5.2-3.6-8.25S9.7 6.05 12 3.75Z" />
        </svg>
      );
    case "Politica":
      return (
        <svg {...common}>
          <path d="M12 3 21 8H3L12 3Z" />
          <path d="M5 8v10M9.5 8v10M14.5 8v10M19 8v10" />
          <path d="M3.5 21h17" />
        </svg>
      );
    case "Economia":
      return (
        <svg {...common}>
          <path d="M3.5 16.5 10 10l4 4 6.5-6.5" />
          <path d="M15.5 7.5h5v5" />
        </svg>
      );
    case "Società":
      return (
        <svg {...common}>
          <circle cx="9" cy="9.5" r="3" />
          <circle cx="16" cy="10.5" r="2.4" />
          <path d="M3.5 20c.6-3.4 3-5.3 5.5-5.3S14 16.6 14.6 20" />
          <path d="M14.8 15.3c2 .1 3.7 1.8 4.2 4.7" />
        </svg>
      );
    case "Storia":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.25" />
          <path d="M12 7.5V12l3 2" />
        </svg>
      );
    case "Cultura":
      return (
        <svg {...common}>
          <path d="M12 6.5c-1.8-1.3-4.2-1.8-6.5-1.3v12c2.3-.5 4.7 0 6.5 1.3 1.8-1.3 4.2-1.8 6.5-1.3v-12c-2.3-.5-4.7 0-6.5 1.3Z" />
          <path d="M12 6.5v12" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M6 3.75h12v16.5l-6-3.5-6 3.5V3.75Z" />
        </svg>
      );
  }
}
