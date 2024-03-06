import { defineConfig } from 'astro/config';
import analogjsangular from '@analogjs/astro-angular';

// https://astro.build/config
export default defineConfig({
  integrations: [analogjsangular()],
  outDir: '../../dist/apps/astro-app',
});
