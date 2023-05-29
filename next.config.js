/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["buddyguider.com", "localhost", "7ahyiahkei.execute-api.ap-southeast-1.amazonaws.com", "media-cdn.tripadvisor.com"]
  },
};

module.exports = nextConfig;
