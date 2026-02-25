/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ritakdqaklifnxvexgxf.supabase.co",
        pathname: "/storage/v1/object/public/projectsMedia/**",
      },
      {
        protocol: "https",
        hostname: "ritakdqaklifnxvexgxf.supabase.co",
        pathname: "/storage/v1/object/public/projectCertificates/**",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
