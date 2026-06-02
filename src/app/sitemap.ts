import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://image-prepare.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://image-prepare.vercel.app/login",
      lastModified: new Date(),
    },
    {
      url: "https://image-prepare.vercel.app/signup",
      lastModified: new Date(),
    },
    {
      url: "https://image-prepare.vercel.app/dashboard",
      lastModified: new Date(),
    },
    {
      url: "https://image-prepare.vercel.app/privacy-policy",
      lastModified: new Date(),
    },
    {
      url: "https://image-prepare.vercel.app/terms",
      lastModified: new Date(),
    },
  ];
}