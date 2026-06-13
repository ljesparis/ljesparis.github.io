// Shared shape for the per-language content dictionaries.
// Both en.ts and es.ts implement this, keeping the two languages in sync.

export interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    location: string;
    highlights: string[];
}

export interface SkillGroup {
    name: string;
    items: string[];
}

export interface ProjectItem {
    name: string;
    description: string;
    tags: string[];
    url: string;
}

export interface SiteContent {
    meta: {
        title: string;
        description: string;
    };
    nav: {
        about: string;
        experience: string;
        skills: string;
        projects: string;
        contact: string;
    };
    languageName: string;
    switchToLabel: string;
    hero: {
        name: string;
        role: string;
        tagline: string;
        ctaPrimary: string;
        ctaSecondary: string;
    };
    about: {
        heading: string;
        paragraphs: string[];
    };
    experience: {
        heading: string;
        items: ExperienceItem[];
    };
    skills: {
        heading: string;
        groups: SkillGroup[];
    };
    projects: {
        heading: string;
        items: ProjectItem[];
    };
    contact: {
        heading: string;
        text: string;
        emailLabel: string;
    };
}
