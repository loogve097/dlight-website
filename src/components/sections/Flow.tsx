import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";

/** 支援フロー（6ステップ） */
const STEPS = [
  {
    num: "01",
    title: "無料相談",
    description:
      "まずは話を聞かせてください。\n60〜180分のヒアリング。\n最高の提案をさせていただくために、わからない部分は全部お聞きします。",
  },
  {
    num: "02",
    title: "市場リサーチ・ボトルネック特定",
    description:
      "受注前から動きます。\n会社にお邪魔して雰囲気も確認。\n競合・市場を徹底リサーチ。",
  },
  {
    num: "03",
    title: "ご提案",
    description:
      "提案前提の場合、市場調査等は無料。\n御社に最適なプランをご提案します。",
  },
  {
    num: "04",
    title: "カスタム戦略設計",
    description: "パッケージではなく、\n御社専用の戦略を設計。",
  },
  {
    num: "05",
    title: "施策実行・伴走",
    description: "戦略を立てた本人が、\n実行も担当します。",
  },
  {
    num: "06",
    title: "分析・改善・自走化",
    description: "最終ゴールは、\n御社が自走できる状態。",
  },
];

/** 支援フローセクション — 始め方はシンプル */
export default function Flow() {
  return (
    <section className="py-20 lg:py-28 section-light bg-gradient-light">
      <Container>
        <FadeInOnScroll>
          <SectionTitle
            label="Process"
            title="始め方は、シンプルです。"
            subtitle="まずは無料相談から。現状の課題をお聞かせください。"
          />
        </FadeInOnScroll>

        <div className="max-w-3xl mx-auto space-y-4">
          {STEPS.map((step, index) => (
            <FadeInOnScroll key={step.num} delay={index * 0.1}>
              <div className="flex items-start gap-6 p-5 rounded-2xl bg-bg-card/50 border border-border">
                <div className="text-accent-gold text-3xl font-bold opacity-40 leading-none shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary mb-1">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed whitespace-pre-line">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
