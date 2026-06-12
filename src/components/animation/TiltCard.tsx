"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

type Props = {
  children: React.ReactNode;
  /** 最大傾き角度（度） */
  max?: number;
  className?: string;
};

/**
 * カーソル位置に応じて3D的に傾くカードラッパー。
 * マウス以外（タッチ）・reduced-motion時は傾かない。
 */
export default function TiltCard({ children, max = 7, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), {
    stiffness: 180,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), {
    stiffness: 180,
    damping: 20,
  });

  if (reduced) return <div className={className}>{children}</div>;

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
