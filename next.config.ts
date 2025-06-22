import type { NextConfig } from "next";

const repo = "text-input-component";

const nextConfig: NextConfig = {
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  output: "export",

};

export default nextConfig;
