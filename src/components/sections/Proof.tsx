import Container from "@/components/ui/Container";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import CountUp from "@/components/animation/CountUp";

/** クライアントの変化ストーリー（主語はクライアント） */
const CLIENT_STORIES = [
  {
    before: "5年間、問い合わせゼロだった工務店。",
    after: "3ヶ月で、初めての問い合わせが来た。",
  },
  {
    before: "月30万の売上だったEC事業。",
    after: "1年で年商1億3,000万に成長した。",
  },
  {
    before: "開業5ヶ月、実績ゼロの中古車販売。",
    after: "毎週商談が入るようになった。",
  },
];

/** 信頼指標（さらっと） */
const STATS = [
  { value: 0, suffix: "%", label: "契約解除率" },
  { value: 100, suffix: "%", label: "紹介率" },
];

/** 実績セクション — クライアントに起きた変化 */
export default function Proof() {
  return (
    <section className="py-20 lg:py-28 section-light bg-gradient-light relative overflow-hidden">
      <Container className="relative z-10">
        <FadeInOnScroll>
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-accent-gold text-sm font-medium uppercase tracking-widest mb-3 block">
              Proof
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight">
              クライアントに起きた変化。
            </h2>
          </div>
        </FadeInOnScroll>

        {/* クライアントの物語 */}
        <div className="max-w-3xl mx-auto space-y-6 mb-16">
          {CLIENT_STORIES.map((story, index) => (
            <FadeInOnScroll key={story.before} delay={index * 0.15}>
              <div className="p-6 lg:p-8 rounded-2xl bg-bg-card border border-border">
                <p className="text-text-dark text-sm mb-2">{story.before}</p>
                <p className="text-text-primary text-lg font-bold">
                  {story.after}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        {/* 数字バー（さらっと） */}
        <FadeInOnScroll delay={0.4}>
          <div className="flex justify-center gap-12 lg:gap-20">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-accent-gold mb-1">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-text-muted text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeInOnScroll>
      </Container>
    </section>
  );
}
