"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import allProjects from "@/data/projects";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProjectsSectionModern = () => {
  const featuredProjects = Array.isArray(allProjects) ? allProjects.slice(0, 6) : [];

  return (
    <section id="projects" className="w-full py-28 px-4 bg-gray-50 dark:bg-[#0d0d0d]">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase">04 — Projects</span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
            <a
              href="/projects"
              className="text-xs font-semibold text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1 transition-colors group shrink-0"
            >
              View all <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
          <h2 className="text-6xl sm:text-7xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tight">
            Selected<br />
            <span className="text-gray-300 dark:text-gray-700">Work</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProjects.map((project: any, idx: number) => {
            const tags = project.skills?.frontend?.slice(0, 3) ?? [];
            const extraCount = (project.skills?.frontend?.length ?? 0) - 3;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col hover:shadow-xl dark:hover:shadow-black/50 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800/80">
                  {project.src ? (
                    <>
                      <Image
                        src={project.src}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-300 flex items-center justify-center gap-3">
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                          {project.github && (
                            <a
                              href={project.github} target="_blank" rel="noopener noreferrer"
                              onClick={e => e.stopPropagation()}
                              className="flex items-center gap-1.5 px-4 py-2 bg-white text-gray-900 rounded-xl text-xs font-semibold hover:bg-gray-100 transition-colors"
                            >
                              <Github className="w-3.5 h-3.5" /> Code
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live} target="_blank" rel="noopener noreferrer"
                              onClick={e => e.stopPropagation()}
                              className="flex items-center gap-1.5 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl text-xs font-semibold hover:opacity-90 transition-opacity"
                            >
                              <ArrowUpRight className="w-3.5 h-3.5" /> Live
                            </a>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-500 font-black text-lg">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <div className="flex gap-2">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                            <Github className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                          </a>
                        )}
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                            <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-5 flex flex-col gap-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                      {project.category || "Project"}
                    </span>
                    {project.src && (
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <Github className="w-3.5 h-3.5 text-gray-400" />
                          </a>
                        )}
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                    {project.title}
                  </h3>

                  {project.description && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 flex-1">
                      {project.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-50 dark:border-gray-800/80 mt-auto">
                    {tags.map((skill: any, i: number) => (
                      <span key={i} className="px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-md">
                        {skill?.title || skill}
                      </span>
                    ))}
                    {extraCount > 0 && (
                      <span className="px-2 py-0.5 text-xs text-gray-400">+{extraCount}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <a href="/projects">
            <button className="inline-flex items-center gap-2 px-6 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl text-sm font-semibold hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors shadow-lg shadow-gray-900/10 dark:shadow-white/10">
              View all projects <ArrowUpRight className="w-4 h-4" />
            </button>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSectionModern;
