import Container from "@/components/ui/Container";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";

/** 代表の哲学メッセージ */
const PHILOSOPHIES = [
  "売り込まない。問題意識を育て、相手から「欲しい」を引き出す。",
  "受注前から動きます。それが、うちのスタンダードです。",
  "契約後こそが本番。6ヶ月間のアフターフォローで信頼を積む。",
];

/** バリューズ（MVVより） */
const VALUES = [
  {
    title: "照らす",
    english: "Illuminate",
    description: "クライアントの課題と可能性に光を当てる",
  },
  {
    title: "創る",
    english: "Create",
    description: "既存の枠にとらわれず、新しい道を切り開く",
  },
  {
    title: "貫く",
    english: "Commit",
    description: "一度決めたことをやり抜く",
  },
  {
    title: "繋ぐ",
    english: "Connect",
    description: "人と人、企業と可能性を結びつける",
  },
];

/** 哲学セクション — 代表紹介 + Values */
export default function Belief() {
  return (
    <section id="belief" className="py-20 lg:py-28 bg-bg-secondary">
      <Container>
        <FadeInOnScroll>
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-accent-gold text-sm font-medium uppercase tracking-widest mb-3 block">
              Belief
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight">
              人として向き合い、結果で応える。
            </h2>
          </div>
        </FadeInOnScroll>

        {/* 代表の哲学 */}
        <div className="max-w-3xl mx-auto mb-16">
          <FadeInOnScroll>
            <div className="text-center mb-8">
              <p className="text-text-dark text-sm uppercase tracking-widest mb-2">
                Founder
              </p>
              <p className="text-text-primary text-xl font-bold">
                代表 宇田 照史
              </p>
            </div>
          </FadeInOnScroll>

          <div className="space-y-4">
            {PHILOSOPHIES.map((text, index) => (
              <FadeInOnScroll key={text} delay={index * 0.1}>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-bg-card border border-border">
                  <span className="text-accent-gold text-lg shrink-0 mt-0.5">
                    ▸
                  </span>
                  <p className="text-text-primary text-base leading-relaxed">
                    {text}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>

        {/* Values */}
        <FadeInOnScroll>
          <p className="text-center text-accent-gold text-sm font-medium uppercase tracking-widest mb-8">
            Values
          </p>
        </FadeInOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {VALUES.map((value, index) => (
            <FadeInOnScroll key={value.title} delay={index * 0.1}>
              <div className="text-center p-6 rounded-2xl bg-bg-card border border-border">
                <p className="text-accent-gold text-2xl font-bold mb-1">
                  {value.title}
                </p>
                <p className="text-text-dark text-xs uppercase tracking-widest mb-3">
                  {value.english}
                </p>
                <p className="text-text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
