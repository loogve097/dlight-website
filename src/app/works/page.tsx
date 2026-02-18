"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { WORKS } from "@/data/works";
import { WorkCategory, WORK_CATEGORY_LABELS } from "@/types";

/** カテゴリフィルターの選択肢 */
const CATEGORIES: (WorkCategory | "all")[] = [
  "all",
  "sns",
  "ads",
  "new-market",
];

/** カテゴリラベル */
const CATEGORY_LABELS: Record<WorkCategory | "all", string> = {
  all: "すべて",
  ...WORK_CATEGORY_LABELS,
};

/** 実績ページ */
export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState<
    WorkCategory | "all"
  >("all");

  /* フィルタリングされた実績 */
  const filteredWorks =
    activeCategory === "all"
      ? WORKS
      : WORKS.filter((work) => work.category === activeCategory);

  return (
    <>
      {/* ヘッダー */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-dark">
        <Container>
          <FadeInOnScroll>
            <SectionTitle
              label="Works"
              title="実績紹介"
              subtitle="さまざまな業界で成果を上げてきた実績の一部をご紹介します。"
            />
          </FadeInOnScroll>
        </Container>
      </section>

      {/* 実績一覧 */}
      <section className="py-16 lg:py-24 bg-bg-secondary">
        <Container>
          {/* カテゴリフィルター */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {CATEGORIES.map((category) => (
              <Badge
                key={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {CATEGORY_LABELS[category]}
              </Badge>
            ))}
          </div>

          {/* 実績カード */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredWorks.map((work, index) => (
              <FadeInOnScroll key={work.id} delay={index * 0.1}>
                <Card className="h-full">
                  {/* カテゴリバッジ */}
                  <Badge className="mb-4">
                    {WORK_CATEGORY_LABELS[work.category]}
                  </Badge>

                  {/* ジャンル */}
                  <h3 className="text-xl font-bold text-text-primary mb-4">
                    {work.genre}
                  </h3>

                  {/* 課題 → 施策 → 成果 */}
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-medium text-accent-gold uppercase tracking-wider">
                        課題
                      </span>
                      <p className="text-text-muted text-sm mt-1">
                        {work.challenge}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-accent-gold uppercase tracking-wider">
                        施策
                      </span>
                      <p className="text-text-muted text-sm mt-1">
                        {work.approach}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-accent-gold uppercase tracking-wider">
                        成果
                      </span>
                      <p className="text-text-primary text-sm font-medium mt-1">
                        {work.result}
                      </p>
                    </div>
                  </div>

                  {/* 数値メトリクス */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                    {work.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="text-xs font-medium text-accent-gold bg-accent-gold/10 px-3 py-1 rounded-full"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </Card>
              </FadeInOnScroll>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
