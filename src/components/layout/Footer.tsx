import Link from "next/link";
import { NAV_LINKS } from "@/data/navigation";

/** フッターコンポーネント */
export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* ブランド情報 */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-gradient-gold">
                D&apos;Light
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed">
              中小企業の可能性を照らし、
              <br />
              成長の道を創る。
            </p>
            <p className="text-text-dark text-sm">
              代表：
              <Link href="/about" className="hover:text-accent-gold transition-colors">
                宇田照史
              </Link>
            </p>
            <p className="text-text-dark text-sm">拠点：神奈川・東京</p>
          </div>

          {/* ナビゲーション */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
              Menu
            </h3>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text-muted text-sm hover:text-accent-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* お問い合わせ */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
              Contact
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              お気軽にご相談ください。
              <br />
              初回のご相談は無料です。
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-2.5 text-sm font-medium bg-accent-gold text-text-on-gold rounded-full hover:bg-accent-gold-light transition-colors duration-200"
            >
              お問い合わせ
            </Link>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-text-dark text-xs">
            &copy; {new Date().getFullYear()} D&apos;Light. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
