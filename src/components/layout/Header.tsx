"use client";

import { useState } from "react";
import Link from "next/link";
import { headerNav } from "@/data/navigation";
import { primaryCta } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";
import { Logo } from "@/components/layout/Logo";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border-soft bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 lg:h-18 lg:px-8">
        <Link href="/" className="flex items-center" aria-label={`${"Freedom HR Solutions"} home`}>
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {headerNav.map((link) => {
              const hasChildren = link.children && link.children.length > 0;
              if (!hasChildren) {
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="rounded-lg px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-brand-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={link.label} className="group relative">
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-brand-700"
                  >
                    {link.label}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                      className="mt-0.5 text-muted-text transition-transform group-hover:rotate-180"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="w-64 rounded-xl border border-border bg-white p-2 shadow-lg shadow-ink/5">
                      {link.children!.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-sm text-body transition-colors hover:bg-muted hover:text-brand-700"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={primaryCta.href} variant="primary" size="sm">
            {primaryCta.label}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="rounded-md p-2 text-ink hover:bg-muted lg:hidden"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <MobileNav links={headerNav} open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
