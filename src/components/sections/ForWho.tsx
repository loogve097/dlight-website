import Container from "@/components/ui/Container";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";

/** 理想のクライアント像 */
const IDEAL_CLIENTS = [
  {
    icon: "🏢",
    label: "不動産・工務店・車業界・店舗ビジネスの経営者",
  },
  {
    icon: "🚀",
    label: "新規事業の立ち上げ期で、集客モデルを形にしたい方",
  },
  {
    icon: "📉",
    label: "既存の集客に限界を感じている方",
  },
  {
    icon: "🤔",
    label: "「SNSやった方がいい」と思いつつ動けていない方",
  },
  {
    icon: "😤",
    label: "今の代理店に不満がある方",
  },
];

/** 対象にならないケース（正直に伝える） */
const NOT_FOR = [
  "投稿の代行だけを求めている方",
  "月数千万規模の広告予算一括運用をお考えの方",
];

/** 対象セクション — こんな方と一緒に走りたい */
export default function ForWho() {
  return (
    <section className="py-20 lg:py-28 bg-bg-secondary">
      <Container>
        <FadeInOnScroll>
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-accent-gold text-sm font-medium uppercase tracking-widest mb-3 block">
              For You
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight">
              こんな方と、一緒に走りたい。
            </h2>
          </div>
        </FadeInOnScroll>

        <div className="max-w-2xl mx-auto space-y-3 mb-12">
          {IDEAL_CLIENTS.map((client, index) => (
            <FadeInOnScroll key={client.label} delay={index * 0.1}>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-bg-card border border-border">
                <span className="text-2xl shrink-0">{client.icon}</span>
                <p className="text-text-primary text-base">{client.label}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        <FadeInOnScroll delay={0.5}>
          <div className="max-w-xl mx-auto">
            <p className="text-text-dark text-xs text-center uppercase tracking-widest mb-4">
              ※ 以下のケースには不向きです
            </p>
            <div className="flex flex-col gap-2">
              {NOT_FOR.map((item) => (
                <p key={item} className="text-text-dark text-sm text-center">
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
