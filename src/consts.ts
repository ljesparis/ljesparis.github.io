// Stable, language-agnostic site metadata.
// Visible copy lives in the per-language dictionaries (src/i18n/en.ts, es.ts).

// Fallbacks used when a page does not pass its own title/description.
export const SITE_TITLE = 'Leonardo Esparis — Software Engineer';
export const SITE_DESCRIPTION =
    'Leonardo Esparis, software engineer experienced building reliable, high-traffic systems. Explore my experience, tech stack and projects.';

// Personal identity, used for the JSON-LD Person schema and contact links.
export const PERSON = {
    name: 'Leonardo Esparis',
    jobTitle: 'Software Engineer',
    email: 'ljesparis@gmail.com',
    // Profiles power JSON-LD `sameAs` so search engines can link your identity.
    linkedin: 'https://www.linkedin.com/in/leoesparis/',
    github: 'https://github.com/ljesparis/'
};

// Default social preview image (Open Graph / Twitter). 1200x630.
export const SOCIAL_IMAGE = '/og-image.png';

// External profile links shown in the nav.
export const SOCIAL_LINKS = [
    { title: 'LinkedIn', url: PERSON.linkedin },
    { title: 'GitHub', url: PERSON.github }
];
