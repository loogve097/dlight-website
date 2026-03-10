import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "実績紹介 | SNS運用・WEB広告の支援事例",
  description:
    "D'Lightが支援した中小企業のマーケティング実績をご紹介。SNS運用代行、WEB広告運用、新規市場開拓など、さまざまな業界で成果を上げた事例をご覧ください。",
  alternates: {
    canonical: "/works",
  },
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
