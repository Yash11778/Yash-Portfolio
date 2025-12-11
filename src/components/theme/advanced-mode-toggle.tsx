"use client";

import * as React from "react";
import { Moon, Sun, Palette, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useSoundEffects } from "@/hooks/use-sound-effects";

export type ExtendedTheme = "light" | "dark" | "cyberpunk" | "minimal" | "system";

// Custom theme colors
const themeColors = {
  cyberpunk: {
    "--background": "0 0% 5%",
    "--foreground": "0 0% 98%",
    "--primary": "300 100% 50%",
    "--primary-foreground": "0 0% 100%",
    "--secondary": "180 100% 50%",
    "--accent": "300 100% 50%",
    "--border": "300 50% 30%",
  },
  minimal: {
    "--background": "0 0% 100%",
    "--foreground": "0 0% 10%",
    "--primary": "0 0% 20%",
    "--primary-foreground": "0 0% 100%",
    "--secondary": "0 0% 95%",
    "--accent": "0 0% 90%",
    "--border": "0 0% 90%",
  },
};

export function AdvancedModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const { play } = useSoundEffects();
  const [customTheme, setCustomTheme] = React.useState<string>("system");

  React.useEffect(() => {
    const stored = localStorage.getItem("custom-theme");
    if (stored) {
      setCustomTheme(stored);
      applyCustomTheme(stored);
    }
  }, []);

  const applyCustomTheme = (themeName: string) => {
    const root = document.documentElement;
    
    if (themeName === "cyberpunk") {
      Object.entries(themeColors.cyberpunk).forEach(([key, value]) => {
        root.style.setProperty(key, value);
      });
      root.classList.add("dark");
    } else if (themeName === "minimal") {
      Object.entries(themeColors.minimal).forEach(([key, value]) => {
        root.style.setProperty(key, value);
      });
      root.classList.remove("dark");
    } else {
      // Reset to default theme
      root.removeAttribute("style");
    }
  };

  const handleThemeChange = (newTheme: string) => {
    play("click");
    setCustomTheme(newTheme);
    localStorage.setItem("custom-theme", newTheme);

    if (newTheme === "cyberpunk" || newTheme === "minimal") {
      applyCustomTheme(newTheme);
    } else {
      applyCustomTheme("system");
      setTheme(newTheme);
    }
  };

  const getThemeIcon = () => {
    switch (customTheme) {
      case "cyberpunk":
        return <Zap className="h-[1.2rem] w-[1.2rem]" />;
      case "minimal":
        return <Palette className="h-[1.2rem] w-[1.2rem]" />;
      default:
        return (
          <>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </>
        );
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={cn("border-none bg-transparent", className)}
        >
          {getThemeIcon()}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-10 w-48">
        <DropdownMenuLabel>Default Themes</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => handleThemeChange("light")}>
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("system")}>
          <Palette className="mr-2 h-4 w-4" />
          System
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuLabel>Special Themes</DropdownMenuLabel>
        
        <DropdownMenuItem onClick={() => handleThemeChange("cyberpunk")}>
          <Zap className="mr-2 h-4 w-4" />
          <span className="flex items-center gap-2">
            Cyberpunk
            <span className="text-xs text-muted-foreground">✨</span>
          </span>
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => handleThemeChange("minimal")}>
          <Palette className="mr-2 h-4 w-4" />
          <span className="flex items-center gap-2">
            Minimal
            <span className="text-xs text-muted-foreground">🎨</span>
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
