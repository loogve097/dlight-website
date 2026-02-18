import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";

/** 対象顧客データ */
const TARGETS = [
  {
    label: "中小企業の経営者・役員",
    description:
      "紹介や既存顧客に頼った集客に限界を感じている。WEBで安定的にリードを獲得する仕組みを作りたい。",
    icon: "🏢",
  },
  {
    label: "スタートアップ・新規事業責任者",
    description:
      "新しいサービスや商品を市場に投入したい。ゼロからの集客モデルを最短で形にしたい。",
    icon: "🚀",
  },
  {
    label: "採用に課題を持つ人事・経営層",
    description:
      "求人媒体だけでは採用が追いつかない。SNSや動画で自社の魅力を届け、採用力を高めたい。",
    icon: "👥",
  },
];

/** 対象にならないケース */
const NOT_FOR = [
  "大規模な組織体制でのマーケティング運用を求める方",
  "月数百万円規模の広告予算を一括運用したい方",
  "投稿の代行だけを求めている方",
];

/** 対象顧客セクション */
export default function Target() {
  return (
    <section className="py-20 lg:py-28 bg-bg-secondary">
      <Container>
        <FadeInOnScroll>
          <SectionTitle
            label="For You"
            title="D'Lightが力を発揮できる場面"
            subtitle="少数精鋭だからこそ、すべての企業に最適とは限りません。"
          />
        </FadeInOnScroll>

        {/* 対象顧客 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {TARGETS.map((target, index) => (
            <FadeInOnScroll key={target.label} delay={index * 0.15}>
              <div className="bg-bg-card border border-border rounded-2xl p-6 lg:p-8 h-full">
                <span className="text-3xl mb-4 block">{target.icon}</span>
                <h3 className="text-lg font-bold text-text-primary mb-3">
                  {target.label}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {target.description}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        {/* 対象にならないケース（正直に伝える） */}
        <FadeInOnScroll delay={0.4}>
          <div className="max-w-2xl mx-auto">
            <p className="text-text-dark text-xs text-center uppercase tracking-widest mb-4">
              ※ 以下のケースには不向きです
            </p>
            <div className="flex flex-col gap-2">
              {NOT_FOR.map((item) => (
                <p
                  key={item}
                  className="text-text-dark text-sm text-center"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </FadeInOnScroll>
      </Container>
    </section>
  );
}
