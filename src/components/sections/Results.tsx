import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import CountUp from "@/components/animation/CountUp";
import { RESULT_HIGHLIGHTS } from "@/data/works";

/** 実績ハイライトセクション */
export default function Results() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-dark relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
          style={{
            background:
              "radial-gradient(circle, rgba(212,168,67,0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <FadeInOnScroll>
          <SectionTitle
            label="Results"
            title="数字で見る実績"
            subtitle="クライアントの事業成長に貢献した、実際の成果をご紹介します。"
          />
        </FadeInOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {RESULT_HIGHLIGHTS.map((item, index) => (
            <FadeInOnScroll key={item.label} delay={index * 0.15}>
              <div className="text-center p-6 rounded-2xl bg-bg-card/50 border border-border">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-gold mb-2">
                  <CountUp
                    target={item.numericValue}
                    suffix={item.suffix}
                  />
                </div>
                <p className="text-text-muted text-sm">{item.label}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
