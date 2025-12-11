"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxSection({
  children,
  speed = 0.5,
  className = "",
}: ParallaxSectionProps) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={className}
      style={{
        transform: `translateY(${offsetY * speed}px)`,
      }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      {children}
    </motion.div>
  );
}

interface MultiLayerParallaxProps {
  layers: {
    content: React.ReactNode;
    speed: number;
    zIndex?: number;
    className?: string;
  }[];
  className?: string;
}

export function MultiLayerParallax({ layers, className = "" }: MultiLayerParallaxProps) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {layers.map((layer, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 ${layer.className || ""}`}
          style={{
            transform: `translateY(${offsetY * layer.speed}px)`,
            zIndex: layer.zIndex || index,
          }}
        >
          {layer.content}
        </motion.div>
      ))}
    </div>
  );
}

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const directionOffset = {
    up: { y: 100 },
    down: { y: -100 },
    left: { x: 100 },
    right: { x: -100 },
  };

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
