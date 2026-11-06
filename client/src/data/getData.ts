import { fetchApiAsync } from "@/utils/fetchApi";
import { getStrapiUrl } from "@/utils/strapiUtils";
import qs from "qs";

export const getHomePageDataAsync = async () => {
    const qs = require("qs");
    const homePageQuery =
        "populate[blocks][on][blocks.hero-section][populate][image][fields][0]=url&populate[blocks][on][blocks.hero-section][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.hero-section][populate][logo][populate][image][fields][0]=url&populate[blocks][on][blocks.hero-section][populate][logo][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.hero-section][populate][callToAction]=true&populate[blocks][on][blocks.info-block][populate][image][fields][0]=url&populate[blocks][on][blocks.info-block][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.info-block][populate][callToAction]=true";

    const url = getStrapiUrl(`/home-page?${homePageQuery}`, true);
    const response = await fetchApiAsync(url, { method: "get" });
    return { ...response.data };
};
