import { ServiceItem } from "@/types";

/** サービス一覧データ */
export const SERVICES: ServiceItem[] = [
  {
    id: "sns",
    title: "SNS運用代行",
    description:
      "YouTube・TikTok・Instagramを中心に、企画立案から撮影・編集・分析まで一気通貫で対応。ストリート系企画やショートドラマなど、独自のコンテンツ設計でファン化を実現します。",
    icon: "📱",
    features: [
      "YouTube / TikTok / Instagram 運用",
      "企画立案・コンテンツ設計",
      "撮影・編集・投稿管理",
      "データ分析・改善提案",
      "フォロワー獲得戦略",
    ],
  },
  {
    id: "ads",
    title: "WEB広告運用",
    description:
      "Google・Meta・楽天広告を中心に、CPA最適化とスケーラブルな運用モデルを構築。データドリブンなPDCAで広告費対効果を最大化します。",
    icon: "📊",
    features: [
      "Google / Meta / 楽天広告",
      "CPA最適化・ROAS改善",
      "ターゲティング設計",
      "クリエイティブ制作・ABテスト",
      "レポーティング・改善提案",
    ],
  },
  {
    id: "web",
    title: "WEB制作",
    description:
      "LP・コーポレートサイトの企画・設計・制作を行います。マーケティング視点を取り入れた導線設計で、CVにつながるサイトを構築します。",
    icon: "💻",
    features: [
      "ランディングページ制作",
      "コーポレートサイト制作",
      "UI/UXデザイン",
      "レスポンシブ対応",
      "SEO内部対策",
    ],
  },
  {
    id: "video",
    title: "映像制作",
    description:
      "ショートドラマ・ドキュメンタリー・PR動画など、目的に合わせた映像コンテンツを制作。「ドキュメンタリー性」を活かしたストーリーテリングが強みです。",
    icon: "🎬",
    features: [
      "ショートドラマ制作",
      "ドキュメンタリー映像",
      "企業PR動画",
      "SNS向けショート動画",
      "撮影・編集・ナレーション",
    ],
  },
];

/** サービスフロー */
export const SERVICE_FLOW = [
  {
    step: "01",
    title: "ヒアリング",
    description: "事業課題・目標・ターゲットを深く理解します",
  },
  {
    step: "02",
    title: "戦略設計",
    description: "データに基づいた勝ち筋の戦略を設計します",
  },
  {
    step: "03",
    title: "実行・運用",
    description: "戦略に基づいた施策を実行・運用します",
  },
  {
    step: "04",
    title: "分析・改善",
    description: "データを分析し、継続的に改善を行います",
  },
];
