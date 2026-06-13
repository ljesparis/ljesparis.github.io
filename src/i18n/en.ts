import type { SiteContent } from './types';

export const en: SiteContent = {
    meta: {
        title: 'Leonardo Esparis — Software Engineer',
        description:
            'Leonardo Esparis, software engineer with 8+ years building backends — highly concurrent, event-driven, distributed systems in Python.'
    },

    switchToLabel: 'Español',

    hero: {
        name: 'Leonardo Esparis',
        role: 'Software Engineer',
        tagline:
            'I build the kind of systems that have to stay calm under pressure — and I love every part of the craft.'
    },

    about: {
        heading: 'About me',
        paragraphs: [
            "I'm Leonardo, a software engineer with 8+ years of building backends I'm genuinely proud of. I'm happiest working on highly concurrent, event-driven systems — the kind where distributed services on AWS pass messages through Kafka or RabbitMQ and everything has to stay coherent.",
            "Most of my work lives in Python and Django, with a real soft spot for clean, maintainable design (DDD and hexagonal architecture feel like home). Part of my career has been spent on payment systems, where correctness really matters. I love building things, and I'm always learning new languages."
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
        text: "Got an interesting problem or idea? I'd be glad to hear from you.",
        emailLabel: 'Email me'
    }
};
