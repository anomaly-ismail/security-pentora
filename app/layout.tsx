import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pentora Security — Siber Güvenlik & Pentest Danışmanlığı",
  description:
    "Pentora Security; sızma testi, kırmızı takım ve siber güvenlik danışmanlığı hizmetleri ile kurumunuzu gerçek saldırılara karşı hazırlar.",
  keywords: [
    "Pentora Security",
    "Pentest",
    "Sızma Testi",
    "Siber Güvenlik",
    "Red Team",
    "Web Pentest",
    "Mobil Pentest",
    "Altyapı Pentest",
  ],
  metadataBase: new URL("https://sec.pentorasec.com.tr"),
  openGraph: {
    title: "Pentora Security",
    description:
      "Kurumsal siber güvenlik ve pentest danışmanlığı hizmetleri.",
    type: "website",
    locale: "tr_TR",
  },
  icons: {
    icon: "/logo-pentora.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-background text-white antialiased">
        {children}
      </body>
    </html>
  );
}
