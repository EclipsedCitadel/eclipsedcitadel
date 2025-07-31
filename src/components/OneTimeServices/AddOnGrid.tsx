// components/OneTimeServices/AddOnGrid.tsx

export default function AddOnGrid() {
  const addOns = [
    {
      title: "Extra Revision",
      price: "$15",
      description: "Add one more revision round to any deliverable.",
    },
    {
      title: "Priority 48h Delivery",
      price: "+$20",
      description: "Rush delivery per item—subject to availability.",
    },
    {
      title: "Voiceover Add-On",
      price: "+$25",
      description: "Add an AI-generated voiceover tailored to your brand tone.",
    },
    {
      title: "Script-Only Deliverable",
      price: "$30",
      description: "Receive just the written script (video, ad, caption) with no design.",
    },
    {
      title: "Strategy Session (30 min)",
      price: "$75",
      description: "1-on-1 via Google Meet or async brand review + recommendations.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {addOns.map((item, idx) => (
        <div
          key={idx}
          className="bg-white border border-gray-200 shadow-sm p-6 rounded-lg text-left hover:shadow-md transition-all duration-200"
        >
          <h4 className="text-lg font-semibold text-midnight mb-2">{item.title}</h4>
          <p className="text-orange-600 font-bold mb-2">{item.price}</p>
          <p className="text-gray-700 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
