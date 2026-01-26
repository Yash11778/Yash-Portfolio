import type { Metadata } from "next";
import { Inter, Archivo_Black, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header/header";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import Preloader from "@/components/preloader";
import { config } from "@/data/config";
import ScrollProgress from "@/components/scroll-progress";
import FloatingNav from "@/components/floating-nav";
import BackToTop from "@/components/back-to-top";
import { AchievementProvider } from "@/components/achievements/achievement-system";
import { AchievementBadge } from "@/components/achievements/achievement-badge";
import dynamic from "next/dynamic";

// Lazy load heavy/optional components
const ElasticCursor = dynamic(() => import("@/components/ui/ElasticCursor"), { ssr: false });
const Particles = dynamic(() => import("@/components/Particles"), { ssr: false });
const EasterEggs = dynamic(() => import("@/components/easter-eggs"), { ssr: false });
const SocketContextProvider = dynamic(() => import("@/contexts/socketio"), { ssr: false });
const RemoteCursors = dynamic(() => import("@/components/realtime/remote-cursors"), { ssr: false });

export const metadata: Metadata = {
  title: config.title,
  description: config.description.long,
  keywords: config.keywords,
  authors: [{ name: config.author }],
  openGraph: {
    title: config.title,
    description: config.description.short,
    url: config.site,
    images: [
      {
        url: config.ogImg,
        width: 800,
        height: 600,
        alt: "Portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description.short,
    images: [config.ogImg],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "h4pOUb1lzmN1xJhHQE7fXfz2RnMVHvYYICZwQVyKvAM",
  },
};

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[archivoBlack.variable, spaceGrotesk.variable].join(" ")}>
      <head>
        <Script
          defer
          src={process.env.UMAMI_DOMAIN}
          data-website-id={process.env.UMAMI_SITE_ID}
        ></Script>
        {/* <Analytics /> */}
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Particles
            className="fixed inset-0 -z-10 animate-fade-in"
            quantity={100}
          />
          <AchievementProvider>
            <Preloader>
              <ScrollProgress />
              <BackToTop />
              <SocketContextProvider>
                <RemoteCursors />
                <TooltipProvider>
                  <FloatingNav />
                  <Header />
                  {children}
                  <Footer />
                </TooltipProvider>
              </SocketContextProvider>
              <Toaster />
              <EasterEggs />
              <ElasticCursor />
            </Preloader>
          </AchievementProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
