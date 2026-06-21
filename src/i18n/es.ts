import type { SiteContent } from './types';

export const es: SiteContent = {
    meta: {
        title: 'Leonardo Esparis — Ingeniero de Software · Python & Django',
        description:
            'Ingeniero de software con más de 4 años construyendo sistemas de alta concurrencia y orientados a eventos en Python y Django. Arquitectura hexagonal y DDD.'
    },

    switchToLabel: 'English',

    hero: {
        tagline: 'escribiendo código, construyendo cosas, resolviendo lo demás'
    },

    about: {
        body: 'Durante los últimos 4 años me he centrado en mejorar la experiencia de pago de cientos de usuarios, construyendo sistemas de alta concurrencia y orientados a eventos, pensados para mantenerse fiables y predecibles incluso bajo mucha carga. La mayor parte de mi código vive en Python y Django, apoyándome en arquitectura hexagonal y DDD para mantenerlo limpio — y fuera del trabajo me encontrarás metido en proyectos personales, aprendiendo nuevos lenguajes solo por diversión.'
    },

    projects: {
        items: [
            {
                name: 'Ledger Core',
                description:
                    'Ledger de pagos basado en event sourcing, diseñado para ser correcto a escala.',
                tags: ['python', 'kafka', 'ddd'],
                href: '#'
            },
            {
                name: 'Pulse',
                description:
                    'Pasarela de mensajería en tiempo real que maneja millones de eventos al día.',
                tags: ['django', 'rabbitmq', 'websockets'],
                href: '#'
            }
        ]
    },

    writing: {
        items: [
            {
                title: 'Los post-mortems son geniales (y aquí te cuento por qué deberías amarlos también)',
                date: '06·26',
                href: '/es/blog/post-mortems-are-awesome'
            }
        ]
    },

    footer: {
        builtWith: 'hecho con cariño'
    }
};
