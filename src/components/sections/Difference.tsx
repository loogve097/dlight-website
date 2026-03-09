import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";

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
    <section className="py-20 lg:py-28 bg-gradient-dark">
      <Container>
        <FadeInOnScroll>
          <SectionTitle
            label="Difference"
            title="一般的な代理店との、決定的な違い。"
          />
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
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
                  <th className="text-left py-4 px-4 text-accent-gold text-sm font-medium w-2/5">
                    D&apos;Light
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.item} className="border-b border-border/50">
                    <td className="py-4 px-4 text-text-muted text-sm font-medium">
                      {row.item}
                    </td>
                    <td className="py-4 px-4 text-text-dark text-sm">
                      {row.typical}
                    </td>
                    <td className="py-4 px-4 text-text-primary text-sm font-medium">
                      {row.dlight}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.4}>
          <p className="text-center mt-10 text-text-muted text-base">
            外注先ではなく、
            <span className="text-accent-gold font-medium">
              経営判断を共にする共同事業者
            </span>
            として。
          </p>
        </FadeInOnScroll>
      </Container>
    </section>
  );
}
