"use client";

import Link from "next/link";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSignup = async () => {
    if (!checked) {
      alert("Please accept Terms & Conditions");
      return;
    }

    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Account Created Successfully 🚀");

      window.location.href = "/dashboard";
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-5 overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px]" />

      {/* Signup Card */}
      <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[35px] p-10 shadow-2xl">

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold leading-tight">
            Join{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Image Prepare
            </span>
          </h1>

          <p className="text-gray-400 mt-4 text-sm">
            AI Powered Image & PDF Tools Platform
          </p>
        </div>

        {/* Inputs */}
        <div className="space-y-5">

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 outline-none focus:border-cyan-400 transition"
          />

          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 outline-none focus:border-cyan-400 transition"
          />

          {/* Checkbox */}
          <div className="flex items-center gap-3 text-sm text-gray-400">

            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              className="w-4 h-4 accent-cyan-400"
            />

            <p>
              I agree to the{" "}
              <span className="text-cyan-400">
                Terms & Conditions
              </span>
            </p>

          </div>

          {/* Button */}
          <button
            onClick={handleSignup}
            className="w-full py-4 rounded-2xl bg-cyan-400 text-black font-bold text-lg hover:scale-105 hover:bg-cyan-300 transition duration-300"
          >
            Create Free Account
          </button>

          {/* Login Link */}
          <div className="text-center text-sm text-gray-500 pt-4">

            Already have an account?{" "}

            <Link
              href="/login"
              className="text-cyan-400 hover:text-cyan-300 transition"
            >
              Login
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}