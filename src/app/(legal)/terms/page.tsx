export const metadata = {
  title: "Terms of Service | Eclipsed Citadel",
  description: "Review the official Terms of Service for Eclipsed Citadel’s AI-powered content services. Understand your rights, responsibilities, and our content delivery terms.",
};
export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white text-midnight px-6 md:px-12 lg:px-32 py-20 font-lato">
      <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-10">
        Terms of Service
      </h1>

      <p className="text-lg text-gray-700 mb-8 max-w-3xl">
        By using Eclipsed Citadel’s services, you agree to the following terms. These terms are designed
        to protect both parties and ensure clarity in the content creation process.
      </p>

      <section className="space-y-10 text-gray-800 max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold font-montserrat mb-2">1. Services Provided</h2>
          <p>
            Eclipsed Citadel provides AI-assisted creative content including videos, graphics,
            blog posts, social captions, and marketing materials. Services are delivered according
            to the plan selected by the client (Starter, Bronze, Silver, Gold, or À La Carte).
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold font-montserrat mb-2">2. Ownership & Licensing</h2>
          <p>
            All content created for paying clients is fully licensed for commercial use. We reserve
            the right to use anonymized or sample versions of your content for promotional or educational
            purposes unless you request otherwise in writing.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold font-montserrat mb-2">3. Delivery Timelines</h2>
          <p>
            Deliverables will be completed within the timeframe outlined in your plan (e.g., 3–7 business days).
            Delays due to incomplete intake forms or late revision feedback may affect timelines.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold font-montserrat mb-2">4. Revisions</h2>
          <p>
            Each plan includes a set number of revision rounds. Gold plans allow unlimited minor revisions
            within scope. Major changes may incur an additional fee.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold font-montserrat mb-2">5. Payments & Subscriptions</h2>
          <p>
            All subscriptions are billed monthly via Stripe unless canceled before the renewal date.
            À La Carte services are charged upfront and are non-refundable once work begins.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold font-montserrat mb-2">6. Cancellation & Refunds</h2>
          <p>
            Subscriptions may be canceled at any time before the next billing cycle. Refunds are only granted
            if no content has been delivered. Otherwise, a credit may be issued toward future services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold font-montserrat mb-2">7. Client Responsibilities</h2>
          <p>
            Clients must complete intake forms accurately and provide timely feedback. We are not liable
            for missed deadlines due to incomplete or delayed inputs.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold font-montserrat mb-2">8. Use of AI</h2>
          <p>
            We use artificial intelligence tools (e.g., OpenAI, Canva, Pictory) to generate creative content.
            By using our services, you acknowledge and accept the use of these tools in the production process.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold font-montserrat mb-2">9. Contact</h2>
          <p>
            Questions or requests regarding these terms can be directed to:{' '}
            <strong>eclipsedcitadel@gmail.com</strong>
          </p>
        </div>
      </section>

      <p className="text-sm text-gray-500 mt-12">
        Last updated: July 31, 2025
      </p>
    </main>
  );
}
