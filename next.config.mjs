/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-v2' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-v2/' : '',
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  output: 'export'
};

export default nextConfig;