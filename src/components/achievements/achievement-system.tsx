"use client";

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react";
import { useSoundEffects } from "@/hooks/use-sound-effects";
import { useToast } from "@/components/ui/use-toast";
import { Trophy, Star, Sparkles, Eye, Rocket, MessageCircle, Code, Timer } from "lucide-react";

export type AchievementId =
  | "first-visit"
  | "explorer"
  | "speedrunner"
  | "social"
  | "curious"
  | "nyan-cat-finder"
  | "easter-egg-master"
  | "section-completionist"
  | "night-owl"
  | "return-visitor";

export interface Achievement {
  id: AchievementId;
  name: string;
  description: string;
  icon: React.ElementType;
  unlocked: boolean;
  unlockedAt?: Date;
}

const ACHIEVEMENTS: Omit<Achievement, "unlocked" | "unlockedAt">[] = [
  {
    id: "first-visit",
    name: "Welcome!",
    description: "Visited the portfolio for the first time",
    icon: Star,
  },
  {
    id: "explorer",
    name: "Explorer",
    description: "Found all easter eggs",
    icon: Sparkles,
  },
  {
    id: "speedrunner",
    name: "Speedrunner",
    description: "Viewed all sections in under 30 seconds",
    icon: Timer,
  },
  {
    id: "social",
    name: "Social Butterfly",
    description: "Used the chat feature",
    icon: MessageCircle,
  },
  {
    id: "curious",
    name: "Curious Mind",
    description: "Opened DevTools to explore",
    icon: Code,
  },
  {
    id: "nyan-cat-finder",
    name: "Nyan Cat Finder",
    description: "Summoned the legendary Nyan Cat",
    icon: Rocket,
  },
  {
    id: "easter-egg-master",
    name: "Easter Egg Master",
    description: "Discovered 5 hidden features",
    icon: Trophy,
  },
  {
    id: "section-completionist",
    name: "Section Completionist",
    description: "Visited all portfolio sections",
    icon: Eye,
  },
  {
    id: "night-owl",
    name: "Night Owl",
    description: "Visited between midnight and 4 AM",
    icon: Star,
  },
  {
    id: "return-visitor",
    name: "Return Visitor",
    description: "Came back to visit again",
    icon: Trophy,
  },
];

interface AchievementContextType {
  achievements: Achievement[];
  unlock: (id: AchievementId) => void;
  isUnlocked: (id: AchievementId) => boolean;
  unlockedCount: number;
  totalCount: number;
}

const AchievementContext = createContext<AchievementContextType | null>(null);

export function AchievementProvider({ children }: { children: ReactNode }) {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const { play } = useSoundEffects();
  const { toast } = useToast();

  // Initialize achievements from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("portfolio-achievements");
    const unlockedIds = stored ? JSON.parse(stored) : [];

    const initialAchievements = ACHIEVEMENTS.map((achievement) => ({
      ...achievement,
      unlocked: unlockedIds.includes(achievement.id),
      unlockedAt: unlockedIds.includes(achievement.id) ? new Date() : undefined,
    }));

    setAchievements(initialAchievements);

    // Check for time-based achievements
    checkTimeBasedAchievements(initialAchievements);
  }, []);

  const checkTimeBasedAchievements = (currentAchievements: Achievement[]) => {
    const now = new Date();
    const hour = now.getHours();

    // Night Owl achievement (12 AM - 4 AM)
    if (hour >= 0 && hour < 4) {
      const nightOwl = currentAchievements.find((a) => a.id === "night-owl");
      if (nightOwl && !nightOwl.unlocked) {
        setTimeout(() => unlock("night-owl"), 2000);
      }
    }

    // Return visitor check
    const lastVisit = localStorage.getItem("portfolio-last-visit");
    if (lastVisit) {
      const returnVisitor = currentAchievements.find((a) => a.id === "return-visitor");
      if (returnVisitor && !returnVisitor.unlocked) {
        setTimeout(() => unlock("return-visitor"), 1000);
      }
    } else {
      // First visit
      const firstVisit = currentAchievements.find((a) => a.id === "first-visit");
      if (firstVisit && !firstVisit.unlocked) {
        setTimeout(() => unlock("first-visit"), 500);
      }
    }
    localStorage.setItem("portfolio-last-visit", now.toISOString());
  };

  const unlock = useCallback(
    (id: AchievementId) => {
      setAchievements((prev) => {
        const achievement = prev.find((a) => a.id === id);
        if (!achievement || achievement.unlocked) return prev;

        const updated = prev.map((a) =>
          a.id === id
            ? { ...a, unlocked: true, unlockedAt: new Date() }
            : a
        );

        // Save to localStorage
        const unlockedIds = updated.filter((a) => a.unlocked).map((a) => a.id);
        localStorage.setItem("portfolio-achievements", JSON.stringify(unlockedIds));

        // Show toast notification
        const Icon = achievement.icon;
        play("achievement");
        
        toast({
          title: "Achievement Unlocked! 🏆",
          description: (
            <div className="flex items-center gap-2">
              <Icon className="h-4 w-4" />
              <div>
                <div className="font-semibold">{achievement.name}</div>
                <div className="text-xs text-muted-foreground">
                  {achievement.description}
                </div>
              </div>
            </div>
          ),
        });

        return updated;
      });
    },
    [play]
  );

  const isUnlocked = useCallback(
    (id: AchievementId) => {
      return achievements.find((a) => a.id === id)?.unlocked ?? false;
    },
    [achievements]
  );

  const unlockedCount = achievements.filter((a) => a.unlocked).length;
  const totalCount = achievements.length;

  return (
    <AchievementContext.Provider
      value={{ achievements, unlock, isUnlocked, unlockedCount, totalCount }}
    >
      {children}
    </AchievementContext.Provider>
  );
}

export function useAchievements() {
  const context = useContext(AchievementContext);
  if (!context) {
    throw new Error("useAchievements must be used within AchievementProvider");
  }
  return context;
}
