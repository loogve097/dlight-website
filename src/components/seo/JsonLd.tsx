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
      "中小企業向け伴走型WEBマーケティング支援。戦略設計から実行まで一貫して担当し、自走できる集客の仕組みを一緒に創ります。SNS運用・WEB広告・映像制作を一気通貫で支援。神奈川・東京エリア対応。",
    foundingDate: "2023",
    founder: {
      "@type": "Person",
      name: "宇田照史",
      alternateName: "Uda Akihito",
      jobTitle: "代表",
      url: `${BASE_URL}/about`,
      image: `${BASE_URL}/images/portrait.jpg`,
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "神奈川県",
      addressCountry: "JP",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "神奈川県",
      },
      {
        "@type": "AdministrativeArea",
        name: "東京都",
      },
    ],
    sameAs: [
      "https://x.com/teru_tlidh",
      "https://www.instagram.com/d.light_97",
    ],
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
      "中小企業向け伴走型WEBマーケティング支援。代理店に任せても成果が出ないとお悩みの経営者へ。戦略設計から実行・自走化まで一気通貫で対応。神奈川・東京エリア。",
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
      "中小企業の可能性を照らし、成長の道を創る。伴走型WEBマーケティング支援で、自走できる集客の仕組みづくりを支援します。",
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

/** ブログ記事の構造化データ（Article） */
type ArticleJsonLdProps = {
  title: string;
  description: string;
  date: string;
  slug: string;
  category: string;
  tags: string[];
};

export function ArticleJsonLd({
  title,
  description,
  date,
  slug,
  category,
  tags,
}: ArticleJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: new Date(date).toISOString(),
    dateModified: new Date(date).toISOString(),
    author: {
      "@type": "Person",
      name: "宇田照史",
      alternateName: "Uda Akihito",
      jobTitle: "代表",
      url: `${BASE_URL}/about`,
      image: `${BASE_URL}/images/portrait.jpg`,
    },
    publisher: {
      "@type": "Organization",
      name: "D'Light",
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${slug}`,
    },
    articleSection: category,
    keywords: tags.join(", "),
    inLanguage: "ja",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** 代表者の構造化データ（Person） — Aboutページ用 */
export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "宇田照史",
    alternateName: ["宇田 照史", "Uda Akihito", "Akihito Uda"],
    jobTitle: "代表",
    description:
      "D'Light代表。中小企業向け伴走型WEBマーケティング支援。戦略設計から実行まで一貫して担当し、自走できる集客の仕組みを一緒に創る。",
    url: `${BASE_URL}/about`,
    image: `${BASE_URL}/images/portrait.jpg`,
    worksFor: {
      "@type": "Organization",
      name: "D'Light",
      url: BASE_URL,
    },
    knowsAbout: [
      "WEBマーケティング",
      "SNS運用",
      "WEB広告運用",
      "映像制作",
      "中小企業支援",
      "健康経営コンサルティング",
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "神奈川県",
      addressCountry: "JP",
    },
    sameAs: [
      "https://x.com/teru_tlidh",
      "https://www.instagram.com/d.light_97",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** パンくずリストの構造化データ（BreadcrumbList） */
type BreadcrumbItem = {
  name: string;
  href: string;
};

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
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
