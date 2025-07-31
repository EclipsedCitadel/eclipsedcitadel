// src/components/PricingCard.tsx

type PricingCardProps = {
  title: string;
  price: string;
  features: string[];
  turnaround: string;
  revisions: string;
  support: string;
  bestFor: string;
  highlight?: boolean;
};

export default function PricingCard({
  title,
  price,
  features,
  turnaround,
  revisions,
  support,
  bestFor,
  highlight = false,
}: PricingCardProps) {
  return (
    <div
      className={`flex flex-col justify-between rounded-2xl border shadow-md p-6 sm:p-8 transition-all duration-300 ${
        highlight
          ? "border-orange-500 bg-orange-50 scale-[1.02]"
          : "border-gray-200 bg-white"
      }`}
    >
      <div>
        <h3 className="text-xl font-bold font-montserrat text-brand-secondary mb-2">
          {title}
        </h3>
        <p className="text-3xl font-bold text-brand-primary mb-4">{price}</p>

        <ul className="text-sm text-gray-700 mb-4 space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-orange-500">✔</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>Turnaround:</strong> {turnaround}</p>
          <p><strong>Revisions:</strong> {revisions}</p>
          <p><strong>Support:</strong> {support}</p>
          <p><strong>Best For:</strong> {bestFor}</p>
        </div>
      </div>

      <div className="mt-6">
        <a
          href="#intake"
          className={`block w-full text-center rounded-full px-4 py-2 font-semibold transition-all duration-200 ${
            highlight
              ? "bg-orange-500 text-white hover:bg-orange-600"
              : "border border-orange-500 text-orange-500 hover:bg-orange-50"
          }`}
        >
          Choose {title}
        </a>
      </div>
    </div>
  );
}
