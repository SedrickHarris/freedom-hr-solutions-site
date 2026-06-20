/**
 * Lead submission helper.
 *
 * The forms are front-end only for launch. When a CRM, email, GoHighLevel,
 * or webhook endpoint is ready, set NEXT_PUBLIC_LEAD_ENDPOINT and submissions
 * will POST there as JSON. Until then, submissions resolve locally so the
 * thank-you flow still works.
 */
export type LeadType = "contact" | "assessment";

const endpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT;

export async function submitLead(type: LeadType, formData: FormData): Promise<void> {
  const payload: Record<string, string> = { formType: type };
  formData.forEach((value, key) => {
    payload[key] = typeof value === "string" ? value : "";
  });

  if (!endpoint) {
    // No endpoint configured yet. Resolve so the UI can continue to /thank-you/.
    return;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Lead submission failed with status ${response.status}`);
  }
}
