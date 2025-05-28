import { Quicksand } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "./context/AuthContext";
import Script from 'next/script'

const quicksand = Quicksand({ subsets: ['latin'], weight: '600' });


export const metadata = {
  title: "PureTide Nori - Premium Sushi Nori Sheets & Iodine Tracker | Korean Seaweed",
  description: "Discover premium Korean sushi nori sheets from clean waters. Track your iodine intake, explore nori recipes, and learn about our lab-tested, sustainably sourced seaweed. Available on Amazon.",
  keywords: "sushi nori, nori sheets, nori seaweed, sushi seaweed, korean nori, premium nori, clean nori, iodine tracker, nori recipes, lab tested nori, sustainable nori, dadohaehaesang nori, south korean nori",
  openGraph: {
    title: "PureTide Nori - Premium Korean Sushi Nori Sheets",
    description: "Discover premium Korean sushi nori sheets from clean waters. Track your iodine intake, explore nori recipes, and learn about our lab-tested, sustainably sourced seaweed.",
    type: "website",
    locale: "en_GB",
    siteName: "PureTide Nori",
  },
  twitter: {
    card: "summary_large_image",
    title: "PureTide Nori - Premium Korean Sushi Nori Sheets",
    description: "Discover premium Korean sushi nori sheets from clean waters. Track your iodine intake, explore nori recipes, and learn about our lab-tested, sustainably sourced seaweed.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />

        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17124083870" />
        
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17124083870', {
              'send_page_view': true,
              'conversion_linker': true
            });
          `}
        </Script>

      </head>
      <body className={`${quicksand.className} antialiased`}>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
