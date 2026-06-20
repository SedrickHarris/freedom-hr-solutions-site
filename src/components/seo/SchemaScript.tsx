/**
 * Renders one or more JSON-LD schema objects safely as a script tag.
 * Pass any object produced by the builders in src/lib/schema.ts.
 */
interface SchemaScriptProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
  id?: string;
}

export function SchemaScript({ schema, id }: SchemaScriptProps) {
  const json = JSON.stringify(schema);
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
