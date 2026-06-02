"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

export default function SettingsPage() {
  const [websiteName, setWebsiteName] = useState("");
  const [supportEmail, setSupportEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const docRef = doc(db, "settings", "website");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();

        setWebsiteName(data.websiteName || "");
        setSupportEmail(data.supportEmail || "");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const saveSettings = async () => {
    try {
      await setDoc(doc(db, "settings", "website"), {
        websiteName,
        supportEmail,
      });

      alert("Settings Saved Successfully 🚀");
    } catch (error) {
      console.log(error);
      alert("Failed to save settings");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white p-10">
        Loading...
      </div>
    );
  }

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
            value={websiteName}
            onChange={(e) =>
              setWebsiteName(e.target.value)
            }
            className="w-full p-3 rounded bg-black border border-zinc-700"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2">
            Support Email
          </label>

          <input
            type="email"
            value={supportEmail}
            onChange={(e) =>
              setSupportEmail(e.target.value)
            }
            className="w-full p-3 rounded bg-black border border-zinc-700"
          />
        </div>

        <button
          onClick={saveSettings}
          className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg"
        >
          Save Settings
        </button>

      </div>

    </div>
  );
}