import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Produck — Emlak Fotoğraflarını Videoya Dönüştür",
  description:
    "Emlak ilanınız için profesyonel ev gezintisi videosu. Fotoğraflarınızı 24 saatte videoya dönüştürüyoruz. 1.500 TL'dan başlayan fiyatlarla.",
  openGraph: {
    locale: "tr_TR",
    type: "website",
    siteName: "Produck",
    title: "Produck — Emlak Fotoğraflarını Videoya Dönüştür",
    description:
      "Ortalama kalitedeki ilan görsellerinizi düzenliyor, profesyonel ev gezintisi videosuna dönüştürüyoruz.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${fraunces.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
