"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { StrapiImage } from "../StrapiImage";
import { LinkProps, LogoProps } from "@/types";
import { getGlobalSettings } from "@/data/getData";

// Client components can't be asynchronous, so we need to pass out data to this component
// instead of fetching it from within the component itself
interface HeaderProps {
    data: {
        logo: LogoProps;
        navigation: LinkProps[];
        callToAction: LinkProps;
    };
}

export function Header({ data }: HeaderProps) {
    const pathname = usePathname();
    const headerLight = pathname === "/activities";
    if (!data) return null;

    const { logo, navigation, callToAction } = data;
    return (
        <header className={`header ${headerLight ? "header--light" : ""}`}>
            <Link href="/">
                <StrapiImage
                    src={logo.image.url}
                    alt={logo.image.alternativeText || "No alternative text provided"}
                    className={`header__logo header__logo--${headerLight ? "white" : "black"}`}
                    width={120}
                    height={120}
                />
            </Link>
            <ul className="header__nav">
                {navigation.map((item) => (
                    <li key={item.id}>
                        <Link href={item.url} target={item.isExternal ? "_blank" : "_self"}>
                            <h5>{item.text}</h5>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link href={callToAction.url} target={callToAction.isExternal ? "_blank" : "_self"}>
                <button className="btn btn--black btn--small">{callToAction.text}</button>
            </Link>
        </header>
    );
}
