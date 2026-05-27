"use client";

import { useState } from "react";

import Link from "next/link";

import toast, {
  Toaster,
} from "react-hot-toast";

import { removeBackground } from "@imgly/background-removal";

export default function BackgroundRemovePage() {
  const [image, setImage] =
    useState<string | null>(null);

  const [loading, setLoading] =
    useState(false);

  const handleUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file =
      e.target.files?.[0];

    if (!file) return;

    try {
      setLoading(true);

      toast.loading(
        "Removing background..."
      );

      const blob =
        await removeBackground(
          file
        );

      const url =
        URL.createObjectURL(
          blob
        );

      setImage(url);

      toast.dismiss();

      toast.success(
        "Background Removed!"
      );
    } catch (error) {
      toast.dismiss();

      toast.error(
        "Failed to remove background"
      );
    }

    setLoading(false);
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
          Background{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Remover
          </span>
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          Remove image background instantly using AI.
        </p>

        <div className="mt-12 border border-white/10 rounded-3xl p-8 bg-white/5">

          {!image ? (
            <div className="border-2 border-dashed border-white/10 rounded-3xl p-20 text-center">

              <div className="text-6xl">
                🪄
              </div>

              <h2 className="mt-6 text-4xl font-bold">
                Upload Image
              </h2>

              <p className="mt-4 text-gray-400">
                PNG, JPG, WEBP Supported
              </p>

              <label className="inline-block mt-8 cursor-pointer">

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={
                    handleUpload
                  }
                />

                <div className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-bold">
                  {loading
                    ? "Removing..."
                    : "Choose Image"}
                </div>

              </label>

            </div>
          ) : (
            <div className="text-center">

              <img
                src={image}
                alt="Result"
                className="rounded-3xl mx-auto max-h-[600px]"
              />

              <div className="flex justify-center gap-5 mt-10">

                <a
                  href={image}
                  download="removed-bg.png"
                  className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-bold"
                >
                  Download
                </a>

                <button
                  onClick={() =>
                    setImage(null)
                  }
                  className="bg-red-500 px-8 py-4 rounded-xl font-bold"
                >
                  Remove
                </button>

              </div>

            </div>
          )}

        </div>

      </section>
    </main>
  );
}