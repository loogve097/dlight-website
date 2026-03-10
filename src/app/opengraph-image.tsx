import { ImageResponse } from "next/og";

/** OGP画像のサイズ */
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const alt = "D'Light | 中小企業の伴走型WEBマーケティング支援";

/** OGP画像を動的に生成 */
export default async function OGImage() {
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

        {/* 左下のグリーンアクセント */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(26,58,42,0.2) 0%, transparent 70%)",
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

        {/* セパレーター */}
        <div
          style={{
            width: "60px",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)",
            marginBottom: "32px",
          }}
        />

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
              fontSize: "48px",
              fontWeight: 700,
              color: "#f5f5f5",
              letterSpacing: "2px",
              lineHeight: 1.3,
            }}
          >
            歴史を照らし、
          </div>
          <div
            style={{
              fontSize: "48px",
              fontWeight: 700,
              letterSpacing: "2px",
              lineHeight: 1.3,
              background: "linear-gradient(135deg, #c9a84c, #dbb85c, #e0c96e)",
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
            marginTop: "32px",
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
