"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "@/firebase";

interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    try {
      const q = query(
        collection(db, "blogs"),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Blog, "id">),
      }));

      setBlogs(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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

      {loading ? (
        <div className="border border-gray-700 rounded-xl p-6">
          Loading Blogs...
        </div>
      ) : blogs.length === 0 ? (
        <div className="border border-gray-700 rounded-xl p-6">
          No Blogs Yet
        </div>
      ) : (
        <div className="space-y-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="border border-gray-700 rounded-xl p-6"
            >
              <h2 className="text-2xl font-bold mb-2">
                {blog.title}
              </h2>

              <p className="text-gray-400 mb-3">
                {blog.slug}
              </p>

              <div className="flex gap-3">
                <a
                  href={`/blog/${blog.slug}`}
                  target="_blank"
                  className="bg-green-600 px-4 py-2 rounded"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}