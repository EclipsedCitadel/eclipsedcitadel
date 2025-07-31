// components/OneTimeServices.tsx
import ServiceTable from "@/components/OneTimeServices/ServiceTable";
import AddOnGrid from "@/components/OneTimeServices/AddOnGrid";
import BundleBlock from "@/components/OneTimeServices/BundleBlock";

export default function OneTimeServices() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-20 text-center">
      <h2 className="text-4xl font-bold font-montserrat mb-4 text-midnight">
        À La Carte & Add-On Services
      </h2>
      <p className="text-lg text-gray-700 font-lato max-w-2xl mx-auto mb-12">
        Need one-off content or flexible upgrades? Our à la carte services, custom add-ons,
        and discounted bundles let you scale at your pace—without locking into a plan.
      </p>

      {/* 1. À La Carte Table */}
      <ServiceTable />

      {/* 2. Add-On Grid */}
      <div className="mt-16">
        <AddOnGrid />
      </div>

      {/* 3. Bundles & Prepay Discounts */}
      <div className="mt-20">
        <BundleBlock />
      </div>
    </section>
  );
}
