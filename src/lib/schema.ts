import { site } from "@/data/site";
import type { Faq } from "@/types";

/**
 * JSON-LD schema builders. Each returns a plain object that is rendered
 * by the SchemaScript component. Keep output valid and conservative so
 * structured data stays trustworthy.
 */

type Json = Record<string, unknown>;

const absolute = (path: string) =>
  path.startsWith("http") ? path : `${site.url}${path.startsWith("/") ? path : `/${path}`}`;

export function organizationSchema(): Json {
  // Only official business profiles belong in sameAs. The founder's personal
  // profiles live in personSchema, not here.
  const sameAs = Object.values(site.social).filter((value) => value.length > 0);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    email: site.email,
    telephone: site.phone,
    founder: {
      "@type": "Person",
      name: site.founder.name,
    },
    areaServed: [
      { "@type": "State", name: "Nevada" },
      { "@type": "Country", name: "United States" },
    ],
    serviceType: [
      "HR consulting",
      "Payroll support",
      "Benefits administration support",
      "HR compliance support",
      "ACA reporting support",
      "HR technology consulting",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.stateAbbr,
      addressCountry: "US",
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function personSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.founder.name,
    url: `${site.url}/about/`,
    jobTitle: site.founder.role,
    sameAs: [site.founder.linkedin],
    worksFor: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };
}

export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  };
}

export function professionalServiceSchema(input?: {
  name?: string;
  description?: string;
  path?: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: input?.name ?? site.name,
    description: input?.description ?? site.description,
    url: input?.path ? absolute(input.path) : site.url,
    telephone: site.phone,
    email: site.email,
    areaServed: site.serviceArea,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.stateAbbr,
      addressCountry: "US",
    },
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absolute(input.path),
    serviceType: input.name,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    areaServed: site.serviceArea,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function faqSchema(faqs: Faq[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: absolute(input.path),
    author: { "@type": "Organization", name: site.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };
}
