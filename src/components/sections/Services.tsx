import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

/** 二本柱のサービス */
const SERVICE_PILLARS = [
  {
    icon: "📊",
    title: "WEBマーケティング支援",
    tagline: "集客モデルの構築から、自走まで。",
    features: [
      "勝ち筋設計",
      "SNS運用",
      "WEB広告",
      "SEO",
      "HP制作",
      "映像制作",
    ],
    href: "/services",
  },
  {
    icon: "🏥",
    title: "健康経営コンサルティング",
    tagline: "従業員の健康が、企業の成長を支える。",
    features: [
      "健康経営優良法人 認定支援",
      "助成金・補助金の活用サポート",
      "健康施策の設計",
    ],
    href: "/services",
  },
];

/** サービスセクション — 二本柱 */
export default function Services() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-dark">
      <Container>
        <FadeInOnScroll>
          <SectionTitle
            label="Services"
            title="二本柱で、事業の成長を支える。"
          />
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {SERVICE_PILLARS.map((service, index) => (
            <FadeInOnScroll key={service.title} delay={index * 0.15}>
              <Card className="h-full">
                <span className="text-3xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-accent-gold text-sm font-medium mb-4">
                  {service.tagline}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-text-muted text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button href={service.href} variant="outline" size="sm">
                  詳細を見る →
                </Button>
              </Card>
            </FadeInOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
