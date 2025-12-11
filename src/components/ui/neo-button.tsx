"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import React, { forwardRef } from "react";

export interface NeoBrutalistButtonProps extends Omit<HTMLMotionProps<"button">, "color"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  color?: "yellow" | "pink" | "blue" | "green" | "purple" | "orange";
  asChild?: boolean;
}

export const NeoBrutalistButton = forwardRef<HTMLButtonElement, NeoBrutalistButtonProps>(
  ({ children, variant = "primary", color = "yellow", className, asChild, ...props }, ref) => {
    const colorMap = {
      yellow: "bg-neo-yellow hover:bg-neo-yellow/90",
      pink: "bg-neo-pink hover:bg-neo-pink/90",
      blue: "bg-neo-blue hover:bg-neo-blue/90",
      green: "bg-neo-green hover:bg-neo-green/90",
      purple: "bg-neo-purple hover:bg-neo-purple/90",
      orange: "bg-neo-orange hover:bg-neo-orange/90",
    };

    const baseClasses = cn(
      "px-6 py-3 font-bold text-lg rounded-xl",
      "border-4 border-black dark:border-white",
      variant !== "ghost" && "shadow-neo dark:shadow-neo-white",
      "transition-all duration-200",
      "hover:shadow-neo-sm dark:hover:shadow-neo-white-sm",
      "hover:translate-x-1 hover:translate-y-1",
      "active:shadow-none active:translate-x-2 active:translate-y-2",
      variant === "primary" && colorMap[color],
      variant === "primary" && "text-black dark:text-black",
      variant === "secondary" && "bg-neo-pink text-white",
      variant === "outline" && "bg-transparent text-black dark:text-white",
      variant === "ghost" && "bg-transparent border-none shadow-none hover:bg-gray-100 dark:hover:bg-gray-800",
      className
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        className: cn(baseClasses, (children as any).props.className),
      });
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={baseClasses}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

NeoBrutalistButton.displayName = "NeoBrutalistButton";
