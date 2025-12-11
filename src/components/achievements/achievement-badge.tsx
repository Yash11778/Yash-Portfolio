"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Trophy } from "lucide-react";
import { useAchievements } from "./achievement-system";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export function AchievementBadge() {
  const { achievements, unlockedCount, totalCount } = useAchievements();
  const progressPercent = (unlockedCount / totalCount) * 100;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-24 right-6 z-50 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <div className="relative">
            <Trophy className="h-5 w-5" />
            {unlockedCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold"
              >
                {unlockedCount}
              </motion.span>
            )}
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            Achievements
          </DialogTitle>
          <DialogDescription>
            Unlock achievements by exploring the portfolio
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span className="font-semibold">
                {unlockedCount} / {totalCount}
              </span>
            </div>
            <Progress value={progressPercent} className="h-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <AnimatePresence mode="popLayout">
              {achievements.map((achievement) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className={`p-4 rounded-lg border transition-all ${
                      achievement.unlocked
                        ? "bg-primary/5 border-primary"
                        : "bg-muted/30 border-muted opacity-60"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          achievement.unlocked
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-sm">
                            {achievement.name}
                          </h4>
                          {achievement.unlocked && (
                            <Badge variant="secondary" className="text-xs">
                              ✓
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {achievement.description}
                        </p>
                        {achievement.unlocked && achievement.unlockedAt && (
                          <p className="text-xs text-muted-foreground mt-1">
                            Unlocked:{" "}
                            {new Date(achievement.unlockedAt).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
