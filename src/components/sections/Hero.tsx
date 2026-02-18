"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import GlowEffect from "@/components/animation/GlowEffect";

/** ヒーロー下部のミニ実績 */
const HERO_STATS = [
  { value: "5,000万+", label: "累計SNS再生数" },
  { value: "50万+", label: "フォロワー獲得" },
  { value: "100件+", label: "反響獲得（2ヶ月）" },
];

/** ヒーローセクション */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GlowEffect />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* サブテキスト */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-accent-gold text-sm sm:text-base font-medium tracking-widest uppercase mb-6"
        >
          Web Marketing Partner
        </motion.p>

        {/* メインキャッチコピー */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        >
          <span className="block">運用代行で終わらない。</span>
          <span className="block mt-2">
            事業をグロースさせる、
          </span>
          <span className="block mt-2 text-gradient-gold">
            「勝ち筋」の設計。
          </span>
        </motion.h1>

        {/* サブキャッチ */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          集客も、採用も。少数精鋭だから、意思決定が速い。
          <br className="hidden sm:block" />
          戦略設計から実行まで、成果にこだわるWEBマーケティング。
        </motion.p>

        {/* CTAボタン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button href="/contact" size="lg">
            無料相談はこちら
          </Button>
          <Button href="/services" variant="outline" size="lg">
            サービスを見る
          </Button>
        </motion.div>

        {/* ミニ実績バー（信頼性の裏付け） */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-wrap justify-center gap-8 lg:gap-12"
        >
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-accent-gold text-xl sm:text-2xl font-bold">
                {stat.value}
              </p>
              <p className="text-text-dark text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 下向き矢印 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-text-muted/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2.5 bg-accent-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
