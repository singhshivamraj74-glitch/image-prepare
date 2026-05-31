"use client";

export default function UsersPage() {
  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-8">
        Users Management 👥
      </h1>

      <div className="border border-zinc-800 rounded-2xl p-6 bg-zinc-900">
        <h2 className="text-xl font-semibold mb-2">
          Registered Users
        </h2>

        <p className="text-gray-400">
          Users list will appear here.
        </p>
      </div>

    </div>
  );
}