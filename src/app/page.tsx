import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import OneTimeServices from "@/components/OneTimeServices";
import Mascots from "@/components/Mascots";
import IntakeCTA from "@/components/IntakeCTA";
import IntakeFormEmbed from "@/components/IntakeFormEmbed";
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
    </main>
  );
}
