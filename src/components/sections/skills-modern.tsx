"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const KeyboardViewer = dynamic(() => import("@/components/keyboard-viewer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <span className="text-sm font-medium text-gray-400 animate-pulse">Loading 3D…</span>
    </div>
  ),
});

const tabs = [
  {
    id: "frontend", label: "Frontend", barColor: "bg-amber-400",
    skills: [
      { name: "React.js", level: 84 }, { name: "Next.js", level: 65 },
      { name: "TypeScript", level: 60 }, { name: "Tailwind CSS", level: 78 },
      { name: "Framer Motion", level: 70 },
    ],
  },
  {
    id: "backend", label: "Backend", barColor: "bg-blue-400",
    skills: [
      { name: "Node.js", level: 80 }, { name: "Express.js", level: 75 },
      { name: "FastAPI", level: 65 }, { name: "REST APIs", level: 75 },
      { name: "Microservices", level: 55 },
    ],
  },
  {
    id: "ai", label: "AI & ML", barColor: "bg-violet-400",
    skills: [
      { name: "LLM Integration", level: 60 }, { name: "Prompt Engineering", level: 85 },
      { name: "NLP", level: 65 }, { name: "Computer Vision / OCR", level: 72 },
      { name: "Machine Learning", level: 70 },
    ],
  },
  {
    id: "db", label: "Databases", barColor: "bg-rose-400",
    skills: [
      { name: "MongoDB", level: 80 }, { name: "Supabase", level: 70 },
      { name: "Database Design", level: 65 }, { name: "Python", level: 80 },
      { name: "C++ / C", level: 85 },
    ],
  },
  {
    id: "web3", label: "Web3", barColor: "bg-emerald-400",
    skills: [
      { name: "Solidity", level: 40 }, { name: "Smart Contracts", level: 38 },
      { name: "Web3.js / Ethers", level: 35 }, { name: "dApp Development", level: 33 },
      { name: "DeFi Protocols", level: 30 },
    ],
  },
];

const tools = [
  "Git", "GitHub", "Postman", "VS Code", "Vercel",
   "React Native", "Agile / Scrum", "Docker", "Jira","Clickup",
  "Technical Leadership", "Code Review",
];

const stats = [
  { value: "25+", label: "Technologies" },
  { value: "5+",  label: "Hackathons Won" },
  { value: "100K+", label: "Lines of Code" },
  { value: "20+", label: "Projects Shipped" },
];

function SkillBar({ name, level, barColor, delay = 0 }: {
  name: string; level: number; barColor: string; delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{name}</span>
        <span className="text-xs font-bold tabular-nums text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
          className={cn("h-full rounded-full", barColor)}
        />
      </div>
    </div>
  );
}

export default function SkillsSectionModern() {
  const [active, setActive] = useState(0);
  const [show3D, setShow3D] = useState(false);
  const tab = tabs[active];

  return (
    <section id="skills" className="w-full py-28 px-4 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto max-w-5xl">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase">01 — Skills</span>
            <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
            <button
              onClick={() => setShow3D(v => !v)}
              className="hidden md:flex items-center gap-3 px-6 py-3 text-sm font-black uppercase tracking-widest border-2 border-black dark:border-white text-black dark:text-white bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
            >
              <span>{show3D ? "Hide" : "Show"} 3D Keyboard</span>
              <span className="text-base leading-none">↗</span>
            </button>
          </div>
          <h2 className="text-6xl sm:text-7xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tight">
            Skills &<br />
            <span className="text-gray-300 dark:text-gray-700">Expertise</span>
          </h2>
        </motion.div>

        {/* 3D toggle */}
        <AnimatePresence>
          {show3D && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 360, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-10 overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 bg-gradient-to-br from-violet-600 to-blue-600"
            >
              <div className="h-[360px] w-full"><KeyboardViewer /></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tabs + Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-4 mb-12">
          {/* Tab list */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible hide-scrollbar pb-1 lg:pb-0"
          >
            {tabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={cn(
                  "shrink-0 lg:w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200",
                  active === i
                    ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                    : "text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white"
                )}
              >
                {t.label}
              </button>
            ))}
          </motion.div>

          {/* Skill panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="bg-gray-50 dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-gray-800/80 p-8"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{tab.label}</h3>
                <div className={cn("w-3 h-3 rounded-full", tab.barColor)} />
              </div>
              <div className="space-y-5">
                {tab.skills.map((skill, i) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} barColor={tab.barColor} delay={i * 0.07} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="p-5 bg-gray-50 dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-gray-800/80 text-center hover:border-gray-200 dark:hover:border-gray-700 transition-colors"
            >
              <div className="text-2xl font-black text-gray-900 dark:text-white">{s.value}</div>
              <div className="text-xs text-gray-400 mt-1 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Also comfortable with</p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="px-3.5 py-1.5 text-xs font-medium rounded-lg bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-600 hover:text-gray-900 dark:hover:text-white transition-all cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
