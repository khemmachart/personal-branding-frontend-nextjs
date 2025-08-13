/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  env: {
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS,
    ICON_ASSET: "https://admin.pattayavillaresort.com/assets/",
    DIRECTUS_ACCESS_TOKEN: process.env.DIRECTUS_ACCESS_TOKEN,

    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
    CONFIG_IMAGE_PREFIX: process.env.CONFIG_SITENAME,                                       // CONFIG_SITENAME = { PattayaVillaResort, Vacaysea }
    CONFIG_FILTER_CHANITA_PRODUCTS: process.env.CONFIG_SITENAME === "Vacaysea",             // Only display CHANITA's products for Vacaysea
    CONFIG_DISPLAY_PATTAYA_CONTACTS_SECTION: process.env.CONFIG_SITENAME === "PattayaVillaResort",   // Only display contact section for PattayaVillaResort
    CONFIG_DISPLAY_ISARA_CONTACTS_SECTION: process.env.CONFIG_SITENAME === "Isara",
    CONFIG_DISPLAY_DEVILLE_INFORMATION: process.env.CONFIG_SITENAME === "PattayaVillaResort",     // Only display product's name for PattayaVillaResort
    NOTIFY_LINE_CHANNEL_ID: process.env.NOTIFY_LINE_CHANNEL_ID,
    NOTIFY_LINE_CHANNEL_ID_FOR_TESTING: process.env.NOTIFY_LINE_CHANNEL_ID_FOR_TESTING,
    NEXT_PUBLIC_AWS_CLOUDFRONT_DISTRIBUTION_DOMAIN: process.env.AWS_CLOUDFRONT_DISTRIBUTION_DOMAIN,
    NEXT_PUBLIC_URL: "https://www.pattayavillaresort.com",
  },
  images: {
    minimumCacheTTL: 864000,
    domains: ['admin.pattayavillaresort.com', 'admin.isarapoolvilla.com'],
    unoptimized: false,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/webp'],
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
}