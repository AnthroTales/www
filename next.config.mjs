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

try {
  export default withNextIntl(nextConfig);
} catch (err) {
  if (!(err instanceof Error)) {
    console.warn('Non-Error instance caught:', err);
    // Handle or ignore the non-Error instance as needed
  } else {
    throw err; // Re-throw actual Error instances
  }
}