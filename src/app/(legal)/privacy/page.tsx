export const metadata = {
  title: "Privacy Policy | Eclipsed Citadel",
  description: "Learn how we protect your data, what we collect, and your rights under our privacy practices.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-midnight px-6 md:px-12 lg:px-32 py-20 font-lato">
      <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-10">
        Privacy Policy
      </h1>

      <p className="text-lg text-gray-700 mb-8 max-w-3xl">
        This policy explains how Eclipsed Citadel collects, uses, and protects your data. We are committed
        to safeguarding your privacy and ensuring transparency in our data practices.
      </p>

      <section className="space-y-10 text-gray-800 max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold font-montserrat mb-2">1. Information We Collect</h2>
          <p>
            We collect information that you voluntarily provide when filling out forms, making purchases,
            or contacting us. This includes your name, email, business details, and content preferences.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold font-montserrat mb-2">2. How We Use Your Data</h2>
          <p>
            We use your data to provide our services, respond to inquiries, deliver content, and process
            payments. Your email may also be used for transactional messages and important updates.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold font-montserrat mb-2">3. Data Sharing</h2>
          <p>
            We do not sell or share your personal data with third parties except service providers (e.g.,
            Stripe, Google) who help us operate our platform. These providers are bound by confidentiality
            and data protection terms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold font-montserrat mb-2">4. Cookies & Tracking</h2>
          <p>
            We use basic analytics tools (e.g., Vercel Analytics, Plausible) to understand site performance.
            These tools may collect anonymized usage data. We do not use invasive tracking or advertising pixels.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold font-montserrat mb-2">5. Data Storage & Security</h2>
          <p>
            Your data is stored securely using trusted platforms (e.g., Supabase, Google Workspace).
            Access is limited to authorized team members, and we use encryption where applicable.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold font-montserrat mb-2">6. Your Rights</h2>
          <p>
            You have the right to request access to your data, ask for corrections, or request deletion.
            Contact us at <strong>eclipsedcitadel@gmail.com</strong> for any privacy-related inquiries.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold font-montserrat mb-2">7. Policy Updates</h2>
          <p>
            We may update this policy occasionally. Major changes will be announced via email or noted
            on this page. Please review it periodically to stay informed.
          </p>
        </div>
      </section>

      <p className="text-sm text-gray-500 mt-12">
        Last updated: July 31, 2025
      </p>
    </main>
  );
}
