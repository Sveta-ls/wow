/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/wow",
  assetPrefix: "/wow/",
  trailingSlash: true,
};

export default nextConfig;
