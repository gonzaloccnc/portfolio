import { defineConfig } from 'astro/config';
import { resolve } from 'path';
import tailwind from '@astrojs/tailwind';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  redirects: {
    "/Portfolio": "/portfolio"
  },
  site: 'https://gonzaloccnc.github.io',
  base: '/portfolio/',
  build: {
    assets: "assets"
  },
  vite: {
    resolve: {
      alias: {
        $images: resolve('./public/images')
      }
    }
  }
});