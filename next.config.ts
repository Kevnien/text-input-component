import type { NextConfig } from "next";

const repo = "text-input-component";
const basePath = process.env.BASE_PATH || `/${repo}`;

const nextConfig: NextConfig = {
  basePath: basePath,
  assetPrefix: basePath,
  output: "export",

};

export default nextConfig;
