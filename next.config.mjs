/** @type {import('next').NextConfig} */
const repoName = 'Ceres';
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  ...(isGithubPages
    ? {
        output: 'export',
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : '',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
