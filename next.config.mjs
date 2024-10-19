/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**', // Matches all paths under this hostname
      },
      {
        protocol: 'https',
        hostname: 'cdn.cmsfly.com',
        port: '',
        pathname: '/**', // Matches all paths under this hostname
      },
    ],
    // Vous pouvez conserver cette ligne si vous prévoyez d'ajouter des domaines à l'avenir
    domains: [], // Aucune nécessité d'ajouter des domaines pour les images locales
  },
};

export default nextConfig;
