/** @type {import('next').NextConfig} */
const nextConfig = {
 reactStrictMode: true,
 images: {
  // domains: ["www.benjamindada.com", "techpoint.africa"]
  remotePatterns: [
   {
    protocol: "https",
    hostname: "**"
   }
  ]
 }
};

module.exports = nextConfig;
