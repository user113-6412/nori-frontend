import Link from 'next/link';
import ChatBot from '../components/ChatBot';
import TypewriterText from "../components/TypewriterText";
import Image from 'next/image';
import VideoPlayer from '../components/VideoPlayer';

export default function Home() {

    const videoURL = "https://pub-a5f663ef1fa349799483e8b05b3da2ea.r2.dev/sushi-nori-sheets-video.MP4"

    return (
        <main className="min-h-screen p-3">

            <div className="flex flex-col justify-center items-center py-2">
                <h1 className='mt-2 text-4xl font-bold text-center'>
                    Sushi Nori Seaweed Sheets, Premium Gold Grade
                </h1>
                <p className='text-gray-500 text-xl mt-3 text-center'>
                    Sourcing, curating, and testing highly nutritious and delicious seaweed sheets from prestine waters of Dadohaesan National Park, South Korea.
                </p>
            </div>

            {/* Typewriter Component */}
            <div className="max-w-2xl mx-auto space-y-2">
                <TypewriterText />
            </div>

            {/* Nori Image */}
            <div className="flex justify-center py-2">
                <Image src="/sushi-nori-image.webp" alt="Nori" width={670} height={100} className='mx-auto border-2 border-yellow-500 rounded-lg'/>
            </div>


            {/* Lab test tmage */}
            <div className="flex justify-center py-2">
                <Image src="/lab-test-report.svg" alt="Nori" width={670} height={100} className='mx-auto border-2 border-yellow-500 rounded-lg'/>
            </div>

            {/* Shop online link button */}
            <div className="max-w-2xl mx-auto w-full py-2">
                <Link href="/shop-nori">
                    <button className="w-full text-2xl font-bold text-white p-4 rounded-lg bg-yellow-500 hover:cursor-pointer">
                        Buy our Nori Online
                    </button>
                </Link>
            </div>

            {/* Video */}
            <div className="max-w-2xl mx-auto w-full py-2">
                <VideoPlayer videoURL={videoURL} />
            </div>

            {/* Chatbot Component */}
            <div className="max-w-2xl mx-auto space-y-4">
                <ChatBot />
            </div>

        </main>
    );
    } 