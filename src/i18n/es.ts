// Diccionario de contenido en español.
import type { SiteContent } from './types';

export const es: SiteContent = {
    // Metadatos SEO por página.
    meta: {
        title: 'Leonardo Esparis — Ingeniero de Software Senior',
        description:
            'Leonardo Esparis, ingeniero de software senior con más de 8 años construyendo backends: sistemas distribuidos, altamente concurrentes y orientados a eventos en Python.'
    },

    // Selector de idioma (enlace al OTRO idioma).
    switchToLabel: 'English',

    hero: {
        name: 'Leonardo Esparis',
        role: 'Ingeniero de Software Senior',
        tagline:
            'Construyo sistemas que tienen que mantener la calma bajo presión, y disfruto cada parte del oficio.',
        ctaPrimary: 'Contáctame'
    },

    about: {
        heading: 'Sobre mí',
        paragraphs: [
            'Soy Leonardo, ingeniero de software con más de 8 años creando backends de los que estoy orgulloso. Donde mejor me siento es en sistemas altamente concurrentes y orientados a eventos: servicios distribuidos en AWS que intercambian mensajes mediante Kafka o RabbitMQ y donde todo tiene que mantenerse coherente.',
            'La mayor parte de mi trabajo vive en Python y Django, con verdadera debilidad por el diseño limpio y mantenible (DDD y arquitectura hexagonal me resultan terreno conocido). Parte de mi carrera la he dedicado a sistemas de pagos, donde la corrección importa de verdad. Me encanta construir y siempre estoy aprendiendo nuevos lenguajes.'
        ]
    },

    // Oculto por ahora. Rellénalo y reactiva la sección en HomeContent.astro.
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
        text: '¿Tienes un problema o una idea interesante? Me encantará saber de ti.',
        emailLabel: 'Escríbeme'
    }
};
