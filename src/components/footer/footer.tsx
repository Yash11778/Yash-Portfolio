import React from "react";
import Link from "next/link";
import { config } from "@/data/config";
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: config.social.github, label: "GitHub" },
  { icon: Linkedin, href: config.social.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: config.social.twitter, label: "Twitter/X" },
  { icon: Instagram, href: config.social.instagram, label: "Instagram" },
  { icon: Mail, href: `mailto:${config.email}`, label: "Email" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t-4 border-black dark:border-white bg-white dark:bg-black">
      {/* CTA Banner */}
      <div className="bg-neo-yellow border-b-4 border-black dark:border-black py-12 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-black leading-tight">
              LET&apos;S BUILD SOMETHING
            </h2>
            <h2 className="text-3xl md:text-5xl font-black text-black leading-tight">
              AMAZING TOGETHER
            </h2>
          </div>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${config.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-black text-white font-black text-lg border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shrink-0"
          >
            GET IN TOUCH
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="inline-block bg-neo-yellow px-4 py-2 border-4 border-black shadow-neo-sm">
              <span className="font-black text-2xl text-black">{config.author.split(" ")[0]}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
              Full Stack Developer crafting modern web experiences with clean code and creative design.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-bold text-green-600 dark:text-green-400">Available for freelance</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-black text-lg uppercase tracking-widest text-black dark:text-white border-b-4 border-black dark:border-white pb-2">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white font-semibold transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-neo-yellow transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-black text-lg uppercase tracking-widest text-black dark:text-white border-b-4 border-black dark:border-white pb-2">
              Connect
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {config.email}
            </p>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 border-4 border-black dark:border-white bg-white dark:bg-black shadow-neo-sm hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <Icon className="w-4 h-4 text-black dark:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t-4 border-black dark:border-white pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {year} {config.author}. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
