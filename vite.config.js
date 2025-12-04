// vite.config.js
import { defineConfig } from 'vite';
import astro from '@astrojs/vite-plugin-astro';

export default defineConfig({
  plugins: [astro()],
  server: {
    allowedHosts: [
      '.netlify.app'
    ]
  }
});

