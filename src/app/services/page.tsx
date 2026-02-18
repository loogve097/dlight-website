import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { SERVICES, SERVICE_FLOW } from "@/data/services";

export const metadata: Metadata = {
  title: "サービス",
  description:
    "D'Lightが提供するWEBマーケティング支援サービス。SNS運用代行、WEB広告運用、WEB制作、映像制作を一気通貫で対応します。",
};

/** サービス詳細ページ */
export default function ServicesPage() {
  return (
    <>
      {/* ヘッダー */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-dark">
        <Container>
          <FadeInOnScroll>
            <SectionTitle
              label="Services"
              title="サービス内容"
              subtitle="マーケティング課題の本質を捉え、成果に直結する施策を設計・実行します。"
            />
          </FadeInOnScroll>
        </Container>
      </section>

      {/* サービス一覧 */}
      <section className="py-16 lg:py-24 bg-bg-secondary">
        <Container>
          <div className="space-y-12">
            {SERVICES.map((service, index) => (
              <FadeInOnScroll key={service.id} delay={index * 0.1}>
                <div className="bg-bg-card border border-border rounded-2xl p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                      <span className="text-4xl mb-4 block">
                        {service.icon}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
                        {service.title}
                      </h3>
                      <p className="text-text-muted leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>
                    <div className="lg:w-1/3">
                      <h4 className="text-sm font-semibold text-accent-gold uppercase tracking-wider mb-4">
                        対応内容
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 text-text-muted text-sm"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* その他のサービス */}
      <section className="py-16 lg:py-24 bg-gradient-dark">
        <Container>
          <FadeInOnScroll>
            <SectionTitle
              label="More"
              title="その他の支援"
              subtitle="案件の規模や内容に応じて、柔軟に対応いたします。"
            />
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeInOnScroll delay={0.1}>
              <Card>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  架電部隊の配備
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  マーケティング施策と連動したアウトバウンド架電チームを編成。リード獲得からアポイント設定までを一括で対応します。
                </p>
              </Card>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.2}>
              <Card>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  マーケティング戦略設計
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  事業課題をヒアリングし、最適なマーケティング戦略を設計。集客モデルの自走化を見据えた中長期的なロードマップを策定します。
                </p>
              </Card>
            </FadeInOnScroll>
          </div>
        </Container>
      </section>

      {/* サービスフロー */}
      <section className="py-16 lg:py-24 bg-bg-secondary">
        <Container>
          <FadeInOnScroll>
            <SectionTitle
              label="Flow"
              title="支援の流れ"
              subtitle="ヒアリングから改善まで、一貫した支援体制で成果を追求します。"
            />
          </FadeInOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_FLOW.map((step, index) => (
              <FadeInOnScroll key={step.step} delay={index * 0.15}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center">
                    <span className="text-accent-gold text-xl font-bold">
                      {step.step}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-text-primary mb-2">
                    {step.title}
                  </h4>
                  <p className="text-text-muted text-sm">
                    {step.description}
                  </p>
                  {index < SERVICE_FLOW.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 text-accent-gold/30">
                      →
                    </div>
                  )}
                </div>
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
              まずはお気軽にご相談ください
            </h2>
            <p className="text-text-muted mb-8 max-w-lg mx-auto">
              事業の課題やご要望をお聞かせください。最適な支援プランをご提案いたします。
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
