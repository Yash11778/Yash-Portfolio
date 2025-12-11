"use client";

import { useEffect, useRef } from "react";
import { useAchievements } from "@/components/achievements/achievement-system";

interface SectionTrackerProps {
  sectionId: string;
  children: React.ReactNode;
}

export function SectionTracker({ sectionId, children }: SectionTrackerProps) {
  const { unlock, isUnlocked } = useAchievements();
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            hasTracked.current = true;
            
            // Track visited sections
            const visited = JSON.parse(
              localStorage.getItem("portfolio-visited-sections") || "[]"
            );
            
            if (!visited.includes(sectionId)) {
              visited.push(sectionId);
              localStorage.setItem(
                "portfolio-visited-sections",
                JSON.stringify(visited)
              );

              // Check if all sections visited
              const allSections = ["hero", "skills", "stats", "projects", "contact"];
              const allVisited = allSections.every((s) => visited.includes(s));
              
              if (allVisited && !isUnlocked("section-completionist")) {
                unlock("section-completionist");
              }
            }

            // Track speedrunner achievement (all sections in 30 seconds)
            const firstVisit = localStorage.getItem("portfolio-first-visit-time");
            if (!firstVisit) {
              localStorage.setItem("portfolio-first-visit-time", Date.now().toString());
            } else {
              const elapsed = Date.now() - parseInt(firstVisit);
              const visitedNow = JSON.parse(
                localStorage.getItem("portfolio-visited-sections") || "[]"
              );
              
              if (
                elapsed < 30000 &&
                visitedNow.length === 5 &&
                !isUnlocked("speedrunner")
              ) {
                unlock("speedrunner");
              }
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(sectionId);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [sectionId, unlock, isUnlocked]);

  return <div id={sectionId}>{children}</div>;
}
