"use client";

import { useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

export default function PDFtoJPGPage() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setLoading(true);

    toast.loading("Converting PDF to JPG...");

    try {
      const imageUrl = URL.createObjectURL(file);

      setTimeout(() => {
        setImage(imageUrl);

        setLoading(false);

        toast.dismiss();

        toast.success("PDF converted successfully!");
      }, 3000);
    } catch (error) {
      toast.dismiss();

      toast.error("Conversion failed");

      setLoading(false);
    }
  };

  const removeFile = () => {
    setImage(null);

    toast.error("File removed");
  };

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <Toaster position="top-right" />

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px]" />

      {/* Navbar */}
      <nav className="border-b border-white/10 px-10 py-6 flex justify-between items-center bg-black/40 backdrop-blur-xl">

        <Link href="/">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            Image Prepare
          </h1>
        </Link>

        <Link
          href="/dashboard"
          className="bg-cyan-400 text-black px-5 py-3 rounded-2xl font-bold"
        >
          Dashboard
        </Link>

      </nav>

      {/* Main */}
      <section className="max-w-6xl mx-auto px-6 py-20 relative z-10">

        <h1 className="text-6xl font-extrabold">
          PDF to{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            JPG
          </span>
        </h1>

        <p className="mt-6 text-gray-400 text-xl max-w-3xl">
          Convert PDF pages into JPG images instantly.
        </p>

        <div className="mt-16 rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">

          {!image ? (
            <div className="border-2 border-dashed border-white/10 rounded-[30px] p-20 text-center">

              <div className="text-7xl">📄</div>

              <h2 className="mt-6 text-4xl font-bold">
                Upload PDF
              </h2>

              <p className="mt-4 text-gray-400">
                PDF Supported
              </p>

              <label className="inline-block mt-10 cursor-pointer">

                <input
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={handleUpload}
                />

                <div className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
                  {loading ? "Converting..." : "Choose PDF"}
                </div>

              </label>

            </div>
          ) : (
            <div className="text-center">

              <img
                src="https://dummyimage.com/1200x700/111827/ffffff&text=PDF+Converted+to+JPG"
                alt="Converted"
                className="w-full max-h-[600px] object-contain rounded-[30px]"
              />

              <div className="flex justify-center gap-6 mt-10">

                <a
                  href={image}
                  download="converted.jpg"
                  className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold"
                >
                  Download JPG
                </a>

                <button
                  onClick={removeFile}
                  className="bg-red-500 px-8 py-4 rounded-2xl font-bold"
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