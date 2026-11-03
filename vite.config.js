import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    cssMinify: true,
    emptyOutDir: true,
  },
  css: {
    devSourcemap: true,
  },
});
