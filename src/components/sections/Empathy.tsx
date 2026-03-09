import Container from "@/components/ui/Container";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";

/** 業界への共感ポイント */
const PAIN_POINTS = [
  "代理店に毎月お金を払っているのに、成果が見えない",
  "レポートは届くけど、何が変わったのかわからない",
  "パッケージプランを売られて、自社に合っているか不安",
  "担当者がコロコロ変わって、毎回イチから説明",
];

/** 共感セクション — 業界への疑問 */
export default function Empathy() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-dark">
      <Container>
        <FadeInOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <span className="text-accent-gold text-sm font-medium uppercase tracking-widest mb-3 block">
              Empathy
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight">
              こんな経験、ありませんか？
            </h2>
          </div>
        </FadeInOnScroll>

        <div className="max-w-2xl mx-auto space-y-4">
          {PAIN_POINTS.map((point, index) => (
            <FadeInOnScroll key={point} delay={index * 0.1}>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-bg-card/50 border border-border">
                <span className="text-accent-gold text-lg mt-0.5 shrink-0">
                  —
                </span>
                <p className="text-text-muted text-base leading-relaxed">
                  「{point}」
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        <FadeInOnScroll delay={0.5}>
          <p className="text-center mt-12 text-text-primary text-lg font-medium">
            D&apos;Lightは、この全てと逆のことをします。
          </p>
        </FadeInOnScroll>
      </Container>
    </section>
  );
}
