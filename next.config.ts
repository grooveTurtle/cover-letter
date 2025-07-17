import type { NextConfig } from "next";

const repoName = "cover-letter";

const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix: `/${repoName}`,
  basePath: `/${repoName}`,
  trailingSlash: true,
  output: "export",
};

export default nextConfig;
