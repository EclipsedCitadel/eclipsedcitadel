// src/components/Pricing.tsx

import PricingCard from "./PricingCard";

const pricingTiers = [
  {
    title: "Starter",
    price: "$250/mo",
    features: [
      "2 AI videos (15–30s)",
      "4 social posts",
      "2 graphic ads",
    ],
    turnaround: "5–7 days",
    revisions: "1 round",
    support: "Email-only (2-day response)",
    bestFor: "Testing workflows, solopreneurs",
  },
  {
    title: "Bronze",
    price: "$500/mo",
    features: [
      "4 AI videos",
      "8 social posts",
      "4 graphic ads",
    ],
    turnaround: "3–5 days",
    revisions: "1 round",
    support: "Standard email (48h)",
    bestFor: "Solo founders building consistency",
  },
  {
    title: "Silver",
    price: "$800/mo",
    features: [
      "8 AI videos (30–60s)",
      "12 social posts",
      "8 branded graphics",
      "1 blog article",
      "1 spotlight asset",
    ],
    turnaround: "2–4 days",
    revisions: "2 rounds",
    support: "Priority email (24h)",
    bestFor: "Scaling creators or small teams",
  },
  {
    title: "Gold",
    price: "$1,200/mo",
    features: [
      "12 AI videos",
      "20 social posts",
      "12 static + animated ads (GIFs)",
      "2 blog posts or newsletters",
      "1 strategy doc/calendar",
    ],
    turnaround: "Rolling (2–3 assets every few days)",
    revisions: "Unlimited quick edits",
    support: "Priority email + Discord (same-day)",
    bestFor: "Small teams or funded startups",
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section id="plans" className="bg-accent py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-montserrat text-brand-secondary mb-4">
          Choose Your Content Engine
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto font-lato text-lg">
          Flexible plans designed for every stage of your journey—from testing ideas to scaling brand visibility.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {pricingTiers.map((tier) => (
          <PricingCard key={tier.title} {...tier} />
        ))}
      </div>
    </section>
  );
}
