import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import { STRENGTHS } from "@/data/works";

/** 選ばれる理由セクション */
export default function Strengths() {
  return (
    <section className="py-20 lg:py-28 bg-bg-secondary">
      <Container>
        <FadeInOnScroll>
          <SectionTitle
            label="Why D'Light"
            title="大手でもフリーランスでもない、D'Lightという選択"
            subtitle="レポートを送るだけの運用代行とは違います。"
          />
        </FadeInOnScroll>

        {/* カード一覧 — 番号+テキストのミニマルレイアウト */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
          {STRENGTHS.map((strength, index) => (
            <FadeInOnScroll key={strength.title} delay={index * 0.1}>
              <div className="bg-bg-card p-8 lg:p-10 h-full group hover:bg-bg-card-hover transition-colors duration-300">
                {/* 番号 */}
                <span className="text-accent-gold/30 text-5xl font-bold leading-none block mb-4">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* アイコン + タイトル */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{strength.icon}</span>
                  <h3 className="text-lg font-bold text-text-primary">
                    {strength.title}
                  </h3>
                </div>

                {/* 説明 */}
                <p className="text-text-muted text-sm leading-relaxed">
                  {strength.description}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
