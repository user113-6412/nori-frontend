import Link from 'next/link';
import ChatBot from '../components/ChatBot';
import TypewriterText from "../components/TypewriterText";
import Image from 'next/image';
import VideoPlayer from '../components/VideoPlayer';

export default function Home() {

    const amazonURL = "https://www.amazon.co.uk/Sushi-Nori-Seaweed-Sheets-November/dp/B07VHD8MVY/ref=sr_1_10?crid=TNJS3CKCDFYS&dib=eyJ2IjoiMSJ9.nIzB35DAzUMGsdgf4AAGW_ugNtUstzo6wFEGK5jylLAl64BsATzsaqzlHCX2zrXokAfxIgZtP66ZgPiO55gz4huJNV4v7wjbzp66nzCwuVsxmqd1nrvz78NClJ93m6OARcEXXBbwvl7cCKwjU4XD0-MCzoy20JC8qJkGH8Fvv8mDY4obweVHZELshmFKs9tBJAYMzJYNbqNS4TIE_tj8Omr48tqe5dy_NOTiL-fUl0nkaQbmIi4qT5DOyB8AQVcZlBER6myxHsDBwBmYin2D8eCcwYnJ5tH0koSQnc_HRzE.M-bN4lb1hxvqV39l2q5fVOSt0NkXJqDv-hrdHgiHUoQ&dib_tag=se&keywords=nori+sheets&qid=1747648912&sprefix=nori+sheet%2Caps%2C419&sr=8-10";

    const videoURL = "https://pub-a5f663ef1fa349799483e8b05b3da2ea.r2.dev/sushi-nori-sheets-video.MP4"

    return (
        <main className="min-h-screen p-3">

            {/* Typewriter Component */}
            <div className="max-w-2xl mx-auto space-y-2">
                <TypewriterText />
            </div>

            {/* Nori Image */}
            <div className="flex justify-center py-2">
                <Image src="/Sushi-Nori.svg" alt="Nori" width={670} height={100} className='mx-auto border-2 border-yellow-500 rounded-lg'/>
            </div>

            {/* Amazon Link Button */}
            <div className="max-w-2xl mx-auto w-full py-2">
                <Link href="/shop-nori" target="_blank">
                    <button className="w-full text-2xl font-bold text-white p-4 rounded-lg bg-yellow-500 hover:cursor-pointer">
                        Buy our Nori Online!
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