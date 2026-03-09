import { ImageResponse } from "next/og";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";

/** OGP画像のサイズ */
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

/** 静的パラメータ生成 */
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

/** ブログ記事ごとのOGP画像を動的生成 */
export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.frontmatter.title || "ブログ記事";
  const category = post?.frontmatter.category || "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 右上のゴールドグロー */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",
          }}
        />

        {/* ゴールドのボーダー */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid rgba(201,168,76,0.15)",
            borderRadius: "16px",
          }}
        />

        {/* カテゴリバッジ */}
        <div
          style={{
            display: "flex",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              padding: "8px 20px",
              borderRadius: "20px",
              background: "rgba(201,168,76,0.15)",
              color: "#c9a84c",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            {category}
          </div>
        </div>

        {/* 記事タイトル */}
        <div
          style={{
            fontSize: title.length > 30 ? "40px" : "48px",
            fontWeight: 700,
            color: "#f5f5f5",
            lineHeight: 1.4,
            letterSpacing: "1px",
            maxWidth: "900px",
          }}
        >
          {title}
        </div>

        {/* フッター: ロゴ + サブコピー */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "auto",
            paddingTop: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              fontWeight: 700,
              letterSpacing: "3px",
              background:
                "linear-gradient(135deg, #c9a84c, #dbb85c, #e0c96e)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            D&apos;Light
          </div>
          <div
            style={{
              fontSize: "16px",
              color: "#666",
              letterSpacing: "1px",
            }}
          >
            dlight-inc.jp
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
