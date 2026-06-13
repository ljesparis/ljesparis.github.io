// English content dictionary.
// NOTE: Strings prefixed with "TODO:" are placeholders. Replace them with the
// real content (bio, experience, skills, projects) before going live.
import type { SiteContent } from './types';

export const en: SiteContent = {
    // Per-page SEO metadata.
    meta: {
        title: 'Leonardo Esparis — Software Engineer',
        description:
            'Leonardo Esparis, software engineer experienced building reliable, high-traffic systems. Explore my experience, tech stack and projects.'
    },

    // Top navigation labels.
    nav: {
        about: 'About',
        experience: 'Experience',
        skills: 'Tech stack',
        projects: 'Projects',
        contact: 'Contact'
    },

    // Language switcher label (shown for the link to the OTHER language).
    languageName: 'English',
    switchToLabel: 'Español',

    hero: {
        name: 'Leonardo Esparis',
        role: 'Software Engineer',
        // One-line value proposition. Keep it punchy and concrete.
        tagline:
            'TODO: One sentence describing what you do and the value you bring (e.g. "I build scalable backend systems that serve millions of users").',
        ctaPrimary: 'Get in touch',
        ctaSecondary: 'View projects'
    },

    about: {
        heading: 'About me',
        paragraphs: [
            'TODO: Paragraph 1 — who you are, your focus and what drives you as an engineer.',
            'TODO: Paragraph 2 — the kind of problems you enjoy solving and the impact of your work.',
            'TODO: Paragraph 3 (optional) — what you are exploring now or open to.'
        ]
    },

    experience: {
        heading: 'Experience',
        // Most recent first.
        items: [
            {
                company: 'TODO: Company name',
                role: 'TODO: Your role',
                period: 'TODO: e.g. 2022 — Present',
                location: 'TODO: City / Remote',
                highlights: [
                    'TODO: Achievement with measurable impact (numbers, scale, results).',
                    'TODO: Key technology or responsibility.'
                ]
            }
        ]
    },

    skills: {
        heading: 'Tech stack',
        // Group related technologies; add or remove groups freely.
        groups: [
            {
                name: 'TODO: e.g. Languages',
                items: ['TODO: Go', 'TODO: Python', 'TODO: TypeScript']
            },
            {
                name: 'TODO: e.g. Infrastructure',
                items: ['TODO: Docker', 'TODO: Kubernetes', 'TODO: AWS']
            }
        ]
    },

    projects: {
        heading: 'Featured projects',
        items: [
            {
                name: 'TODO: Project name',
                description:
                    'TODO: One or two sentences on what it does and why it matters.',
                tags: ['TODO: tech', 'TODO: tech'],
                url: 'https://github.com/ljesparis/'
            }
        ]
    },

    contact: {
        heading: 'Get in touch',
        text: 'TODO: A short line inviting people to reach out, then your channels below.',
        emailLabel: 'Email me'
    }
};
