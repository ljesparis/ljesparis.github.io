import { en } from './en';
import { es } from './es';
import type { SiteContent } from './types';

export type Lang = 'en' | 'es';

export const DEFAULT_LANG: Lang = 'en';
export const LANGS: Lang[] = ['en', 'es'];

const dictionaries: Record<Lang, SiteContent> = { en, es };

export const LOCALE_TAGS: Record<Lang, string> = {
    en: 'en-US',
    es: 'es-ES'
};

export function getLangFromUrl(url: URL): Lang {
    const [, maybeLang] = url.pathname.split('/');
    if ((LANGS as string[]).includes(maybeLang)) {
        return maybeLang as Lang;
    }
    return DEFAULT_LANG;
}

export function getContent(lang: Lang): SiteContent {
    return dictionaries[lang];
}

export function getLocalizedPath(pathname: string, target: Lang): string {
    const segments = pathname.split('/').filter(Boolean);
    if ((LANGS as string[]).includes(segments[0])) {
        segments.shift();
    }
    const rest = segments.join('/');
    const base =
        target === DEFAULT_LANG ? `/${rest}` : `/${target}/${rest}`;
    const normalized = base.replace(/\/{2,}/g, '/');
    return normalized.endsWith('/') ? normalized : `${normalized}/`;
}

export function getAlternateLinks(
    pathname: string,
    site: URL | undefined
): { hreflang: string; href: string }[] {
    const origin = site ? site.origin : '';
    const links = LANGS.map((lang) => ({
        hreflang: LOCALE_TAGS[lang],
        href: `${origin}${getLocalizedPath(pathname, lang)}`
    }));
    links.push({
        hreflang: 'x-default',
        href: `${origin}${getLocalizedPath(pathname, DEFAULT_LANG)}`
    });
    return links;
}
