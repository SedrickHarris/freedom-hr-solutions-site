import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Use the light variant on dark backgrounds. */
  variant?: "default" | "light";
}

/**
 * Freedom HR Solutions wordmark. The mark is a shield with a check,
 * signaling compliance, protection, and trust.
 */
export function Logo({ className, variant = "default" }: LogoProps) {
  const wordmarkColor = variant === "light" ? "text-white" : "text-ink";
  const subColor = variant === "light" ? "text-white/70" : "text-muted-text";

  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <path
          d="M18 2.5l12 4.2v9.1c0 7.6-5.1 14.4-12 16.7-6.9-2.3-12-9.1-12-16.7V6.7l12-4.2z"
          fill="url(#fhr-grad)"
        />
        <path
          d="M12 18.2l4.2 4.2L24 14.4"
          stroke="#ffffff"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="fhr-grad" x1="6" y1="3" x2="30" y2="33" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1b326f" />
            <stop offset="1" stopColor="#2f63ef" />
          </linearGradient>
        </defs>
      </svg>
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-[1.05rem] font-extrabold tracking-tight", wordmarkColor)}>
          Freedom HR
        </span>
        <span className={cn("text-[0.7rem] font-semibold uppercase tracking-[0.18em]", subColor)}>
          Solutions
        </span>
      </span>
    </span>
  );
}
