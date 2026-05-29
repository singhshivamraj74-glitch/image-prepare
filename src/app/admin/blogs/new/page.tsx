"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";

export default function NewBlogPage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const publishBlog = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !slug || !content) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "blogs"), {
        title,
        slug,
        content,
        createdAt: serverTimestamp(),
      });

      alert("Blog Published Successfully!");

      setTitle("");
      setSlug("");
      setContent("");
    } catch (error) {
      console.error(error);
      alert("Failed to publish blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Create Blog
      </h1>

      <form onSubmit={publishBlog} className="space-y-5">

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Blog Title"
          className="w-full p-3 rounded bg-zinc-900"
        />

        <input
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="Slug (example: jpg-to-pdf-guide)"
          className="w-full p-3 rounded bg-zinc-900"
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Blog Content"
          rows={12}
          className="w-full p-3 rounded bg-zinc-900"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-cyan-600 px-6 py-3 rounded-lg"
        >
          {loading ? "Publishing..." : "Publish Blog"}
        </button>

      </form>
    </div>
  );
}