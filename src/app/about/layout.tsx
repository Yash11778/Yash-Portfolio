import type { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about Yash Dharme — a Full Stack Developer & AI Builder from Nagpur, India. B.Tech CS & Business Systems student at SVPCET, passionate about React, Next.js, Node.js, Python, and Web3.`,
  alternates: {
    canonical: `${config.site}/about`,
  },
  openGraph: {
    title: `About Yash Dharme | Full Stack Developer & AI Builder`,
    description: `Meet Yash Dharme — Full Stack Developer, AI Builder, and Web3 enthusiast from Nagpur, India. Explore his background, skills, and journey.`,
    url: `${config.site}/about`,
    images: [{ url: config.ogImg, width: 1200, height: 630, alt: "About Yash Dharme" }],
  },
  twitter: {
    title: `About Yash Dharme | Full Stack Developer`,
    description: `Meet Yash Dharme — Full Stack Developer & AI Builder from Nagpur, India.`,
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
