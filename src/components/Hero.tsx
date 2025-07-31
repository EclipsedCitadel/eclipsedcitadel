// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-24 text-center px-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-midnight mb-4">
        Welcome to Eclipsed Citadel
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
        AI-powered content creation for small businesses. From videos to social posts —
        we handle your marketing while you grow your business.
      </p>
    </section>
  );
}
