import { fetchApiAsync } from "@/utils/fetchApi";
import { getStrapiUrl } from "@/utils/strapiUtils";

export const getHomePageDataAsync = async () => {
    const qs = require("qs");
    const homePageQuery =
        "populate[blocks][on][blocks.hero-section][populate][image][fields][0]=url&populate[blocks][on][blocks.hero-section][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.hero-section][populate][logo][populate][image][fields][0]=url&populate[blocks][on][blocks.hero-section][populate][logo][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.hero-section][populate][callToAction]=true&populate[blocks][on][blocks.info-block][populate][image][fields][0]=url&populate[blocks][on][blocks.info-block][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.info-block][populate][callToAction]=true";

    const url = getStrapiUrl(`/home-page?${homePageQuery}`, true);
    const response = await fetchApiAsync(url, { method: "get" });
    return { ...response.data };
};

export async function getPageBySlug(slug: string) {
    // const path = "/api/pages";
    // const url = new URL(path, BASE_URL);
    const pageBySlugQuery = `filters[slug][$eq]=${slug}&populate[blocks][on][blocks.hero-section][populate][image][fields][0]=url&populate[blocks][on][blocks.hero-section][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.hero-section][populate][logo][populate][image][fields][0]=url&populate[blocks][on][blocks.hero-section][populate][logo][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.hero-section][populate][callToAction]=true&populate[blocks][on][blocks.info-block][populate][image][fields][0]=url&populate[blocks][on][blocks.info-block][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.info-block][populate][callToAction]=true`;
    const url = getStrapiUrl(`/pages?${pageBySlugQuery}`, true);
    return await fetchApiAsync(url, { method: "get" });
}
