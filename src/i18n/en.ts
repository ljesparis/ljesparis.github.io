import type { SiteContent } from './types';

export const en: SiteContent = {
    meta: {
        title: 'Leonardo Esparis — Software Engineer · Python & Django',
        description:
            'Software engineer with 4+ years building high-concurrency, event-driven systems in Python and Django. Hexagonal architecture and DDD practitioner.'
    },

    switchToLabel: 'Español',

    hero: {
        tagline: 'writing code, building things, figuring out the rest'
    },

    about: {
        body: "For the last 4 years I've been focused on improving the payment experience for hundreds of users, building high-concurrency, event-driven systems made to stay reliable and predictable, even under heavy load. Most of my code lives in Python and Django, leaning on hexagonal architecture and DDD to keep things clean — and off the clock you'll find me deep in side projects, picking up new languages just for the fun of it."
    },

    projects: {
        items: [
            {
                name: 'Ledger Core',
                description:
                    'Event-sourced payments ledger built for correctness at scale.',
                tags: ['python', 'kafka', 'ddd'],
                href: '#'
            },
            {
                name: 'Pulse',
                description:
                    'Real-time messaging gateway handling millions of events a day.',
                tags: ['django', 'rabbitmq', 'websockets'],
                href: '#'
            }
        ]
    },

    writing: {
        items: [
            {
                title: 'Post-mortems are awesome (and here\'s why you should love them too)',
                date: '06·26',
                href: '/blog/post-mortems-are-awesome'
            }
        ]
    },

    footer: {
        builtWith: 'built with love'
    }
};
