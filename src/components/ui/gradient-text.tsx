"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
  gradient?: "purple" | "blue" | "rainbow" | "sunset" | "ocean";
}

const gradients = {
  purple: "from-purple-600 via-pink-600 to-red-600",
  blue: "from-blue-600 via-cyan-600 to-teal-600",
  rainbow: "from-red-600 via-yellow-500 via-green-500 via-blue-500 to-purple-600",
  sunset: "from-orange-600 via-red-600 to-pink-600",
  ocean: "from-blue-400 via-teal-500 to-cyan-400",
};

export default function GradientText({ 
  children, 
  className = "",
  animated = false,
  gradient = "purple"
}: GradientTextProps) {
  const gradientClass = gradients[gradient];

  if (animated) {
    return (
      <motion.span
        className={cn(
          "bg-gradient-to-r bg-clip-text text-transparent",
          "animate-gradient-x bg-[length:200%_auto]",
          gradientClass,
          className
        )}
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      >
        {children}
      </motion.span>
    );
  }

  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        gradientClass,
        className
      )}
    >
      {children}
    </span>
  );
}
