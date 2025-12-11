"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface NeoBrutalistCardProps {
  children: ReactNode;
  color?: "yellow" | "pink" | "blue" | "green" | "purple" | "orange" | "white";
  className?: string;
  interactive?: boolean;
}

export function NeoBrutalistCard({ 
  children, 
  color = "white", 
  className,
  interactive = true 
}: NeoBrutalistCardProps) {
  const colorMap = {
    yellow: "bg-neo-yellow",
    pink: "bg-neo-pink text-white",
    blue: "bg-neo-blue text-white",
    green: "bg-neo-green text-white",
    purple: "bg-neo-purple text-white",
    orange: "bg-neo-orange text-white",
    white: "bg-white dark:bg-gray-900",
  };

  const cardContent = (
    <div
      className={cn(
        "border-4 border-black dark:border-white",
        "shadow-neo-lg dark:shadow-neo-white",
        "p-8 transition-all duration-300",
        interactive && "hover:shadow-neo dark:hover:shadow-neo-white-sm",
        interactive && "hover:translate-x-1.5 hover:translate-y-1.5",
        colorMap[color],
        className
      )}
    >
      {children}
    </div>
  );

  if (!interactive) {
    return cardContent;
  }

  return (
    <motion.div
      whileHover={{ scale: interactive ? 1.01 : 1 }}
    >
      {cardContent}
    </motion.div>
  );
}
