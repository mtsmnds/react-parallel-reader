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
        register: (name: string, url: string | object) => void;
        select: (name: string) => void;
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
    on: (event: string, callback: (...args: any[]) => void) => void;
    annotations: {
        add: (type: string, cfiRange: string, data?: any, cb?: any, className?: string, styles?: any) => void;
        remove: (cfiRange: string, type: string) => void;
    };
    getRange: (cfiRange: string) => Range;
    manager: any;
    getContents: () => any[];
};

export type Highlight = {
    id: string;
    cfiRange: string;
    text: string;
    bookUrl: string;
    created: number;
    color: string;
    style: 'highlight' | 'underline';
    note?: string;
    linkedIds?: string[];
};

export type BookCollection = {
    name: string;
    files: string[];
};
