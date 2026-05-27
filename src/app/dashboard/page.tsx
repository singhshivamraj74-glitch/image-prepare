"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const router = useRouter();

  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const user = auth.currentUser;

    if (user) {
      setUserEmail(user.email || "");
    } else {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);

    router.push("/login");
  };

  return (
    <main className="min-h-screen bg-black text-white flex">

      {/* Sidebar */}
      <aside className="w-[260px] border-r border-white/10 p-6 flex flex-col justify-between">

        <div>

          <h1 className="text-5xl font-extrabold leading-tight">
            <span className="text-cyan-400">Image</span>
            <br />
            <span className="text-purple-500">Prepare</span>
          </h1>

          <div className="mt-12 space-y-4">

            <Link
              href="/dashboard"
              className="block bg-cyan-400 text-black px-5 py-4 rounded-2xl font-bold"
            >
              Dashboard
            </Link>

            <Link
              href="/tools/ai-enhance"
              className="block border border-white/10 px-5 py-4 rounded-2xl hover:bg-white/5 transition"
            >
              AI Enhance
            </Link>

            <Link
              href="/tools/background-remove"
              className="block border border-white/10 px-5 py-4 rounded-2xl hover:bg-white/5 transition"
            >
              Background Remove
            </Link>

            <Link
              href="/tools/compress-image"
              className="block border border-white/10 px-5 py-4 rounded-2xl hover:bg-white/5 transition"
            >
              Compress Image
            </Link>

            <Link
              href="/tools/jpg-to-pdf"
              className="block border border-white/10 px-5 py-4 rounded-2xl hover:bg-white/5 transition"
            >
              JPG to PDF
            </Link>

            <Link
              href="/tools/pdf-to-jpg"
              className="block border border-white/10 px-5 py-4 rounded-2xl hover:bg-white/5 transition"
            >
              PDF to JPG
            </Link>

            <Link
              href="/tools/compress-pdf"
              className="block border border-white/10 px-5 py-4 rounded-2xl hover:bg-white/5 transition"
            >
              Compress PDF
            </Link>

          </div>

        </div>

        {/* User */}
        <div className="border border-white/10 rounded-3xl p-5 bg-white/5">

          <p className="text-gray-400 text-sm">
            Logged in as
          </p>

          <h2 className="mt-2 font-bold break-all">
            {userEmail}
          </h2>

          <button
            onClick={handleLogout}
            className="w-full mt-5 bg-red-500 py-3 rounded-2xl font-bold hover:bg-red-600 transition"
          >
            Logout
          </button>

        </div>

      </aside>

      {/* Main */}
      <section className="flex-1 overflow-y-auto">

        {/* Top */}
        <div className="border-b border-white/10 px-10 py-8 flex justify-between items-center">

          <div>
            <h1 className="text-5xl font-extrabold">
              AI Workspace
            </h1>

            <p className="text-gray-400 mt-2">
              Professional AI editing platform
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl">
            {userEmail}
          </div>

        </div>

        {/* Content */}
        <div className="p-10">

          <h2 className="text-6xl font-extrabold leading-tight max-w-5xl">
            Professional AI Editing Platform
          </h2>

          <p className="mt-6 text-gray-400 text-xl max-w-3xl">
            Convert, compress, edit and transform images & PDFs instantly using AI tools.
          </p>

          {/* Tools */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <Link
              href="/tools/ai-enhance"
              className="border border-white/10 rounded-3xl p-8 hover:bg-white/5 transition"
            >
              <h3 className="text-3xl font-bold">
                AI Enhance
              </h3>

              <p className="text-gray-400 mt-4">
                Improve image quality instantly.
              </p>
            </Link>

            <Link
              href="/tools/background-remove"
              className="border border-white/10 rounded-3xl p-8 hover:bg-white/5 transition"
            >
              <h3 className="text-3xl font-bold">
                Background Remove
              </h3>

              <p className="text-gray-400 mt-4">
                Remove backgrounds automatically.
              </p>
            </Link>

            <Link
              href="/tools/compress-image"
              className="border border-white/10 rounded-3xl p-8 hover:bg-white/5 transition"
            >
              <h3 className="text-3xl font-bold">
                Compress Image
              </h3>

              <p className="text-gray-400 mt-4">
                Compress images without losing quality.
              </p>
            </Link>

            <Link
              href="/tools/jpg-to-pdf"
              className="border border-white/10 rounded-3xl p-8 hover:bg-white/5 transition"
            >
              <h3 className="text-3xl font-bold">
                JPG to PDF
              </h3>

              <p className="text-gray-400 mt-4">
                Convert JPG images into PDFs.
              </p>
            </Link>

            <Link
              href="/tools/pdf-to-jpg"
              className="border border-white/10 rounded-3xl p-8 hover:bg-white/5 transition"
            >
              <h3 className="text-3xl font-bold">
                PDF to JPG
              </h3>

              <p className="text-gray-400 mt-4">
                Convert PDF pages into images.
              </p>
            </Link>

            <Link
              href="/tools/compress-pdf"
              className="border border-white/10 rounded-3xl p-8 hover:bg-white/5 transition"
            >
              <h3 className="text-3xl font-bold">
                Compress PDF
              </h3>

              <p className="text-gray-400 mt-4">
                Reduce PDF file size instantly.
              </p>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}