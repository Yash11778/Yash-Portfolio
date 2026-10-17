import type { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: "Blog",
  description: `Read Yash Dharme's articles on Full Stack Development, AI, Web3, and software engineering. Insights on React, Next.js, Python, blockchain, and more.`,
  alternates: {
    canonical: `${config.site}/blog`,
  },
  openGraph: {
    title: `Blog | Yash Dharme — Full Stack Developer`,
    description: `Articles on Full Stack Development, AI, Web3, and software engineering by Yash Dharme.`,
    url: `${config.site}/blog`,
    images: [{ url: config.ogImg, width: 1200, height: 630, alt: "Yash Dharme Blog" }],
  },
  twitter: {
    title: `Blog | Yash Dharme`,
    description: `Articles on Full Stack Dev, AI, and Web3 by Yash Dharme.`,
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
