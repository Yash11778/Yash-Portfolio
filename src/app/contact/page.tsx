"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, CheckCircle, Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react";
import { config } from "@/data/config";
import ContactForm from "@/components/ContactForm";
import { MarqueeStrip } from "@/components/ui/marquee-strip";

const socialLinks = [
  {
    label: "GitHub",
    href: config.social.github,
    Icon: () => (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    accent: "bg-black dark:bg-white text-white dark:text-black",
  },
  { label: "LinkedIn", href: config.social.linkedin, Icon: Linkedin, accent: "bg-neo-blue text-white" },
  { label: "Twitter / X", href: config.social.twitter, Icon: Twitter, accent: "bg-black dark:bg-white text-white dark:text-black" },
  { label: "Instagram", href: config.social.instagram, Icon: Instagram, accent: "bg-neo-pink text-white" },
];

const availability = [
  { label: "Freelance Projects", active: true },
  { label: "Full-time Roles", active: true },
  { label: "Open Source Collab", active: true },
  { label: "Hackathon Teams", active: true },
];

const marqueeItems = ["Open to Work", "Let's Connect", "Building Cool Things", "Available Now", "Say Hello"];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Animated grid */}
      <div className="fixed inset-0 neo-grid opacity-20 dark:opacity-10 pointer-events-none" />

      {/* Blobs */}
      <div className="fixed -top-32 -right-32 w-[450px] h-[450px] bg-neo-green/15 dark:bg-neo-green/5 animate-blob pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-neo-yellow/20 dark:bg-neo-yellow/5 animate-blob pointer-events-none" style={{ animationDelay: "3s" }} />
      <div className="fixed top-1/2 -right-20 w-[300px] h-[300px] bg-neo-pink/10 dark:bg-neo-pink/5 animate-blob pointer-events-none" style={{ animationDelay: "6s" }} />

      {/* Floating accents */}
      <div className="hidden lg:block fixed top-28 right-16 w-14 h-14 bg-neo-yellow neo-border animate-float rotate-12 opacity-40 pointer-events-none" />
      <div className="hidden lg:block fixed bottom-40 left-12 w-10 h-10 bg-neo-green neo-border animate-float opacity-35 pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 pt-28 pb-10 px-4">
        <div className="container mx-auto max-w-5xl">

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
              <span className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase">Contact</span>
              <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tight">
              Let&apos;s Build<br />
              <span className="text-gray-300 dark:text-gray-700">Together</span>
            </h1>
          </motion.div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-12">

            {/* Left — info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed border-l-4 border-neo-yellow pl-4">
                Building something cool? I&apos;m open to new projects, collaborations, and opportunities. Let&apos;s talk.
              </p>

              {/* Contact info cards */}
              <div className="space-y-3">
                <motion.a
                  href={`mailto:${config.email}`}
                  whileHover={{ x: -3, y: -3, boxShadow: "5px 5px 0 #000" }}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-[#111] neo-border shadow-neo-sm transition-all group"
                >
                  <div className="w-10 h-10 bg-neo-yellow neo-border flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-black" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Email</p>
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200 truncate">{config.email}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-gray-600 transition-colors shrink-0" />
                </motion.a>

                <div className="flex items-center gap-4 p-4 bg-white dark:bg-[#111] neo-border shadow-neo-sm">
                  <div className="w-10 h-10 bg-neo-blue neo-border flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Location</p>
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Nagpur, Maharashtra, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-neo-yellow neo-border shadow-neo-sm">
                  <div className="w-10 h-10 bg-black neo-border flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-neo-yellow" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-black/60 uppercase tracking-widest mb-0.5">Status</p>
                    <p className="text-sm font-black text-black">Open to opportunities</p>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div>
                <p className="text-[10px] font-black tracking-[0.25em] text-gray-400 uppercase mb-3">Available for</p>
                <div className="grid grid-cols-2 gap-2">
                  {availability.map((a) => (
                    <div key={a.label} className="flex items-center gap-2 p-3 bg-white dark:bg-[#111] neo-border">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                      <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{a.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div>
                <p className="text-[10px] font-black tracking-[0.25em] text-gray-400 uppercase mb-3">Find me on</p>
                <div className="grid grid-cols-2 gap-2">
                  {socialLinks.map(({ Icon, href, label, accent }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className={`flex items-center gap-2.5 px-3 py-2.5 text-xs font-black neo-border shadow-neo-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all uppercase ${accent}`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      {label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-[#111] neo-border shadow-neo-lg p-8"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1.5 h-8 bg-neo-yellow" />
                <h2 className="text-2xl font-black text-black dark:text-white">Send a Message</h2>
              </div>
              <p className="text-sm text-gray-400 mb-8 ml-5">I&apos;ll get back to you within 24 hours.</p>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <MarqueeStrip
        items={marqueeItems}
        speed="normal"
        className="bg-neo-yellow border-black dark:border-black mt-16"
        itemClassName="text-black"
        separator="✦"
      />
    </div>
  );
}
