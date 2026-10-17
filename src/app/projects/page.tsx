"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowLeft, ArrowUpRight, Code2 } from "lucide-react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css";
import { MarqueeStrip } from "@/components/ui/marquee-strip";
import { cn } from "@/lib/utils";

const TAGS = ["All", "Web", "AI", "Web3", "Mobile"];

const PROJECTS = [
  {
    id: 1,
    name: "Hackronyx Website",
    tag: "Web",
    description: "Modern hackathon platform built with Next.js and Tailwind. Responsive design, interactive features, smooth animations, and real-time event management for 3,500+ participants.",
    link: "https://github.com/Yash11778/Final",
    liveUrl: "https://hackronyx-beta.vercel.app/",
    images: [
      "/assets/projects-screenshots/HacKronyX/1.png",
      "/assets/projects-screenshots/HacKronyX/2.png",
      "/assets/projects-screenshots/HacKronyX/3.png",
    ],
    accent: "bg-neo-yellow",
    accentText: "text-black",
  },
  {
    id: 2,
    name: "Fintech AI Assistant",
    tag: "AI",
    description: "Real-time stock monitoring service powered by web scraping and AI. Tracks live prices, provides market insights, and delivers intelligent financial analysis using Python, Pandas, and Streamlit.",
    link: "https://github.com/Yash11778/Fintech-x-Pathway",
    liveUrl: "https://fintech-x-pathway-aw5nsnt5ynswsfcqrhfpub.streamlit.app/",
    images: [
      "/assets/projects-screenshots/AI Fintech/1.png",
      "/assets/projects-screenshots/AI Fintech/2.png",
      "/assets/projects-screenshots/AI Fintech/3.png",
      "/assets/projects-screenshots/AI Fintech/5.png",
    ],
    accent: "bg-neo-blue",
    accentText: "text-white",
  },
  {
    id: 3,
    name: "Portfolio V3",
    tag: "Web",
    description: "Previous iteration of my personal portfolio — where creativity meets code. Showcases my work with interactive 3D elements and neo-brutalist design.",
    link: "https://github.com/Yash11778/Yash-Portfolio",
    liveUrl: "https://yash-portfolio-c6cb.vercel.app/",
    images: ["/assets/projects-screenshots/myportfolio/landing.png"],
    accent: "bg-neo-purple",
    accentText: "text-white",
  },
  {
    id: 4,
    name: "PayFi — Decentralized Tipping",
    tag: "Web3",
    description: "Decentralized tipping dApp built with Next.js and Solidity. TipJar.sol smart contract handles crypto tips on Ethereum. Full-stack with wallet integration and multi-network deployment.",
    link: "https://github.com/Yash11778/Tip-Jar",
    liveUrl: "https://payfi-seven.vercel.app/",
    images: [
      "/assets/projects-screenshots/payfi/payfi 1.png",
      "/assets/projects-screenshots/payfi/payfi 2.png",
      "/assets/projects-screenshots/payfi/payfi 3.png",
    ],
    accent: "bg-neo-pink",
    accentText: "text-white",
  },
];

