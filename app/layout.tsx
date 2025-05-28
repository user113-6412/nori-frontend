import { Quicksand } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "./context/AuthContext";
import Script from 'next/script'
import type { Metadata } from 'next'

const quicksand = Quicksand({ subsets: ['latin'], weight: '600' });

export const metadata: Metadata = {
  title: {
    default: 'PureTide Nori - Premium Sushi Nori Sheets & Iodine Tracker | Korean Seaweed',
    template: '%s | PureTide Nori'
  },
  description: "Discover premium Korean sushi nori sheets from clean waters. Track your iodine intake, explore nori recipes, and learn about our lab-tested, sustainably sourced seaweed. Available on Amazon.",
  keywords: "sushi nori, nori sheets, nori seaweed, sushi seaweed, korean nori, premium nori, clean nori, iodine tracker, nori recipes, lab tested nori, sustainable nori, dadohaehaesang nori, south korean nori",
  authors: [{ name: 'PureTide Nori' }],
  openGraph: {
    title: "PureTide Nori - Premium Korean Sushi Nori Sheets",
    description: "Discover premium Korean sushi nori sheets from clean waters. Track your iodine intake, explore nori recipes, and learn about our lab-tested, sustainably sourced seaweed.",
    type: "website",
    locale: "en_GB",
    siteName: "PureTide Nori",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PureTide Nori - Premium Korean Sushi Nori Sheets'
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "PureTide Nori - Premium Korean Sushi Nori Sheets",
    description: "Discover premium Korean sushi nori sheets from clean waters. Track your iodine intake, explore nori recipes, and learn about our lab-tested, sustainably sourced seaweed.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google743ff48f305e49b7.html',
  },
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
        
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17124083870');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-17124083870');
          `}
        </Script>

      </head>
      <body className={`${quicksand.className} antialiased`}>
        <AuthContextProvider>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-17124083870"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
