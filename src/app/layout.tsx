import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import "./globals.css";

/* フォント設定 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

/** サイトのベースURL */
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.dlight-inc.jp";

/* メタデータ */
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "D'Light | 歴史を照らし、道を創る。",
    template: "%s | D'Light",
  },
  description:
    "中小企業の可能性を照らし、成長の道を創る。WEBマーケティング支援と健康経営コンサルティングの二本柱で、事業の成長を支えるD'Lightです。",
  keywords: [
    "WEBマーケティング",
    "中小企業 マーケティング",
    "集客支援",
    "健康経営",
    "SNS運用代行",
    "WEB広告運用",
    "採用マーケティング",
    "映像制作",
    "WEB制作",
    "マーケティング支援",
    "健康経営優良法人",
    "健康経営コンサルティング",
  ],
  openGraph: {
    title: "D'Light | 歴史を照らし、道を創る。",
    description:
      "中小企業の可能性を照らし、成長の道を創る。WEBマーケティング支援と健康経営コンサルティングで事業成長を支援。",
    type: "website",
    locale: "ja_JP",
    siteName: "D'Light",
    url: BASE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "D'Light | 歴史を照らし、道を創る。",
    description:
      "中小企業の可能性を照らし、成長の道を創る。WEBマーケティング支援と健康経営コンサルティングで事業成長を支援。",
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  /* Google Search Console 所有権確認用 */
  verification: {
    google: "Kh1sUxVDuK2g36KgmpJT5sYJ4iPHgZ2tremP5P29YSs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${inter.variable} ${notoSansJP.variable} antialiased bg-bg-primary text-text-primary`}
      >
        <JsonLd />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
