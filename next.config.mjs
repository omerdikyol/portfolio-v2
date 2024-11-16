/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/portfolio-v2',
  assetPrefix: '/portfolio-v2/',
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'], // Ensure only these extensions are treated as pages
  output: 'export'
};

export default nextConfig;
