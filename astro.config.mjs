import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import compress from '@playform/compress';
import { execSync } from 'child_process';

const isProd = process.env.NODE_ENV === 'production';

let lastModified;
try {
    lastModified = execSync('git log -1 --format=%cs').toString().trim();
} catch {
    lastModified = new Date().toISOString().split('T')[0];
}

export default defineConfig({
    site: 'https://ljesparis.com/',
    compressHTML: true,
    vite: {
        define: {
            __LAST_MODIFIED__: JSON.stringify(lastModified)
        }
    },
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
            },
            serialize(item) {
                item.lastmod = lastModified;
                item.priority = item.url === 'https://ljesparis.com/' ? 1.0 : 0.9;
                return item;
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
