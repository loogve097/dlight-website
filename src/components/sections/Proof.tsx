"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import CountUp from "@/components/animation/CountUp";
import GhostText from "@/components/animation/GhostText";
import RevealText from "@/components/animation/RevealText";

/** クライアントの変化ストーリー（主語はクライアント） */
const CLIENT_STORIES = [
  {
    before: "5年間、問い合わせゼロだった工務店。",
    after: "3ヶ月で、初めての問い合わせが来た。",
  },
  {
    before: "月30万の売上だったEC事業。",
    after: "1年で年商1億3,000万に成長した。",
  },
  {
    before: "開業5ヶ月、実績ゼロの中古車販売。",
    after: "毎週商談が入るようになった。",
  },
];

/** 信頼指標（さらっと） */
const STATS = [
  { value: 0, suffix: "%", label: "契約解除率" },
  { value: 100, suffix: "%", label: "紹介率" },
];

/** Before → 光の線 → After のシーケンスで現れるストーリーカード */
function StoryCard({
  story,
  index,
}: {
  story: (typeof CLIENT_STORIES)[number];
  index: number;
}) {
  const base = index * 0.1;
  const viewport = { once: true, margin: "0px 0px -100px 0px" } as const;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.6, delay: base, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl bg-bg-card border border-border overflow-hidden"
    >
      {/* Before — 暗い過去 */}
      <div className="px-6 lg:px-8 pt-6 lg:pt-8 pb-4">
        <span className="text-text-dark text-xs uppercase tracking-widest">
          Before
        </span>
        <p className="text-text-dark text-base mt-1">{story.before}</p>
      </div>

      {/* 光の線が左から右へ描かれる */}
      <div className="px-6 lg:px-8">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewport}
          transition={{ duration: 0.8, delay: base + 0.35, ease: "easeInOut" }}
          className="h-px origin-left"
          style={{
            background:
              "linear-gradient(90deg, rgba(184,148,31,0.7), rgba(184,148,31,0.25))",
            boxShadow: "0 0 8px rgba(184,148,31,0.45)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* After — 光と共に浮かび上がる現在 */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.6, delay: base + 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="px-6 lg:px-8 pt-4 pb-6 lg:pb-8"
      >
        <span className="text-accent-gold text-xs uppercase tracking-widest">
          After
        </span>
        <p className="text-text-primary text-xl lg:text-2xl font-bold mt-1">
          {story.after}
        </p>
      </motion.div>
    </motion.div>
  );
}

/** 実績セクション — 結果で、語る。 */
export default function Proof() {
  return (
    <section className="py-20 lg:py-28 section-light bg-gradient-light relative overflow-hidden">
      <GhostText
        text="PROOF"
        className="text-[24vw] lg:text-[18vw] bottom-0 -left-6"
      />

      <Container className="relative z-10">
        <FadeInOnScroll>
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-accent-gold text-sm font-medium uppercase tracking-widest mb-3 block">
              Proof
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight">
              <RevealText text="結果で、語る。" stagger={0.06} />
            </h2>
          </div>
        </FadeInOnScroll>

        {/* クライアントの物語 — Before → After */}
        <div className="max-w-3xl mx-auto space-y-6 mb-20">
          {CLIENT_STORIES.map((story, index) => (
            <StoryCard key={story.before} story={story} index={index} />
          ))}
        </div>

        {/* 数字 — 大きく、誇りを持って */}
        <FadeInOnScroll delay={0.2}>
          <div className="flex justify-center gap-14 lg:gap-24">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-5xl lg:text-7xl font-bold text-accent-gold mb-2"
                  style={{ textShadow: "0 0 32px rgba(184,148,31,0.3)" }}
                >
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-text-muted text-sm lg:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeInOnScroll>
      </Container>
    </section>
  );
}