const techMarquee = ["Next.js", "React.js", "TypeScript", "Node.js", "Python", "Solidity", "FastAPI", "MongoDB", "Firebase", "Tailwind CSS", "Framer Motion", "Web3.js"];

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = activeTag === "All" ? PROJECTS : PROJECTS.filter(p => p.tag === activeTag);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Animated grid */}
      <div className="fixed inset-0 neo-grid opacity-20 dark:opacity-10 pointer-events-none" />

      {/* Blobs */}
      <div className="fixed -top-32 -right-32 w-[450px] h-[450px] bg-neo-blue/15 dark:bg-neo-blue/5 animate-blob pointer-events-none" />
      <div className="fixed bottom-0 -left-20 w-[400px] h-[400px] bg-neo-purple/15 dark:bg-neo-purple/5 animate-blob pointer-events-none" style={{ animationDelay: "4s" }} />

      {/* Floating accents */}
      <div className="hidden lg:block fixed top-28 left-12 w-12 h-12 bg-neo-pink neo-border animate-float rotate-6 opacity-40 pointer-events-none" />
      <div className="hidden lg:block fixed top-52 right-16 w-8 h-8 bg-neo-yellow neo-border animate-float-delayed opacity-50 pointer-events-none" />

      <div className="relative z-10 pt-28 pb-10 px-4">
        <div className="container mx-auto max-w-6xl">

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
              <span className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase">Projects</span>
              <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
              <span className="text-xs text-gray-400 shrink-0">{PROJECTS.length} projects</span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tight">
              Selected<br />
              <span className="text-gray-300 dark:text-gray-700">Work</span>
            </h1>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {TAGS.map((tag) => (
              <motion.button
                key={tag}
                onClick={() => setActiveTag(tag)}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className={cn(
                  "px-5 py-2 text-sm font-black neo-border shadow-neo-sm transition-all uppercase tracking-wide",
                  activeTag === tag
                    ? "bg-black dark:bg-white text-white dark:text-black shadow-none translate-x-0.5 translate-y-0.5"
                    : "bg-white dark:bg-black text-black dark:text-white"
                )}
              >
                {tag}
              </motion.button>
            ))}
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTag}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {filtered.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group neo-border shadow-neo bg-white dark:bg-[#111] overflow-hidden flex flex-col"
                >
                  {/* Accent top bar */}
                  <div className={cn("h-1.5 w-full", project.accent)} />

                  {/* Image Slider */}
                  <div className="h-[240px] sm:h-[280px] bg-gray-100 dark:bg-gray-900 border-b-4 border-black dark:border-white">
                    <Splide
                      options={{ type: "loop", interval: 4000, autoplay: true, speed: 900, arrows: false, pagination: true }}
                      aria-label={`Screenshots of ${project.name}`}
                    >
                      {project.images.map((image: string, imgIndex: number) => (
                        <SplideSlide key={imgIndex}>
                          <div className="relative w-full h-[240px] sm:h-[280px]">
                            <Image src={image} alt={`${project.name} screenshot ${imgIndex + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                          </div>
                        </SplideSlide>
                      ))}
                    </Splide>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h2 className="text-xl font-black text-black dark:text-white leading-tight">{project.name}</h2>
                      <span className={cn("text-[10px] font-black px-2.5 py-1 neo-border uppercase tracking-widest shrink-0", project.accent, project.accentText)}>
                        {project.tag}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1 mb-6">
                      {project.description}
                    </p>

                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-neo-yellow text-black font-black text-sm neo-border shadow-neo-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all uppercase"
                        >
                          <ExternalLink className="w-4 h-4" /> Live
                        </Link>
                      )}
                      <Link href={project.link} target="_blank" rel="noopener noreferrer"
                        className={cn(
                          "flex items-center justify-center gap-2 px-4 py-2.5 font-black text-sm neo-border shadow-neo-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all uppercase",
                          project.liveUrl ? "flex-1 bg-black dark:bg-white text-white dark:text-black" : "w-full bg-black dark:bg-white text-white dark:text-black"
                        )}
                      >
                        <Code2 className="w-4 h-4" /> Code
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* Tech marquee */}
      <MarqueeStrip
        items={techMarquee}
        direction="right"
        speed="slow"
        className="bg-black dark:bg-white border-black dark:border-white mt-10"
        itemClassName="text-white dark:text-black"
        separator="◆"
      />

      {/* CTA */}
      <div className="relative z-10 py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase">Want to collaborate?</p>
          <h2 className="text-4xl sm:text-5xl font-black text-black dark:text-white">Let&apos;s build something<br /><span className="text-gray-300 dark:text-gray-700">remarkable together.</span></h2>
          <Link href="/contact">
            <motion.div
              whileHover={{ x: -4, y: -4, boxShadow: "8px 8px 0 #000" }}
              whileTap={{ x: 0, y: 0 }}
              className="inline-flex items-center gap-2 mt-4 px-8 py-4 bg-neo-yellow text-black font-black neo-border shadow-neo text-sm uppercase tracking-wider"
            >
              Get In Touch <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
