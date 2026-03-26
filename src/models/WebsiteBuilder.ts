// WebsiteBuilder.ts

// Interface for WebsiteBuilder
export interface WebsiteBuilder {
    title: string;
    tagline: string;
    pages: Page[];
    createdAt: Date;
    updatedAt: Date;
}

// Interface for Page
export interface Page {
    name: string;
    sections: Section[];
}

// Interface for Section
export interface Section {
    type: 'hero' | 'about' | 'services' | 'testimonials' | 'events' | 'donations' | 'contact' | 'gallery';
    content: any; // Replace 'any' with more specific types as necessary
}
