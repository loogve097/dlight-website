import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "無料相談・お問い合わせ",
  description:
    "D'Lightへの無料相談・お問い合わせ。代理店に任せても成果が出ない、SNS運用を自社で回せるようにしたい——まずは現状の課題をお聞かせください。60〜180分のヒアリングで最適な道筋をご提案します。",
  alternates: {
    canonical: "/contact",
  },
};

/** お問い合わせページ */
export default function ContactPage() {
  return (
    <>
      {/* ヘッダー */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-dark">
        <Container>
          <FadeInOnScroll>
            <SectionTitle
              label="Contact"
              title="お問い合わせ"
              subtitle="マーケティングに関するお悩み・ご相談はお気軽にどうぞ。初回のご相談は無料です。"
            />
          </FadeInOnScroll>
        </Container>
      </section>

      {/* フォーム */}
      <section className="py-16 lg:py-24 bg-bg-secondary">
        <Container>
          <div className="max-w-2xl mx-auto">
            <FadeInOnScroll>
              <div className="bg-bg-card border border-border rounded-2xl p-6 lg:p-10">
                <ContactForm />
              </div>
            </FadeInOnScroll>

            {/* 補足情報 */}
            <FadeInOnScroll delay={0.2}>
              <div className="mt-8 text-center text-text-dark text-sm">
                <p>通常3営業日以内にご返信いたします。</p>
              </div>
            </FadeInOnScroll>
          </div>
        </Container>
      </section>
    </>
  );
}
