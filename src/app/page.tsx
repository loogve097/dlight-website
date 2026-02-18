import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Strengths from "@/components/sections/Strengths";
import Services from "@/components/sections/Services";
import Results from "@/components/sections/Results";
import Target from "@/components/sections/Target";
import Voices from "@/components/sections/Voices";
import Flow from "@/components/sections/Flow";
import CTA from "@/components/sections/CTA";

/**
 * トップページ
 *
 * ストーリー構成:
 * 1. Hero     — キャッチコピーで引きつける
 * 2. Problems — 「こんな課題ありませんか？」で共感を得る
 * 3. Strengths — D'Lightの特徴を提示（なぜ課題を解決できるのか）
 * 4. Services — 具体的なサービス内容
 * 5. Results  — 数字で裏付ける実績
 * 6. Target   — 「こんな方に最適」で対象を明確に
 * 7. Trust    — 信頼の裏付け（数字と継続で証明）
 * 8. Flow     — 依頼〜成果までのプロセスを可視化
 * 9. CTA      — お問い合わせへ誘導
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <Strengths />
      <Services />
      <Results />
      <Target />
      <Voices />
      <Flow />
      <CTA />
    </>
  );
}
