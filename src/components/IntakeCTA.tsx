export default function IntakeCTA() {
  return (
    <section
      id="intake-cta"
      className="bg-orange-500 text-white py-20 px-6 md:px-12 text-center relative overflow-hidden"
    >
      <h2 className="text-4xl sm:text-5xl font-bold font-montserrat mb-4">
        Ready to Grow Your Brand?
      </h2>
      <p className="text-lg sm:text-xl font-lato max-w-2xl mx-auto mb-8">
        Let Eclipsed Citadel handle the content—so you can focus on results. Start your onboarding in minutes.
      </p>
      <a
        href="#intake"
        className="bg-white text-orange-600 hover:bg-orange-100 font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-200"
      >
        Start My Intake →
      </a>

      {/* Optional visual accent */}
      <div className="absolute top-[-40px] left-[-40px] w-48 h-48 bg-white opacity-10 rounded-full blur-2xl" />
      <div className="absolute bottom-[-40px] right-[-40px] w-32 h-32 bg-white opacity-10 rounded-full blur-2xl" />
    </section>
  );
}
