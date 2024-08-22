/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
               protocol: 'https',
               hostname: 'lovely-flamingo-139.convex.cloud',
            },
            {
                protocol: 'https',
                hostname: 'accurate-rhinoceros-122.convex.cloud',
            },
            {
                protocol: 'https',
                hostname: 'img.clerk.com',
            },
        ]
    },
    typescript: {
        ignoreBuildErrors: true
    }
};

export default nextConfig;
