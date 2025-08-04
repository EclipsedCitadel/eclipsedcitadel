import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-midnight text-offwhite px-6 py-10 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="text-lg font-bold mb-2 font-montserrat text-sunrise">Eclipsed Citadel</h3>
          <p className="text-gray-300">
            AI-powered marketing content designed for small business growth. Fast, affordable, and high-quality.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-sunrise">Explore</h4>
          <ul className="space-y-1">
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/#pricing" className="hover:underline">Pricing</Link></li>
            <li><Link href="/#mascots" className="hover:underline">Mascots</Link></li>
            <li><Link href="/#intake" className="hover:underline">Get Started</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-sunrise">Legal</h4>
          <ul className="space-y-1">
            <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/cancellation" className="hover:underline">Cancellation Policy</Link></li>
          </ul>
          <p className="text-gray-400 mt-4">© {new Date().getFullYear()} Eclipsed Citadel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
