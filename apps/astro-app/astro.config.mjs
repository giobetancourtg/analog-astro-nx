import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [analogjsangular()],
  outDir: '../../dist/apps/astro-app',
});
