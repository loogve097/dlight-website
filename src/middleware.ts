import { NextRequest, NextResponse } from "next/server";

/**
 * 【一時設定】サイト全体をBasic認証でロックする（オーナー指示 2026-06-12）
 *
 * - リニューアル作業中、一般公開と検索インデックスを止めるための措置
 * - 認証情報はVercelの環境変数 BASIC_AUTH_USER / BASIC_AUTH_PASSWORD で管理
 * - 環境変数が未設定の場合はロックせず素通しする（=環境変数を削除すれば即公開再開）
 * - /line のLINEリダイレクトは next.config.ts の redirects が
 *   ミドルウェアより先に処理されるため、ロックの影響を受けない
 */
export function middleware(request: NextRequest) {
  const user = process.env.BASIC_AUTH_USER;
  const pass = process.env.BASIC_AUTH_PASSWORD;

  /* 環境変数が未設定ならロックしない（公開再開スイッチ） */
  if (!user || !pass) {
    return NextResponse.next();
  }

  const authHeader = request.headers.get("authorization");
  if (authHeader?.startsWith("Basic ")) {
    try {
      const [inputUser, inputPass] = atob(authHeader.slice(6)).split(":");
      if (inputUser === user && inputPass === pass) {
        return NextResponse.next();
      }
    } catch {
      /* 不正なBase64は未認証として扱う */
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="D\'Light (under renewal)"',
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

export const config = {
  /* 静的アセットを除く全パスを保護 */
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
