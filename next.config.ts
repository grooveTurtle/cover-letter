import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const repoName = "cover-letter";

const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix: `/${repoName}`,
  basePath: `/${repoName}`,
  trailingSlash: true,
  ...(isProd ? { output: "export" } : {}),
  images: {
    unoptimized: true, // ✅ 반드시 추가!
  },
};

export default nextConfig;
