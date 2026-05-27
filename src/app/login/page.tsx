"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { auth, googleProvider } from "../../firebase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // EMAIL LOGIN
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login Successful 🚀");

      router.push("/dashboard");

    } catch (error: any) {
      alert(error.message);
    }
  };

  // GOOGLE LOGIN
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);

      alert("Google Login Successful 🚀");

      router.push("/dashboard");

    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full"></div>

      <div className="relative z-10 grid lg:grid-cols-2 min-h-screen">

        {/* LEFT */}
        <div className="hidden lg:flex flex-col justify-center px-20">

          <div className="mb-10">
            <div className="inline-block px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm">
              🚀 AI Powered Platform
            </div>
          </div>

          <h1 className="text-7xl font-extrabold leading-tight">
            Future of <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Image Prepare
            </span>
          </h1>

          <p className="text-gray-400 text-xl mt-8 max-w-xl leading-relaxed">
            Convert, compress, edit, optimize and transform images & PDFs instantly.
          </p>

        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-center px-6 py-10">

          <div className="w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[35px] p-10 shadow-2xl">

            <div className="text-center mb-10">

              <h1 className="text-5xl font-extrabold">
                Welcome Back
              </h1>

              <p className="text-gray-400 mt-4">
                Login to continue your AI workspace
              </p>

            </div>

            <div className="space-y-5">

              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none"
              />

              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none"
              />

              <button
                onClick={handleLogin}
                className="w-full py-4 rounded-2xl bg-cyan-400 text-black font-bold text-lg"
              >
                Login 🚀
              </button>

              <button
                onClick={handleGoogleLogin}
                className="w-full py-4 rounded-2xl bg-white text-black font-bold text-lg"
              >
                Continue with Google
              </button>

            </div>

          </div>
        </div>
      </div>
    </main>
  );
}