import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';


// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    {
      name: 'copy-robots-sitemap',
      closeBundle() {
        // Copy robots.txt and sitemap.xml to dist folder during build
        const files = ['robots.txt', 'sitemap.xml'];
        files.concat(['404.html']).forEach(file => {
          if (fs.existsSync(`public/${file}`)) {
            fs.copyFileSync(`public/${file}`, `dist/${file}`);
            console.log(`Copied ${file} to dist folder`);
          }
        });
      }
    }
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  define: {
    global: 'globalThis',
  },
  resolve: {
    alias: {
      buffer: 'buffer',
    },
  },
});