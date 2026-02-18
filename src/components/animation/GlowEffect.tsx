"use client";

/** 名刺風の光エフェクト — 右上から差し込む光 */
export default function GlowEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 右上から差し込む光（名刺裏面のメインエフェクト再現） */}
      <div
        className="absolute -top-32 -right-32 w-[900px] h-[900px] opacity-25"
        style={{
          background:
            "conic-gradient(from 200deg at 70% 30%, transparent 0deg, rgba(201,168,76,0.15) 30deg, rgba(255,255,255,0.08) 60deg, rgba(201,168,76,0.1) 90deg, transparent 150deg)",
          animation: "glow-pulse 6s ease-in-out infinite",
        }}
      />
      {/* 中央のゴールドグロー（控えめ） */}
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.2) 0%, transparent 70%)",
          animation: "glow-pulse 5s ease-in-out infinite 1s",
        }}
      />
      {/* ダークグリーンのアクセント（ロゴのグリーン要素） */}
      <div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full opacity-5"
        style={{
          background:
            "radial-gradient(circle, rgba(26,58,42,0.5) 0%, transparent 70%)",
          animation: "glow-pulse 7s ease-in-out infinite 2s",
        }}
      />
    </div>
  );
}
