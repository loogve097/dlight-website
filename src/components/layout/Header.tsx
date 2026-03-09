"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/navigation";
import { cn } from "@/lib/utils";

/** ヘッダーコンポーネント */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* スクロール検知 */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ページ遷移時にメニューを閉じる */
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  /* ドロップダウン外クリックで閉じる */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-bg-primary/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* ロゴ */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-gradient-gold">D&apos;Light</span>
            </span>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center gap-8" ref={dropdownRef}>
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.href} className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.href ? null : link.href
                      )
                    }
                    className={cn(
                      "text-sm font-medium transition-colors duration-200 hover:text-accent-gold flex items-center gap-1",
                      pathname.startsWith(link.href)
                        ? "text-accent-gold"
                        : "text-text-muted"
                    )}
                  >
                    {link.label}
                    <svg
                      className={cn(
                        "w-3 h-3 transition-transform duration-200",
                        openDropdown === link.href && "rotate-180"
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* ドロップダウンメニュー */}
                  <div
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 bg-bg-card border border-border rounded-xl shadow-lg min-w-[180px] transition-all duration-200",
                      openDropdown === link.href
                        ? "opacity-100 pointer-events-auto translate-y-0"
                        : "opacity-0 pointer-events-none -translate-y-2"
                    )}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block px-4 py-2 text-sm transition-colors duration-200 hover:text-accent-gold hover:bg-accent-gold/5",
                          pathname === child.href
                            ? "text-accent-gold"
                            : "text-text-muted"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 hover:text-accent-gold",
                    pathname === link.href
                      ? "text-accent-gold"
                      : "text-text-muted"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="px-5 py-2 text-sm font-medium bg-accent-gold text-bg-primary rounded-full hover:bg-accent-gold-light transition-colors duration-200"
            >
              無料相談
            </Link>
          </nav>

          {/* モバイルメニューボタン */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="メニュー"
          >
            <span
              className={cn(
                "w-6 h-0.5 bg-text-primary transition-all duration-300",
                isMobileMenuOpen && "rotate-45 translate-y-2"
              )}
            />
            <span
              className={cn(
                "w-6 h-0.5 bg-text-primary transition-all duration-300",
                isMobileMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "w-6 h-0.5 bg-text-primary transition-all duration-300",
                isMobileMenuOpen && "-rotate-45 -translate-y-2"
              )}
            />
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-16 bg-bg-primary/95 backdrop-blur-md transition-all duration-300 z-40",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-6 pt-12">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.href} className="flex flex-col items-center gap-3">
                <span
                  className={cn(
                    "text-lg font-medium",
                    pathname.startsWith(link.href)
                      ? "text-accent-gold"
                      : "text-text-muted"
                  )}
                >
                  {link.label}
                </span>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={cn(
                      "text-base transition-colors duration-200",
                      pathname === child.href
                        ? "text-accent-gold"
                        : "text-text-dark hover:text-accent-gold"
                    )}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-lg font-medium transition-colors duration-200",
                  pathname === link.href
                    ? "text-accent-gold"
                    : "text-text-muted hover:text-accent-gold"
                )}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="mt-4 px-8 py-3 text-base font-medium bg-accent-gold text-bg-primary rounded-full hover:bg-accent-gold-light transition-colors duration-200"
          >
            無料相談
          </Link>
        </nav>
      </div>
    </header>
  );
}
