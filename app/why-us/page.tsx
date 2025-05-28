import Image from "next/image";

export default function WhyUs() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Why Choose PureTide</h1>
      <div className="prose max-w-none space-y-6">
        <div className="bg-gray-100 rounded-lg p-6 shadow-sm border border-gray-400">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">South Korean Quality</h2>
          <p className="text-gray-600 leading-relaxed">
            South Korean waters are some of the cleanest for Nori, avoiding the potentially radioactive and polluted areas of Japan and China. South Korea also has much tighter environmental and food safety regulations than some other Nori producing countries, like China, producing a product we can trust.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 shadow-sm border border-gray-400">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Clean Waters</h2>
          <p className="text-gray-600 leading-relaxed">
            We sourced this Nori for ourselves, so it is harvested in the famously clean waters near Jeollanam-Do village off Jindo-Gun Island by the National Park of Dadohaehaesang.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 shadow-sm border border-gray-400">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Quality</h2>
          <p className="text-gray-600 leading-relaxed">
            Our Nori is made by a family who have been harvesting and roasting Nori for 30 years. Sourcing the Nori from one family means we are confident in exactly where this Nori comes from. They dry Nori sheets at a lower temperature 20 times instead of drying 4 times at a higher temperature, thus ensuring a better developed flavour.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 shadow-sm border border-gray-400">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Freshly Baked</h2>
          <p className="text-gray-600 leading-relaxed">
            Baked to a Medium roast every 3 months, our Nori contains many minerals, vitamins and amino acids.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 shadow-sm border border-gray-400">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Storage</h2>
          <p className="text-gray-600 leading-relaxed">
            Resealable bag ensures lasting freshness. This is Grade A, Gold or highest grade, 125g net weight thickness.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 shadow-sm border border-gray-400">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Lab Tested</h2>
          <p className="text-gray-600 leading-relaxed">
            We test every batch in a 3rd party lab to ensure the lowest possible levels of contaminants, such as heavy metals. We also regularly test for radioactivity and pesticides and carry out 3rd party Quality inspections. Every batch of our Nori is also checked by the Korean Ministry of Food and Drug Safety and undergoes a Sanitary Inspection at random, as well as regularly being checked by the laboratories at the import customs of the EU.
          </p>
        </div>

        {/* Image of the lab test*/}
        <div className="bg-gray-100 rounded-lg p-2 shadow-sm border border-gray-400 max-w-[600px] mx-auto">
          <Image src="/lab-test-report.svg" width={700} height={900} alt="Lab Test" className="w-full h-auto" />
        </div>

      </div>
    </main>
  );
} 