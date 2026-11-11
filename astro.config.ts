import { defineConfig } from 'astro/config';
import { site } from './src/site';

// https://astro.build/config
export default defineConfig({
  site: site.url,
});
