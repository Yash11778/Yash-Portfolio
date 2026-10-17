"use client";

import { cn } from "@/lib/utils";

interface MarqueeStripProps {
  items: string[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  className?: string;
  itemClassName?: string;
  separator?: string;
}

export function MarqueeStrip({
  items,
  direction = "left",
  speed = "normal",
  className,
  itemClassName,
  separator = "★",
}: MarqueeStripProps) {
  const duration = speed === "slow" ? "40s" : speed === "fast" ? "15s" : "25s";
  const repeated = [...items, ...items, ...items];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden border-y-4 border-black dark:border-white py-4",
        className
      )}
    >
      <div
        className="flex gap-8 w-max"
        style={{ animation: `marquee-${direction} ${duration} linear infinite` }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-8 shrink-0">
            <span
              className={cn(
                "text-lg md:text-xl font-black uppercase tracking-widest whitespace-nowrap",
                itemClassName
              )}
            >
              {item}
            </span>
            <span className="text-xl font-black opacity-60">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
