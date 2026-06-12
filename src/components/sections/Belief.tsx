import Container from "@/components/ui/Container";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import GhostText from "@/components/animation/GhostText";
import TiltCard from "@/components/animation/TiltCard";
import { cn } from "@/lib/utils";

/** 代表の哲学メッセージ */
const PHILOSOPHIES = [
  "売り込まない。問題意識を育て、相手から「欲しい」を引き出す。",
  "パッケージで成果は出ない。お客様に合わせるために、受注前から市場調査に動く。それが、うちのスタンダードです。",
  "一度決めたことをやり抜く。成果が出るまで伴走します。",
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
    <section
      id="belief"
      className="py-24 lg:py-36 section-light bg-gradient-light relative overflow-hidden"
    >
      {/* 背景の巨大ゴーストタイポ */}
      <GhostText
        text="BELIEF"
        className="text-[26vw] lg:text-[20vw] -top-4 -left-6"
      />

      <Container className="relative z-10">
        <FadeInOnScroll>
          <div className="mb-16 lg:mb-20">
            <span className="text-accent-gold text-sm font-medium uppercase tracking-widest mb-3 block">
              Belief
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-text-primary leading-tight">
              人として向き合い、結果で応える。
            </h2>
            <p className="mt-4 text-text-dark text-sm uppercase tracking-widest">
              Founder —{" "}
              <span className="text-text-primary font-bold text-base tracking-normal normal-case">
                代表 宇田 照史
              </span>
            </p>
          </div>
        </FadeInOnScroll>

        {/* 代表の哲学 — 段差を付けた巨大引用タイポグラフィ */}
        <div className="max-w-4xl space-y-14 lg:space-y-20 mb-24 lg:mb-32">
          {PHILOSOPHIES.map((text, index) => (
            <FadeInOnScroll
              key={text}
              direction={index % 2 === 0 ? "right" : "left"}
            >
              <blockquote
                className={cn(
                  "relative pl-8 lg:pl-10",
                  index === 1 && "lg:ml-24",
                  index === 2 && "lg:ml-48"
                )}
              >
                <span
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-accent-gold to-accent-gold/10"
                  aria-hidden="true"
                />
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-text-primary leading-relaxed">
                  {text}
                </p>
              </blockquote>
            </FadeInOnScroll>
          ))}
        </div>

        {/* Values */}
        <FadeInOnScroll>
          <p className="text-accent-gold text-sm font-medium uppercase tracking-widest mb-8">
            Values
          </p>
        </FadeInOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {VALUES.map((value, index) => (
            <FadeInOnScroll key={value.title} delay={index * 0.1}>
              <TiltCard className="h-full">
                <div className="h-full text-center p-6 rounded-2xl bg-bg-card border border-border transition-shadow duration-300 hover:glow-gold">
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
              </TiltCard>
            </FadeInOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
