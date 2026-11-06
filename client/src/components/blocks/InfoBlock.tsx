import { StrapiImage } from "../StrapiImage";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

import type { InfoBlockProps } from "@/types";

export function InfoBlock({
    theme,
    reversed,
    image,
    heading,
    content,
    callToAction,
}: Readonly<InfoBlockProps>) {
    return (
        <section className={`info info--${theme} ${reversed && "info--reversed"}`}>
            <StrapiImage
                src={image.url}
                alt={image.alternativeText || "No alternative text provided"}
                height={500}
                width={600}
                className="info__image"
            />
            <div className="info__text">
                <h2 className={`info__headline info__headline--${theme}`}>{heading}</h2>
                <ReactMarkdown>{content}</ReactMarkdown>
                {callToAction && (
                    <Link
                        href={callToAction.url}
                        target={callToAction.isExternal ? "_blank" : "_self"}
                    >
                        <button className={`btn btn--medium btn--${theme}`}>
                            {callToAction.text}
                        </button>
                    </Link>
                )}
            </div>
        </section>
    );
}
