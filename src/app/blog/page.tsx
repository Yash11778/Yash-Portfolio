"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, PenLine, Rss, Clock } from "lucide-react";
import { MarqueeStrip } from "@/components/ui/marquee-strip";

const topics = [
  { label: "Web Development", color: "bg-neo-blue text-white" },
  { label: "AI & LLMs", color: "bg-neo-purple text-white" },
  { label: "Web3 / Blockchain", color: "bg-neo-pink text-white" },
  { label: "DevOps", color: "bg-neo-green text-white" },
  { label: "Hackathon Diaries", color: "bg-neo-yellow text-black" },
  { label: "Career Advice", color: "bg-black dark:bg-white text-white dark:text-black" },
];

const comingSoon = [
  { title: "How I Beat 9,913+ Teams at IIT KGP", tag: "Hackathon Diaries", mins: "8 min read" },
  { title: "Building a Government-Certified AI Platform", tag: "AI & LLMs", mins: "12 min read" },
  { title: "My Web3 Journey: From Zero to Smart Contracts", tag: "Web3 / Blockchain", mins: "10 min read" },
  { title: "Next.js 15 App Router Patterns I Actually Use", tag: "Web Development", mins: "7 min read" },
];

const marqueeItems = ["Coming Soon", "Dropping Articles", "Stay Tuned", "Web Dev", "AI Insights", "Web3 Tutorials"];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Animated grid */}
      <div className="fixed inset-0 neo-grid opacity-20 dark:opacity-10 pointer-events-none" />

      {/* Blobs */}
      <div className="fixed -top-32 -left-32 w-[500px] h-[500px] bg-neo-pink/15 dark:bg-neo-pink/5 animate-blob pointer-events-none" />
      <div className="fixed bottom-0 -right-20 w-[400px] h-[400px] bg-neo-yellow/20 dark:bg-neo-yellow/5 animate-blob pointer-events-none" style={{ animationDelay: "3s" }} />

      {/* Floating accents */}
      <div className="hidden lg:block fixed top-28 right-16 w-14 h-14 bg-neo-pink neo-border animate-float rotate-12 opacity-40 pointer-events-none" />
      <div className="hidden lg:block fixed top-52 left-12 w-10 h-10 bg-neo-yellow neo-border animate-float-delayed opacity-45 pointer-events-none" />

      <div className="relative z-10 pt-28 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">

          {/* Back */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-12">
            <Link href="/">
              <motion.div
                whileHover={{ x: -3, y: -3, boxShadow: "5px 5px 0 #000" }}
                whileTap={{ x: 0, y: 0 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-black neo-border shadow-neo font-black text-black dark:text-white text-sm uppercase tracking-wider"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </motion.div>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase">Blog</span>
              <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
              <div className="inline-flex items-center gap-2 bg-neo-yellow neo-border px-3 py-1.5 -rotate-1">
                <span className="text-[10px] font-black text-black uppercase tracking-widest">Coming Soon</span>
              </div>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tight mb-6">
              Thoughts &<br />
              <span className="text-gray-300 dark:text-gray-700">Writings</span>
            </h1>
            <p className="text-base text-gray-500 dark:text-gray-400 border-l-4 border-neo-pink pl-4 max-w-xl">
              I&apos;m writing articles about building real products, competing in hackathons, and everything I learn along the way. Drop your email to be notified when I publish.
            </p>
          </motion.div>

          {/* Topics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-14"
          >
            <p className="text-[10px] font-black tracking-[0.25em] text-gray-400 uppercase mb-4">Topics I&apos;ll Cover</p>
            <div className="flex flex-wrap gap-2.5">
              {topics.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.25 + i * 0.05 }}
                  whileHover={{ y: -3, rotate: -1 }}
                  className={`px-4 py-2 neo-border shadow-neo-sm font-black text-sm cursor-default flex items-center gap-2 ${t.color}`}
                >
                  <PenLine className="w-3.5 h-3.5" /> {t.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming posts preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mb-14"
          >
            <div className="flex items-center gap-4 mb-6">
              <p className="text-[10px] font-black tracking-[0.25em] text-gray-400 uppercase shrink-0">Coming Articles</p>
              <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
              <Rss className="w-4 h-4 text-gray-300 dark:text-gray-600 shrink-0" />
            </div>
            <div className="space-y-3">
              {comingSoon.map((post, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.07 }}
                  className="flex items-center justify-between gap-4 p-5 bg-white dark:bg-[#111] neo-border shadow-neo-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-default opacity-70 hover:opacity-100"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 mt-2 shrink-0" />
                    <div>
                      <p className="text-sm font-black text-gray-900 dark:text-white leading-snug">{post.title}</p>
                      <p className="text-[10px] font-bold text-gray-400 mt-1">{post.tag}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 text-[10px] font-bold text-gray-400 uppercase tracking-wide">
                    <Clock className="w-3 h-3" /> {post.mins}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Notify CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-neo-yellow neo-border shadow-neo-lg p-8 -rotate-[0.3deg]"
          >
            <h3 className="text-2xl font-black text-black mb-2">Get notified when I publish</h3>
            <p className="text-black/70 text-sm mb-6">No spam. Just good content when it&apos;s ready.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-white neo-border font-bold text-black placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              <motion.button
                whileHover={{ x: -3, y: -3, boxShadow: "5px 5px 0 #000" }}
                whileTap={{ x: 0, y: 0 }}
                className="px-6 py-3 bg-black text-white font-black text-sm neo-border shadow-neo uppercase tracking-wide whitespace-nowrap"
              >
                Notify Me
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Marquee */}
      <MarqueeStrip
        items={marqueeItems}
        speed="normal"
        className="bg-black dark:bg-white border-black dark:border-white"
        itemClassName="text-white dark:text-black"
        separator="◆"
      />
    </div>
  );
}
