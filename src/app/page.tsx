import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px]" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6 border-b border-white/10 bg-black/30 backdrop-blur-2xl">

        <h1 className="text-3xl font-bold">
          Image Prepare
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300 font-medium">

          <Link href="/" className="hover:text-cyan-400 transition">
            Home
          </Link>

          <Link href="/dashboard" className="hover:text-cyan-400 transition">
            Tools
          </Link>

          <Link href="/dashboard" className="hover:text-cyan-400 transition">
            AI Studio
          </Link>

          <Link href="/dashboard" className="hover:text-cyan-400 transition">
            Pricing
          </Link>

          <Link href="/login" className="hover:text-cyan-400 transition">
            Contact
          </Link>

        </div>

        <Link
          href="/signup"
          className="px-5 py-3 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition"
        >
          Get Started
        </Link>

      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-40">

        <div className="bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm backdrop-blur-xl">
          🚀 AI Powered Image • PDF • Document Tools
        </div>

        <h1 className="mt-10 text-7xl md:text-8xl font-extrabold leading-tight max-w-6xl">
  Best Free AI Image & PDF Tools
</h1>
        <p className="mt-8 text-xl text-gray-400 max-w-3xl leading-relaxed">
          Convert, enhance, compress, edit and transform images, PDFs and documents instantly with powerful AI automation.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <Link
            href="/signup"
            className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >
            Start Free
          </Link>

          <Link
            href="/dashboard"
            className="bg-white/10 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/20 transition"
          >
            Try AI Studio
          </Link>

        </div>

        {/* Main Dashboard Card */}
        <div className="mt-24 w-full max-w-7xl rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 shadow-2xl">

          <div className="grid md:grid-cols-3 gap-8">

            <Link href="/dashboard">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:-translate-y-2 transition duration-300 cursor-pointer">

                <h2 className="text-3xl font-bold">
                  AI Enhance
                </h2>

                <p className="mt-4 text-gray-400">
                  Enhance low quality images instantly with AI automation.
                </p>

              </div>
            </Link>

            <Link href="/dashboard">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:-translate-y-2 transition duration-300 cursor-pointer">

                <h2 className="text-3xl font-bold">
                  PDF Tools
                </h2>

                <p className="mt-4 text-gray-400">
                  Merge, split, compress and convert PDFs instantly.
                </p>

              </div>
            </Link>

            <Link href="/dashboard">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:-translate-y-2 transition duration-300 cursor-pointer">

                <h2 className="text-3xl font-bold">
                  AI Background
                </h2>

                <p className="mt-4 text-gray-400">
                  Remove image backgrounds automatically using AI.
                </p>

              </div>
            </Link>

          </div>

        </div>

      </section>

      {/* AI Tools Collection */}
      <section className="mt-40 px-6">

        <h2 className="text-6xl font-bold text-center">
          AI Tools Collection
        </h2>

        <p className="text-center text-gray-400 mt-4 text-xl">
          Powerful tools for creators, professionals and students.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-7xl mx-auto">

          {[
            "JPG to PDF",
            "PDF to JPG",
            "AI Enhancer",
            "Background Remover",
            "OCR Scanner",
            "Resume Builder",
            "AI Retouch",
            "Thumbnail Maker",
            "PDF Compressor",
            "Merge PDF",
            "Split PDF",
            "AI Chat Assistant",
          ].map((tool, index) => (
            <Link key={index} href="/dashboard">
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-cyan-500/10 transition cursor-pointer text-xl font-semibold">
                {tool}
              </div>
            </Link>
          ))}

        </div>

      </section>

      {/* Features */}
      <section className="mt-40 px-6">

        <h2 className="text-6xl font-bold text-center">
          Powerful AI Features
        </h2>

        <p className="text-center text-gray-400 mt-4 text-xl">
          Everything you need for image and document editing.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto">
<Link href="/dashboard">
  <div className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:-translate-y-2 transition duration-300 cursor-pointer">

    <h3 className="text-4xl font-bold">
      🖼 AI Image Editing
    </h3>

    <p className="mt-6 text-gray-400 text-lg">
      Remove backgrounds, enhance quality and upscale photos with AI.
    </p>

  </div>
</Link>

        <Link href="/dashboard">
  <div className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:-translate-y-2 transition duration-300 cursor-pointer">

    <h3 className="text-4xl font-bold">
      📄 PDF Automation
    </h3>

    <p className="mt-6 text-gray-400 text-lg">
      Convert, compress, watermark and merge PDF files instantly.
    </p>

  </div>
</Link>
         <Link href="/dashboard">
  <div className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:-translate-y-2 transition duration-300 cursor-pointer">

    <h3 className="text-4xl font-bold">
      🤖 AI Prompt Editing
    </h3>

    <p className="mt-6 text-gray-400 text-lg">
      Give prompts like "Make cinematic" or "Turn into resume".
    </p>

  </div>
