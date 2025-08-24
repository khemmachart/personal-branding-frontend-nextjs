/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        process.env.ALLOWED_ORIGINS || '',
        'localhost:3000',
        '127.0.0.1:3000'
      ].filter(Boolean)
    }
  },
  env: {
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS,
    ICON_ASSET: "https://admin.pattayavillaresort.com/assets/",
    DIRECTUS_ACCESS_TOKEN: process.env.DIRECTUS_ACCESS_TOKEN,
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
    CONFIG_IMAGE_PREFIX: process.env.CONFIG_SITENAME,
    CONFIG_FILTER_CHANITA_PRODUCTS: process.env.CONFIG_SITENAME === "Vacaysea" ? "true" : "false",
    CONFIG_DISPLAY_PATTAYA_CONTACTS_SECTION: process.env.CONFIG_SITENAME === "PattayaVillaResort" ? "true" : "false",
    CONFIG_DISPLAY_ISARA_CONTACTS_SECTION: process.env.CONFIG_SITENAME === "Isara" ? "true" : "false",
    CONFIG_DISPLAY_DEVILLE_INFORMATION: process.env.CONFIG_SITENAME === "PattayaVillaResort" ? "true" : "false",
    NOTIFY_LINE_CHANNEL_ID: process.env.NOTIFY_LINE_CHANNEL_ID,
    NOTIFY_LINE_CHANNEL_ID_FOR_TESTING: process.env.NOTIFY_LINE_CHANNEL_ID_FOR_TESTING,
    NEXT_PUBLIC_AWS_CLOUDFRONT_DISTRIBUTION_DOMAIN: process.env.AWS_CLOUDFRONT_DISTRIBUTION_DOMAIN,
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL || "https://www.pattayavillaresort.com",
  },
  images: {
    minimumCacheTTL: 864000,
    domains: [
      'images.unsplash.com',
      'source.unsplash.com',
      'plus.unsplash.com',
      'admin.pattayavillaresort.com',
      'admin.isarapoolvilla.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.pattayavillaresort.com',
      },
      {
        protocol: 'https',
        hostname: 'admin.isarapoolvilla.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      }
    ],
    unoptimized: false,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/auth/login', 
        permanent: true,
      },
      {
        source: '/logout',
        destination: '/auth/logout', 
        permanent: true,
      },
      {
        source: '/signup',
        destination: '/auth/signup', 
        permanent: true,
      },
    ];
  },
  // For static generation (uncomment if needed)
  // output: 'export',
  
  // ISR configuration
  // isrMemoryCacheSize: 0, // Disable ISR memory cache for development
};

export default nextConfig;
