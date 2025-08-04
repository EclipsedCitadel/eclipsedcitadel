export const metadata = {
  title: "Cancellation Policy | Eclipsed Citadel",
  description: "Review our cancellation and refund terms before starting your content subscription with us.",
};

export default function CancellationPolicy() {
  return (
    <main className="min-h-screen bg-white text-midnight px-6 md:px-12 lg:px-32 py-20 font-lato">
      <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-10">
        Cancellation & Refund Policy
      </h1>

      <p className="text-lg text-gray-700 mb-8 max-w-3xl">
        We understand that plans change. This policy outlines how cancellations and refunds are handled
        at Eclipsed Citadel to ensure fairness and clarity for both parties.
      </p>

      <section className="space-y-10 text-gray-800 max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold font-montserrat mb-2">1. Subscription Plans</h2>
          <p>
            All monthly plans (Starter, Bronze, Silver, Gold) are billed in advance via Stripe. You may cancel
            your subscription at any time before the next billing date to avoid future charges. No cancellation
            fees apply.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold font-montserrat mb-2">2. À La Carte Services</h2>
          <p>
            One-time services are billed upfront. Because these orders trigger immediate resource allocation,
            they are non-refundable once content production has started.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold font-montserrat mb-2">3. Refund Eligibility</h2>
          <p>
            Refunds are only granted if no deliverables have been started or delivered by our team. If some
            work has been completed, partial credits may be issued for future services instead.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold font-montserrat mb-2">4. Requesting a Refund</h2>
          <p>
            To request a refund or cancel a subscription, email us at <strong>eclipsedcitadel@gmail.com</strong>
             with your order number and reason. We aim to respond within 2 business days.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold font-montserrat mb-2">5. Exceptions & Disputes</h2>
          <p>
            Eclipsed Citadel reserves the right to assess refund eligibility on a case-by-case basis.
            Abuse of the refund system or failure to complete required intake steps may result in cancellation
            without refund.
          </p>
        </div>
      </section>

      <p className="text-sm text-gray-500 mt-12">
        Last updated: July 31, 2025
      </p>
    </main>
  );
}