</Link>

        </div>

      </section>

      {/* Pricing */}
      <section className="mt-40 px-6">

        <h2 className="text-6xl font-bold text-center">
          Simple Pricing
        </h2>

        <p className="text-center text-gray-400 mt-4 text-xl">
          Choose the best plan for your workflow.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-20 max-w-7xl mx-auto">

          <div className="p-10 rounded-[35px] bg-white/5 border border-white/10">
            <h3 className="text-5xl font-bold">
              Free
            </h3>

            <div className="mt-8 text-7xl font-extrabold">
              ₹0
            </div>

            <ul className="mt-8 space-y-4 text-gray-300 text-lg">
              <li>✓ JPG/PDF Tools</li>
              <li>✓ Basic AI Features</li>
              <li>✓ Limited Downloads</li>
            </ul>

            <Link
              href="/signup"
              className="mt-10 block text-center bg-white/10 py-4 rounded-2xl hover:bg-white/20 transition"
            >
              Start Free
            </Link>
          </div>

          <div className="p-10 rounded-[35px] bg-gradient-to-b from-cyan-500/30 to-purple-500/20 border border-cyan-400">

            <div className="bg-cyan-400 text-black inline-block px-5 py-2 rounded-full font-bold">
              MOST POPULAR
            </div>

            <h3 className="mt-8 text-5xl font-bold">
              Pro
            </h3>

            <div className="mt-8 text-7xl font-extrabold">
              ₹499
            </div>

            <ul className="mt-8 space-y-4 text-gray-200 text-lg">
              <li>✓ Unlimited AI Editing</li>
              <li>✓ HD Downloads</li>
              <li>✓ AI Background Removal</li>
              <li>✓ AI Enhancement</li>
              <li>✓ Faster Processing</li>
            </ul>

            <Link
              href="/signup"
              className="mt-10 block text-center bg-cyan-400 text-black font-bold py-4 rounded-2xl hover:scale-105 transition"
            >
              Upgrade Now
            </Link>

          </div>

          <div className="p-10 rounded-[35px] bg-white/5 border border-white/10">
            <h3 className="text-5xl font-bold">
              Enterprise
            </h3>

            <div className="mt-8 text-6xl font-extrabold">
              Custom
            </div>

            <ul className="mt-8 space-y-4 text-gray-300 text-lg">
              <li>✓ Team Collaboration</li>
              <li>✓ API Access</li>
              <li>✓ Dedicated Support</li>
            </ul>

            <Link
              href="/login"
              className="mt-10 block text-center bg-white/10 py-4 rounded-2xl hover:bg-white/20 transition"
            >
              Contact Us
            </Link>
          </div>

        </div>

      </section>

      {/* Testimonials */}
      <section className="mt-40 px-6">

        <h2 className="text-6xl font-bold text-center">
          Loved by Creators
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-7xl mx-auto">

          <div className="p-10 rounded-3xl bg-white/5 border border-white/10">
            <p className="text-xl text-gray-300">
              “Best AI editing platform I’ve ever used.”
            </p>

            <h4 className="mt-8 text-3xl font-bold">
              Rahul Sharma
            </h4>
          </div>

          <div className="p-10 rounded-3xl bg-white/5 border border-white/10">
            <p className="text-xl text-gray-300">
              “Looks like a billion-dollar startup product.”
            </p>

            <h4 className="mt-8 text-3xl font-bold">
              Priya Verma
            </h4>
          </div>

          <div className="p-10 rounded-3xl bg-white/5 border border-white/10">
            <p className="text-xl text-gray-300">
              “AI tools are insanely powerful and fast.”
            </p>

            <h4 className="mt-8 text-3xl font-bold">
              Aman Gupta
            </h4>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="mt-40 border-t border-white/10 py-16 px-10">

        <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto">

          <div>
            <h2 className="text-5xl font-bold">
              Image Prepare
            </h2>

            <p className="mt-6 text-gray-400 text-lg">
              AI-powered image and document editing platform.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">
              Tools
            </h3>

            <ul className="mt-6 space-y-3 text-gray-400">
             <li>
  <Link href="/dashboard">AI Enhance</Link>
</li>

<li>
  <Link href="/dashboard">PDF Tools</Link>
</li>

<li>
  <Link href="/dashboard">OCR Scanner</Link>
</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold">
              Company
            </h3>

            <ul className="mt-6 space-y-3 text-gray-400">
              <li>
  <Link href="/">About</Link>
</li>

<li>
  <Link href="/dashboard">Pricing</Link>
</li>

<li>
  <Link href="/login">Contact</Link>
</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold">
              Follow Us
            </h3>

            <ul className="mt-6 space-y-3 text-gray-400">
             <li><a href="#">Instagram</a></li>
<li><a href="#">YouTube</a></li>
<li><a href="#">LinkedIn</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-gray-500">
          © 2026 Image Prepare. All rights reserved.
        </div>

      </footer>
<section className="max-w-6xl mx-auto px-6 py-20">

  <h2 className="text-4xl font-bold">
    Free Online Image & PDF Tools
  </h2>

  <p className="text-gray-400 mt-6 leading-8 text-lg">
    Image Prepare is a modern online platform that provides free image and PDF tools.
    Users can compress images, convert JPG to PDF, convert PDF to JPG and optimize files instantly.
  </p>

  <p className="text-gray-400 mt-6 leading-8 text-lg">
    Our platform is fast, secure and easy to use for everyone.
    All tools work directly online without complicated software installation.
  </p>

  <div className="grid md:grid-cols-3 gap-8 mt-16">

    <div className="border border-white/10 rounded-3xl p-8 bg-white/5">
      <h3 className="text-2xl font-bold">
        Compress Images
      </h3>

      <p className="text-gray-400 mt-4">
        Reduce image size online without losing quality.
      </p>
    </div>

    <div className="border border-white/10 rounded-3xl p-8 bg-white/5">
      <h3 className="text-2xl font-bold">
        JPG to PDF
      </h3>

      <p className="text-gray-400 mt-4">
        Convert JPG images into PDF documents instantly.
      </p>
    </div>

    <div className="border border-white/10 rounded-3xl p-8 bg-white/5">
      <h3 className="text-2xl font-bold">
        PDF to JPG
      </h3>

      <p className="text-gray-400 mt-4">
        Convert PDF pages into high quality JPG images.
      </p>
    </div>

  </div>

</section>

    </main>
  );
}