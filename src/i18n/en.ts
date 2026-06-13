// English content dictionary.
import type { SiteContent } from './types';

export const en: SiteContent = {
    // Per-page SEO metadata.
    meta: {
        title: 'Leonardo Esparis — Senior Software Engineer',
        description:
            'Leonardo Esparis, senior software engineer with 8+ years building backends — highly concurrent, event-driven, distributed systems in Python.'
    },

    // Language switcher label (link to the OTHER language).
    switchToLabel: 'Español',

    hero: {
        name: 'Leonardo Esparis',
        role: 'Senior Software Engineer',
        tagline:
            'I build the kind of systems that have to stay calm under pressure — and I love every part of the craft.',
        ctaPrimary: 'Get in touch'
    },

    about: {
        heading: 'About me',
        paragraphs: [
            "I'm Leonardo, a software engineer with 8+ years of building backends I'm genuinely proud of. I'm happiest working on highly concurrent, event-driven systems — the kind where distributed services on AWS pass messages through Kafka or RabbitMQ and everything has to stay coherent.",
            "Most of my work lives in Python and Django, with a real soft spot for clean, maintainable design (DDD and hexagonal architecture feel like home). Part of my career has been spent on payment systems, where correctness really matters. I love building things, and I'm always stepping out of my comfort zone to learn new languages. Based in Madrid."
        ]
    },

    // Hidden for now. Fill these in and re-enable the section in HomeContent.astro.
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
        text: "Got an interesting problem or idea? I'd be glad to hear from you.",
        emailLabel: 'Email me'
    }
};
