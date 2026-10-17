import type { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore Yash Dharme's portfolio projects — SaaS platforms, AI-powered tools, Web3 apps, and more. Built with React, Next.js, Node.js, Python, and Solidity.`,
  alternates: {
    canonical: `${config.site}/projects`,
  },
  openGraph: {
    title: `Projects | Yash Dharme — Full Stack Developer`,
    description: `Browse Yash Dharme's projects: SaaS platforms, AI tools, blockchain apps, and web experiences built with React, Next.js, Python, and Solidity.`,
    url: `${config.site}/projects`,
    images: [{ url: config.ogImg, width: 1200, height: 630, alt: "Yash Dharme Projects" }],
  },
  twitter: {
    title: `Projects | Yash Dharme`,
    description: `SaaS, AI tools, Web3 apps and more — built by Yash Dharme.`,
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
