import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";

/** 信頼の裏付けデータ */
const TRUST_POINTS = [
  {
    icon: "🤝",
    title: "継続率の高さが信頼の証",
    description:
      "一度ご契約いただいたクライアント様の多くが、長期的なお付き合いを選んでくださっています。成果を実感いただけているからこそ、続けていただける関係です。",
  },
  {
    icon: "📊",
    title: "データで語る。感覚に頼らない。",
    description:
      "施策の効果は必ず数字で検証。再生数・フォロワー数・反響数・CPA・CVRなど、定量的な指標をもとにPDCAを回し続けます。",
  },
  {
    icon: "🔍",
    title: "業界を問わないリサーチ力",
    description:
      "不動産・車・介護・人材・ECなど、幅広い業界での支援実績。業界特有の課題を理解したうえで、最適な戦略をご提案します。",
  },
];

/** 信頼の裏付けセクション（クライアントの声の代替） */
export default function Voices() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-dark relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] opacity-5"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <FadeInOnScroll>
          <SectionTitle
            label="Trust"
            title="信頼の裏付け"
            subtitle="派手な言葉ではなく、数字と継続で信頼を積み重ねています。"
          />
        </FadeInOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {TRUST_POINTS.map((point, index) => (
            <FadeInOnScroll key={index} delay={index * 0.15}>
              <div className="bg-bg-card border border-border rounded-2xl p-6 lg:p-8 h-full flex flex-col">
                {/* アイコン */}
                <span className="text-3xl mb-4 block">{point.icon}</span>

                {/* タイトル */}
                <h3 className="text-lg font-bold text-text-primary mb-3">
                  {point.title}
                </h3>

                {/* 説明 */}
                <p className="text-text-muted text-sm leading-relaxed flex-1">
                  {point.description}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
