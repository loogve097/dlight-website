import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import Card from "@/components/ui/Card";

/** 解決する課題（集客 + 採用の両軸） */
const PROBLEMS = [
  {
    icon: "🔄",
    title: "紹介営業から脱却し、\n安定した集客基盤を作りたい",
    description:
      "紹介や既存顧客に依存した売上構造に限界を感じている。WEB上で安定的にリードを獲得し、営業効率を上げたい。",
  },
  {
    icon: "👥",
    title: "求人を出しても\n応募が集まらない",
    description:
      "求人媒体に掲載しても反応が薄く、採用コストだけが膨らんでいる。SNSや動画を活用し、自社の魅力を届ける仕組みを作りたい。",
  },
  {
    icon: "🚀",
    title: "新規事業を最短で\n立ち上げたい",
    description:
      "新しいサービスや商品を市場に投入したいが、何から始めればいいかわからない。ゼロからの集客モデルを素早く形にしたい。",
  },
  {
    icon: "📉",
    title: "SNSや広告の運用に\n限界を感じている",
    description:
      "投稿や出稿を続けているが成果が頭打ち。戦略を見直し、集客も採用も成果につながるマーケティングに進化させたい。",
  },
];

/** 課題提起セクション */
export default function Problems() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-dark">
      <Container>
        <FadeInOnScroll>
          <SectionTitle
            label="Problems"
            title="こんな課題を感じていませんか？"
            subtitle="集客と採用、どちらの課題にもD'Lightは戦略設計から実行まで一気通貫でご対応いたします。"
          />
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROBLEMS.map((problem, index) => (
            <FadeInOnScroll key={problem.title} delay={index * 0.15}>
              <Card>
                <span className="text-4xl mb-4 block">{problem.icon}</span>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {problem.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {problem.description}
                </p>
              </Card>
            </FadeInOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
