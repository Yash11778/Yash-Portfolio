"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, MapPin, GraduationCap, ArrowLeft, Download, Zap, Trophy, Cpu, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";
import { MarqueeStrip } from "@/components/ui/marquee-strip";

const TOOLS = [
  { name: "React.js",   emoji: "⚛️", color: "bg-neo-blue text-white" },
  { name: "Next.js",    emoji: "▲",  color: "bg-black text-white dark:bg-white dark:text-black" },
  { name: "TypeScript", emoji: "🔷", color: "bg-neo-blue text-white" },
  { name: "Node.js",    emoji: "🟢", color: "bg-neo-green text-white" },
  { name: "Python",     emoji: "🐍", color: "bg-neo-yellow text-black" },
  { name: "FastAPI",    emoji: "⚡", color: "bg-neo-green text-white" },
  { name: "MongoDB",    emoji: "🍃", color: "bg-neo-green text-white" },
  { name: "Firebase",   emoji: "🔥", color: "bg-neo-orange text-white" },
  { name: "Docker",     emoji: "🐳", color: "bg-neo-blue text-white" },
  { name: "Tailwind",   emoji: "💨", color: "bg-neo-blue text-white" },
  { name: "Framer",     emoji: "🎬", color: "bg-neo-purple text-white" },
  { name: "Solidity",   emoji: "⛓️", color: "bg-neo-purple text-white" },
  { name: "Vercel",     emoji: "▲",  color: "bg-black text-white dark:bg-white dark:text-black" },
  { name: "Git",        emoji: "🌿", color: "bg-neo-orange text-white" },
  { name: "Linux",      emoji: "🐧", color: "bg-black text-white dark:bg-white dark:text-black" },
  { name: "AWS",        emoji: "☁️", color: "bg-neo-orange text-white" },
];

const facts = [
  { emoji: "🏆", text: "Top 20 / 20,000+ teams at IIT KGP KDSH 2025", icon: Trophy, accent: "border-l-neo-yellow" },
  { emoji: "©️", text: "Govt. of India copyright — SkillPilot (LD-36923/2025-CO)", icon: Zap, accent: "border-l-neo-purple" },
  { emoji: "🚀", text: "Co-founded Daemons Build — product studio & SaaS startup", icon: Globe, accent: "border-l-neo-blue" },
  { emoji: "🎤", text: "Guest speaker on AI & Society at ViBha, Daryapur", icon: Cpu, accent: "border-l-neo-pink" },
  { emoji: "🛠️", text: "Technical Head at HackronyX 2025 — 3,500+ participants", icon: Trophy, accent: "border-l-neo-green" },
  { emoji: "🌐", text: "Selected for ETHGlobal 2025 · NASA Space Apps 2nd Prize", icon: Globe, accent: "border-l-neo-blue" },
];

