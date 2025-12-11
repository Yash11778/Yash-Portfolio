"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Home, User, Briefcase, Mail, Code } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { 
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function FloatingNav() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <motion.div
      style={{ opacity }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:block"
    >
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className={cn(
          "flex items-center gap-2 px-4 py-3 rounded-full",
          "bg-white/10 dark:bg-black/20 backdrop-blur-lg",
          "border border-white/20 dark:border-white/10",
          "shadow-lg shadow-black/5"
        )}
      >
        {navItems.map((item, index) => (
          <Tooltip key={item.name} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link href={item.href}>
                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "p-3 rounded-full transition-all duration-200",
                    "hover:bg-white/20 dark:hover:bg-white/10",
                    "text-slate-700 dark:text-slate-300",
                    "hover:text-purple-600 dark:hover:text-purple-400"
                  )}
                >
                  <item.icon size={20} />
                </motion.button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="top" className="mb-2">
              <p>{item.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </motion.nav>
    </motion.div>
  );
}
