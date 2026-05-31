"use client";

import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <Link
          href="/admin/blogs"
          className="border border-gray-700 p-6 rounded-xl hover:border-cyan-500"
        >
          <h2 className="text-xl font-bold">📝 Blogs</h2>
          <p>Manage blog posts</p>
        </Link>

        <div className="border border-gray-700 p-6 rounded-xl">
          <h2 className="text-xl font-bold">👥 Users</h2>
          <p>Manage registered users</p>
        </div>

        <div className="border border-gray-700 p-6 rounded-xl">
          <h2 className="text-xl font-bold">⚙️ Settings</h2>
          <p>Website settings</p>
        </div>

      </div>
    </div>
  );
}