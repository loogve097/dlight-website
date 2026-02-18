import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/data/services";

/** サービス概要セクション */
export default function Services() {
  return (
    <section className="py-20 lg:py-28 bg-bg-secondary">
      <Container>
        <FadeInOnScroll>
          <SectionTitle
            label="Services"
            title="提供するサービス"
            subtitle="マーケティングの課題を、戦略から実行まで一気通貫で解決します。"
          />
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <FadeInOnScroll key={service.id} delay={index * 0.1}>
              <Card className="h-full">
                <span className="text-3xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-text-muted text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeInOnScroll>
          ))}
        </div>

        <FadeInOnScroll delay={0.4}>
          <div className="text-center mt-10">
            <Button href="/services" variant="outline">
              サービス詳細を見る →
            </Button>
          </div>
        </FadeInOnScroll>
      </Container>
    </section>
  );
}
