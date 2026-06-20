export interface ProjectItem {
    name: string;
    description: string;
    tags: string[];
    href: string;
}

export interface WritingItem {
    title: string;
    date: string;
    href: string;
}

export interface SiteContent {
    meta: {
        title: string;
        description: string;
    };
    switchToLabel: string;
    hero: {
        tagline: string;
    };
    about: {
        body: string;
    };
    projects: {
        items: ProjectItem[];
    };
    writing: {
        items: WritingItem[];
    };
    footer: {
        builtWith: string;
    };
}
