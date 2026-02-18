import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "代表紹介",
  description:
    "D'Light 代表 宇田照史のプロフィール。WEBマーケティングの専門家として、事業のグロースを支援します。",
};

/** スキル一覧 */
const SKILLS = [
  { category: "SNS", items: ["YouTube", "TikTok", "Instagram"] },
  { category: "広告", items: ["Google", "META", "LINE", "TikTok"] },
  { category: "映像制作", items: ["ショートドラマ", "ドキュメンタリー", "企業PR動画", "SNS向けショート動画"] },
  {
    category: "戦略",
    items: ["マーケティング戦略", "SEO", "MEO", "コンテンツ設計"],
  },
];

/** 代表紹介ページ */
export default function AboutPage() {
  return (
    <>
      {/* ヘッダー */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-dark">
        <Container>
          <FadeInOnScroll>
            <SectionTitle
              label="About"
              title="代表紹介"
              subtitle="D'Light 代表 宇田照史のプロフィールをご紹介します。"
            />
          </FadeInOnScroll>
        </Container>
      </section>

      {/* プロフィール */}
      <section className="py-16 lg:py-24 bg-bg-secondary">
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeInOnScroll>
              <div className="bg-bg-card border border-border rounded-2xl p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  {/* プロフィール写真プレースホルダー */}
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-bg-secondary border-2 border-accent-gold/30 flex items-center justify-center shrink-0 mx-auto lg:mx-0">
                    <span className="text-4xl">👤</span>
                  </div>

                  {/* 基本情報 */}
                  <div className="flex-1 text-center lg:text-left">
                    <p className="text-accent-gold text-sm font-medium uppercase tracking-wider mb-2">
                      D&apos;Light 代表
                    </p>
                    <h2 className="text-3xl font-bold text-text-primary mb-1">
                      宇田 照史
                    </h2>
                    <p className="text-text-muted text-sm mb-6">
                      Uda Akihito
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-6 max-w-md mx-auto lg:mx-0">
                      <div>
                        <span className="text-text-dark text-xs">拠点</span>
                        <p className="text-text-primary text-sm font-medium">
                          神奈川・東京
                        </p>
                      </div>
                      <div>
                        <span className="text-text-dark text-xs">出身</span>
                        <p className="text-text-primary text-sm font-medium">
                          山形県
                        </p>
                      </div>
                      <div>
                        <span className="text-text-dark text-xs">マーケティング歴</span>
                        <p className="text-text-primary text-sm font-medium">
                          4年半
                        </p>
                      </div>
                    </div>

                    <p className="text-text-muted text-sm leading-relaxed">
                      「運用代行で終わらない、事業をグロースさせる『勝ち筋』の設計」を専門としています。
                      単なるSNSの投稿や広告の運用ではなく、戦略設計からコンテンツ制作、CVまでの導線構築を一気通貫で手がけ、
                      クライアントの「集客モデルの自走」を実現することを得意としています。
                    </p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </Container>
      </section>

      {/* メッセージ */}
      <section className="py-16 lg:py-24 bg-gradient-dark">
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeInOnScroll>
              <SectionTitle label="Message" title="メッセージ" />
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.2}>
              <div className="space-y-6 text-text-muted leading-relaxed">
                <p>
                  多くの企業が「SNSを始めたけど成果が出ない」「広告を出しても費用対効果が合わない」という課題を抱えています。
                  その原因の多くは、施策単体で完結してしまい、事業全体の成長戦略と紐づいていないことにあります。
                </p>
                <p>
                  私は、マーケティングの本質は「勝ち筋」を見つけ、それを仕組み化することだと考えています。
                  どの市場で、誰に対して、何を、どう届けるか。この設計ができてはじめて、SNSも広告も成果につながります。
                </p>
                <p>
                  「まだ誰も手をつけていない空白地帯」から成果を出す泥臭いリサーチと実行力。
                  それが私たちの強みであり、D&apos;Lightが提供する価値です。
                </p>
                <p className="text-accent-gold font-medium">
                  売上と信頼に直結する「伴走型マーケティング・パートナー」として、
                  あなたの事業の成長をご支援いたします。
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </Container>
      </section>

      {/* スキルセット */}
      <section className="py-16 lg:py-24 bg-bg-secondary">
        <Container>
          <FadeInOnScroll>
            <SectionTitle label="Skills" title="対応領域" />
          </FadeInOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {SKILLS.map((skill, index) => (
              <FadeInOnScroll key={skill.category} delay={index * 0.1}>
                <Card className="h-full">
                  <h3 className="text-accent-gold text-sm font-medium uppercase tracking-wider mb-4">
                    {skill.category}
                  </h3>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-text-muted text-sm"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </FadeInOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-dark">
        <Container className="text-center">
          <FadeInOnScroll>
            <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-6">
              お気軽にご相談ください
            </h2>
            <p className="text-text-muted mb-8 max-w-lg mx-auto">
              まずは現状の課題をお聞かせください。最適な支援プランをご提案します。
            </p>
            <Button href="/contact" size="lg">
              無料相談はこちら
            </Button>
          </FadeInOnScroll>
        </Container>
      </section>
    </>
  );
}
