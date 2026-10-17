"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { config } from "@/data/config";
import { Mail, MapPin, CheckCircle, Github, Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react";

const socialLinks = [
  { Icon: Github,    href: config.social.github,    label: "GitHub" },
  { Icon: Linkedin,  href: config.social.linkedin,  label: "LinkedIn" },
  { Icon: Twitter,   href: config.social.twitter,   label: "Twitter / X" },
  { Icon: Instagram, href: config.social.instagram, label: "Instagram" },
];

export default function ContactSectionModern() {
  return (
    <section id="contact" className="w-full py-28 px-4 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase">05 — Contact</span>
            <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
          </div>
          <h2 className="text-6xl sm:text-7xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tight">
            Let&apos;s Build<br />
            <span className="text-gray-300 dark:text-gray-700">Something</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              Building something cool? I&apos;m always open to new projects, collaborations, and opportunities. Let&apos;s talk.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a href={`mailto:${config.email}`} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-[#111] border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md transition-all group">
                <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                  <Mail className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Email</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">{config.email}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors shrink-0" />
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-[#111] border border-gray-100 dark:border-gray-800">
                <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Location</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Nagpur, Maharashtra, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-emerald-500/70 uppercase tracking-widest mb-0.5">Status</p>
                  <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">Open to opportunities</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-3">Find me on</p>
              <div className="grid grid-cols-2 gap-2">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#111] border border-gray-100 dark:border-gray-800 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1a1a1a] hover:text-gray-900 dark:hover:text-white hover:border-gray-200 dark:hover:border-gray-700 transition-all group"
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-gray-800 p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Send a message</h3>
            <p className="text-sm text-gray-400 mb-7">I&apos;ll get back to you within 24 hours.</p>
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
