// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site:"https://DnzoCoud.github.io",
  base: "/E-Repository/",
  vite: {
    plugins: [tailwindcss()]
  },
});