const marqueeItems = ["Full Stack Developer", "AI Builder", "Web3 Developer", "IIT KGP Top 20", "Hackathon Winner", "Gov. IP Holder", "Co-Founder"];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Animated grid */}
      <div className="fixed inset-0 neo-grid opacity-20 dark:opacity-10 pointer-events-none" />

      {/* Blobs */}
      <div className="fixed -top-32 -left-32 w-[500px] h-[500px] bg-neo-yellow/20 dark:bg-neo-yellow/5 animate-blob pointer-events-none" />
      <div className="fixed top-1/3 -right-40 w-[400px] h-[400px] bg-neo-purple/15 dark:bg-neo-purple/5 animate-blob pointer-events-none" style={{ animationDelay: "3s" }} />
      <div className="fixed -bottom-20 left-1/4 w-[350px] h-[350px] bg-neo-pink/15 dark:bg-neo-pink/5 animate-blob pointer-events-none" style={{ animationDelay: "6s" }} />

      {/* Floating accents */}
      <div className="hidden lg:block fixed top-32 right-16 w-14 h-14 bg-neo-yellow neo-border animate-float rotate-12 opacity-40 pointer-events-none" />
      <div className="hidden lg:block fixed bottom-40 left-12 w-10 h-10 bg-neo-blue neo-border animate-float opacity-35 pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 pt-28 pb-24 px-4">
        <div className="container mx-auto max-w-5xl">

          {/* Back nav */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-12">
            <Link href="/">
              <motion.div
                whileHover={{ x: -3, y: -3, boxShadow: "5px 5px 0 #000" }}
                whileTap={{ x: 0, y: 0, boxShadow: "0px 0px 0 #000" }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-black neo-border shadow-neo font-black text-black dark:text-white text-sm uppercase tracking-wider"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </motion.div>
            </Link>
          </motion.div>

          {/* Section label */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase">About Me</span>
              <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tight">
              Who I<br />
              <span className="text-gray-300 dark:text-gray-700">Am</span>
            </h1>
          </motion.div>

          {/* Hero row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
            {/* Profile card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-neo-yellow neo-border shadow-neo-lg p-8 flex flex-col items-center gap-5 text-center"
            >
              <div className="relative">
                <div className="absolute -inset-3 border-4 border-dashed border-black rounded-full animate-spin-slow opacity-40" />
                <div className="relative w-32 h-32 rounded-full overflow-hidden neo-border z-10">
                  <Image src="/assets/me.jpg" alt="Yash Dharme" fill className="object-cover" sizes="128px" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black text-black">Yash Dharme</h2>
                <p className="text-black/70 font-bold text-sm mt-1">Full Stack · AI · Web3</p>
              </div>
              <div className="flex items-center gap-1.5 text-black/70 text-sm font-bold">
                <MapPin className="w-4 h-4" /> Nagpur, India
              </div>
              <div className="flex items-center gap-1.5 text-sm font-black text-green-800 bg-green-100 px-3 py-1.5 neo-border">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for Work
              </div>
              <div className="flex gap-3">
                {[
                  { href: config.social.github, Icon: () => <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg> },
                  { href: config.social.linkedin, Icon: Linkedin },
                  { href: `mailto:${config.email}`, Icon: Mail },
                ].map(({ href, Icon }) => (
                  <motion.a key={href} href={href} target="_blank" rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="p-2.5 bg-black text-white neo-border shadow-neo-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
              <a href={config.resume} target="_blank" rel="noopener noreferrer" className="w-full">
                <motion.div
                  whileHover={{ x: -3, y: -3, boxShadow: "5px 5px 0 #000" }}
                  whileTap={{ x: 0, y: 0 }}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-black text-white font-black text-sm neo-border shadow-neo w-full uppercase tracking-wide"
                >
                  <Download className="w-4 h-4" /> Resume
                </motion.div>
              </a>
            </motion.div>

            {/* Bio + education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 flex flex-col gap-5"
            >
              {/* Bio */}
              <div className="bg-white dark:bg-black neo-border shadow-neo-lg p-8 flex-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1.5 h-8 bg-neo-yellow" />
                  <h2 className="text-2xl font-black text-black dark:text-white">About Me</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Hey! I&apos;m <strong className="text-black dark:text-white">Yash Dharme</strong> — a Full Stack Developer, AI Builder, and Web3 enthusiast from Nagpur, Maharashtra. I build production-grade SaaS platforms, AI-powered tools, and decentralized applications that solve real problems.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  My work spans LLM integration, Prompt Engineering, real-time trading dashboards, and blockchain smart contracts. I&apos;ve worked at Trust Fintech, Barodynamics Pvt. Ltd., Win Capital Funds, and Matverse Vision Pvt. Ltd., and co-founded <strong className="text-black dark:text-white">Daemons Build</strong>.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  12+ hackathons, 4 first prizes, a <strong className="text-black dark:text-white">Government of India software copyright</strong> for SkillPilot, and a <strong className="text-black dark:text-white">Google Cloud Arcade Champion</strong> with 108K+ points and 97 skill badges.
                </p>
              </div>

              {/* Education */}
              <motion.div
                whileHover={{ rotate: 0 }}
                className="bg-neo-purple neo-border shadow-neo-lg p-6 flex items-start gap-4 -rotate-[0.3deg]"
              >
                <div className="p-3 bg-white/20 neo-border shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-1">Education</p>
                  <h3 className="text-white font-black text-xl leading-tight">B.Tech — CS & Business Systems</h3>
                  <p className="text-white/80 font-bold text-sm mt-1">SVPCET Nagpur · Aug 2023 – May 2027</p>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {["CGPA 8.82 / 10", "DSA", "AI / ML", "DBMS", "Software Eng."].map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-white/20 text-white text-xs font-black border border-white/30">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <MarqueeStrip
        items={marqueeItems}
        speed="normal"
        className="bg-neo-yellow border-black dark:border-black"
        itemClassName="text-black"
        separator="✦"
      />

      <div className="relative z-10 px-4 py-20">
        <div className="container mx-auto max-w-5xl">

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-10">
              <span className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase">Highlights</span>
              <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {facts.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -4, rotate: -0.5 }}
                  className="bg-white dark:bg-[#111] neo-border shadow-neo p-5 flex items-start gap-4 border-l-4 border-l-neo-yellow"
                >
                  <span className="text-2xl shrink-0 mt-0.5">{f.emoji}</span>
                  <p className="text-sm font-bold text-gray-800 dark:text-gray-200 leading-snug">{f.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase">Tools & Tech</span>
              <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
            </div>
            <div className="flex flex-wrap gap-2.5">
              {TOOLS.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{ y: -4, rotate: -1 }}
                  className={cn("px-4 py-2.5 neo-border shadow-neo-sm font-black text-sm flex items-center gap-2 cursor-default", tool.color)}
                >
                  <span>{tool.emoji}</span> {tool.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
