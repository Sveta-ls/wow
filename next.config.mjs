/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Важно: экспортировать статический сайт
  images: {
    unoptimized: true, // Для GitHub Pages
  },
  basePath: process.env.NODE_ENV === "production" ? "/wow" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/wow/" : "",
};

export default nextConfig;
