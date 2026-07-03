"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import type { NavLink } from "@/types";
import { Button } from "@/components/ui/Button";
import { primaryCta, secondaryCta } from "@/data/site";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  links: NavLink[];
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ links, open, onClose }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  if (!open) return null;

  // Render outside the sticky <header>: that element uses backdrop-blur
  // (backdrop-filter), which makes it the containing block for position:fixed
  // descendants. Inside it, the "inset-y-0" panel collapses to the header
  // height and clips the nav. Portaling to <body> anchors the overlay to the
  // viewport instead.
  return createPortal(
    <div className="lg:hidden" role="dialog" aria-modal="true" aria-label="Site menu">
      <div
        className="fixed inset-0 z-40 bg-ink/40"
        onClick={onClose}
        aria-hidden
      />
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <span className="font-display text-lg font-bold text-ink">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-md p-2 text-ink-soft hover:bg-muted"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="px-3 py-4">
          <ul className="flex flex-col gap-1">
            {links.map((link) => {
              const hasChildren = link.children && link.children.length > 0;
              const isOpen = expanded === link.label;
              return (
                <li key={link.label}>
                  {hasChildren ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setExpanded(isOpen ? null : link.label)}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left font-medium text-ink hover:bg-muted"
                        aria-expanded={isOpen}
                      >
                        {link.label}
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden
                          className={cn("transition-transform", isOpen && "rotate-180")}
                        >
                          <path
                            d="M6 9l6 6 6-6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      {isOpen && (
                        <ul className="mb-2 ml-3 border-l border-border pl-3">
                          <li>
                            <Link
                              href={link.href}
                              onClick={onClose}
                              className="block rounded-md px-3 py-2 text-sm font-medium text-brand-700 hover:bg-brand-50"
                            >
                              All {link.label}
                            </Link>
                          </li>
                          {link.children!.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={onClose}
                                className="block rounded-md px-3 py-2 text-sm text-body hover:bg-muted"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block rounded-lg px-3 py-2.5 font-medium text-ink hover:bg-muted"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-5 flex flex-col gap-3 border-t border-border px-1 pt-5">
            <Button href={primaryCta.href} variant="primary" size="md">
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="outline" size="md">
              {secondaryCta.label}
            </Button>
          </div>
        </nav>
      </div>
    </div>,
    document.body,
  );
}
