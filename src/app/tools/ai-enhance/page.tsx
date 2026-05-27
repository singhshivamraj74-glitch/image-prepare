"use client";

import { useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

export default function AIEnhancePage() {
  const [original, setOriginal] =
    useState<string | null>(null);

  const [enhanced, setEnhanced] =
    useState<string | null>(null);

  const [loading, setLoading] =
    useState(false);

  const handleUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const url =
      URL.createObjectURL(file);

    setOriginal(url);
    setEnhanced(null);
  };

  const enhanceImage = async () => {
    if (!original) return;

    setLoading(true);

    toast.loading("Enhancing image...");

    try {
      const img = new Image();

      img.src = original;

      img.onload = () => {
        const canvas =
          document.createElement("canvas");

        const ctx =
          canvas.getContext("2d");

        if (!ctx) return;

        canvas.width = img.width * 1.5;
        canvas.height =
          img.height * 1.5;

        ctx.filter =
          "contrast(120%) brightness(110%) saturate(120%)";

        ctx.drawImage(
          img,
          0,
          0,
          canvas.width,
          canvas.height
        );

        const enhancedURL =
          canvas.toDataURL(
            "image/png",
            1.0
          );

        setEnhanced(enhancedURL);

        toast.dismiss();

        toast.success(
          "Image Enhanced!"
        );

        setLoading(false);
      };
    } catch (error) {
      toast.dismiss();

      toast.error(
        "Enhancement failed"
      );

      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">

      <Toaster position="top-right" />

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-white/10">

        <Link href="/">
          <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            Image Prepare
          </h1>
        </Link>

        <Link
          href="/dashboard"
          className="bg-cyan-400 text-black px-5 py-3 rounded-xl font-bold"
        >
          Dashboard
        </Link>

      </nav>

      {/* Main */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h1 className="text-6xl font-black">
          AI{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Enhance
          </span>
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          Improve blurry and low quality images instantly.
        </p>

        <div className="mt-12 border border-white/10 rounded-3xl p-8 bg-white/5">

          {!original ? (
            <div className="border-2 border-dashed border-white/10 rounded-3xl p-20 text-center">

              <div className="text-6xl">
                ✨
              </div>

              <h2 className="mt-6 text-4xl font-bold">
                Upload Image
              </h2>

              <label className="inline-block mt-8 cursor-pointer">

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleUpload}
                />

                <div className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-bold">
                  Choose Image
                </div>

              </label>

            </div>
          ) : (
            <div>

              <div className="grid md:grid-cols-2 gap-8">

                {/* Original */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Original
                  </h2>

                  <img
                    src={original}
                    className="rounded-2xl w-full"
                  />
                </div>

                {/* Enhanced */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Enhanced
                  </h2>

                  {enhanced ? (
                    <img
                      src={enhanced}
                      className="rounded-2xl w-full"
                    />
                  ) : (
                    <div className="h-full min-h-[300px] border border-white/10 rounded-2xl flex items-center justify-center text-gray-500">
                      {loading
                        ? "Processing..."
                        : "No enhanced image"}
                    </div>
                  )}
                </div>

              </div>

              <div className="flex gap-5 mt-10">

                <button
                  onClick={enhanceImage}
                  className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-bold"
                >
                  {loading
                    ? "Enhancing..."
                    : "Enhance Image"}
                </button>

                {enhanced && (
                  <a
                    href={enhanced}
                    download="enhanced-image.png"
                    className="bg-green-500 px-8 py-4 rounded-xl font-bold"
                  >
                    Download
                  </a>
                )}

              </div>

            </div>
          )}

        </div>

      </section>
    </main>
  );
}