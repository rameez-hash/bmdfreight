'use client';

import { usePathname } from 'next/navigation';

interface SchemaInjectorProps {
  schema: Record<string, unknown>;
}

export default function SchemaInjector({ schema }: SchemaInjectorProps) {
  const pathname = usePathname();
  const schemaWithId = {
    ...schema,
    '@id': `https://bmdfreight.com${pathname}#${schema['@type']}`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWithId) }}
    />
  );
}
