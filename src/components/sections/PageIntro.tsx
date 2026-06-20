import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";

interface PageIntroProps {
  eyebrow?: string;
  title: string;
  /** One or more lead paragraphs. */
  paragraphs: string[];
  tone?: "default" | "muted";
}

export function PageIntro({ eyebrow, title, paragraphs, tone = "default" }: PageIntroProps) {
  return (
    <Section tone={tone === "muted" ? "muted" : "default"} containerSize="narrow">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mt-5 space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-lg leading-relaxed text-body">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
