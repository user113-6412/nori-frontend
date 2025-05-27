import Link from "next/link";

export default function Shop() {

  const amazonURL = "https://www.amazon.co.uk/s?k=nori+seaweed&ref=nb_sb_noss_2";

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Buy Our Nori</h1>
      <div className="prose max-w-none space-y-8">
        <div className="bg-gray-100 rounded-lg p-6 shadow-sm border border-gray-400">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Available on Amazon</h2>
          <p className="text-gray-600 leading-relaxed">
            Please kindly visit our store on Amazon and feel free to browse through the reviews and photos of other people&apos;s Nori creations. We are working towards making our Nori available on this website, so please bear with us.
          </p>
        </div>
      </div>

      {/* Amazon Link Button */}
      <div className="flex justify-center py-4">
        <Link href={amazonURL} target="_blank">
            <button className="text-2xl font-bold text-center text-white p-4 rounded-lg bg-yellow-500 hover:cursor-pointer">
                Shop Nori on Amazon
            </button>
        </Link>
      </div>
    </main>
  );
} 