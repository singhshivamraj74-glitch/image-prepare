"use client";

import Link from "next/link";

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-10">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Blog Manager
        </h1>

        <Link
          href="/admin/blogs/new"
          className="bg-cyan-600 px-4 py-2 rounded-lg"
        >
          Create Blog
        </Link>
      </div>

      <div className="border border-gray-700 rounded-xl p-6">
        No Blogs Yet
      </div>

    </div>
  );
}