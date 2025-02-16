/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "image.tmdb.org",
                port: "",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                port: "",
            },
        ],
    },
};

export default nextConfig;
