import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";

/** クライアントの声データ（匿名化済み） */
const VOICES = [
  {
    quote:
      "以前の業者はオンラインで月1回のMTGだけだったけど、宇田さんはうちの事務所にも来てくれて、こちらの思いを汲み取ろうとしてくれる。距離の近さが全然違いました。",
    industry: "不動産業",
    role: "代表取締役",
  },
  {
    quote:
      "こちらの業界のことを本当によくリサーチしてくれていて驚きました。「そこまで調べてるんですか？」と。提案の解像度が他社と全然違う。",
    industry: "サービス業",
    role: "経営者",
  },
  {
    quote:
      "レスポンスの速さが段違い。質問を投げたら当日中に返ってくるので、こちらも意思決定が早くなった。結果的にプロジェクト全体のスピードが上がりました。",
    industry: "人材業",
    role: "マーケティング責任者",
  },
];

/** クライアントの声セクション */
export default function Voices() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-dark relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] opacity-5"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <FadeInOnScroll>
          <SectionTitle
            label="Voices"
            title="クライアントの声"
            subtitle="D'Lightに依頼いただいたお客様からの声をご紹介します。"
          />
        </FadeInOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {VOICES.map((voice, index) => (
            <FadeInOnScroll key={index} delay={index * 0.15}>
              <div className="bg-bg-card border border-border rounded-2xl p-6 lg:p-8 h-full flex flex-col">
                {/* 引用符 */}
                <span className="text-accent-gold text-4xl font-serif leading-none mb-4">
                  &ldquo;
                </span>

                {/* 声の内容 */}
                <p className="text-text-muted text-sm leading-relaxed flex-1">
                  {voice.quote}
                </p>

                {/* セパレーター */}
                <div className="separator-line my-5" />

                {/* 属性情報 */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center">
                    <span className="text-accent-gold text-xs font-bold">
                      {voice.industry.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-text-primary text-sm font-medium">
                      {voice.industry}
                    </p>
                    <p className="text-text-dark text-xs">{voice.role}</p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
