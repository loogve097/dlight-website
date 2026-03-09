import Hero from "@/components/sections/Hero";
import Empathy from "@/components/sections/Empathy";
import Belief from "@/components/sections/Belief";
import Difference from "@/components/sections/Difference";
import Proof from "@/components/sections/Proof";
import Services from "@/components/sections/Services";
import ForWho from "@/components/sections/ForWho";
import Flow from "@/components/sections/Flow";
import CTA from "@/components/sections/CTA";

/**
 * トップページ
 *
 * 信念ドリブン構成:
 * 1. Hero       — 信念宣言「歴史を照らし、道を創る。」
 * 2. Empathy    — 「こんな経験、ありませんか？」で共感を得る
 * 3. Belief     — 哲学と代表紹介、Valuesで信頼の芽を育てる
 * 4. Difference — 一般的な代理店との決定的な違い
 * 5. Proof      — クライアントに起きた変化（主語はクライアント）
 * 6. Services   — 二本柱で事業の成長を支える
 * 7. ForWho     — こんな方と、一緒に走りたい
 * 8. Flow       — 始め方は、シンプルです
 * 9. CTA        — まずは、話を聞かせてください
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Empathy />
      <Belief />
      <Difference />
      <Proof />
      <Services />
      <ForWho />
      <Flow />
      <CTA />
    </>
  );
}
