"use client";

import React, { Suspense, useRef, useState } from "react";
import { motion } from "framer-motion";
import { NeoBrutalistCard } from "@/components/ui/neo-card";
import { cn } from "@/lib/utils";
import type { Application } from "@splinetool/runtime";
import dynamic from "next/dynamic";

const KeyboardViewer = dynamic(() => import("@/components/keyboard-viewer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-2xl font-bold animate-pulse text-white">Loading...</div>
    </div>
  ),
});

const skillCategories = [
  {
    title: "Frontend",
    color: "yellow" as const,
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 80 },
      { name: "TypeScript", level: 65 },
      { name: "Tailwind CSS", level: 70 },
      { name: "Framer Motion", level: 55 },
    ]
  },
  {
    title: "Backend",
    color: "blue" as const,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 75 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 65 },
      { name: "REST APIs", level: 70 },
    ]
  },
  {
    title: "Tools & Others",
    color: "pink" as const,
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 60 },
      { name: "Figma", level: 75 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 80 },
    ]
  }
];

export default function SkillsSectionModern() {
  return (
    <section id="skills" className="relative w-full min-h-screen py-20 px-4 bg-gradient-to-br from-neo-yellow/20 via-slate-50 to-neo-pink/20 dark:from-neo-yellow/5 dark:via-black dark:to-neo-pink/5">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-black dark:text-white">SKILLS</span>
          </h2>
          <p className="text-xl md:text-2xl text-black/70 dark:text-white/70 max-w-2xl mx-auto">
            Press a key on the keyboard below to see magic! ✨
          </p>
        </motion.div>

        {/* 3D Keyboard Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 relative rounded-3xl overflow-hidden border-4 border-black dark:border-white shadow-neo-lg bg-gradient-to-br from-[#667eea] to-[#764ba2]"
          style={{
            minHeight: '300px', // Fallback
          }}
        >
          {/* Desktop 3D View */}
          <div className="hidden md:block h-[650px] w-full">
            <KeyboardViewer />
          </div>

          {/* Mobile Placeholder View */}
          <div className="block md:hidden h-[300px] w-full flex items-center justify-center p-8">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">⌨️✨</div>
              <h3 className="text-2xl font-bold mb-2">Interactive 3D Experience</h3>
              <p className="opacity-80">Switch to desktop to play with the 3D keyboard!</p>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none z-10 bg-white/90 px-8 py-4 rounded-full border-3 border-black shadow-neo hidden md:block">
            <p className="text-black text-lg md:text-xl font-bold">
              Press any key! ⌨️✨
            </p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className={cn(
                categoryIndex === skillCategories.length - 1 && skillCategories.length % 2 !== 0 ? "md:col-span-2" : ""
              )}
            >
              <NeoBrutalistCard
                color={category.color}
                className="h-full p-8"
                interactive
              >
                <h3 className="text-3xl font-bold mb-6 text-black dark:text-white">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-lg text-black dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-black dark:text-white bg-white/50 dark:bg-black/50 px-2 py-1 rounded">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative h-4 bg-black/20 dark:bg-white/20 rounded-full overflow-hidden border-3 border-black dark:border-white shadow-neo-sm">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.05, ease: "easeOut" }}
                          className={cn(
                            "h-full rounded-full relative overflow-hidden",
                            category.color === "yellow" ? "bg-black" : "bg-white"
                          )}
                          style={{
                            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
                          }}
                        >
                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </NeoBrutalistCard>
            </motion.div>
          ))}
        </div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Technologies", value: "20+" },
            { label: "Projects", value: "15+" },
            { label: "Tea + Coffee Cups", value: "∞" },
            { label: "Lines of Code", value: "50K+" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="p-6 bg-white dark:bg-black border-4 border-black dark:border-white rounded-2xl shadow-neo text-center transform hover:-translate-y-1 transition-transform"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-black/60 dark:text-white/60">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
