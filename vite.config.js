import { defineConfig } from 'vite';

export default defineConfig({
  // Static site: index.html at root is the entry point.
  // Files under public/ (and the existing assets/) are copied as-is.
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
});
