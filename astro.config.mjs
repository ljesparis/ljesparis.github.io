import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import compress from '@playform/compress';

const isProd = process.env.ENV === 'PRO';

export default defineConfig({
    site: 'https://ljesparis.com/',
    compressHTML: true,
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'es'],
        routing: {
            prefixDefaultLocale: false
        }
    },
    integrations: [
        mdx(),
        sitemap({
            i18n: {
                defaultLocale: 'en',
                locales: {
                    en: 'en-US',
                    es: 'es-ES'
                }
            }
        }),
        ...(isProd ? [compress({
            CSS: true,
            HTML: true,
            JavaScript: true,
            Image: false,
            SVG: false,
        })] : []),
    ],
    prefetch: {
        defaultStrategy: "load"
    },
});
