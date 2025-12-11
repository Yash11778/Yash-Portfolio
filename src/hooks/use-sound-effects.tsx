"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type SoundType = "click" | "hover" | "success" | "achievement" | "type" | "whoosh" | "pop";

interface UseSoundEffectsOptions {
  volume?: number;
  enabled?: boolean;
}

export function useSoundEffects(options: UseSoundEffectsOptions = {}) {
  const { volume = 0.3, enabled = true } = options;
  const audioCache = useRef<Map<SoundType, HTMLAudioElement>>(new Map());
  const [isEnabled, setIsEnabled] = useState(enabled);

  // Initialize audio files
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sounds: Record<SoundType, string> = {
      click: "/sounds/click.mp3",
      hover: "/sounds/hover.mp3",
      success: "/sounds/success.mp3",
      achievement: "/sounds/achievement.mp3",
      type: "/sounds/type.mp3",
      whoosh: "/sounds/whoosh.mp3",
      pop: "/sounds/pop.mp3",
    };

    // Preload sounds
    Object.entries(sounds).forEach(([type, src]) => {
      const audio = new Audio(src);
      audio.volume = volume;
      audio.preload = "auto";
      audioCache.current.set(type as SoundType, audio);
    });

    return () => {
      const cache = audioCache.current;
      cache.forEach((audio) => {
        audio.pause();
        audio.src = "";
      });
      cache.clear();
    };
  }, [volume]);

  const play = useCallback(
    (type: SoundType) => {
      if (!isEnabled || typeof window === "undefined") return;

      const audio = audioCache.current.get(type);
      if (audio) {
        // Clone the audio to allow overlapping sounds
        const clone = audio.cloneNode() as HTMLAudioElement;
        clone.volume = volume;
        clone.play().catch((err) => {
          console.log("Sound play failed:", err);
        });
      }
    },
    [isEnabled, volume]
  );

  const toggle = useCallback(() => {
    setIsEnabled((prev) => !prev);
  }, []);

  return {
    play,
    isEnabled,
    toggle,
    setEnabled: setIsEnabled,
  };
}

// Hook for haptic feedback (mobile devices)
export function useHapticFeedback() {
  const vibrate = useCallback((pattern: number | number[] = 50) => {
    if (typeof window !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(pattern);
    }
  }, []);

  return { vibrate };
}
