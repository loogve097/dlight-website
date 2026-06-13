import { NextRequest, NextResponse } from "next/server";

/**
 * 【一時設定】サイト全体を「リニューアル中」ページに差し替える（オーナー指示 2026-06-12）
 *
 * - 訪問者には公開サイトを見せず、メンテナンス画面のみ表示する
 * - 検索エンジン向けに noindex も付与（503 + noindex）
 * - 公開を再開するとき:
 *     方法A) Vercelの環境変数 SITE_PUBLIC=true を設定して再デプロイ
 *     方法B) このファイル（src/middleware.ts）を削除して再デプロイ
 * - /line のLINEリダイレクトは next.config.ts の redirects が
 *   ミドルウェアより先に処理されるため、この差し替えの影響を受けない
 */
export function middleware(_request: NextRequest) {
  /* 公開再開スイッチ：環境変数 SITE_PUBLIC=true で通常表示に戻る */
  if (process.env.SITE_PUBLIC === "true") {
    return NextResponse.next();
  }

  return new NextResponse(MAINTENANCE_HTML, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "Retry-After": "86400",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

export const config = {
  /* 静的アセットを除く全パスをメンテナンス画面に差し替える */
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

/** メンテナンス画面（ブランドトーンに合わせたダークネイビー×ゴールド） */
const MAINTENANCE_HTML = `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<title>D'Light｜ただいまリニューアル中です</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { height: 100%; }
  body {
    display: flex; align-items: center; justify-content: center;
    min-height: 100vh; padding: 24px;
    background: radial-gradient(circle at 70% 30%, #101b30 0%, #0b1120 60%, #070b14 100%);
    color: #f0f2f5;
    font-family: -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN",
      "Noto Sans JP", "Segoe UI", Meiryo, sans-serif;
    text-align: center; line-height: 1.9;
  }
  .wrap { max-width: 520px; }
  .logo {
    font-size: 28px; font-weight: 700; letter-spacing: 0.02em; margin-bottom: 40px;
    background: linear-gradient(135deg, #c9a84c, #e0c96e);
    -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
  }
  h1 { font-size: 19px; font-weight: 600; margin-bottom: 20px; letter-spacing: 0.04em; }
  p { font-size: 14px; color: #94a3b8; }
  .line {
    width: 48px; height: 2px; margin: 32px auto;
    background: linear-gradient(90deg, transparent, #c9a84c, transparent);
  }
</style>
</head>
<body>
  <div class="wrap">
    <div class="logo">D'Light</div>
    <h1>ただいまサイトをリニューアルしております</h1>
    <div class="line"></div>
    <p>お客様にはご不便をおかけいたします。<br />近日中に新しいサイトを公開予定です。</p>
  </div>
</body>
</html>`;
