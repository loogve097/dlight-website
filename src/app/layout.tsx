import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Yuji_Syuku } from "next/font/google";
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

const yujiSyuku = Yuji_Syuku({
  variable: "--font-yuji-syuku",
  weight: "400",
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
    "代理店に任せても成果が出ない——そんな中小企業の経営者へ。D'Lightは戦略設計から実行まで伴走し、自社で回せる集客の仕組みを一緒に創ります。SNS運用・WEB広告・映像制作を一気通貫で支援。神奈川・東京エリア対応。",
  keywords: [
    "WEBマーケティング",
    "中小企業 マーケティング",
    "伴走型マーケティング",
    "マーケティング 自走化",
    "SNS運用代行",
    "SNS運用 自走化",
    "WEB広告運用",
    "マーケティング 代理店 成果出ない",
    "集客支援",
    "採用マーケティング",
    "映像制作",
    "WEB制作",
    "マーケティング支援 神奈川",
    "WEBマーケティング 東京 中小企業",
  ],
  openGraph: {
    title: "D'Light | 歴史を照らし、道を創る。",
    description:
      "代理店に任せても成果が出ない中小企業へ。戦略設計から実行まで伴走し、自社で回せるマーケティングの仕組みを創るD'Lightです。",
    type: "website",
    locale: "ja_JP",
    siteName: "D'Light",
    url: BASE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "D'Light | 歴史を照らし、道を創る。",
    description:
      "代理店に任せても成果が出ない中小企業へ。戦略設計から実行まで伴走し、自社で回せるマーケティングの仕組みを創るD'Lightです。",
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
        className={`${inter.variable} ${notoSansJP.variable} ${yujiSyuku.variable} antialiased bg-bg-primary text-text-primary`}
      >
        <JsonLd />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
