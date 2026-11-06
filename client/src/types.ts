export interface LinkProps {
    id: number;
    text: string;
    url: string;
    isExternal: boolean;
}

export interface ImageProps {
    id: number;
    documentId: string;
    url: string;
    alternativeText: string;
}

export interface LogoProps {
    text: string;
    image: ImageProps;
}

type ComponentType = "blocks.hero-section" | "blocks.info-block";

interface Base<T extends ComponentType, D extends object = Record<string, unknown>> {
    id: number;
    __component?: T;
    documentId?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    data?: D;
}

export interface HeroSectionProps extends Base<"blocks.hero-section"> {
    theme: "primary" | "secondary";
    heading: string;
    image: ImageProps;
    callToAction?: LinkProps;
    logo?: LogoProps;
    author?: string;
    darken?: boolean;
}

export interface InfoBlockProps extends Base<"blocks.info-block"> {
    theme: "primary" | "secondary";
    reversed?: boolean;
    heading: string;
    content: string;
    image: ImageProps;
    callToAction?: LinkProps;
}

export type Block = HeroSectionProps | InfoBlockProps;
