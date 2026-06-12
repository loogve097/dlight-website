"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import Particles from "@/components/animation/Particles";
import RevealText from "@/components/animation/RevealText";
import Magnetic from "@/components/animation/Magnetic";

/** CTAセクション — まずは話を聞かせてください */
export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-dark relative overflow-hidden">
      {/* 浮遊する光の粒 */}
      <Particles count={28} />

      {/* 呼吸する背景グロー */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(212,168,67,0.4) 0%, transparent 70%)",
            animation: "glow-pulse 5s ease-in-out infinite",
          }}
        />
      </div>

      <Container className="relative z-10 text-center">
        <FadeInOnScroll>
          <p className="text-accent-gold text-sm font-medium uppercase tracking-widest mb-4">
            Contact
          </p>
        </FadeInOnScroll>

        <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-8 leading-tight">
          <RevealText text="まずは、話を聞かせてください。" stagger={0.05} />
        </h2>

        <FadeInOnScroll delay={0.3}>
          <p className="text-text-muted text-base lg:text-lg max-w-xl mx-auto mb-4 leading-relaxed">
            御社の現状と課題をお聞かせください。
          </p>
          <p className="text-text-muted text-sm max-w-xl mx-auto mb-12 leading-relaxed">
            成果が出なければ、3ヶ月で切ってください。
            <br />
            それでも構わないと思える提案をします。
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.45}>
          <div className="flex justify-center">
            <Magnetic strength={0.35}>
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 24px rgba(201,168,76,0.25)",
                    "0 0 48px rgba(201,168,76,0.5)",
                    "0 0 24px rgba(201,168,76,0.25)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-full"
              >
                <Button href="/contact" size="lg">
                  無料相談はこちら
                </Button>
              </motion.div>
            </Magnetic>
          </div>
        </FadeInOnScroll>
      </Container>
    </section>
  );
}
