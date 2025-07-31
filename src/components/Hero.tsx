// src/components/Hero.tsx

export default function Hero() {
  return (
    <section className="bg-white text-midnight py-24 px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center text-center relative">
      {/* Tagline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-montserrat mb-6 leading-tight">
        Content That Builds Your Brand While You Work.
      </h1>

      {/* Subheadline */}
      <p className="text-lg sm:text-xl text-gray-700 max-w-2xl font-lato mb-8">
        At Eclipsed Citadel, we combine AI automation with human-crafted strategy to deliver scroll-stopping content, fast.
        From short-form video to full content systems—we power your marketing while you grow your business.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#intake"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-200"
        >
          Start Your Journey →
        </a>
        <a
          href="#plans"
          className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-full font-semibold transition-all duration-200"
        >
          See Plans & Pricing
        </a>
      </div>

      {/* Decorative visual if needed */}
      {/* <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-20" /> */}
    </section>
  );
}
