import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { PersonJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "代表紹介 | 宇田照史 - D'Light",
  description:
    "D'Light代表 宇田照史。中小企業のまだ光の当たっていない可能性を照らし、自走できる道を一緒に創る。関係を築くことから始める伴走型のWEBマーケティング支援。",
  alternates: {
    canonical: "/about",
  },
};

/** スキル一覧 */
const SKILLS = [
  { category: "SNS", items: ["YouTube", "TikTok", "Instagram"] },
  { category: "広告", items: ["Google", "META", "LINE", "TikTok"] },
  {
    category: "映像制作",
    items: [
      "ショートドラマ",
      "ドキュメンタリー",
      "企業PR動画",
      "SNS向けショート動画",
    ],
  },
  {
    category: "戦略",
    items: ["マーケティング戦略", "SEO", "MEO", "コンテンツ設計"],
  },
];


/** 代表紹介ページ */
export default function AboutPage() {
  return (
    <>
      {/* 構造化データ */}
      <PersonJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "代表紹介 - 宇田照史", href: "/about" },
        ]}
      />

      {/* ヘッダー */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-dark">
        <Container>
          <FadeInOnScroll>
            <SectionTitle
              label="About"
              title="宇田照史 — 代表紹介"
              subtitle="D'Light代表 宇田照史（Uda Akihito）のプロフィールをご紹介します。"
            />
          </FadeInOnScroll>
        </Container>
      </section>

      {/* ご挨拶 — メインセクション */}
      <section className="py-16 lg:py-24 bg-bg-secondary">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* 左側：ご挨拶テキスト */}
              <div className="flex-1 order-2 lg:order-1">
                <FadeInOnScroll>
                  {/* セクションラベル */}
                  <div className="mb-8">
                    <p className="text-accent-gold text-sm font-medium uppercase tracking-widest mb-3">
                      Greeting
                    </p>
                    <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-2">
                      ご挨拶
                    </h2>
                    <div className="w-16 h-0.5 bg-accent-gold" />
                  </div>

                  {/* 本文 */}
                  <div className="space-y-5 text-text-muted text-sm lg:text-base leading-[1.9]">
                    <p>
                      はじめまして、D&apos;Light代表の宇田照史です。
                    </p>

                    <p>
                      現在のWEBマーケティング業界では、再生回数やフォロワー数といった「表面上の数字」ばかりが語られがちです。
                      便利なツールが増え、AIが目覚ましい進化を遂げる一方で、業界全体が「見せかけの数字」を競い合う場所になりつつあることに、私は強い違和感を抱いています。
                    </p>

                    <p>
                      <strong className="text-text-primary">
                        しかし、ビジネスの本質はそこにはありません。
                      </strong>
                      <br className="hidden sm:block" />
                      最も大事なのは「いくら投資して、いくら利益が上がったのか」という極めてシビアな現実です。
                      利益に繋がらない何万回の再生数よりも、一円の利益、そして一人のお客様との深い繋がり。
                      そこに執着し、実利という形の結果を出すことこそが、プロフェッショナルとしての介在価値だと信じています。
                    </p>

                    <p>
                      誰もが「効率」や「楽」を求める時代だからこそ、私はあえて「泥臭さ」を選びます。
                      <br className="hidden sm:block" />
                      最短ルートを検索するのではなく、あえて苦労を買ってでも、クライアント様がこれまで歩んできた物語（歴史）を照らし出し、真の課題を問い続ける。
                      <strong className="text-text-primary">
                        本質から目を背けず、泥臭く掘り下げるプロセスの中にこそ、その企業にしか通ることのできない唯一無二の「道」が開ける
                      </strong>
                      と考えています。
                    </p>

                    <p>
                      「仕事とは何か」「お金をいただくとはどういうことなのか」。
                      <br className="hidden sm:block" />
                      この問いを常に自問自答し、私自身が誰よりも成長し続けることで、お客様とその先にいる大切な方々の未来を、照らし続けて参ります。
                    </p>
                  </div>

                  {/* 署名 */}
                  <div className="mt-10 pt-8 border-t border-border">
                    <p className="text-text-dark text-xs uppercase tracking-widest mb-2">
                      D&apos;Light 代表
                    </p>
                    <p className="text-text-primary text-2xl font-bold mb-1">
                      宇田 照史
                    </p>
                    <p className="text-text-muted text-sm">
                      Uda Akihito
                    </p>
                  </div>
                </FadeInOnScroll>
              </div>

              {/* 右側：ポートレート写真 */}
              <div className="lg:w-[400px] shrink-0 order-1 lg:order-2">
                <FadeInOnScroll direction="right">
                  <div className="lg:sticky lg:top-32">
                    {/* ポートレート写真 */}
                    <div className="aspect-[3/4] rounded-2xl bg-bg-card border border-border overflow-hidden relative">
                      <Image
                        src="/images/portrait.jpg"
                        alt="D'Light 代表 宇田照史"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 400px"
                        priority
                      />
                    </div>

                    {/* 基本情報カード */}
                    <div className="mt-6 p-6 rounded-2xl bg-bg-card border border-border">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <span className="text-text-dark text-xs block mb-1">
                            拠点
                          </span>
                          <p className="text-text-primary text-sm font-medium">
                            神奈川・東京
                          </p>
                        </div>
                        <div>
                          <span className="text-text-dark text-xs block mb-1">
                            出身
                          </span>
                          <p className="text-text-primary text-sm font-medium">
                            山形県
                          </p>
                        </div>
                        <div>
                          <span className="text-text-dark text-xs block mb-1">
                            マーケティング歴
                          </span>
                          <p className="text-text-primary text-sm font-medium">
                            4年半
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInOnScroll>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* スキルセット */}
      <section className="py-16 lg:py-24 bg-gradient-dark">
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
      <section className="py-16 lg:py-24 bg-bg-secondary">
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
