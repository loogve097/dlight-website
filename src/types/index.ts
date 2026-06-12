import type { IconName } from "@/components/ui/Icon";

/** ナビゲーションリンクの型 */
export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

/** サービスカードの型 */
export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  features: string[];
};

/** 実績カードの型 */
export type WorkItem = {
  id: string;
  category: WorkCategory;
  genre: string;
  challenge: string;
  approach: string;
  result: string;
  metrics: string[];
};

/** 実績カテゴリ */
export type WorkCategory = "sns" | "ads" | "new-market";

/** 実績カテゴリラベル */
export const WORK_CATEGORY_LABELS: Record<WorkCategory, string> = {
  sns: "SNS運用",
  ads: "広告運用",
  "new-market": "新規開拓",
};

/** ブログ記事のフロントマターの型 */
export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  published: boolean;
};

/** ブログ記事の型 */
export type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
};

/** お問い合わせフォームの型 */
export type ContactFormData = {
  company: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

/** フォーム送信結果の型 */
export type FormResult = {
  success: boolean;
  message: string;
};

