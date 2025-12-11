"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  depth?: "subtle" | "medium" | "strong";
  className?: string;
  gradient?: boolean;
}

export function GlassCard({ 
  children, 
  depth = "medium", 
  className,
  gradient = true 
}: GlassCardProps) {
  const depthStyles = {
    subtle: "backdrop-blur-sm bg-white/5 border-white/10",
    medium: "backdrop-blur-md bg-white/10 border-white/20",
    strong: "backdrop-blur-lg bg-white/15 border-white/30",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        "relative rounded-3xl border p-8",
        "shadow-glass",
        "transition-all duration-300",
        depthStyles[depth],
        className
      )}
    >
      {gradient && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
