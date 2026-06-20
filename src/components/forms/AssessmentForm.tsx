"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Field, Input, Textarea, Select, Label } from "@/components/forms/FormFields";
import { Button } from "@/components/ui/Button";
import { consentLanguage } from "@/data/site";
import { submitLead } from "@/lib/forms";

const companySizes = ["1 to 10", "11 to 50", "51 to 100", "101 to 250", "251 to 500", "500+"];

const serviceOptions = [
  "HR Compliance & Risk",
  "ACA Reporting & Compliance",
  "Payroll, Benefits & HR Systems",
  "HR Technology & Automation",
  "Support & Service Continuity",
  "Talent & Workforce Development",
];

const contactMethods = ["Email", "Phone", "Text message"];

export function AssessmentForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    const formData = new FormData(event.currentTarget);
    try {
      await submitLead("assessment", formData);
      router.push("/thank-you/");
    } catch {
      setError("Something went wrong. Please email us directly and we will respond promptly.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <fieldset className="space-y-5">
        <legend className="text-sm font-semibold uppercase tracking-wide text-brand-700">
          Your details
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="First name" htmlFor="firstName" required>
            <Input id="firstName" name="firstName" autoComplete="given-name" required />
          </Field>
          <Field label="Last name" htmlFor="lastName" required>
            <Input id="lastName" name="lastName" autoComplete="family-name" required />
          </Field>
          <Field label="Email" htmlFor="email" required>
            <Input id="email" name="email" type="email" autoComplete="email" required />
          </Field>
          <Field label="Phone" htmlFor="phone">
            <Input id="phone" name="phone" type="tel" autoComplete="tel" />
          </Field>
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="text-sm font-semibold uppercase tracking-wide text-brand-700">
          About your business
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Company name" htmlFor="company" required>
            <Input id="company" name="company" autoComplete="organization" required />
          </Field>
          <Field label="Company size" htmlFor="companySize">
            <Select id="companySize" name="companySize" defaultValue="">
              <option value="" disabled>
                Select size
              </option>
              {companySizes.map((size) => (
                <option key={size} value={size}>
                  {size} employees
                </option>
              ))}
            </Select>
          </Field>
          <Field label="State" htmlFor="state">
            <Input id="state" name="state" placeholder="e.g. Nevada" autoComplete="address-level1" />
          </Field>
          <Field label="Current HR or payroll platform" htmlFor="platform">
            <Input id="platform" name="platform" placeholder="e.g. ADP, isolved, not sure" />
          </Field>
        </div>
        <Field label="Primary challenge" htmlFor="challenge">
          <Input
            id="challenge"
            name="challenge"
            placeholder="What is the main issue you want help with?"
          />
        </Field>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="mb-1 text-sm font-semibold uppercase tracking-wide text-brand-700">
          Services you are interested in
        </legend>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {serviceOptions.map((service) => (
            <label key={service} className="flex items-center gap-3 text-sm text-body">
              <input
                type="checkbox"
                name="services"
                value={service}
                className="h-4 w-4 rounded border-border text-brand-600 focus:ring-brand-400"
              />
              {service}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="space-y-3">
        <Label htmlFor="preferredContact">Preferred contact method</Label>
        <div className="flex flex-wrap gap-5">
          {contactMethods.map((method, index) => (
            <label key={method} className="flex items-center gap-2 text-sm text-body">
              <input
                type="radio"
                name="preferredContact"
                value={method}
                defaultChecked={index === 0}
                className="h-4 w-4 border-border text-brand-600 focus:ring-brand-400"
              />
              {method}
            </label>
          ))}
        </div>
      </fieldset>

      <Field label="Anything else we should know?" htmlFor="message">
        <Textarea id="message" name="message" placeholder="Optional. Share any context that would help." />
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
        {submitting ? "Submitting..." : "Request HR MRI Assessment"}
      </Button>
    </form>
  );
}
