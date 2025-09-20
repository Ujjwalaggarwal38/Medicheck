import { Geist, Geist_Mono, Lato, Montserrat, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import LayoutClient from "@/component/LayoutClient";
import Script from "next/script"; // ✅ Import next/script

// Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  weight: "200",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const lato = Lato({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata = {
  title: "Medicheck Group of Hospitals",
  description: "Providing healthcare for 17+ years.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Analytics using next/script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X31PSEY9JZ"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-X31PSEY9JZ');
            `,
          }}
        />
      </head>
      <body
        className={`
          ${montserrat.variable}
          ${poppins.variable}
          ${lato.variable}
          ${geistSans.variable}
          ${geistMono.variable}
          ${roboto.className}
          antialiased
        `}
      >
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
