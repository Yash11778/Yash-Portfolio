"use client";

import React, { Suspense, lazy } from "react";
import { cn } from "@/lib/utils";
import HeroSectionModern from "@/components/sections/hero-modern";
import { SectionTracker } from "@/components/achievements/section-tracker";
import { MarqueeStrip } from "@/components/ui/marquee-strip";

const SkillsSectionModern = lazy(() => import("@/components/sections/skills-modern"));
const GitHubActivitySection = lazy(() => import("@/components/sections/github-activity-section"));
const ProjectsSectionModern = lazy(() => import("@/components/sections/projects-modern"));
const ContactSectionModern = lazy(() => import("@/components/sections/contact-modern"));
const ExperienceSection = lazy(() => import("@/components/sections/experience"));
const AchievementsSection = lazy(() => import("@/components/sections/achievements"));

const SectionLoader = () => (
  <div className="w-full h-48 flex items-center justify-center">
    <div className="animate-spin rounded-full h-10 w-10 border-4 border-black dark:border-white border-t-transparent" />
  </div>
);

const heroMarqueeItems = [
  "Full Stack Developer",
  "AI Builder",
  "Web3 Developer",
  "IIT KGP Top 20",
  "NASA 2nd Prize",
  "ETHGlobal 2025",
  "5× Hackathon Winner",
  "Gov. of India IP Holder",
];

const techMarqueeItems = [
  "React.js", "Next.js", "TypeScript", "Node.js", "Python",
  "LLM APIs", "Prompt Engineering", "NLP", "Computer Vision",
  "Solidity", "MongoDB", "FastAPI", "Firebase", "React Native",
];

function MainPage() {
  return (
    <>
        <main className={cn("bg-white dark:bg-black")}>

          <SectionTracker sectionId="hero">
            <HeroSectionModern />
          </SectionTracker>

          <MarqueeStrip
            items={heroMarqueeItems}
            speed="normal"
            className="bg-neo-yellow border-black dark:border-black"
            itemClassName="text-black"
            separator="✦"
          />

          <Suspense fallback={<SectionLoader />}>
            <SectionTracker sectionId="skills">
              <SkillsSectionModern />
            </SectionTracker>
          </Suspense>

          <MarqueeStrip
            items={techMarqueeItems}
            direction="right"
            speed="slow"
            className="bg-black dark:bg-white border-black dark:border-white"
            itemClassName="text-white dark:text-black"
            separator="◆"
          />

          <Suspense fallback={<SectionLoader />}>
            <SectionTracker sectionId="experience">
              <ExperienceSection />
            </SectionTracker>
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <SectionTracker sectionId="achievements">
              <AchievementsSection />
            </SectionTracker>
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <SectionTracker sectionId="github">
              <GitHubActivitySection />
            </SectionTracker>
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <SectionTracker sectionId="projects">
              <ProjectsSectionModern />
            </SectionTracker>
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <SectionTracker sectionId="contact">
              <ContactSectionModern />
            </SectionTracker>
          </Suspense>

        </main>
    </>
  );
}

export default MainPage;
