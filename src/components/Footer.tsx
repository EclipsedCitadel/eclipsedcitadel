// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-midnight text-offwhite py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Brand Summary */}
        <div>
          <h3 className="text-xl font-bold font-montserrat mb-2">Eclipsed Citadel</h3>
          <p className="text-sm text-gray-300 font-lato leading-relaxed">
            Content crafted with AI precision and human strategy—
            made for modern small businesses.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-sm font-semibold uppercase text-gray-400 mb-2">Explore</h4>
          <ul className="space-y-1 text-sm font-lato">
            <li><a href="#pricing" className="hover:underline">Plans & Pricing</a></li>
            <li><a href="#services" className="hover:underline">One-Time Services</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
            <li><a href="#intake" className="hover:underline">Get Started</a></li>
          </ul>
        </div>

        {/* Column 3: Legal & Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase text-gray-400 mb-2">Contact & Legal</h4>
          <ul className="space-y-1 text-sm font-lato">
            <li>
              <a href="mailto:eclipsedcitadel@gmail.com" className="hover:underline">
                eclipsedcitadel@gmail.com
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-400 font-lato">
        &copy; {new Date().getFullYear()} Eclipsed Citadel. All rights reserved.
      </div>
    </footer>
  );
}
