import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import OneTimeServices from "@/components/OneTimeServices";
import Mascots from "@/components/Mascots";
import IntakeCTA from "@/components/IntakeCTA";
import IntakeFormEmbed from "@/components/IntakeFormEmbed";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Pricing />
      <OneTimeServices />
      <Mascots />
      <IntakeCTA />
      <IntakeFormEmbed />
      <AboutSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
