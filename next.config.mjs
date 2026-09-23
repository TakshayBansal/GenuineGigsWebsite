/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  turbopack: { root: process.cwd() },
  experimental: { useTypeScriptCli: false },
  async redirects() {
    return [
      { source: "/product", destination: "/platform", permanent: true },
      { source: "/modules/scm", destination: "/platform/supply-chain", permanent: true },
      { source: "/modules/procurement", destination: "/platform/procurement", permanent: true },
      { source: "/modules/operations", destination: "/platform/operations", permanent: true },
      { source: "/enterprise", destination: "/security-governance", permanent: true },
    ];
  },
};

export default nextConfig;
