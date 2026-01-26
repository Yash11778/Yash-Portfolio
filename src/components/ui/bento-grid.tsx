"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4 auto-rows-auto",
        "grid-cols-1 md:grid-cols-6 lg:grid-cols-12",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  span?: string;
  interactive?: boolean;
}

export function BentoCard({
  children,
  className,
  span = "md:col-span-3 lg:col-span-4",
  interactive = true,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-3xl p-6",
        "bg-white dark:bg-gray-900",
        "border border-gray-300 dark:border-gray-800",
        "shadow-md dark:shadow-sm transition-all duration-300",
        interactive && "hover:shadow-lg hover:-translate-y-1",
        "overflow-hidden",
        span,
        className
      )}
    >
      {children}
    </div>
  );
}
