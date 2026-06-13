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
    switchToLabel: string;
    hero: {
        name: string;
        role: string;
        tagline: string;
    };
    about: {
        heading: string;
        paragraphs: string[];
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
