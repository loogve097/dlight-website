"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

/**
 * カーソル光源 — 「あなたが光になる」
 * カーソルに追従する光のハローがダークセクションの闇を照らす。
 * マウス操作のデバイスのみ表示（pointer-fine）。reduced-motionでは無効。
 */
export default function LightCursor() {
  const reduced = useReducedMotion();

  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  /* ハローはわずかに遅れて追従し、光の「揺らぎ」を出す */
  const haloX = useSpring(x, { stiffness: 150, damping: 22, mass: 0.6 });
  const haloY = useSpring(y, { stiffness: 150, damping: 22, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (reduced) return null;

  return (
    <div
      className="fixed inset-0 z-[70] pointer-events-none hidden lg:pointer-fine:block"
      aria-hidden="true"
    >
      {/* 大きなハロー — 闇を照らす光 */}
      <motion.div
        className="absolute w-[520px] h-[520px] rounded-full"
        style={{
          x: haloX,
          y: haloY,
          marginLeft: -260,
          marginTop: -260,
          mixBlendMode: "screen",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.14) 0%, rgba(201,168,76,0.05) 35%, transparent 70%)",
        }}
      />
      {/* 光の核 */}
      <motion.div
        className="absolute w-2.5 h-2.5 rounded-full"
        style={{
          x,
          y,
          marginLeft: -5,
          marginTop: -5,
          mixBlendMode: "screen",
          background: "rgba(224,201,110,0.9)",
          boxShadow:
            "0 0 10px 3px rgba(201,168,76,0.6), 0 0 30px 10px rgba(201,168,76,0.2)",
        }}
      />
    </div>
  );
}
