import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { FooterCtaBand } from "@/components/layout/FooterCtaBand";
import { footerNav } from "@/data/navigation";
import { site } from "@/data/site";

export function Footer() {
  const year = 2026;

  return (
    <footer className="mt-auto border-t border-border bg-ink text-white">
      {/* CTA band — only renders on pages without an in-page CtaBand */}
      <FooterCtaBand />

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
