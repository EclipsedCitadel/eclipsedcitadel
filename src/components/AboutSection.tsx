// components/AboutSection.tsx
export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24 text-center">
      <h2 className="text-4xl font-bold font-montserrat text-midnight mb-6">
        Built on Values. Driven by Mission.
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 font-lato">
        At Eclipsed Citadel, we're more than a content studio. We're a strategic partner—
        built to help founders grow faster with AI-powered, agency-quality content.
      </p>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3 text-left">
        {/* Core Values */}
        <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-orange-500">
          <h3 className="text-2xl font-semibold text-midnight mb-3">🧱 Core Values</h3>
          <ul className="text-gray-700 list-disc list-inside space-y-1 font-lato">
            <li><strong>Accessibility</strong> – Tools & pricing made for small businesses</li>
            <li><strong>Innovation</strong> – AI workflows that evolve constantly</li>
            <li><strong>Transparency</strong> – No fluff. No lock-ins.</li>
            <li><strong>Client-First</strong> – Built around your growth</li>
            <li><strong>Education</strong> – We teach as we build</li>
          </ul>
        </div>

        {/* Mission */}
        <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-orange-500">
          <h3 className="text-2xl font-semibold text-midnight mb-3">✨ Mission</h3>
          <p className="text-gray-700 font-lato">
            Empower small and medium-sized businesses to grow with AI-generated content that looks handcrafted—
            without the overhead of an agency.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-orange-500">
          <h3 className="text-2xl font-semibold text-midnight mb-3">🌍 Vision</h3>
          <p className="text-gray-700 font-lato">
            Become the go-to content engine for founders, solopreneurs, and small teams—
            combining automation, creativity, and clarity in every campaign.
          </p>
        </div>
      </div>
    </section>
  );
}
