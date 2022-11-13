/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: { appDir: true },
    env: {
        serviceBackend: "http://localhost:8800", // example config port Backend
    },
    // assetPrefix: isProduction ? "" : "http://localhost:3000",
    i18n: {
        locales: ["id", "en", "fr", "de", "au", "uk"],
        defaultLocale: "en",
    },
    swcMinify: true,
    reactStrictMode: true,
    images: {
        domains: ["tailwindui.com", "lh3.googleusercontent.com", "imdb-api.com", "m.media-amazon.com", "i.gr-assets.com", "s0.bukalapak.com", "placeimg.com", "pragprog.com", "ui-avatars.com", "flagcdn.com", "cdn-images-1.medium.com"],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    // example rewrites url when path is matching
    async rewrites() {
        return [{
            source: "/healthyme/",
            destination: "https://healthyme.com"
        }]
    },
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
}

module.exports = nextConfig