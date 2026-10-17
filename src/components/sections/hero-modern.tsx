"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, ArrowRight, MapPin, Zap, Download, ExternalLink } from "lucide-react";
import { usePreloader } from "../preloader";
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { config } from "@/data/config";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1500, bounce: 0 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) motionValue.set(target);
  }, [isInView, motionValue, target]);

  useEffect(() => {
    spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.floor(v) + suffix;
    });
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const roles = [
  { text: "Full Stack Developer", color: "text-black dark:text-white", bg: "bg-neo-yellow" },
  { text: "AI Builder", color: "text-white", bg: "bg-neo-purple" },
  { text: "Web3 Developer", color: "text-white", bg: "bg-neo-blue" },
  { text: "Hackathon Winner", color: "text-black", bg: "bg-neo-pink" },
];

function RoleSwitcher() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2200);
    return () => clearInterval(t);
  }, []);

  const role = roles[index];
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ y: 40, opacity: 0, rotate: -3 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        exit={{ y: -40, opacity: 0, rotate: 3 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className={cn("inline-block px-4 py-1 neo-border shadow-neo font-black", role.bg, role.color)}
      >
        {role.text}
      </motion.span>
    </AnimatePresence>
  );
}

const HeroSectionModern = () => {
  const { isLoading } = usePreloader();

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-black">
      {/* Animated grid */}
      <div className="absolute inset-0 neo-grid opacity-20 dark:opacity-10" />

      {/* Big decorative blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-neo-yellow/30 dark:bg-neo-yellow/10 animate-blob" />
      <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-neo-purple/20 dark:bg-neo-purple/10 animate-blob" style={{ animationDelay: "3s" }} />
      <div className="absolute -bottom-20 left-1/4 w-[350px] h-[350px] bg-neo-pink/20 dark:bg-neo-pink/10 animate-blob" style={{ animationDelay: "6s" }} />

      {/* Floating accent squares — desktop only */}
      <div className="hidden lg:block absolute top-24 right-12 w-16 h-16 bg-neo-yellow neo-border animate-float rotate-12 opacity-60" />
      <div className="hidden lg:block absolute top-48 right-36 w-8 h-8 bg-neo-pink neo-border animate-float-delayed opacity-60" />
      <div className="hidden lg:block absolute bottom-32 left-10 w-12 h-12 bg-neo-blue neo-border animate-float opacity-50" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-24">

          {/* ——— LEFT ——— */}
          <div className="space-y-6 order-2 lg:order-1">
            {!isLoading && (
              <>
                {/* Available badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  <div className="inline-flex items-center gap-2 bg-neo-yellow neo-border shadow-neo-sm px-4 py-2 -rotate-1 hover:rotate-0 transition-transform cursor-default">
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-black text-black text-sm tracking-widest uppercase">Available for work</span>
                  </div>
                </motion.div>

                {/* Name block */}
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
                  className="space-y-2"
                >
                  <h1 className="font-black leading-none font-space">
                    <span className="block text-7xl sm:text-8xl lg:text-9xl text-black dark:text-white hover:scale-105 transition-transform origin-left">
                      YASH
                    </span>
                    <span className="block text-7xl sm:text-8xl lg:text-9xl bg-black dark:bg-white text-white dark:text-black px-4 -ml-1 rotate-[0.5deg] hover:rotate-0 transition-transform shadow-neo-lg neo-border">
                      DHARME
                    </span>
                  </h1>
                </motion.div>

                {/* Role switcher */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="flex items-center gap-3 text-2xl sm:text-3xl font-black font-space"
                >
                  <span className="text-black dark:text-white shrink-0">/</span>
                  <RoleSwitcher />
                </motion.div>

                {/* Location */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 font-medium"
                >
                  <MapPin className="w-4 h-4" /> Nagpur, Maharashtra, India
                </motion.p>

                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="text-lg text-gray-700 dark:text-gray-300 border-l-4 border-neo-yellow pl-4 max-w-md"
                >
                  Building production-grade SaaS, AI tools & Web3 apps. Top 20 at IIT KGP out of 20,000+ teams.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.35 }}
                  className="flex flex-wrap gap-3"
                >
                  <Link href="#projects">
                    <motion.button
                      whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0 #000" }}
                      whileTap={{ x: 0, y: 0, boxShadow: "0px 0px 0 #000" }}
                      className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-black neo-border shadow-neo text-sm uppercase tracking-wider flex items-center gap-2"
                    >
                      VIEW PROJECTS <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                  <a href={config.resume} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0 #000" }}
                      whileTap={{ x: 0, y: 0, boxShadow: "0px 0px 0 #000" }}
                      className="px-6 py-3 bg-neo-yellow text-black font-black neo-border shadow-neo text-sm uppercase tracking-wider flex items-center gap-2"
                    >
                      RESUME <Download className="w-4 h-4" />
                    </motion.button>
                  </a>
                  <a href={`mailto:${config.email}`}>
                    <motion.button
                      whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0 #000" }}
                      whileTap={{ x: 0, y: 0, boxShadow: "0px 0px 0 #000" }}
                      className="px-6 py-3 bg-white dark:bg-black text-black dark:text-white font-black neo-border shadow-neo text-sm uppercase tracking-wider"
                    >
                      CONTACT
                    </motion.button>
                  </a>
                </motion.div>

                {/* Social icons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="flex items-center gap-3"
                >
                  {[
                    { href: config.social.github, Icon: Github, label: "GitHub" },
                    { href: config.social.linkedin, Icon: Linkedin, label: "LinkedIn" },
                    { href: `mailto:${config.email}`, Icon: Mail, label: "Email" },
                  ].map(({ href, Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-3 bg-white dark:bg-gray-900 neo-border shadow-neo-sm hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                    >
                      <Icon className="w-5 h-5 text-black dark:text-white" />
                    </a>
                  ))}
                  <span className="text-gray-400 text-xs font-bold ml-1">@yashdharme</span>
                </motion.div>
              </>
            )}
          </div>

          {/* ——— RIGHT ——— */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 60 }}
            className="order-1 lg:order-2 flex flex-col items-center gap-5"
          >
            {/* Profile photo with rotating ring */}
            <div className="relative">
              {/* Spinning dashed ring */}
              <div className="absolute -inset-4 border-4 border-dashed border-black dark:border-white rounded-full animate-spin-slow opacity-50" />
              {/* Yellow ring */}
              <div className="absolute -inset-2 bg-neo-yellow neo-border rounded-full" />
              {/* Photo */}
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden neo-border z-10">
                <Image
                  src="/assets/me.jpg"
                  alt={config.author}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 176px, (max-width: 1024px) 224px, 256px"
                  priority
                />
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-2 -right-4 lg:-right-8 bg-neo-purple text-white text-xs font-black px-3 py-1.5 neo-border shadow-neo-sm rotate-6 z-20 whitespace-nowrap"
              >
                🏆 Top 20 / 20K+
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-2 -left-4 lg:-left-8 bg-neo-blue text-white text-xs font-black px-3 py-1.5 neo-border shadow-neo-sm -rotate-3 z-20 whitespace-nowrap"
              >
                ©️ Gov. of India IP
              </motion.div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm lg:max-w-none">
              {[
                { value: 1, suffix: ".5Y", label: "Experience", bg: "bg-neo-yellow", color: "text-black" },
                { value: 12, suffix: "+", label: "Hackathons", bg: "bg-neo-blue", color: "text-white" },
                { value: 4, suffix: "×", label: "1st Prize", bg: "bg-neo-purple", color: "text-white" },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  whileHover={{ y: -4, rotate: -1 }}
                  className={cn("neo-border shadow-neo p-4 text-center cursor-default", s.bg)}
                >
                  <p className={cn("text-3xl font-black", s.color)}>
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </p>
                  <p className={cn("text-xs font-bold uppercase tracking-wide mt-1 opacity-80", s.color)}>
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Currently working at */}
            <motion.div
              whileHover={{ rotate: 0 }}
              className="w-full max-w-sm lg:max-w-none bg-neo-pink neo-border shadow-neo p-4 -rotate-[0.5deg]"
            >
              <p className="text-xs font-bold text-white/70 uppercase tracking-widest mb-1">Currently working at</p>
              <p className="text-white font-black text-base">Win Capital Funds · Barodynamics · Matverse · Daemons Build</p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {["React.js", "TradingView", "NLP", "SaaS"].map((t) => (
                  <span key={t} className="px-2 py-0.5 bg-white/20 text-white text-xs font-bold border border-white/30">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-xs font-black tracking-widest text-black dark:text-white uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          className="w-5 h-9 border-4 border-black dark:border-white rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 bg-black dark:bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSectionModern;
