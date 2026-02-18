import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";

/** フローステップ */
const STEPS = [
  {
    num: "01",
    title: "無料相談",
    description: "現状の課題感をヒアリング。\n方向性のすり合わせを行います。",
    duration: "30〜60分",
  },
  {
    num: "02",
    title: "リサーチ・戦略設計",
    description: "市場・競合・ターゲットを\n徹底リサーチし戦略を策定。",
    duration: "1〜2週間",
  },
  {
    num: "03",
    title: "施策実行・運用",
    description: "SNS・広告・制作を\n一気通貫で実行します。",
    duration: "継続",
  },
  {
    num: "04",
    title: "分析・改善",
    description: "データに基づくPDCAで\n成果を積み上げます。",
    duration: "毎月",
  },
];

/** 支援フローセクション */
export default function Flow() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-dark">
      <Container>
        <FadeInOnScroll>
          <SectionTitle
            label="Process"
            title="ご依頼から成果までの流れ"
            subtitle="まずは無料相談から。現状の課題をお聞かせください。"
          />
        </FadeInOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {STEPS.map((step, index) => (
            <FadeInOnScroll key={step.num} delay={index * 0.15}>
              <div className="relative text-center lg:text-left">
                {/* ステップ番号 */}
                <div className="text-accent-gold text-5xl lg:text-6xl font-bold opacity-20 mb-2 leading-none">
                  {step.num}
                </div>

                {/* コネクター（LGのみ） */}
                {index < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-8 h-px bg-accent-gold/20" />
                )}

                {/* タイトル */}
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {step.title}
                </h3>

                {/* 説明 */}
                <p className="text-text-muted text-sm leading-relaxed whitespace-pre-line">
                  {step.description}
                </p>

                {/* 所要期間 */}
                <span className="inline-block mt-3 text-xs text-accent-gold bg-accent-gold/10 px-3 py-1 rounded-full">
                  {step.duration}
                </span>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
