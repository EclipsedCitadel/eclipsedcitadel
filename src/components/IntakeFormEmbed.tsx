// src/components/IntakeFormEmbed.tsx

export default function IntakeFormEmbed() {
  return (
    <section id="intake" className="bg-light py-24 px-6 md:px-12 lg:px-24 text-center">
      <h2 className="text-4xl font-bold text-midnight font-montserrat mb-4">
        Start Your Journey
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10 font-lato">
        Fill out the quick intake form below to help us understand your content goals,
        brand style, and timeline. We’ll take it from there!
      </p>

      {/* Embed Google Form */}
      <div className="w-full max-w-4xl mx-auto aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/9] overflow-hidden rounded-xl shadow-lg">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSekTiJkxBmUiddsXjQjAOlO_zSJyfGZTSvBjHKLFaMgFo3UJw/viewform?usp=dialog"
          width="100%"
          height="100%"
          className="w-full h-full border-none"
          loading="lazy"
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
}
