"use client";

import { useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import jsPDF from "jspdf";

export default function JPGtoPDFPage() {

  const [image, setImage] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  const handleUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = e.target.files?.[0];

    if (!file) return;

    setLoading(true);

    toast.loading("Converting JPG to PDF...");

    const imageUrl = URL.createObjectURL(file);

    setTimeout(() => {

      setImage(imageUrl);

      setLoading(false);

      toast.dismiss();

      toast.success("PDF created successfully!");

    }, 2000);

  };

  const removeFile = () => {

    setImage(null);

    toast.error("File removed");

  };

  const downloadPDF = () => {

    if (!image) return;

    const pdf = new jsPDF();

    const img = new Image();

    img.src = image;

    img.onload = () => {

      pdf.addImage(img, "JPEG", 10, 10, 180, 160);

      pdf.save("image-prepare.pdf");

    };

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
          JPG to{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            PDF
          </span>
        </h1>

        <p className="mt-6 text-gray-400 text-xl max-w-3xl">
          Convert JPG and PNG images into high quality PDF documents instantly.
        </p>

        <div className="mt-16 rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">

          {!image ? (

            <div className="border-2 border-dashed border-white/10 rounded-[30px] p-20 text-center">

              <div className="text-7xl">📄</div>

              <h2 className="mt-6 text-4xl font-bold">
                Upload JPG Image
              </h2>

              <p className="mt-4 text-gray-400">
                JPG, PNG, WEBP Supported
              </p>

              <label className="inline-block mt-10 cursor-pointer">

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleUpload}
                />

                <div className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
                  {loading ? "Converting..." : "Choose Image"}
                </div>

              </label>

            </div>

          ) : (

            <div className="text-center">

              <img
                src={image}
                alt="Preview"
                className="w-full max-h-[600px] object-contain rounded-[30px]"
              />

              <div className="flex justify-center gap-6 mt-10">

                <button
                  onClick={downloadPDF}
                  className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold"
                >
                  Download PDF
                </button>

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