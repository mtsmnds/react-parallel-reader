export type LocationChanged = {
    start: {
        index: number;
        href: string;
        cfi: string;
        percentage: number;
    };
    end: {
        index: number;
        href: string;
        cfi: string;
        percentage: number;
    };
};

export type Rendition = {
    themes: {
        default: (styles: Record<string, any>) => void;
    };
    display: {
        (target?: string): Promise<void>;
        (target?: number): Promise<void>;
    };
    location: {
        start: {
            percentage: number;
            cfi: string;
        };
    };
};

export type BookCollection = {
    name: string;
    files: string[];
};
