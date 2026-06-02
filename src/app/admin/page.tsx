"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/firebase";
import { signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

export default function AdminPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [blogCount, setBlogCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);

  useEffect(() => {
    const checkAdmin = async () => {
      const user = auth.currentUser;

      if (!user) {
        router.push("/login");
        return;
      }

      if (user.email !== "singhshivamraj74@gmail.com") {
        router.push("/");
        return;
      }

      setEmail(user.email || "");

      try {
        const blogsSnapshot = await getDocs(
          collection(db, "blogs")
        );

        setBlogCount(blogsSnapshot.size);

        const usersSnapshot = await getDocs(
          collection(db, "users")
        );

        setUsersCount(usersSnapshot.size);

      } catch (error) {
        console.log(error);
      }
    };

    checkAdmin();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-12">

      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-5xl font-bold">
            Admin Dashboard 🚀
          </h1>

          <p className="text-gray-400 mt-2">
            Welcome, {email}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl"
        >
          Logout
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
          <h3 className="text-gray-400">Blogs</h3>

          <p className="text-5xl font-bold mt-3">
            {blogCount}
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
          <h3 className="text-gray-400">Users</h3>

          <p className="text-5xl font-bold mt-3">
            {usersCount}
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
          <h3 className="text-gray-400">Status</h3>

          <p className="text-green-500 text-3xl font-bold mt-3">
            Online
          </p>
        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <Link
          href="/admin/blogs"
          className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-cyan-500 transition"
        >
          <div className="text-5xl mb-4">
            📝
          </div>

          <h2 className="text-2xl font-bold mb-2">
            Blogs
          </h2>

          <p className="text-gray-400">
            Manage blog posts
          </p>
        </Link>

        <Link
          href="/admin/users"
          className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-cyan-500 transition"
        >
          <div className="text-5xl mb-4">
            👥
          </div>

          <h2 className="text-2xl font-bold mb-2">
            Users
          </h2>

          <p className="text-gray-400">
            Manage registered users
          </p>
        </Link>

        <Link
          href="/admin/settings"
          className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-cyan-500 transition"
        >
          <div className="text-5xl mb-4">
            ⚙️
          </div>

          <h2 className="text-2xl font-bold mb-2">
            Settings
          </h2>

          <p className="text-gray-400">
            Website configuration
          </p>
        </Link>

      </div>

    </div>
  );
}