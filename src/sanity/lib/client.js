import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Force non-CDN endpoint (api.sanity.io) – this matches your successful browser test
export const client = createClient({
  projectId: '32iguwoj',
  dataset: 'production',
  useCdn: false,  // ← This is the key – turns off CDN, uses direct API
  apiVersion: '2025-01-01',  // Stable recent version
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);