import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /**
   * default  — horizontal lockup, navy text, for white/light header
   * light    — dark transparent variant for dark backgrounds (footer, hero)
   */
  variant?: "default" | "light";
}

export function Logo({ className, variant = "default" }: LogoProps) {
  const src =
    variant === "light"
      ? "/images/brand/freedom-hr-solutions-dark-transparent-logo.webp"
      : "/images/brand/freedom-hr-solutions-horizontal-transparent-logo.webp";

  return (
    <span className={cn("flex items-center", className)}>
      <Image
        src={src}
        alt="Freedom HR Solutions"
        width={200}
        height={60}
        className="h-auto w-auto max-h-[48px]"
        priority
      />
    </span>
  );
}
