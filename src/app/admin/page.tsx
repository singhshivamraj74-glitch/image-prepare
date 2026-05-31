"use client";

import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-12">

      <div className="mb-10">
        <h1 className="text-5xl font-bold mb-2">
          Admin Dashboard 🚀
        </h1>

        <p className="text-gray-400">
          Manage blogs, users and website settings from one place.
        </p>
      </div>

      {/* Stats Cards */}

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h3 className="text-gray-400 text-sm">
            Total Blogs
          </h3>

          <p className="text-4xl font-bold mt-2">
            1
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h3 className="text-gray-400 text-sm">
            Total Users
          </h3>

          <p className="text-4xl font-bold mt-2">
            0
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h3 className="text-gray-400 text-sm">
            Website Status
          </h3>

          <p className="text-green-500 text-2xl font-bold mt-2">
            Online
          </p>
        </div>

      </div>

      {/* Management Cards */}

      <div className="grid md:grid-cols-3 gap-6">

        <Link
          href="/admin/blogs"
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-cyan-500 hover:scale-105 transition-all duration-300"
        >
          <div className="text-5xl mb-4">
            📝
          </div>

          <h2 className="text-2xl font-bold mb-2">
            Blogs
          </h2>

          <p className="text-gray-400">
            Create, edit and delete blog posts.
          </p>
        </Link>

        <Link
          href="/admin/users"
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-cyan-500 hover:scale-105 transition-all duration-300"
        >
          <div className="text-5xl mb-4">
            👥
          </div>

          <h2 className="text-2xl font-bold mb-2">
            Users
          </h2>

          <p className="text-gray-400">
            Manage registered users.
          </p>
        </Link>

        <Link
          href="/admin/settings"
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-cyan-500 hover:scale-105 transition-all duration-300"
        >
          <div className="text-5xl mb-4">
            ⚙️
          </div>

          <h2 className="text-2xl font-bold mb-2">
            Settings
          </h2>

          <p className="text-gray-400">
            Control website configuration.
          </p>
        </Link>

      </div>

    </div>
  );
}