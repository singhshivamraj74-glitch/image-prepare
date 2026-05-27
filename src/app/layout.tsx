import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Image Prepare - Free Image & PDF Tools",
    template: "%s | Image Prepare",
  },

  description:
    "Free online image and PDF tools platform. Compress images, convert JPG to PDF, optimize files and use smart online tools instantly.",

  keywords: [
    "image tools",
    "pdf tools",
    "compress image",
    "jpg to pdf",
    "pdf to jpg",
    "online tools",
    "image converter",
  ],

  authors: [{ name: "Image Prepare" }],

  creator: "Image Prepare",

  metadataBase: new URL(
    "https://imageprepare.vercel.app"
  ),

  openGraph: {
    title: "Image Prepare",
    description:
      "Free AI Image & PDF Tools Platform",
    url: "https://imageprepare.vercel.app",
    siteName: "Image Prepare",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">

        <main className="flex-1">
          {children}
        </main>

        <footer className="border-t border-white/10 mt-20 py-10 text-center text-gray-400 bg-black">
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">

            <a href="/about">About</a>

            <a href="/contact">Contact</a>

            <a href="/privacy-policy">Privacy Policy</a>

            <a href="/terms">Terms</a>

            <a href="/disclaimer">Disclaimer</a>

            <a href="/faq">FAQ</a>

          </div>

          <p className="mt-6 text-xs text-gray-500">
            © 2026 Image Prepare. All rights reserved.
          </p>

        </footer>

      </body>
    </html>
  );
}