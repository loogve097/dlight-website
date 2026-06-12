import { WorkItem } from "@/types";

/** 実績データ（クライアント名は非公開） */
export const WORKS: WorkItem[] = [
  {
    id: "work-1",
    category: "sns",
    genre: "車業界 / YouTube・SNSプロデュース",
    challenge: "SNSでの認知拡大とファン獲得に課題を抱えていた",
    approach:
      "ストリート系企画とドキュメンタリー要素を融合したコンテンツ戦略を設計・実行",
    result: "累計数千万再生を達成し、数万人規模のフォロワーを獲得",
    metrics: ["数千万再生", "数万フォロワー獲得"],
  },
  {
    id: "work-2",
    category: "sns",
    genre: "求人・採用 / SNSプロデュース",
    challenge: "採用コストの高騰と母集団形成に課題があった",
    approach:
      "バイラルコンテンツを企画・制作し、ターゲット層へリーチ",
    result: "10万人超のフォロワーを獲得し、採用コストの大幅削減に成功",
    metrics: ["10万人超フォロワー", "採用コスト削減"],
  },
  {
    id: "work-4",
    category: "new-market",
    genre: "不動産 / ニッチ市場開拓",
    challenge:
      "外国人向けの不動産マーケティング",
    approach:
      "ターゲット層のインサイトを徹底リサーチし、言語の壁を超えたマーケティング施策を設計",
    result: "2ヶ月で100件超の反響を獲得し、新規市場の開拓に成功",
    metrics: ["2ヶ月で100件超", "新市場開拓成功"],
  },
  {
    id: "work-5",
    category: "sns",
    genre: "介護業界 / SNS運用",
    challenge: "業界特有のイメージ改善と認知拡大が課題だった",
    approach:
      "現場のリアルを伝えるドキュメンタリー型コンテンツで業界の魅力を発信",
    result: "業界内での認知度向上とポジティブなブランドイメージの構築に成功",
    metrics: ["認知度大幅向上", "ブランドイメージ改善"],
  },
  {
    id: "work-6",
    category: "ads",
    genre: "複数業界 / WEB広告運用",
    challenge: "広告費の効率化とスケーラブルな集客モデルの構築",
    approach:
      "Google・Meta広告のクリエイティブ最適化とターゲティング精度の向上を実施",
    result: "CPA(顧客獲得単価)の大幅削減とCV数の安定的な増加を実現",
    metrics: ["CPA大幅削減", "CV数安定増加"],
  },
];
