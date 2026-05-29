"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

export default function BlogPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const snapshot = await getDocs(collection(db, "blogs"));

      const blogs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const foundBlog = blogs.find(
        (item: any) => item.slug === slug
      );

      setBlog(foundBlog);
    };

    fetchBlog();
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white p-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6">
        {blog.title}
      </h1>

      <div className="text-gray-300 whitespace-pre-wrap text-lg">
        {blog.content}
      </div>
    </div>
  );
}