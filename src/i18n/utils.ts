// i18n helpers built around Astro's native i18n routing.
// Routing config (astro.config.mjs): defaultLocale 'en' with prefixDefaultLocale
// false, so '/' is English and '/es/' is Spanish.
import { en } from './en';
import { es } from './es';
import type { SiteContent } from './types';

export type Lang = 'en' | 'es';

export const DEFAULT_LANG: Lang = 'en';
export const LANGS: Lang[] = ['en', 'es'];

const dictionaries: Record<Lang, SiteContent> = { en, es };

// BCP-47 codes for <html lang>, og:locale and hreflang.
export const LOCALE_TAGS: Record<Lang, string> = {
    en: 'en-US',
    es: 'es-ES'
};

/** Detect the active language from the request URL. */
export function getLangFromUrl(url: URL): Lang {
    const [, maybeLang] = url.pathname.split('/');
    if ((LANGS as string[]).includes(maybeLang)) {
        return maybeLang as Lang;
    }
    return DEFAULT_LANG;
}

/** Get the content dictionary for a language. */
export function getContent(lang: Lang): SiteContent {
    return dictionaries[lang];
}

/**
 * Map the current pathname to its equivalent in another language.
 * '/'      <-> '/es/'
 * '/foo/'  <-> '/es/foo/'
 */
export function getLocalizedPath(pathname: string, target: Lang): string {
    // Strip a leading language segment to get the language-agnostic path.
    const segments = pathname.split('/').filter(Boolean);
    if ((LANGS as string[]).includes(segments[0])) {
        segments.shift();
    }
    const rest = segments.join('/');
    const base =
        target === DEFAULT_LANG ? `/${rest}` : `/${target}/${rest}`;
    // Normalize to a single trailing slash, no double slashes.
    const normalized = base.replace(/\/{2,}/g, '/');
    return normalized.endsWith('/') ? normalized : `${normalized}/`;
}

/**
 * Build absolute hreflang alternates for the current page, including x-default.
 * Used by BaseHead to emit <link rel="alternate" hreflang=...>.
 */
export function getAlternateLinks(
    pathname: string,
    site: URL | undefined
): { hreflang: string; href: string }[] {
    const origin = site ? site.origin : '';
    const links = LANGS.map((lang) => ({
        hreflang: LOCALE_TAGS[lang],
        href: `${origin}${getLocalizedPath(pathname, lang)}`
    }));
    // x-default points at the default-language version.
    links.push({
        hreflang: 'x-default',
        href: `${origin}${getLocalizedPath(pathname, DEFAULT_LANG)}`
    });
    return links;
}
