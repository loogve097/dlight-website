import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import TiltCard from "@/components/animation/TiltCard";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import GhostText from "@/components/animation/GhostText";

/** WEBマーケティング支援の機能一覧 */
const FEATURES = [
  "勝ち筋設計",
  "WEB広告",
  "SNS運用",
  "SEO",
  "HP制作",
  "映像制作",
  "自社メディア運営",
];

/** サービスセクション — WEBマーケティング支援 */
export default function Services() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-dark relative overflow-hidden">
      <GhostText
        text="SERVICES"
        className="text-[18vw] lg:text-[14vw] top-2 -left-6"
      />

      <Container className="relative z-10">
        <FadeInOnScroll>
          <SectionTitle
            label="Services"
            title="WEBマーケティングで、事業の成長を支える。"
          />
        </FadeInOnScroll>

        <div className="max-w-2xl mx-auto">
          <FadeInOnScroll delay={0.15}>
            <TiltCard>
              <Card className="hover:glow-gold">
                <div className="w-12 h-12 mb-4 rounded-full bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center">
                  <Icon name="chart" className="w-6 h-6 text-accent-gold" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  WEBマーケティング支援
                </h3>
                <p className="text-accent-gold text-sm font-medium mb-6">
                  集客モデルの構築から、自走まで。
                </p>
                <ul className="grid grid-cols-2 gap-3 mb-6">
                  {FEATURES.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-text-muted text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button href="/services" variant="outline" size="sm">
                  詳細を見る →
                </Button>
              </Card>
            </TiltCard>
          </FadeInOnScroll>
        </div>
      </Container>
    </section>
  );
}
