"use client";

import React, { Suspense, lazy } from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import HeroSectionModern from "@/components/sections/hero-modern";
import { SectionTracker } from "@/components/achievements/section-tracker";

// Lazy load heavy components
const SkillsSectionModern = lazy(() => import("@/components/sections/skills-modern"));
const ProjectsSectionModern = lazy(() => import("@/components/sections/projects-modern"));
const ContactSectionModern = lazy(() => import("@/components/sections/contact-modern"));
const GitHubActivity = lazy(() => import("@/components/visualizations/github-activity").then(mod => ({ default: mod.GitHubActivity })));
const TechStackRadar = lazy(() => import("@/components/visualizations/tech-stack-radar").then(mod => ({ default: mod.TechStackRadar })));
const ScrollReveal = lazy(() => import("@/components/scroll-effects/parallax").then(mod => ({ default: mod.ScrollReveal })));

// Loading component
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-black dark:border-white border-t-transparent"></div>
  </div>
);

function MainPage() {
  const useModernDesign = true;

  return (
    <>
      <SmoothScroll>
        <main className={cn(useModernDesign ? "bg-white dark:bg-black" : "bg-slate-100 dark:bg-transparent")}>
          
          <SectionTracker sectionId="hero">
            <HeroSectionModern />
          </SectionTracker>
          
          <Suspense fallback={<SectionLoader />}>
            <SectionTracker sectionId="skills">
              <SkillsSectionModern />
            </SectionTracker>
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <section className="relative w-full py-20 px-4 bg-white dark:bg-black">
              <div className="container mx-auto max-w-6xl space-y-12">
                <ScrollReveal direction="up">
                  <TechStackRadar />
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                  <GitHubActivity />
                </ScrollReveal>
              </div>
            </section>
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
      </SmoothScroll>
    </>
  );
}

export default MainPage;
