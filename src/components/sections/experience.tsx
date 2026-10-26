"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    type: "work",
    title: "Co-Founder & Full-Stack Dev",
    org: "Daemons Build",
    period: "Jan 2026 – Present",
    status: "Co-Founder",
    statusStyle: "bg-violet-50 dark:bg-violet-950/50 text-violet-700 dark:text-violet-400 border border-violet-200 dark:border-violet-800/60",
    accent: "bg-violet-400",
    desc: "Co-founded a product studio. Full product lifecycle from system design to client delivery, team leadership.",
    tags: ["Next.js", "Node.js", "MongoDB", "SaaS"],
  },
  {
    type: "work",
    title: "Developer Intern",
    org: "Barodynamics Pvt. Ltd.",
    period: "Jan 2026 – Present",
    status: "Intern",
    statusStyle: "bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60",
    accent: "bg-blue-400",
    desc: "Built full-stack SaaS platforms across Automotive, Real Estate & FinTech sectors.",
    tags: ["React.js", "Node.js", "MongoDB", "Cloud"],
  },
  {
    type: "work",
    title: "Frontend & Integration Lead",
    org: "Win Capital Funds",
    period: "Mar 2026 – Sep 2026",
    status: "Intern",
    statusStyle: "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60",
    accent: "bg-emerald-400",
    desc: "Trading dashboard UI, TradingView charts integration, real-time market feeds & NLP pipeline coordination.",
    tags: ["React.js", "TradingView", "NLP", "Real-time"],
  },
  {
    type: "work",
    title: "AI/ML Intern",
    org: "Matverse Vision Pvt. Ltd.",
    period: "Mar 2026 – Sep 2026",
    status: "Intern",
    statusStyle: "bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/60",
    accent: "bg-cyan-400",
    desc: "Engineered a 7-stage AI irrigation advisory system for smallholder farmers integrating CHIRPS, ERA5, SMAP, Random Forests, and PINNs. Delivered real-time predictive alerts with 97.1% accuracy, 98.9% precision, and a 0.984 F1-score.",
    tags: ["AI", "Random Forests", "Machine Learning"],
  },
  {
    type: "work",
    title: "Web Development Intern",
    org: "Trust Fintech",
    period: "Jun 2025 – Jan 2026",
    status: "Hybrid",
    statusStyle: "bg-orange-50 dark:bg-orange-950/50 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-800/60",
    accent: "bg-orange-400",
    desc: "Built 5+ responsive UI components, improved frontend performance ~30%, integrated REST APIs.",
    tags: ["React.js", "REST APIs", "Performance"],
  },
  {
    type: "education",
    title: "B.Tech CS & Business Systems",
    org: "SVPCET Nagpur",
    period: "Aug 2023 – May 2027",
    status: "CGPA 8.82",
    statusStyle: "bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60",
    accent: "bg-amber-400",
    desc: "Top performer with CGPA 8.82. Core subjects: DSA, AI, DBMS, Software Engineering, Computer Networks.",
    tags: ["DSA", "AI", "DBMS", "Software Engineering"],
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-28 px-4 bg-gray-50 dark:bg-[#0d0d0d]">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase">02 — Experience</span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
          </div>
          <h2 className="text-6xl sm:text-7xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tight">
            Where I&apos;ve<br />
            <span className="text-gray-300 dark:text-gray-700">Worked</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[5px] top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

          <div className="space-y-5 pl-10">
            {experiences.map((exp, i) => {
              const Icon = exp.type === "education" ? GraduationCap : Briefcase;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className={cn(
                    "absolute -left-10 top-6 w-3 h-3 rounded-full border-2 border-gray-50 dark:border-[#0d0d0d] transition-all duration-300 group-hover:scale-125",
                    exp.accent
                  )} />

                  {/* Card */}
                  <div className="relative overflow-hidden bg-white dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-gray-800 p-6 sm:p-8 hover:shadow-lg dark:hover:shadow-black/40 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300">
                    {/* Accent top bar that reveals on hover */}
                    <motion.div
                      className={cn("absolute top-0 left-0 right-0 h-0.5 origin-left", exp.accent)}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 shrink-0">
                          <Icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">{exp.title}</h3>
                          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-0.5">{exp.org}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap sm:shrink-0 sm:text-right">
                        <span className={cn("text-xs font-semibold px-2.5 py-1 rounded-full", exp.statusStyle)}>
                          {exp.status}
                        </span>
                        <span className="text-xs text-gray-400 flex items-center gap-1 whitespace-nowrap">
                          <Calendar className="w-3 h-3" />{exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 ml-11">{exp.desc}</p>

                    <div className="flex flex-wrap gap-2 ml-11">
                      {exp.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
