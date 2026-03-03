"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

/** 相談内容の選択肢 */
const SUBJECTS = [
  "SNS運用について",
  "WEB広告運用について",
  "WEB制作について",
  "映像制作について",
  "マーケティング戦略について",
  "その他",
];

/** Web3Forms アクセスキー（クライアントサイド用） */
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

/** お問い合わせフォームコンポーネント */
export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  /** フォーム送信ハンドラー */
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);

    /* バリデーション */
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const msg = formData.get("message") as string;

    if (!name || !email || !msg) {
      setStatus("error");
      setMessage("必須項目を入力してください。");
      return;
    }

    /* メールアドレスの形式チェック */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("正しいメールアドレスを入力してください。");
      return;
    }

    try {
      /* Web3Formsにデータを送信（クライアントサイド） */
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          email,
          company: formData.get("company") || "",
          phone: formData.get("phone") || "",
          subject: formData.get("subject") || "お問い合わせ",
          message: msg,
          from_name: "D'Light お問い合わせフォーム",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setMessage("お問い合わせを受け付けました。3営業日以内にご連絡いたします。");
      } else {
        setStatus("error");
        setMessage("送信に失敗しました。しばらく時間をおいてからお試しください。");
      }
    } catch {
      setStatus("error");
      setMessage("通信エラーが発生しました。しばらく時間をおいてからお試しください。");
    }
  }

  /* 送信完了時 */
  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✉️</div>
        <h3 className="text-xl font-bold text-text-primary mb-3">
          送信完了
        </h3>
        <p className="text-text-muted leading-relaxed">{message}</p>
        <button
          onClick={() => {
            setStatus("idle");
            setMessage("");
          }}
          className="mt-6 text-accent-gold text-sm hover:underline"
        >
          もう一度送信する
        </button>
      </div>
    );
  }

  /** 入力フィールドの共通スタイル */
  const inputClass =
    "w-full bg-bg-primary border border-border rounded-lg px-4 py-3 text-text-primary text-sm placeholder:text-text-dark focus:outline-none focus:border-accent-gold/50 focus:ring-1 focus:ring-accent-gold/30 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* エラーメッセージ */}
      {status === "error" && (
        <div className="p-4 bg-red-900/20 border border-red-900/50 rounded-lg text-red-400 text-sm">
          {message}
        </div>
      )}

      {/* 会社名 */}
      <div>
        <label className="block text-text-muted text-sm mb-2">
          会社名 / 屋号
          <span className="text-text-dark text-xs ml-2">任意</span>
        </label>
        <input
          type="text"
          name="company"
          placeholder="株式会社〇〇"
          className={inputClass}
        />
      </div>

      {/* お名前 */}
      <div>
        <label className="block text-text-muted text-sm mb-2">
          お名前
          <span className="text-red-400 text-xs ml-2">必須</span>
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="山田 太郎"
          className={inputClass}
        />
      </div>

      {/* メールアドレス */}
      <div>
        <label className="block text-text-muted text-sm mb-2">
          メールアドレス
          <span className="text-red-400 text-xs ml-2">必須</span>
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="info@example.com"
          className={inputClass}
        />
      </div>

      {/* 電話番号 */}
      <div>
        <label className="block text-text-muted text-sm mb-2">
          電話番号
          <span className="text-text-dark text-xs ml-2">任意</span>
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="090-0000-0000"
          className={inputClass}
        />
      </div>

      {/* 相談内容 */}
      <div>
        <label className="block text-text-muted text-sm mb-2">
          ご相談内容
          <span className="text-text-dark text-xs ml-2">任意</span>
        </label>
        <select name="subject" className={inputClass}>
          <option value="">選択してください</option>
          {SUBJECTS.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      {/* メッセージ */}
      <div>
        <label className="block text-text-muted text-sm mb-2">
          メッセージ
          <span className="text-red-400 text-xs ml-2">必須</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="ご相談内容をお書きください"
          className={inputClass}
        />
      </div>

      {/* 送信ボタン */}
      <div className="pt-2">
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="w-full"
        >
          {status === "submitting" ? "送信中..." : "送信する"}
        </Button>
      </div>
    </form>
  );
}
