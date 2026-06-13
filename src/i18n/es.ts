// Diccionario de contenido en español.
// NOTA: las cadenas con prefijo "TODO:" son marcadores. Sustitúyelas por el
// contenido real (bio, experiencia, skills, proyectos) antes de publicar.
import type { SiteContent } from './types';

export const es: SiteContent = {
    // Metadatos SEO por página.
    meta: {
        title: 'Leonardo Esparis — Ingeniero de Software',
        description:
            'Leonardo Esparis, ingeniero de software con experiencia construyendo sistemas fiables y de alto tráfico. Conoce mi experiencia, stack y proyectos.'
    },

    // Etiquetas de la navegación.
    nav: {
        about: 'Sobre mí',
        experience: 'Experiencia',
        skills: 'Stack',
        projects: 'Proyectos',
        contact: 'Contacto'
    },

    // Selector de idioma (enlace al OTRO idioma).
    languageName: 'Español',
    switchToLabel: 'English',

    hero: {
        name: 'Leonardo Esparis',
        role: 'Ingeniero de Software',
        // Propuesta de valor en una línea. Directa y concreta.
        tagline:
            'TODO: Una frase que describa qué haces y el valor que aportas (p. ej. "Construyo sistemas backend escalables que sirven a millones de usuarios").',
        ctaPrimary: 'Contáctame',
        ctaSecondary: 'Ver proyectos'
    },

    about: {
        heading: 'Sobre mí',
        paragraphs: [
            'TODO: Párrafo 1 — quién eres, tu enfoque y qué te motiva como ingeniero.',
            'TODO: Párrafo 2 — qué tipo de problemas te gusta resolver y el impacto de tu trabajo.',
            'TODO: Párrafo 3 (opcional) — qué estás explorando ahora o a qué estás abierto.'
        ]
    },

    experience: {
        heading: 'Experiencia',
        // Más reciente primero.
        items: [
            {
                company: 'TODO: Nombre de la empresa',
                role: 'TODO: Tu rol',
                period: 'TODO: p. ej. 2022 — Actualidad',
                location: 'TODO: Ciudad / Remoto',
                highlights: [
                    'TODO: Logro con impacto medible (cifras, escala, resultados).',
                    'TODO: Tecnología o responsabilidad clave.'
                ]
            }
        ]
    },

    skills: {
        heading: 'Stack tecnológico',
        // Agrupa tecnologías relacionadas; añade o quita grupos libremente.
        groups: [
            {
                name: 'TODO: p. ej. Lenguajes',
                items: ['TODO: Go', 'TODO: Python', 'TODO: TypeScript']
            },
            {
                name: 'TODO: p. ej. Infraestructura',
                items: ['TODO: Docker', 'TODO: Kubernetes', 'TODO: AWS']
            }
        ]
    },

    projects: {
        heading: 'Proyectos destacados',
        items: [
            {
                name: 'TODO: Nombre del proyecto',
                description:
                    'TODO: Una o dos frases sobre qué hace y por qué importa.',
                tags: ['TODO: tech', 'TODO: tech'],
                url: 'https://github.com/ljesparis/'
            }
        ]
    },

    contact: {
        heading: 'Contacto',
        text: 'TODO: Una línea breve invitando a escribirte, y debajo tus canales.',
        emailLabel: 'Escríbeme'
    }
};
