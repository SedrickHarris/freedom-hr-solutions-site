"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Field, Input, Textarea } from "@/components/forms/FormFields";
import { Button } from "@/components/ui/Button";
import { consentLanguage } from "@/data/site";
import { submitLead } from "@/lib/forms";

export function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    const formData = new FormData(event.currentTarget);
    try {
      await submitLead("contact", formData);
      router.push("/thank-you/");
    } catch {
      setError("Something went wrong. Please email us directly and we will respond promptly.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" htmlFor="firstName" required>
          <Input id="firstName" name="firstName" autoComplete="given-name" required />
        </Field>
        <Field label="Last name" htmlFor="lastName" required>
          <Input id="lastName" name="lastName" autoComplete="family-name" required />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" htmlFor="email" required>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </Field>
      </div>
      <Field label="Company name" htmlFor="company">
        <Input id="company" name="company" autoComplete="organization" />
      </Field>
      <Field label="How can we help?" htmlFor="message" required>
        <Textarea id="message" name="message" required placeholder="Tell us a little about your business and what you need." />
      </Field>

      <label className="flex items-start gap-3 text-sm text-body">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-border text-brand-600 focus:ring-brand-400"
        />
        <span>{consentLanguage}</span>
      </label>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <Button type="submit" size="lg" disabled={submitting}>
        {submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
