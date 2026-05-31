"use client";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-8">
        Website Settings ⚙️
      </h1>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

        <div className="mb-6">
          <label className="block mb-2">
            Website Name
          </label>

          <input
            type="text"
            defaultValue="Image Prepare"
            className="w-full p-3 rounded bg-black border border-zinc-700"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2">
            Support Email
          </label>

          <input
            type="email"
            defaultValue="support@imageprepare.com"
            className="w-full p-3 rounded bg-black border border-zinc-700"
          />
        </div>

        <button className="bg-cyan-600 px-6 py-3 rounded-lg">
          Save Settings
        </button>

      </div>

    </div>
  );
}