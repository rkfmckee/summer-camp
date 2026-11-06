export function getStrapiUrl(path?: string, api: boolean = false) {
    const baseUrl = process.env.STRAPI_API_URL ?? `http://localhost:5001${api ? "/api" : ""}`;
    return path ? baseUrl + path : baseUrl;
}
