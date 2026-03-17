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

/** 実績セクション — 結果で、語る。 */
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
              結果で、語る。
            </h2>
          </div>
        </FadeInOnScroll>

        {/* クライアントの物語 — Before → After */}
        <div className="max-w-3xl mx-auto space-y-6 mb-16">
          {CLIENT_STORIES.map((story, index) => (
            <FadeInOnScroll key={story.before} delay={index * 0.15}>
              <div className="rounded-2xl bg-bg-card border border-border overflow-hidden">
                {/* Before */}
                <div className="px-6 lg:px-8 pt-6 lg:pt-8 pb-4">
                  <span className="text-text-dark text-xs uppercase tracking-widest">
                    Before
                  </span>
                  <p className="text-text-dark text-base mt-1">
                    {story.before}
                  </p>
                </div>

                {/* 矢印セパレーター */}
                <div className="flex items-center gap-3 px-6 lg:px-8">
                  <div className="flex-1 h-px bg-accent-gold/30" />
                  <span className="text-accent-gold text-lg">▼</span>
                  <div className="flex-1 h-px bg-accent-gold/30" />
                </div>

                {/* After */}
                <div className="px-6 lg:px-8 pt-4 pb-6 lg:pb-8">
                  <span className="text-accent-gold text-xs uppercase tracking-widest">
                    After
                  </span>
                  <p className="text-text-primary text-xl lg:text-2xl font-bold mt-1">
                    {story.after}
                  </p>
                </div>
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
