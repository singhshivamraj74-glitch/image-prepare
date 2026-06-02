export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://image-prepare.vercel.app/sitemap.xml",
  };
}