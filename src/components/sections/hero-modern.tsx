"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { usePreloader } from "../preloader";
import { motion } from "framer-motion";
import { config } from "@/data/config";
import { NeoBrutalistButton } from "../ui/neo-button";
import { NeoBrutalistCard } from "../ui/neo-card";

const HeroSectionModern = () => {
  const { isLoading } = usePreloader();

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 neo-grid opacity-30 dark:opacity-10" />
      
      {/* Floating gradient orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-neo-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-neo-pink rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />

      <div className="relative z-10 container mx-auto px-4 sm:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-10rem)]">
          {/* Left content */}
          <div className="space-y-8">
            {!isLoading && (
              <>
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="inline-block"
                >
                  <div className="inline-block bg-neo-yellow px-4 py-2 neo-border shadow-neo-sm rotate-[-2deg] hover:rotate-0 transition-transform">
                    <p className="text-black font-bold font-space tracking-wide">
                      ✨ FULL STACK DEVELOPER
                    </p>
                  </div>
                </motion.div>

                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
                  className="space-y-4"
                >
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none font-space">
                    <span className="block transform hover:scale-105 transition-transform origin-left cursor-default">
                      {config.author.split(" ")[0].toUpperCase()}
                    </span>
                    <span className="inline-block bg-neo-yellow neo-border shadow-neo-lg px-4 rotate-[1deg] hover:rotate-0 transition-transform cursor-default">
                      {config.author.split(" ")[1].toUpperCase()}
                    </span>
                  </h1>
                </motion.div>

                {/* Tagline */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="border-l-8 border-neo-blue pl-6"
                >
                  <p className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 font-space">
                    Building the future, one line of code at a time
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link href="#projects">
                    <NeoBrutalistButton color="blue" className="group">
                      VIEW PROJECTS
                      <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </NeoBrutalistButton>
                  </Link>
                  
                  <Link href="#contact">
                    <NeoBrutalistButton variant="outline">
                      CONTACT ME
                    </NeoBrutalistButton>
                  </Link>
                </motion.div>

                {/* Social links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="flex gap-4"
                >
                  {config.social.github && (
                    <a
                      href={config.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 neo-border bg-white dark:bg-gray-900 shadow-neo-sm hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                  {config.social.linkedin && (
                    <a
                      href={config.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 neo-border bg-white dark:bg-gray-900 shadow-neo-sm hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  )}
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${config.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 neo-border bg-white dark:bg-gray-900 shadow-neo-sm hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </motion.div>
              </>
            )}
          </div>

          {/* Right side - 3D element placeholder or stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="hidden md:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <NeoBrutalistCard color="white" className="space-y-2">
                <p className="text-sm text-gray-500 dark:text-gray-400 font-space">EXPERIENCE</p>
                <p className="text-5xl font-black gradient-text">1.5Y</p>
              </NeoBrutalistCard>

              <NeoBrutalistCard color="white" className="space-y-2">
                <p className="text-sm text-gray-500 dark:text-gray-400 font-space">PROJECTS</p>
                <p className="text-5xl font-black gradient-text">15+</p>
              </NeoBrutalistCard>

              <NeoBrutalistCard color="white" className="space-y-2">
                <p className="text-sm text-gray-500 dark:text-gray-400 font-space">SKILLS</p>
                <p className="text-5xl font-black gradient-text">25+</p>
              </NeoBrutalistCard>

              <NeoBrutalistCard color="pink" className="space-y-2">
                <p className="text-sm text-white/80 font-space">STATUS</p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-neo-green rounded-full animate-pulse" />
                  <p className="text-xl font-bold">AVAILABLE</p>
                </div>
              </NeoBrutalistCard>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="text-sm font-space font-bold">SCROLL DOWN</p>
          <div className="w-6 h-10 border-4 border-black dark:border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-black dark:bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSectionModern;
