// src/components/Features.tsx

import { CheckCircleIcon,BoltIcon,Cog6ToothIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
const features = [
  {
    icon: <VideoCameraIcon className="h-8 w-8 text-brand-primary" />,
    title: "AI-Powered Videos",
    description: "Scroll-stopping reels and explainers built fast with AI-enhanced scripting, editing, and visuals.",
  },
  {
    icon: <Cog6ToothIcon className="h-8 w-8 text-brand-primary" />,
    title: "Branded Graphics",
    description: "Every ad and post is designed in your brand style with ready-to-use Canva or export formats.",
  },
  {
    icon: <BoltIcon className="h-8 w-8 text-brand-primary" />,
    title: "Automated Delivery",
    description: "Get your content queue delivered on a rolling or batch schedule, no chasing creatives required.",
  },
  {
    icon: <CheckCircleIcon className="h-8 w-8 text-brand-primary" />,
    title: "Hands-Free Setup",
    description: "Just fill out our form once. Your content system runs in the background—built for busy founders.",
  },
];

export default function Features() {
  return (
    <section className="bg-accent py-20 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-montserrat text-midnight mb-4">
          Features That Make Us Different
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto font-lato">
          We combine the best of AI automation and creative strategy to deliver content that grows your business—
          without slowing you down.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow"
          >
            <div>{feature.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-brand-secondary mb-1">{feature.title}</h3>
              <p className="text-gray-600 font-lato">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
