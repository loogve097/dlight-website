"use server";

import { FormResult } from "@/types";

/** お問い合わせフォーム送信（Web3Forms API） */
export async function submitContactForm(
  formData: FormData
): Promise<FormResult> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  /* APIキーが未設定の場合 */
  if (!accessKey) {
    console.error("WEB3FORMS_ACCESS_KEY が設定されていません");
    return {
      success: false,
      message:
        "送信に失敗しました。しばらく時間をおいてからお試しください。",
    };
  }

  /* バリデーション */
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return {
      success: false,
      message: "必須項目を入力してください。",
    };
  }

  /* メールアドレスの形式チェック */
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "正しいメールアドレスを入力してください。",
    };
  }

  try {
    /* Web3Formsにデータを送信 */
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        company: formData.get("company") || "",
        phone: formData.get("phone") || "",
        subject: formData.get("subject") || "お問い合わせ",
        message,
        from_name: "D'Light お問い合わせフォーム",
      }),
    });

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        message:
          "お問い合わせを受け付けました。3営業日以内にご連絡いたします。",
      };
    }

    return {
      success: false,
      message: "送信に失敗しました。しばらく時間をおいてからお試しください。",
    };
  } catch {
    return {
      success: false,
      message: "通信エラーが発生しました。しばらく時間をおいてからお試しください。",
    };
  }
}
