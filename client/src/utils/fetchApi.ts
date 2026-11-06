type FetchRequestConfig = {
    revalidate?: number | false;
    tags?: string[];
};

interface FetchApiOptions {
    method: "get" | "post" | "put" | "delete";
    authToken?: string;
    body?: Record<string, unknown>;
    config?: FetchRequestConfig;
}

export const fetchApiAsync = async (url: string, options: FetchApiOptions) => {
    const { method, authToken, body, config } = options;

    const headers: RequestInit & { config?: FetchRequestConfig } = {
        method,
        headers: {
            "Content-Type": "application/json",
            ...(authToken && { Authorization: `Bearer ${authToken}` }),
        },
        ...(body && { body: JSON.stringify(body) }),
        ...(config && { config }),
    };

    try {
        const response = await fetch(url, headers);
        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("application/json") && response.ok) {
            return await response.json();
        } else {
            return { status: response.status, statusText: response.statusText };
        }
    } catch (error) {
        console.error(`Error ${method} data`, error);
        throw error;
    }
};
