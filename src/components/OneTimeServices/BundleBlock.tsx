// components/OneTimeServices/BundleBlock.tsx

export default function BundleBlock() {
  const bundles = [
    {
      tier: "Quarterly",
      commitment: "3 months",
      discount: "10% off",
      example: "Gold Plan = $3,240 ($360 off)",
    },
    {
      tier: "Bi-Annual",
      commitment: "6 months",
      discount: "15% off",
      example: "Silver Plan = $4,080 ($720 off)",
    },
    {
      tier: "Annual",
      commitment: "12 months",
      discount: "20% off",
      example: "Bronze Plan = $4,800 ($1,200 off)",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {bundles.map((bundle, idx) => (
        <div
          key={idx}
          className="border border-gray-200 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
        >
          <h4 className="text-xl font-bold text-midnight mb-2">{bundle.tier} Bundle</h4>
          <p className="text-gray-700 mb-1">
            <span className="font-semibold">Commitment:</span> {bundle.commitment}
          </p>
          <p className="text-orange-600 font-bold mb-1">{bundle.discount}</p>
          <p className="text-gray-600 text-sm">{bundle.example}</p>
          <p className="text-xs text-gray-400 mt-3 italic">
            Available to early clients only.
          </p>
        </div>
      ))}
    </div>
  );
}
