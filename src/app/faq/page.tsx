export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">
          Frequently Asked Questions
        </h1>

        <div className="space-y-8">

          <div>
            <h2 className="text-2xl font-bold">
              Is Image Prepare free?
            </h2>

            <p className="text-gray-400 mt-3">
              Yes, most tools are free to use.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Are uploaded files secure?
            </h2>

            <p className="text-gray-400 mt-3">
              Yes, files are processed securely.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}