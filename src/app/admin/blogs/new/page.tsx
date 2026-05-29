"use client";

export default function NewBlogPage() {
  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-8">
        Create Blog
      </h1>

      <form className="space-y-5">

        <input
          placeholder="Blog Title"
          className="w-full p-3 rounded bg-zinc-900"
        />

        <input
          placeholder="Slug"
          className="w-full p-3 rounded bg-zinc-900"
        />

        <textarea
          placeholder="Blog Content"
          rows={12}
          className="w-full p-3 rounded bg-zinc-900"
        />

        <button
          type="submit"
          className="bg-cyan-600 px-6 py-3 rounded-lg"
        >
          Publish Blog
        </button>

      </form>

    </div>
  );
}