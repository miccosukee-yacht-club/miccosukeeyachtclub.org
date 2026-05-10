// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://miccosukeeyachtclub.org',
  integrations: [mdx(), sitemap()],
  vite: {
    server: {
      // WSL-on-NTFS (/mnt/c) doesn't deliver inotify events reliably.
      watch: {
        usePolling: true,
        interval: 300,
      },
    },
  },
});
