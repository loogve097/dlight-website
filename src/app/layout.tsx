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

/** サイトのベースURL（デプロイ後に実際のドメインに変更） */
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://dlight-marketing.com";

/* メタデータ */
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "D'Light | WEBマーケティング支援",
    template: "%s | D'Light",
  },
  description:
    "集客と採用のためのWEBマーケティング支援。運用代行で終わらない、事業をグロースさせる「勝ち筋」の設計。SNS運用・WEB広告・映像制作を一気通貫で支援するD'Lightです。",
  keywords: [
    "WEBマーケティング",
    "SNS運用代行",
    "WEB広告運用",
    "採用マーケティング",
    "映像制作",
    "WEB制作",
    "マーケティング支援",
    "SNS採用",
    "YouTube運用",
    "TikTok運用",
    "中小企業 マーケティング",
    "集客支援",
  ],
  openGraph: {
    title: "D'Light | 集客と採用のWEBマーケティング支援",
    description:
      "運用代行で終わらない、事業をグロースさせる「勝ち筋」の設計。SNS運用・WEB広告・映像制作を一気通貫で支援。",
    type: "website",
    locale: "ja_JP",
    siteName: "D'Light",
    url: BASE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "D'Light | WEBマーケティング支援",
    description:
      "運用代行で終わらない、事業をグロースさせる「勝ち筋」の設計。",
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
