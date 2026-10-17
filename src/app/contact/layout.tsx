import type { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with Yash Dharme — Full Stack Developer & AI Builder from Nagpur, India. Open to freelance projects, collaborations, and opportunities.`,
  alternates: {
    canonical: `${config.site}/contact`,
  },
  openGraph: {
    title: `Contact Yash Dharme | Full Stack Developer`,
    description: `Reach out to Yash Dharme for freelance work, collaborations, or just to say hello. Based in Nagpur, India.`,
    url: `${config.site}/contact`,
    images: [{ url: config.ogImg, width: 1200, height: 630, alt: "Contact Yash Dharme" }],
  },
  twitter: {
    title: `Contact Yash Dharme`,
    description: `Open to freelance projects and collaborations — reach out!`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
