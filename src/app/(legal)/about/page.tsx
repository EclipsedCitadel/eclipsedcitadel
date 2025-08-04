export const metadata = {
  title: "About Us | Eclipsed Citadel",
  description: "Meet our mission, mascots, and values. Learn how Eclipsed Citadel empowers small businesses with AI marketing.",
};

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white text-midnight px-6 md:px-12 lg:px-32 py-20 font-lato">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">About Eclipsed Citadel</h1>
        <p className="text-lg text-gray-700 mb-8">
          Eclipsed Citadel is an AI-powered creative studio built for small business growth. We combine
          automation and human strategy to deliver premium, affordable marketing content—at scale.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16 mb-12">
          <div className="text-center">
            <img src="/nova.png" alt="Nova the Owl" className="mx-auto h-40 mb-4 rounded-xl shadow-md" />
            <h3 className="font-montserrat font-semibold text-xl">🦉 Nova – The Watcher</h3>
            <p className="text-sm text-gray-600">Vision, clarity, insight. Holds the scroll of strategy.</p>
          </div>
          <div className="text-center">
            <img src="/tarin.png" alt="Tarin the Elephant" className="mx-auto h-40 mb-4 rounded-xl shadow-md" />
            <h3 className="font-montserrat font-semibold text-xl">🐘 Tarin – The Architect</h3>
            <p className="text-sm text-gray-600">Stability, systems, structure. Carries the tablet of execution.</p>
          </div>
          <div className="text-center">
            <img src="/raxa.png" alt="Raxa the Tiger" className="mx-auto h-40 mb-4 rounded-xl shadow-md" />
            <h3 className="font-montserrat font-semibold text-xl">🐅 Raxa – The Striker</h3>
            <p className="text-sm text-gray-600">Speed, action, impact. Wields the stopwatch of momentum.</p>
          </div>
        </div>

        <section className="mt-16 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold font-montserrat mb-2">🌟 Our Mission</h2>
            <p className="text-gray-700">
              To empower small and mid-sized businesses with beautiful, high-performing marketing content
              using the power of AI—without sacrificing quality, strategy, or personalization.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold font-montserrat mb-2">🔭 Our Vision</h2>
            <p className="text-gray-700">
              Become the go-to content engine for small business growth—turnkey, transparent, and
              transformative.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold font-montserrat mb-2">🧱 Our Values</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Accessibility</strong> – Content creation should be affordable and achievable.</li>
              <li><strong>Reliability</strong> – Deliverables on time, every time.</li>
              <li><strong>Innovation</strong> – Leverage AI to push creative boundaries.</li>
              <li><strong>Transparency</strong> – Honest pricing, clear communication, real results.</li>
              <li><strong>Client-First</strong> – Strategy tailored to your brand goals.</li>
              <li><strong>Education</strong> – Empowering you with insights, not just assets.</li>
            </ul>
          </div>
        </section>

        <p className="text-sm text-gray-500 mt-12">Last updated: July 31, 2025</p>
      </section>
    </main>
  );
}
