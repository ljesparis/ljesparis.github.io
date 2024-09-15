import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://ljesparis.com/',
    compressHTML: true,
    integrations: [mdx(), sitemap()],
    prefetch: {
        defaultStrategy: "load"
    },
});
