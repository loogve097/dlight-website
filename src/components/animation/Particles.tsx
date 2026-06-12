"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  speed: number;
  phase: number;
  drift: number;
};

type Props = {
  /** 粒子数（モバイルでは自動で半減） */
  count?: number;
  className?: string;
};

/**
 * 浮遊する光の粒 — canvas製のパーティクル背景
 * 画面外では描画を停止し、reduced-motion時は描画しない。
 */
export default function Particles({ count = 40, className = "" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const n = isMobile ? Math.max(8, Math.floor(count / 2)) : count;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let h = 0;
    let raf = 0;
    let running = false;
    let t = 0;
    let particles: Particle[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      particles = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.6 + Math.random() * 1.8,
        speed: 0.08 + Math.random() * 0.32,
        phase: Math.random() * Math.PI * 2,
        drift: (Math.random() - 0.5) * 0.12,
      }));
    };

    const tick = () => {
      if (!running) return;
      t += 0.016;
      ctx.clearRect(0, 0, w, h);
      ctx.shadowColor = "rgba(201,168,76,0.8)";
      ctx.shadowBlur = 6;
      for (const p of particles) {
        p.y -= p.speed;
        p.x += p.drift + Math.sin(t + p.phase) * 0.06;
        if (p.y < -4) {
          p.y = h + 4;
          p.x = Math.random() * w;
        }
        if (p.x < -4) p.x = w + 4;
        else if (p.x > w + 4) p.x = -4;

        /* 明滅（twinkle） */
        const tw = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * 1.4 + p.phase * 3));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(214, 184, 102, ${0.5 * tw})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    init();

    const onResize = () => {
      resize();
      init();
    };
    window.addEventListener("resize", onResize);

    /* 画面外では停止 */
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true;
        raf = requestAnimationFrame(tick);
      } else if (!entry.isIntersecting) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(canvas);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
