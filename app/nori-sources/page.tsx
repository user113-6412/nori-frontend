import Image from "next/image";

export default function NoriSources() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Where Our Nori Comes From</h1>
        <div className="prose max-w-none space-y-8">
          <div className="bg-gray-100 border border-gray-400 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">South Korean Sourcing</h2>
            <p className="text-gray-600 leading-relaxed">
              We specifically wanted to source our Nori from South Korea only, because South Korea produces the best quality Nori after Japan, but it avoids the radioactive areas of the Japanese sea and has much cleaner, less polluted sea areas and much more stringent environmental regulations compared to China, albeit being more expensive than Chinese Nori.
            </p>
          </div>
  
          <div className="bg-gray-100 border border-gray-400 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Location Selection</h2>
            <p className="text-gray-600 leading-relaxed">
              Every year, we decide together with our roasting family in Gyeonggi-do from which area our Nori will come. Because the sea is an open environment, the cleanliness of it really depends on external pollution factors and industry as well as currents. It is important to check that no new polluting industrial plants have been erected upstream, for example.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              To ensure ourselves against this, as a rule of thumb, we found that growing the Nori near the waters of the western part of the National Park of Dadohaehaesang, near Wando and Jindo islands, is the safest, because it is an open sea area to its west, so this is as little pollution and as little industry as it gets. So this is where our Nori currently comes from.
            </p>
          </div>
  
          <div className="bg-gray-100 border border-gray-400 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Important Note</h2>
            <p className="text-gray-600 leading-relaxed">
              Please note that the National Park of Dadohaehaesang has two locations – one in the middle of the Southern tip of South Korea and one to the West. We only source from the western side, as the Southern branch of the National Park is a completely different location and completely different story with regards to pollution. The Southern part of the National Park is very far away from the Western side and has a lithium factory being built, so this is certainly not where we source our Nori!
            </p>
          </div>

        {/* Image of National Park of Dadohaehaesang */}
        <div className="bg-gray-100 rounded-lg p-2 shadow-sm border border-gray-400 max-w-[600px] mx-auto">
          <Image src="/national-park.svg" width={700} height={900} alt="Lab Test" className="w-full h-auto" />
        </div>


        </div>
      </main>
    );
  } 