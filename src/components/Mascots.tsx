import Image from "next/image";

const mascots = [
  {
    name: "Nova – The Watcher",
    image: "/nova.png",
    role: "🦉 Strategy & Insight",
    symbol: "📜",
    quote: "“See what others miss.”",
    traits: ["Vision", "Precision", "Perspective"],
  },
  {
    name: "Tarin – The Architect",
    image: "/tarin.png",
    role: "🐘 Systems & Execution",
    symbol: "📲",
    quote: "“Build what others won’t.”",
    traits: ["Order", "Systems", "Stability"],
  },
  {
    name: "Raxa – The Striker",
    image: "/raxa.png",
    role: "🐅 Motion & Momentum",
    symbol: "⏱",
    quote: "“Move when others wait.”",
    traits: ["Speed", "Timing", "Efficiency"],
  },
];

export default function Mascots() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#F5F5F5] text-midnight">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-montserrat mb-4">
          Meet the Guardians of the Citadel
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto font-lato">
          Three mindsets. One mission: Help small brands grow with clarity, creativity, and motion.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
        {mascots.map((mascot, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-center flex flex-col items-center hover:scale-105 hover:shadow-xl transition duration-300"
          >
            <Image
              src={mascot.image}
              alt={mascot.name}
              width={160}
              height={160}
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-bold font-montserrat">{mascot.name}</h3>
            <p className="text-sm text-gray-600 font-lato mt-1 mb-2">
              {mascot.symbol} {mascot.role}
            </p>
            <p className="italic text-gray-700 font-lato mb-3">{mascot.quote}</p>
            <ul className="text-sm text-gray-600 font-lato">
              {mascot.traits.map((trait, i) => (
                <li key={i}>• {trait}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
