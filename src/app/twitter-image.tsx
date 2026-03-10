import { ImageResponse } from "next/og";

/** Twitter Card 画像のサイズ */
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const alt = "D'Light | 中小企業の伴走型WEBマーケティング支援";

/** Twitter Card 画像を動的に生成（OGPと同じデザイン） */
export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0b1120 0%, #0f1729 50%, #0b1120 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 右上のゴールドグロー */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)",
          }}
        />

        {/* ゴールドのライン */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "60px",
            right: "60px",
            bottom: "60px",
            border: "1px solid rgba(201,168,76,0.15)",
            borderRadius: "16px",
          }}
        />

        {/* ロゴ */}
        <div
          style={{
            display: "flex",
            fontSize: "28px",
            fontWeight: 700,
            letterSpacing: "4px",
            marginBottom: "24px",
            background: "linear-gradient(135deg, #c9a84c, #dbb85c, #e0c96e)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          D&apos;Light
        </div>

        {/* メインコピー */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              fontSize: "44px",
              fontWeight: 700,
              color: "#f5f5f5",
              letterSpacing: "2px",
            }}
          >
            歴史を照らし、
          </div>
          <div
            style={{
              fontSize: "44px",
              fontWeight: 700,
              letterSpacing: "2px",
              background: "linear-gradient(135deg, #c9a84c, #dbb85c)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            道を創る。
          </div>
        </div>

        {/* サブコピー */}
        <div
          style={{
            marginTop: "28px",
            fontSize: "18px",
            color: "#a0a0a0",
            letterSpacing: "1px",
          }}
        >
          中小企業の伴走型WEBマーケティング支援
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
