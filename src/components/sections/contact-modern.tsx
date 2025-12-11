"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import ContactForm from "@/components/ContactForm";
import { NeoBrutalistButton } from "@/components/ui/neo-button";
import { config } from "@/data/config";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: config.email || "yashdharme6@gmail.com",
    link: `https://mail.google.com/mail/?view=cm&fs=1&to=${config.email || "yashdharme6@gmail.com"}`
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    link: null
  },
  {
    icon: Phone,
    label: "Availability",
    value: "Open to opportunities",
    link: null
  }
];

export default function ContactSectionModern() {
  return (
    <section id="contact" className="relative w-full min-h-screen py-20 px-4 bg-gradient-to-br from-neo-blue/20 via-slate-50 to-neo-purple/20 dark:from-neo-blue/5 dark:via-black dark:to-neo-purple/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 neo-grid opacity-30" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-black dark:text-white">LET&apos;S WORK</span>
            <br />
            <span className="text-black dark:text-white">TOGETHER</span>
          </h2>
          <p className="text-xl md:text-2xl text-black/70 dark:text-white/70 max-w-2xl mx-auto">
            Have a project in mind? Drop me a message and let&apos;s create something amazing!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-black dark:text-white">
                Get in Touch
              </h3>
              <p className="text-lg text-black/70 dark:text-white/70 mb-8">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </motion.div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {info.link ? (
                    <a href={info.link} target="_blank" rel="noopener noreferrer">
                      <GlassCard depth="medium" className="p-6 hover:shadow-neo-lg transition-all group cursor-pointer">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-neo-blue rounded-xl border-2 border-black dark:border-white shadow-neo-sm group-hover:translate-x-1 group-hover:translate-y-1 transition-transform">
                            <info.icon className="w-6 h-6 text-black dark:text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-black/60 dark:text-white/60">
                              {info.label}
                            </p>
                            <p className="text-lg font-bold text-black dark:text-white">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      </GlassCard>
                    </a>
                  ) : (
                    <GlassCard depth="medium" className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-neo-purple rounded-xl border-2 border-black dark:border-white shadow-neo-sm">
                          <info.icon className="w-6 h-6 text-black dark:text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-black/60 dark:text-white/60">
                            {info.label}
                          </p>
                          <p className="text-lg font-bold text-black dark:text-white">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-8"
            >
              <p className="text-sm font-semibold text-black/60 dark:text-white/60 mb-4">
                Or find me on social media
              </p>
              <div className="flex gap-4">
                {Object.entries(config.social).map(([name, link]: [string, string]) => (
                  <NeoBrutalistButton
                    key={name}
                    variant="outline"
                    color="blue"
                    asChild
                  >
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                    >
                      {name}
                    </a>
                  </NeoBrutalistButton>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard depth="strong" gradient className="p-8 lg:p-10">
              <h3 className="text-3xl font-bold mb-6 text-white">
                Send a Message
              </h3>
              <p className="text-white/80 mb-8">
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </p>
              <ContactForm />
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
