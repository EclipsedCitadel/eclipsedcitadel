// components/OneTimeServices/ServiceTable.tsx

export default function ServiceTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white text-left border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-orange-50 text-midnight font-semibold">
          <tr>
            <th className="px-6 py-3 border-b">Service</th>
            <th className="px-6 py-3 border-b">Price</th>
            <th className="px-6 py-3 border-b">Description</th>
            <th className="px-6 py-3 border-b">Delivery</th>
            <th className="px-6 py-3 border-b">Revisions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 font-lato">
          {[
            {
              name: "Short Video (up to 60s)",
              price: "$60",
              desc: "Hook-driven video with branded overlay, AI script, basic motion elements",
              delivery: "3–5 days",
              rev: "1 round",
            },
            {
              name: "Social Post Pack (5 posts)",
              price: "$80",
              desc: "5 brand voice captions + 5 visuals formatted for IG/X/Threads",
              delivery: "3–5 days",
              rev: "1 round",
            },
            {
              name: "Ad Design – Static/Carousel",
              price: "$45",
              desc: "One static ad or 3–5 slide carousel. Text overlay + CTA, format-ready",
              delivery: "3–4 days",
              rev: "1 round",
            },
            {
              name: "Blog or Newsletter (600–800 words)",
              price: "$150",
              desc: "Custom longform content with headline, subhead, SEO-ready structure",
              delivery: "5–7 days",
              rev: "1 round",
            },
            {
              name: "Brand Spotlight Graphic/Video",
              price: "$100",
              desc: "Bio-driven video or banner: team intro, testimonial highlight, etc.",
              delivery: "4–6 days",
              rev: "1 round",
            },
          ].map((item, idx) => (
            <tr key={idx} className="border-t">
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4 text-orange-600 font-semibold">{item.price}</td>
              <td className="px-6 py-4">{item.desc}</td>
              <td className="px-6 py-4">{item.delivery}</td>
              <td className="px-6 py-4">{item.rev}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
