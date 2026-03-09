import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";

/** CTAセクション — まずは話を聞かせてください */
export default function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-dark relative overflow-hidden">
      {/* 背景グロー */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(212,168,67,0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      <Container className="relative z-10 text-center">
        <FadeInOnScroll>
          <p className="text-accent-gold text-sm font-medium uppercase tracking-widest mb-4">
            Contact
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6 leading-tight">
            まずは、話を聞かせてください。
          </h2>
          <p className="text-text-muted text-base lg:text-lg max-w-xl mx-auto mb-4 leading-relaxed">
            御社の現状と課題をお聞かせください。
          </p>
          <p className="text-text-muted text-sm max-w-xl mx-auto mb-10 leading-relaxed">
            成果が出なければ、3ヶ月で切ってください。
            <br />
            それでも構わないと思える提案をします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              無料相談はこちら
            </Button>
          </div>
        </FadeInOnScroll>
      </Container>
    </section>
  );
}
