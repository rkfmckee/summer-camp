import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
    /* config options here */
    cacheComponents: true,
    partialPrefetching: true,
    reactCompiler: true,

    images: {
        dangerouslyAllowLocalIP: isDev,
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "5001",
                pathname: "/uploads/**",
            },
        ],
    },
};

export default nextConfig;
