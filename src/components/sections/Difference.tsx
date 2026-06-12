"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import GhostText from "@/components/animation/GhostText";
import RevealText from "@/components/animation/RevealText";

/** 一般的な代理店とD'Lightの比較 */
const COMPARISON = [
  {
    item: "関わり方",
    typical: "月1回MTG + レポート",
    dlight: "戦略〜実行〜仕組み化まで伴走",
  },
  {
    item: "責任範囲",
    typical: "「運用」まで",
    dlight: "「売上・集客」にコミット",
  },
  {
    item: "担当者",
    typical: "未経験・若手アサイン",
    dlight: "当事者が直接動く",
  },
  {
    item: "ノウハウ",
    typical: "代理店に蓄積される",
    dlight: "クライアント側に残す",
  },
  {
    item: "ゴール",
    typical: "契約を続けてもらう",
    dlight: "クライアントが自走できる状態",
  },
];

/** 決定的な違いセクション — 比較表 */
export default function Difference() {
  return (
    <section className="py-20 lg:py-28 section-light bg-gradient-light relative overflow-hidden">
      <GhostText
        text="DIFFERENCE"
        className="text-[16vw] lg:text-[13vw] top-6 -right-8"
      />

      <Container className="relative z-10">
        <FadeInOnScroll>
          <SectionTitle
            label="Difference"
            title="一般的な代理店との、決定的な違い。"
          />
        </FadeInOnScroll>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-text-dark text-sm font-medium w-1/5">
                  項目
                </th>
                <th className="text-left py-4 px-4 text-text-dark text-sm font-medium w-2/5">
                  一般的な代理店
                </th>
                <th className="text-left py-4 px-4 text-accent-gold text-sm font-bold w-2/5 bg-accent-gold/5 border-x border-t border-accent-gold/25 rounded-t-lg">
                  D&apos;Light
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, index) => (
                <motion.tr
                  key={row.item}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -36 : 36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="border-b border-border/50 transition-colors duration-300 hover:bg-accent-gold/5"
                >
                  <td className="py-4 px-4 text-text-muted text-sm font-medium">
                    {row.item}
                  </td>
                  <td className="py-4 px-4 text-text-dark text-sm">
                    {row.typical}
                  </td>
                  <td
                    className={`py-4 px-4 text-text-primary text-sm font-bold bg-accent-gold/5 border-x border-accent-gold/25 ${
                      index === COMPARISON.length - 1
                        ? "border-b rounded-b-lg"
                        : ""
                    }`}
                  >
                    {row.dlight}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center mt-12 text-text-muted text-base lg:text-lg">
          <RevealText text="外注先ではなく、" stagger={0.03} />
          <RevealText
            text="経営判断を共にする共同事業者"
            stagger={0.03}
            delay={0.45}
            className="text-accent-gold font-bold"
          />
          <RevealText text="として。" stagger={0.03} delay={1.2} />
        </p>
      </Container>
    </section>
  );
}
