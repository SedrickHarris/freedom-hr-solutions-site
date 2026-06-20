import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { footerNav } from "@/data/navigation";
import { site, primaryCta, secondaryCta } from "@/data/site";

export function Footer() {
  const year = 2026;

  return (
    <footer className="mt-auto border-t border-border bg-ink text-white">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <Container className="flex flex-col items-start justify-between gap-6 py-10 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Not sure where your HR risks are hiding?
            </h2>
            <p className="mt-2 max-w-xl text-white/70">
              Start with an HR MRI Assessment. It gives you a clear picture of your HR,
              payroll, benefits, and compliance health, even if you are not sure what you need yet.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
            <Button href={primaryCta.href} variant="primary" size="md">
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="white" size="md">
              {secondaryCta.label}
            </Button>
          </div>
        </Container>
      </div>

      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {site.description}
            </p>
            <div className="mt-5 space-y-1 text-sm text-white/70">
              <p>
                <span className="text-white/50">Email: </span>
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </p>
              <p>
                <span className="text-white/50">Phone: </span>
                <a href={site.phoneHref} className="hover:text-white">
                  {site.phone}
                </a>
              </p>
              <p>
                <span className="text-white/50">Serving: </span>
                {site.serviceArea}
              </p>
            </div>
          </div>

          {footerNav.slice(0, 3).map((group) => (
            <FooterColumn key={group.heading} heading={group.heading} links={group.links} />
          ))}
        </div>

        <div className="mt-10 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="text-sm text-white/60">
            <p className="font-semibold text-white">Freedom HR Solutions</p>
            <p className="mt-1 max-w-sm">
              HR consulting, payroll and benefits support, ACA reporting, HR technology,
              and ongoing system support for growing businesses.
            </p>
          </div>
          {footerNav.slice(3).map((group) => (
            <FooterColumn key={group.heading} heading={group.heading} links={group.links} />
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-sm text-white/60 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex items-center gap-5">
            <li>
              <Link href="/privacy-policy/" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/contact/" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{heading}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
