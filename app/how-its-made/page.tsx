import Image from "next/image"

export default function HowItsMade() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">How Our Nori is Made</h1>
      <div className="prose max-w-none space-y-4">
        <div className="bg-gray-100 rounded-lg p-6 shadow-sm border border-gray-400">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">1. Growth Area Selection</h2>
          <p className="text-gray-600 leading-relaxed">
            Every year, we decide together with our roasting family in Gyeonggi-do from which area our Nori will come. Because the sea is an open environment, the cleanliness of it really depends on external pollution factors and industry as well as currents. It is important to check that no new polluting industrial plants has been erected upstream, for example.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            To ensure ourselves against this, as a rule of thumb, we found that growing the Nori near the waters of the western part of the National Park of Dadohaehaesang, near Wando and Jindo islands, is the safest, because it is an open sea area to its west, so this is as little pollution and as little industry as it gets.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Please note that the National Park of Dadohaehaesang has two locations – one in the middle of the Southern tip of South Korea and one to the West. We only source from the western side, as the Southern branch of the National Park is a completely different location and completely different story with regards to pollution.
          </p>
        </div>

        {/*1. Image of Growth Area */}
        <div className="bg-gray-100 rounded-lg p-2 shadow-sm border border-gray-400 max-w-[600px] mx-auto">
          <Image src="/sourcing-area.svg" width={700} height={900} alt="Lab Test" className="w-full h-auto" />
        </div>

      

        <div className="bg-gray-100 rounded-lg p-6 shadow-sm border border-gray-400">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">2. Growing</h2>
          <p className="text-gray-600 leading-relaxed">
            The Nori seedlings start their life on-shore until they are big enough to be placed to continue growing in the sea.
          </p>
        </div>

        {/*2. Image of growing */}
        <div className="bg-gray-100 rounded-lg p-2 shadow-sm border border-gray-400 max-w-[600px] mx-auto">
          <Image src="/nori-cultivation.svg" width={700} height={900} alt="Lab Test" className="w-full h-auto" />
        </div>

        <div className="bg-gray-100 rounded-lg p-6 shadow-sm border border-gray-400">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">3. Harvesting</h2>
          <p className="text-gray-600 leading-relaxed">
            The Nori is harvested on a small boat using a suction hose, which suctions water and filters out the Nori plants. Once the boat is full, it delivers the Nori to shore and pumps it back out.
          </p>
        </div>

        {/*3. Image of harvesting */}
        <div className="bg-gray-100 rounded-lg p-2 shadow-sm border border-gray-400 max-w-[600px] mx-auto">
          <Image src="/nori-harvesting.svg" width={700} height={900} alt="Lab Test" className="w-full h-auto" />
        </div>

        <div className="bg-gray-100 rounded-lg p-6 shadow-sm border border-gray-400">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">4. Washing</h2>
          <p className="text-gray-600 leading-relaxed">
            The freshly harvested Nori plants are immediately washed with fresh water to wash out the salt water and sand.
          </p>
        </div>

        {/* 4. Image of washing */}
        <div className="bg-gray-100 rounded-lg p-2 shadow-sm border border-gray-400 max-w-[600px] mx-auto">
          <Image src="/nori-washing.svg" width={700} height={900} alt="Lab Test" className="w-full h-auto" />
        </div>

        <div className="bg-gray-100 rounded-lg p-6 shadow-sm border border-gray-400">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">5. Drying</h2>
          <p className="text-gray-600 leading-relaxed">
            The Nori is then pressed using a mechanical press into long sheets and dried at a low temperature.
          </p>
        </div>

        {/* 5. Image of drying */}
        <div className="bg-gray-100 rounded-lg p-2 shadow-sm border border-gray-400 max-w-[600px] mx-auto">
          <Image src="/nori-drying.svg" width={700} height={900} alt="Lab Test" className="w-full h-auto" />
        </div>

        <div className="bg-gray-100 rounded-lg p-6 shadow-sm border border-gray-400">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">6. Grading</h2>
          <p className="text-gray-600 leading-relaxed">
            The Nori is then packed and inspected for quality and then sorted into grades by an experienced craftsman.
          </p>
        </div>

        {/* 6. Image of packing and grading */}
        <div className="bg-gray-100 rounded-lg p-2 shadow-sm border border-gray-400 max-w-[600px] mx-auto">
          <Image src="/nori-grading.svg" width={700} height={900} alt="Lab Test" className="w-full h-auto" />
        </div>

        <div className="bg-gray-100 rounded-lg p-6 shadow-sm border border-gray-400">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">7. Storage and Auction</h2>
          <p className="text-gray-600 leading-relaxed">
            The Nori is then repackaged after being sorted into grades, stored in freezers and then samples are taken to auction, where roasters evaluate and buy the best quality ones in a bidding process. The price of Nori is dependent on the quality and the harvest each year. As a natural product, this is difficult to predict and depends on the climate that year, nutrients, currents and many other factors.
          </p>
        </div>

        {/* 7. Image of storage and auction */}
        <div className="bg-gray-100 rounded-lg p-2 shadow-sm border border-gray-400 max-w-[600px] mx-auto">
          <Image src="/storage-auction.svg" width={700} height={900} alt="Lab Test" className="w-full h-auto" />
        </div>

        <div className="bg-gray-100 rounded-lg p-6 shadow-sm border border-gray-400">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">8. Roasting</h2>
          <p className="text-gray-600 leading-relaxed">
            The Nori roasters then collect the Nori they bought from the farmers&apos; freezers into their freezers, and take it in small batches to their roasting facilities. The Nori is cut into sheets roasted on a conveyor belt to perfection, as well as being inspected again for foreign bodies and quality.
          </p>
        </div>

        {/* 8. Image of roasting */}
        <div className="bg-gray-100 rounded-lg p-2 shadow-sm border border-gray-400 max-w-[600px] mx-auto">
          <Image src="/nori-roasting.svg" width={700} height={900} alt="Lab Test" className="w-full h-auto" />
        </div>

        <div className="bg-gray-100 rounded-lg p-6 shadow-sm border border-gray-400">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">9. Packing</h2>
          <p className="text-gray-600 leading-relaxed">
            After being roasted, it is packaged, usually in vacuum packs with a silica pouch to prevent it absorbing humidity from the air, as it is such a dry product. Care needs to be taken to not break the Nori sheets during the process. At this point, the Nori is graded again by the roaster to their discretion.
          </p>
        </div>

        {/* 9. Image of packing */}
        <div className="bg-gray-100 rounded-lg p-2 shadow-sm border border-gray-400 max-w-[600px] mx-auto">
          <Image src="/vacuum-packing.svg" width={700} height={900} alt="Lab Test" className="w-full h-auto" />
        </div>

        <div className="bg-gray-100 rounded-lg p-6 shadow-sm border border-gray-400">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">10. Exporting and Lab Testing</h2>
          <p className="text-gray-600 leading-relaxed">
            If the Nori is exported abroad, it is packaged into cartons, placed onto a van and delivered to the sea or air port. At this point, when our Nori is exported from South Korea, it undergoes a rigorous regulatory inspection and compliance process by the Korean government to ensure it is suitable for human consumption.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Our Nori is tested before export for heavy metals and other parameters and certificates are obtained from the testing lab. An inspector from the Korean government is invited to do a sanitary inspection before being shipped off from the roasting facility, then further inspections and export certificates are obtained prior to export.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Then when it arrives in the destination country, further certificates and inspections are done by the customs. Our heavy metals and sanitary and other certificates are checked at the point of import. We also carry out additional independent inspections at laboratories at random throughout the year when it arrives in the UK.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            This isn&apos;t mandatory, so if you eat Nori regularly, it is important that you find a producer you trust who rigorously tests the Nori and who is importing it for themselves.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            When our family first started eating a lot of Nori on our plant-based journey, we were concerned about this, as no company was disclosing doing any testing, and this is how the company was born.
          </p>
        </div>

        {/* 10. Image of exporting and lab testing */}
        <div className="bg-gray-100 rounded-lg p-2 shadow-sm border border-gray-400 max-w-[600px] mx-auto">
          <Image src="/final-testing.svg" width={700} height={900} alt="Lab Test" className="w-full h-auto" />
        </div>
        
      </div>
    </main>
  );
} 