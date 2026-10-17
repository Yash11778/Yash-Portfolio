"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const dotLeft = useTransform(scaleX, [0, 1], ["0%", "calc(100% - 1rem)"]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-neo-yellow via-neo-pink to-neo-purple origin-left z-[9999]"
        style={{ scaleX }}
      />
      <motion.div
        className="fixed top-0 h-4 w-4 rounded-full bg-neo-yellow border-2 border-black z-[9999] -translate-y-1/4"
        style={{ left: dotLeft }}
      />
    </>
  );
}
