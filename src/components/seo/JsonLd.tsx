/** サイトのベースURL */
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.dlight-inc.jp";

/** 組織の構造化データ（Organization） */
function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "D'Light",
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo.png`,
    description:
      "集客と採用のためのWEBマーケティング支援。SNS運用・WEB広告・映像制作を一気通貫で支援。",
    foundingDate: "2023",
    founder: {
      "@type": "Person",
      name: "宇田 照史",
      jobTitle: "代表",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "神奈川県",
      addressCountry: "JP",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 35.6762,
        longitude: 139.6503,
      },
      geoRadius: "100000",
    },
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: `${BASE_URL}/contact`,
      availableLanguage: "Japanese",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** ローカルビジネスの構造化データ */
function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "D'Light",
    url: BASE_URL,
    description:
      "中小企業向けWEBマーケティング支援。SNS運用代行、WEB広告運用、映像制作、WEB制作を一気通貫で対応。",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressRegion: "神奈川県",
      addressCountry: "JP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.6762,
      longitude: 139.6503,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "WEBマーケティングサービス",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SNS運用代行",
            description:
              "YouTube・TikTok・Instagramの企画から運用まで一気通貫で対応",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "WEB広告運用",
            description: "Google・Meta広告のCPA最適化とスケーラブルな運用モデル構築",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "映像制作",
            description:
              "ショートドラマ・ドキュメンタリー・PR動画など目的に合わせた映像制作",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "WEB制作",
            description:
              "LP・コーポレートサイトの企画・設計・制作。マーケティング視点の導線設計",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** WebサイトのBreadcrumb構造化データ */
function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "D'Light",
    url: BASE_URL,
    description:
      "集客と採用のためのWEBマーケティング支援。運用代行で終わらない、事業をグロースさせる「勝ち筋」の設計。",
    publisher: {
      "@type": "Organization",
      name: "D'Light",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** 全構造化データをまとめて出力するコンポーネント */
export default function JsonLd() {
  return (
    <>
      <OrganizationJsonLd />
      <LocalBusinessJsonLd />
      <WebSiteJsonLd />
    </>
  );
}
