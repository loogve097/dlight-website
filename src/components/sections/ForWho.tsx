"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Icon, { IconName } from "@/components/ui/Icon";
import RevealText from "@/components/animation/RevealText";

/** 理想のクライアント像 */
const IDEAL_CLIENTS: { icon: IconName; label: string }[] = [
  {
    icon: "building",
    label: "不動産・工務店・車業界・店舗ビジネスの経営者",
  },
  {
    icon: "rocket",
    label: "新規事業の立ち上げ期で、集客モデルを形にしたい方",
  },
  {
    icon: "trendingDown",
    label: "既存の集客に限界を感じている方",
  },
  {
    icon: "messageCircle",
    label: "「SNSやった方がいい」と思いつつ動けていない方",
  },
  {
    icon: "flame",
    label: "今の代理店に不満がある方",
  },
];

/** 対象セクション — こんな方と一緒に走りたい */
export default function ForWho() {
  return (
    <section className="py-20 lg:py-28 section-light bg-gradient-light">
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-accent-gold text-sm font-medium uppercase tracking-widest mb-3 block">
            For You
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight">
            <RevealText text="こんな方と、一緒に走りたい。" stagger={0.04} />
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {IDEAL_CLIENTS.map((client, index) => (
            <motion.div
              key={client.label}
              initial={{ opacity: 0, x: index % 2 === 0 ? -44 : 44 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -60px 0px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex items-center gap-4 p-4 rounded-2xl bg-bg-card border border-border transition-all duration-300 hover:border-accent-gold/40 hover:bg-accent-gold/5"
            >
              <motion.div
                initial={{ boxShadow: "0 0 0px 0px rgba(184,148,31,0)" }}
                whileInView={{
                  boxShadow: [
                    "0 0 0px 0px rgba(184,148,31,0)",
                    "0 0 18px 4px rgba(184,148,31,0.45)",
                    "0 0 0px 0px rgba(184,148,31,0)",
                  ],
                }}
                viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                transition={{ duration: 1.2, delay: index * 0.08 + 0.4 }}
                className="w-10 h-10 rounded-full bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-accent-gold/20"
              >
                <Icon
                  name={client.icon}
                  className="w-5 h-5 text-accent-gold"
                />
              </motion.div>
              <p className="text-text-primary text-base">{client.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
