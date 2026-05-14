import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mirador del Diamante | Glamping & Camping en Girardota, Antioquia",
  description:
    "Vive una experiencia única en la naturaleza. Glamping de lujo y camping plan pareja en Girardota, Antioquia. Reserva ahora y desconéctate de la rutina.",
  keywords: "glamping Girardota, camping Antioquia, Mirador del Diamante, plan pareja naturaleza",
  openGraph: {
    title: "Mirador del Diamante | Glamping & Camping",
    description: "Vive una experiencia única en la naturaleza. Glamping de lujo y camping plan pareja en Girardota, Antioquia.",
    type: "website",
    images: [{ url: "/hero.jpg", width: 1200, height: 630, alt: "Mirador del Diamante — Glamping & Camping en Girardota" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Meta Pixel - reemplazar PIXEL_ID con el ID real */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1714992563189415');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1714992563189415&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
