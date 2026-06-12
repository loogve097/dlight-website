"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";

/** 支援フロー（6ステップ） */
const STEPS = [
  {
    num: "01",
    title: "無料相談",
    description:
      "まずは話を聞かせてください。\n60〜180分のヒアリング。\n最高の提案をさせていただくために、わからない部分は全部お聞きします。",
  },
  {
    num: "02",
    title: "市場リサーチ・ボトルネック特定",
    description:
      "受注前から動きます。\n会社にお邪魔して雰囲気も確認。\n競合・市場を徹底リサーチ。",
  },
  {
    num: "03",
    title: "ご提案",
    description:
      "提案前提の場合、市場調査等は無料。\n御社に最適なプランをご提案します。",
  },
  {
    num: "04",
    title: "カスタム戦略設計",
    description: "パッケージではなく、\n御社専用の戦略を設計。",
  },
  {
    num: "05",
    title: "施策実行・伴走",
    description: "戦略を立てた本人が、\n実行も担当します。",
  },
  {
    num: "06",
    title: "分析・改善・自走化",
    description: "最終ゴールは、\n御社が自走できる状態。",
  },
];

/** 支援フローセクション — スクロールと共に「光の道」が描かれる */
export default function Flow() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  /* セクション内スクロールに連動して縦線が描かれる */
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.75", "end 0.55"],
  });
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
  });

  return (
    <section className="py-20 lg:py-28 section-light bg-gradient-light">
      <Container>
        <FadeInOnScroll>
          <SectionTitle
            label="Process"
            title="始め方は、シンプルです。"
            subtitle="まずは無料相談から。現状の課題をお聞かせください。"
          />
        </FadeInOnScroll>

        <div ref={trackRef} className="max-w-3xl mx-auto relative">
          {/* 光の道 — スクロールで上から下へ描かれる */}
          <div
            className="absolute left-[27px] top-6 bottom-6 w-px bg-border"
            aria-hidden="true"
          >
            <motion.div
              style={reduced ? { scaleY: 1 } : { scaleY: lineProgress }}
              className="absolute inset-0 origin-top"
            >
              <div
                className="w-full h-full"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(184,148,31,0.3), rgba(184,148,31,0.9))",
                  boxShadow: "0 0 10px rgba(184,148,31,0.5)",
                }}
              />
            </motion.div>
          </div>

          <div className="space-y-6">
            {STEPS.map((step, index) => (
              <FadeInOnScroll key={step.num} delay={index * 0.05}>
                <div className="flex items-start gap-6">
                  {/* ステップノード — 光の道が到達すると点灯 */}
                  <motion.div
                    initial={
                      reduced
                        ? false
                        : {
                            borderColor: "rgba(184,148,31,0.2)",
                            color: "rgba(113,128,150,0.7)",
                            backgroundColor: "rgba(255,255,255,1)",
                          }
                    }
                    whileInView={{
                      borderColor: "rgba(184,148,31,0.7)",
                      color: "rgba(184,148,31,1)",
                      backgroundColor: "rgba(184,148,31,0.08)",
                    }}
                    viewport={{ once: true, margin: "-45% 0px -45% 0px" }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 w-[55px] h-[55px] rounded-full border-2 flex items-center justify-center text-base font-bold shrink-0"
                  >
                    {step.num}
                  </motion.div>

                  <div className="pt-1 p-5 -mt-1 flex-1 rounded-2xl bg-bg-card/60 border border-border transition-colors duration-300 hover:border-accent-gold/30">
                    <h3 className="text-lg font-bold text-text-primary mb-1">
                      {step.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed whitespace-pre-line">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
