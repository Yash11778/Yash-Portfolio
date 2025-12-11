"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// Fade in from bottom
export const FadeInUp = ({ 
  children, 
  delay = 0,
  duration = 0.5 
}: { 
  children: ReactNode; 
  delay?: number;
  duration?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
);

// Scale in animation
export const ScaleIn = ({ 
  children, 
  delay = 0,
  duration = 0.5 
}: { 
  children: ReactNode; 
  delay?: number;
  duration?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration, delay, type: "spring", stiffness: 100 }}
  >
    {children}
  </motion.div>
);

// Slide in from left
export const SlideInLeft = ({ 
  children, 
  delay = 0,
  duration = 0.6 
}: { 
  children: ReactNode; 
  delay?: number;
  duration?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration, delay, type: "spring", stiffness: 80 }}
  >
    {children}
  </motion.div>
);

// Slide in from right
export const SlideInRight = ({ 
  children, 
  delay = 0,
  duration = 0.6 
}: { 
  children: ReactNode; 
  delay?: number;
  duration?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration, delay, type: "spring", stiffness: 80 }}
  >
    {children}
  </motion.div>
);

// Stagger children animation
export const StaggerContainer = ({ 
  children,
  staggerDelay = 0.1
}: { 
  children: ReactNode;
  staggerDelay?: number;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={{
      visible: {
        transition: {
          staggerChildren: staggerDelay,
        },
      },
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children }: { children: ReactNode }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    {children}
  </motion.div>
);

// Rotate and scale animation
export const RotateScale = ({ 
  children, 
  delay = 0 
}: { 
  children: ReactNode; 
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0, rotate: -180 }}
    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, type: "spring" }}
  >
    {children}
  </motion.div>
);

// Floating animation
export const FloatingElement = ({ children }: { children: ReactNode }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

// Pulse animation
export const PulseElement = ({ children }: { children: ReactNode }) => (
  <motion.div
    animate={{
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);
