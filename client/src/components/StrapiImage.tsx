import { getStrapiUrl } from "@/utils/strapiUtils";
import Image from "next/image";

interface StrapiImageProps {
    src: string;
    alt: string;
    className?: string;
    [key: string]: string | number | boolean | undefined;
}

export const StrapiImage = ({ src, alt, className, ...rest }: Readonly<StrapiImageProps>) => {
    const imageUrl = getStrapiMedia(src);
    if (!imageUrl) return null;

    return <Image src={imageUrl} alt={alt} className={className} {...rest} />;
};

export const getStrapiMedia = (url: string | null) => {
    if (url == null) return null;
    if (url.startsWith("data:")) return url;
    if (url.startsWith("http") || url.startsWith("//")) return url;
    return getStrapiUrl() + url;
};
