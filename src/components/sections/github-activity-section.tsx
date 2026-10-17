"use client";

import { motion } from "framer-motion";
import { GitHubActivity } from "@/components/visualizations/github-activity";

export default function GitHubActivitySection() {
  return (
    <section id="github" className="w-full py-28 px-4 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase">04 — GitHub</span>
            <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
          </div>
          <h2 className="text-6xl sm:text-7xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tight">
            Code<br />
            <span className="text-gray-300 dark:text-gray-700">Activity</span>
          </h2>
        </motion.div>

        <GitHubActivity username="Yash11778" />
      </div>
    </section>
  );
}
