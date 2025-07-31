// components/Testimonials.tsx

export default function Testimonials() {
  const reviews = [
    {
      name: "Jordan M.",
      role: "Founder, BrightNest Co.",
      text: "Eclipsed Citadel helped us generate polished content every week—without the delays or agency fees. Total game-changer.",
    },
    {
      name: "Carmen T.",
      role: "Owner, Tidy Tiger Spa",
      text: "The AI videos are actually good. I was shocked. The team’s delivery was fast, and the content looked like we paid thousands.",
    },
    {
      name: "Dev Patel",
      role: "Digital Marketer, KarmaWell",
      text: "I tested the Silver plan and got a full content drop that saved us hours of time. The graphics and captions were totally brand-aligned.",
    },
    {
      name: "Alex R.",
      role: "Shopify Store Owner",
      text: "Finally—someone gets small business content! It’s fast, effective, and feels like I’ve got a full-time team behind me.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <h2 className="text-4xl font-bold font-montserrat text-midnight text-center mb-4">
        What Clients Are Saying
      </h2>
      <p className="text-lg text-gray-700 text-center mb-12 font-lato max-w-2xl mx-auto">
        Trusted by founders, creators, and teams who need scroll-stopping content—fast.
      </p>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm transition hover:shadow-md"
          >
            <p className="text-gray-800 text-base mb-4 font-lato leading-relaxed">
              “{review.text}”
            </p>
            <div className="text-sm text-gray-600 font-lato">
              <strong>{review.name}</strong><br />
              <span className="text-xs text-gray-500">{review.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
