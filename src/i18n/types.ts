// Shared shape for the per-language content dictionaries.
// Both en.ts and es.ts implement this, keeping the two languages in sync.

// Projects are hidden for now but kept here so the section can be re-enabled
// without rebuilding its data model.
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
    // Label for the link that switches to the other language.
    switchToLabel: string;
    hero: {
        name: string;
        role: string;
        tagline: string;
        ctaPrimary: string;
    };
    about: {
        heading: string;
        paragraphs: string[];
    };
    // Hidden for now — see HomeContent.astro.
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
