"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoCard } from "../ui/bento-grid";
import { ExternalLink, Github } from "lucide-react";
import allProjects from "@/data/projects";
import Image from "next/image";
import { NeoBrutalistButton } from "../ui/neo-button";

const ProjectsSectionModern = () => {
  // Get first 6 projects for display
  const featuredProjects = Array.isArray(allProjects) ? allProjects.slice(0, 6) : [];

  return (
    <section id="projects" className="relative min-h-screen w-full py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4"
        >
          <div className="inline-block bg-neo-purple px-6 py-2 neo-border shadow-neo-sm">
            <h2 className="text-white font-black text-2xl md:text-3xl font-space">
              FEATURED PROJECTS
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl font-space">
            A selection of my recent work showcasing modern web applications and creative solutions
          </p>
        </motion.div>

        {/* Bento Grid */}
        <BentoGrid className="max-w-7xl mx-auto">
          {featuredProjects.map((project: any, idx: number) => {
            // Vary the span for visual interest
            const spans = [
              "md:col-span-6 lg:col-span-6",
              "md:col-span-3 lg:col-span-3",
              "md:col-span-3 lg:col-span-3",
              "md:col-span-4 lg:col-span-4",
              "md:col-span-4 lg:col-span-4",
              "md:col-span-4 lg:col-span-4",
            ];

            return (
              <BentoCard
                key={project.id}
                span={spans[idx] || "md:col-span-4 lg:col-span-4"}
                className="group cursor-pointer"
              >
                <div className="h-full flex flex-col gap-4">
                  {/* Project Image */}
                  {project.src && (
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                      <Image
                        src={project.src}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  )}

                  {/* Project Info */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
                          {project.category}
                        </p>
                        <h3 className="text-2xl font-bold font-space group-hover:gradient-text transition-all">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.skills?.frontend?.slice(0, 4).map((skill: any, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs font-bold bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 font-space"
                        >
                          {skill?.title || "Tech"}
                        </span>
                      ))}
                      {(project.skills?.frontend?.length || 0) > 4 && (
                        <span className="px-3 py-1 text-xs font-bold text-gray-500">
                          +{(project.skills?.frontend?.length || 0) - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </BentoCard>
            );
          })}
        </BentoGrid>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a href="/projects">
            <NeoBrutalistButton color="orange" className="mx-auto">
              VIEW ALL PROJECTS →
            </NeoBrutalistButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSectionModern;
