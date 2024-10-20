import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
};

const wrappedConfig = (config) => {
  try {
    return withNextIntl(config);
  } catch (error) {
    if (!(error instanceof Error)) {
      throw new Error("An error occurred: " + error);
    }
    throw error;
  }
};

export default wrappedConfig(nextConfig);
