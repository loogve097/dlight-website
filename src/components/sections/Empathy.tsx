"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import RevealText from "@/components/animation/RevealText";

/** 業界への共感ポイント */
const PAIN_POINTS = [
  "代理店に毎月お金を払っているのに、成果が見えない",
  "レポートは届くけど、何が変わったのかわからない",
  "パッケージプランを売られて、自社に合っているか不安",
  "担当者がコロコロ変わって、毎回イチから説明",
];

/** 闇の中に置かれた不満が、スクロールで照らされて浮かび上がるカード */
function IlluminatedCard({ text, index }: { text: string; index: number }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={
        reduced
          ? false
          : { opacity: 0.18, filter: "grayscale(1) brightness(0.55)", y: 24 }
      }
      whileInView={{
        opacity: 1,
        filter: "grayscale(0) brightness(1)",
        y: 0,
      }}
      viewport={{ once: true, margin: "-35% 0px -35% 0px" }}
      transition={{ duration: 0.9, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-start gap-4 p-5 rounded-2xl bg-bg-card/50 border border-border overflow-hidden"
    >
      {/* 照らされた瞬間に走る光 */}
      <motion.div
        initial={reduced ? false : { x: "-120%" }}
        whileInView={{ x: "120%" }}
        viewport={{ once: true, margin: "-35% 0px -35% 0px" }}
        transition={{ duration: 1.1, delay: 0.15, ease: "easeOut" }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, transparent 35%, rgba(201,168,76,0.12) 50%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      <span className="text-accent-gold text-lg mt-0.5 shrink-0">—</span>
      <p className="text-text-muted text-base leading-relaxed">「{text}」</p>
    </motion.div>
  );
}

/** 共感セクション — 業界への疑問（闇を照らす） */
export default function Empathy() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{
        background: "linear-gradient(180deg, #0b1120 0%, #060a14 55%, #0b1120 100%)",
      }}
    >
      <Container>
        <FadeInOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <span className="text-accent-gold text-sm font-medium uppercase tracking-widest mb-3 block">
              Empathy
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight">
              <RevealText text="こんな経験、ありませんか？" />
            </h2>
          </div>
        </FadeInOnScroll>

        <div className="max-w-2xl mx-auto space-y-4">
          {PAIN_POINTS.map((point, index) => (
            <IlluminatedCard key={point} text={point} index={index} />
          ))}
        </div>

        {/* 締め — 光のバーストと共に */}
        <motion.p
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-14 text-text-primary text-xl lg:text-2xl font-bold"
          style={{ textShadow: "0 0 24px rgba(201,168,76,0.35)" }}
        >
          だから、D&apos;Lightはその&quot;代理店の当たり前&quot;を全部変える。
        </motion.p>
      </Container>
    </section>
  );
}
