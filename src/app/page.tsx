import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Empathy from "@/components/sections/Empathy";
import Belief from "@/components/sections/Belief";
import Difference from "@/components/sections/Difference";
import Proof from "@/components/sections/Proof";
import Services from "@/components/sections/Services";
import ForWho from "@/components/sections/ForWho";
import Flow from "@/components/sections/Flow";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "D'Light | 中小企業の伴走型WEBマーケティング支援",
  description:
    "代理店に任せても成果が出ない——そんな中小企業の経営者へ。D'Lightは戦略設計から実行まで一人の担当者が伴走し、御社が自走できるマーケティングの仕組みを一緒に創ります。SNS運用・WEB広告・映像制作・WEB制作を一気通貫で支援。神奈川・東京エリア対応。",
  alternates: {
    canonical: "/",
  },
};

/** トップページ */
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
