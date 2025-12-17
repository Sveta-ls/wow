/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Важно: экспортировать статический сайт
  images: {
    unoptimized: true, // Для GitHub Pages
  },
  basePath: "/wow", // Для GitHub Pages
  assetPrefix: "/wow",
  trailingSlash: true, // Добавьте это!
};

export default nextConfig;
