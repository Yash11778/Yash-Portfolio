"use client";

import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { Trophy, Star, Zap, Globe, Award, Cpu, Medal } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef, useEffect } from "react";

const bigStats = [
  { value: 12,   suffix: "+",  label: "Hackathons",      color: "text-amber-500" },
  { value: 4,    suffix: "×",  label: "1st Place Wins",  color: "text-violet-500" },
  { value: 97,   suffix: "",   label: "Cloud Badges",    color: "text-blue-500" },
  { value: 1,    suffix: "",   label: "Govt. IP Holder", color: "text-emerald-500" },
];

const hackathons = [
  { event: "IIT Kharagpur KDSH 2025", result: "Top 20 / 9,913 teams",  icon: Trophy, level: "prestige" },
  { event: "HackWise — IIM Indore",   result: "National Finalist",      icon: Star,   level: "prestige" },
  { event: "ETHGlobal 2025",          result: "Selected",               icon: Globe,  level: "prestige" },
  { event: "NASA Space Apps",          result: "2nd Prize",              icon: Medal,  level: "prestige" },
  { event: "Shardeum Bounty",          result: "1st Prize",              icon: Cpu,    level: "notable"  },
  { event: "HackIndia 2025",          result: "Regional Finalist",      icon: Globe,  level: "notable"  },
  { event: "Stellar Ragnarok",         result: "3rd Prize",              icon: Zap,    level: "notable"  },
  { event: "SIH Expo 2024",           result: "3rd Prize",              icon: Star,   level: "notable"  },
  { event: "WebVenture 2025",          result: "1st Prize",              icon: Award,  level: "local"    },
  { event: "Raisoni Tech 2025",        result: "1st Prize",              icon: Trophy, level: "local"    },
  { event: "Idea Cube, SVPCET",        result: "1st Prize",              icon: Trophy, level: "local"    },
  { event: "Navikshaa Dev Battle",     result: "4th + Job Offer",        icon: Award,  level: "local"    },
];

const leadership = [
  { role: "Technical Head",   org: "HackronyX 2025",    detail: "3500+ Participants" },
  { role: "Technical Mentor", org: "HackgenX National", detail: "AI · Full-Stack" },
  { role: "Guest Speaker",    org: "ViBha, Daryapur",   detail: "AI & Society" },
];

const certs = [
  { title: "Software Copyright — Govt. of India", sub: "SkillPilot · LD-36923/2025-CO" },
  { title: "Google Cloud Arcade Champion",        sub: "108K+ pts · 97 Skill Badges · 416 Labs · 28 Games" },
  { title: "Joy of Computing Using Python",       sub: "NPTEL · IIT Madras" },
  { title: "Behavioral Economics",               sub: "NPTEL" },
  { title: "Python Zero to Hero",                sub: "Google Developer Group · VIT-AP" },
];

function AnimatedCounter({ target, suffix, color }: { target: number; suffix: string; color: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 55, damping: 18 });

  useEffect(() => {
    if (inView) motionVal.set(target);
  }, [inView, target, motionVal]);

  useEffect(() => {
    return spring.on("change", v => {
      if (ref.current) ref.current.textContent = Math.floor(v).toLocaleString() + suffix;
    });
  }, [spring, suffix]);

  return <span ref={ref} className={cn("font-black tabular-nums", color)}>0{suffix}</span>;
}

export default function AchievementsSection() {
  return (
    <section id="achievements" className="w-full py-28 pb-36 md:pb-28 px-4 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase">03 — Achievements</span>
            <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
          </div>
          <h2 className="text-6xl sm:text-7xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tight">
            Recognition<br />
            <span className="text-gray-300 dark:text-gray-700">& Awards</span>
          </h2>
        </motion.div>

        {/* Giant stat counters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden mb-16">
          {bigStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-[#0a0a0a] p-4 sm:p-6 xl:p-8 flex flex-col gap-2 sm:gap-3 hover:bg-gray-50 dark:hover:bg-[#111] transition-colors min-w-0"
            >
              <div className="text-3xl sm:text-4xl xl:text-5xl leading-none">
                <AnimatedCounter target={s.value} suffix={s.suffix} color={s.color} />
              </div>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Competitions */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <p className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase shrink-0">Competitions</p>
            <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
            <span className="text-xs text-gray-400 shrink-0">{hackathons.length} events</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {hackathons.map((h, i) => {
              const Icon = h.icon;
              const isPrestige = h.level === "prestige";
              const isNotable  = h.level === "notable";
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ delay: i * 0.04 }}
                  className={cn(
                    "flex items-start gap-3 p-4 rounded-xl border transition-all duration-200 cursor-default",
                    isPrestige
                      ? "bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900/50 hover:border-amber-300 dark:hover:border-amber-700"
                      : isNotable
                      ? "bg-gray-50 dark:bg-[#111] border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700"
                      : "bg-white dark:bg-[#0a0a0a] border-gray-50 dark:border-gray-900 opacity-60 hover:opacity-100 hover:border-gray-100"
                  )}
                >
                  <Icon className={cn(
                    "w-4 h-4 mt-0.5 shrink-0",
                    isPrestige ? "text-amber-500" : isNotable ? "text-gray-500 dark:text-gray-400" : "text-gray-300 dark:text-gray-600"
                  )} />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className={cn(
                        "text-sm font-semibold leading-snug",
                        isPrestige ? "text-amber-900 dark:text-amber-100" : isNotable ? "text-gray-800 dark:text-gray-200" : "text-gray-500 dark:text-gray-500"
                      )}>{h.event}</p>
                      {isPrestige && (
                        <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 uppercase tracking-widest shrink-0">
                          Top Tier
                        </span>
                      )}
                    </div>
                    <p className={cn(
                      "text-xs font-medium mt-0.5",
                      isPrestige ? "text-amber-600 dark:text-amber-400" : isNotable ? "text-gray-500 dark:text-gray-400" : "text-gray-400 dark:text-gray-600"
                    )}>{h.result}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Leadership + Certs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#111]">
              <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Leadership & Speaking</p>
            </div>
            <div className="divide-y divide-gray-50 dark:divide-gray-800/50">
              {leadership.map((l, i) => (
                <div key={i} className="px-6 py-4 bg-white dark:bg-[#0a0a0a] hover:bg-gray-50 dark:hover:bg-[#111] transition-colors">
                  <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">{l.role}</span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">{l.detail}</span>
                  </div>
                  <p className="text-xs text-gray-400">{l.org}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#111]">
              <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Certifications & IP</p>
            </div>
            <div className="divide-y divide-gray-50 dark:divide-gray-800/50">
              {certs.map((c, i) => (
                <div key={i} className="px-6 py-4 bg-white dark:bg-[#0a0a0a] hover:bg-gray-50 dark:hover:bg-[#111] transition-colors">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">{c.title}</p>
                  <p className="text-xs text-gray-400 mt-1">{c.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
