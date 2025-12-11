"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import { Application, SplineEvent } from "@splinetool/runtime";
import { SKILLS, Skill, SkillNames } from "@/data/constants";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function KeyboardViewer() {
  const [splineApp, setSplineApp] = useState<Application>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const splineRef = useRef<any>();

  const onSplineLoad = (app: Application) => {
    setSplineApp(app);
    
    // Set keyboard to visible and centered position
    const kbd = app.findObjectByName("keyboard");
    if (kbd) {
      kbd.scale.x = 0.35;
      kbd.scale.y = 0.35;
      kbd.scale.z = 0.35;
      kbd.position.x = 0;
      kbd.position.y = -50;
      kbd.position.z = 0;
      kbd.rotation.x = 0;
      kbd.rotation.y = 0.2;
      kbd.rotation.z = 0;
    }

    // Make all keycaps visible
    const allObjects = app.getAllObjects();
    const keycaps = allObjects.filter((obj: any) => 
      obj.name === "keycap" || 
      obj.name === "keycap-desktop" || 
      obj.name === "keycap-mobile"
    );
    
    keycaps.forEach((keycap: any) => {
      keycap.visible = true;
    });

    setIsLoaded(true);
  };

  const handleMouseHover = (e: SplineEvent) => {
    if (!splineApp || selectedSkill?.name === e.target.name) return;

    if (e.target.name === "body" || e.target.name === "platform") {
      setSelectedSkill(null);
      if (splineApp.getVariable("heading") && splineApp.getVariable("desc")) {
        splineApp.setVariable("heading", "");
        splineApp.setVariable("desc", "");
      }
    } else {
      const skill = SKILLS[e.target.name as SkillNames];
      if (skill) {
        setSelectedSkill(skill);
      }
    }
  };

  useEffect(() => {
    if (!selectedSkill || !splineApp) return;
    splineApp.setVariable("heading", selectedSkill.label);
    splineApp.setVariable("desc", selectedSkill.shortDescription);
  }, [selectedSkill, splineApp]);

  useEffect(() => {
    if (!splineApp) return;
    
    splineApp.addEventListener("mouseHover", handleMouseHover);
    
    return () => {
      splineApp.removeEventListener("mouseHover", handleMouseHover);
    };
  }, [splineApp, selectedSkill]);

  return (
    <div className="w-full h-full relative">
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-2xl font-bold animate-pulse text-white">
            Loading 3D Keyboard...
          </div>
        </div>
      }>
        <Spline
          ref={splineRef}
          scene="/assets/skills-keyboard.spline"
          onLoad={onSplineLoad}
        />
      </Suspense>
      
      {/* Skill Info Display */}
      {selectedSkill && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 max-w-md w-full mx-4 bg-white/95 dark:bg-black/95 backdrop-blur-sm px-6 py-4 rounded-2xl border-3 border-black dark:border-white shadow-neo-lg animate-in fade-in slide-in-from-top-4 duration-300 z-20">
          <h3 className="text-2xl font-bold mb-2 text-black dark:text-white gradient-text">
            {selectedSkill.label}
          </h3>
          <p className="text-sm text-black/80 dark:text-white/80">
            {selectedSkill.shortDescription}
          </p>
        </div>
      )}
    </div>
  );
}
