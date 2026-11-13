import { fetchApiAsync } from "@/utils/fetchApi";
import { getStrapiUrl } from "@/utils/strapiUtils";
import qs from "qs";

export const getHomePageDataAsync = async () => {
    qs;
    const homePageQuery =
        "populate[blocks][on][blocks.hero-section][populate][image][fields][0]=url&populate[blocks][on][blocks.hero-section][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.hero-section][populate][logo][populate][image][fields][0]=url&populate[blocks][on][blocks.hero-section][populate][logo][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.hero-section][populate][callToAction]=true&populate[blocks][on][blocks.info-block][populate][image][fields][0]=url&populate[blocks][on][blocks.info-block][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.info-block][populate][callToAction]=true";

    const url = getStrapiUrl(`/home-page?${homePageQuery}`, true);
    const response = await fetchApiAsync(url, { method: "get" });
    return { ...response.data };
};

const pageBySlugQuery = (slug: string) =>
    qs.stringify({
        filters: {
            slug: {
                $eq: slug,
            },
        },
        populate: {
            blocks: {
                on: {
                    "blocks.hero-section": {
                        populate: {
                            image: {
                                fields: ["url", "alternativeText"],
                            },
                            logo: {
                                populate: {
                                    image: {
                                        fields: ["url", "alternativeText"],
                                    },
                                },
                            },
                            callToAction: true,
                        },
                    },
                    "blocks.info-block": {
                        populate: {
                            image: {
                                fields: ["url", "alternativeText"],
                            },
                            callToAction: true,
                        },
                    },
                    "blocks.featured-article": {
                        populate: {
                            image: {
                                fields: ["url", "alternativeText"],
                            },
                            link: true,
                        },
                    },
                    "blocks.subscribe": true,
                },
            },
        },
    });

export async function getPageBySlug(slug: string) {
    const url = getStrapiUrl(`/pages?${pageBySlugQuery(slug)}`, true);
    console.log(`Request to: ${url}`);
    return await fetchApiAsync(url, { method: "get" });
}

export async function getGlobalSettings() {
    const globalQuery =
        "populate[header][populate][logo][populate][image][fields][0]=url&populate[header][populate][logo][populate][image][fields][1]=alternativeText&populate[header][populate][navigation]=true&populate[header][populate][callToAction]=true";
    const url = getStrapiUrl(`/global?${globalQuery}`, true);
    return await fetchApiAsync(url, { method: "get" });
}
