"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { Code2, GitBranch, Users, Award } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} />;
}

function StatItem({ icon, value, label, suffix = "", delay = 0 }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "relative group",
        "bg-white dark:bg-white/5 backdrop-blur-md",
        "border-2 border-black/10 dark:border-white/10",
        "rounded-2xl p-8",
        "hover:bg-white dark:hover:bg-white/10",
        "hover:border-black/20 dark:hover:border-white/20",
        "transition-all duration-300",
        "hover:shadow-lg hover:shadow-purple-500/20 dark:hover:shadow-purple-500/10",
        "hover:scale-105"
      )}
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <motion.div
          className={cn(
            "p-4 rounded-full",
            "bg-gradient-to-br from-purple-500/30 to-pink-500/30",
            "dark:from-purple-500/20 dark:to-pink-500/20",
            "group-hover:from-purple-500/40 group-hover:to-pink-500/40",
            "dark:group-hover:from-purple-500/30 dark:group-hover:to-pink-500/30",
            "transition-all duration-300"
          )}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-purple-600 dark:text-purple-400">
            {icon}
          </div>
        </motion.div>
        <div className="text-center">
          <h3
            className={cn(
              "text-4xl md:text-5xl font-bold",
              "bg-gradient-to-r from-purple-600 to-pink-600",
              "dark:from-purple-400 dark:to-pink-400",
              "bg-clip-text text-transparent"
            )}
          >
            <AnimatedCounter value={value} suffix={suffix} />
          </h3>
          <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium">
            {label}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

const StatsSection = () => {
  const stats = [
    {
      icon: <Code2 size={32} />,
      value: 8,
      label: "Projects Completed",
      suffix: "+",
    },
    {
      icon: <GitBranch size={32} />,
      value: 25,
      label: "GitHub Contributions",
      suffix: "+",
    },
    {
      icon: <Users size={32} />,
      value: 5,
      label: "Hackathon Winner",
      suffix: "+",
    },
    {
      icon: <Award size={32} />,
      value: 2,
      label: "Years Experience",
      suffix: "+",
    },
  ];

  return (
    <section id="stats" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-black dark:text-white"
          >
            Achievements
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Numbers that speak for themselves
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              {...stat}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
