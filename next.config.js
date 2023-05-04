/** @type {import('next').NextConfig} */

import { setDefaultResultOrder } from "dns";
setDefaultResultOrder("ipv4first");

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
    ],
  },
};

export default nextConfig;
