"use client";

import { motion } from "framer-motion";
import { ResponsiveRadar } from "@nivo/radar";
import { useTheme } from "next-themes";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useMemo } from "react";

interface TechStackRadarProps {
  data?: Array<{
    skill: string;
    proficiency: number;
  }>;
}

const defaultData = [
  { skill: "React", proficiency: 95 },
  { skill: "Node.js", proficiency: 85 },
  { skill: "MongoDB", proficiency: 85 },
  { skill: "TypeScript", proficiency: 65 },
  { skill: "Git", proficiency: 90 },
  { skill: "Docker", proficiency: 60 },
  { skill: "Tailwind", proficiency: 70 },
  { skill: "PostgreSQL", proficiency: 65 },
];

export function TechStackRadar({ data = defaultData }: TechStackRadarProps) {
  const { theme } = useTheme();

  const chartTheme = useMemo(
    () => ({
      text: {
        fill: theme === "dark" ? "#e5e7eb" : "#374151",
        fontSize: 11,
      },
      grid: {
        line: {
          stroke: theme === "dark" ? "#374151" : "#e5e7eb",
          strokeWidth: 1,
        },
      },
      tooltip: {
        container: {
          background: theme === "dark" ? "#1f2937" : "#ffffff",
          color: theme === "dark" ? "#e5e7eb" : "#374151",
          fontSize: 12,
          borderRadius: 8,
          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
          padding: "12px 16px",
        },
      },
    }),
    [theme]
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Tech Stack Proficiency</CardTitle>
          <CardDescription>
            Skill level across different technology domains
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] w-full">
            <ResponsiveRadar
              data={data}
              keys={["proficiency"]}
              indexBy="skill"
              maxValue={100}
              margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
              curve="linearClosed"
              borderWidth={2}
              borderColor={{ from: "color" }}
              gridLevels={5}
              gridShape="circular"
              gridLabelOffset={16}
              enableDots={true}
              dotSize={8}
              dotColor={{ theme: "background" }}
              dotBorderWidth={2}
              dotBorderColor={{ from: "color" }}
              enableDotLabel={true}
              dotLabel="value"
              dotLabelYOffset={-12}
              colors={{ scheme: "nivo" }}
              fillOpacity={0.25}
              blendMode="multiply"
              animate={true}
              motionConfig="wobbly"
              isInteractive={true}
              theme={chartTheme}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
