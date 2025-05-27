export default function Contact() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Contact Us</h1>
      <div className="prose max-w-none space-y-8">
        <div className="bg-gray-100 rounded-lg p-6 shadow-sm border border-gray-400">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Our Location</h2>
          <p className="text-gray-600 leading-relaxed">
            PureTide Nori<br />
            London<br />
            United Kingdom
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 shadow-sm border border-gray-400">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Email Us</h2>
          <p className="text-gray-600 leading-relaxed">
            Feel free to reach out to us at:{' '}
            <a 
              href="mailto:fiasp1creations@gmail.com" 
              className="text-blue-600 hover:text-blue-800 underline"
            >
              fiasp1creations@gmail.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
} 