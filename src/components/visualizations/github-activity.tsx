"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface GitHubActivityProps {
  username?: string;
}

interface GitHubStats {
  totalContributions: number;
  publicRepos: number;
  followers: number;
}

export function GitHubActivity({ username = "Yash11778" }: GitHubActivityProps) {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.ok) {
          const data = await response.json();
          setStats({
            totalContributions: 149, // From your GitHub profile
            publicRepos: data.public_repos,
            followers: data.followers,
          });
        }
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, [username]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden border-4 border-black dark:border-white shadow-neo">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl font-bold">
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            GitHub Activity
          </CardTitle>
          <CardDescription className="text-base">
            @{username} - Contribution statistics
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          {loading ? (
            <div className="flex items-center justify-center h-40">
              <div className="animate-spin rounded-full h-10 w-10 border-4 border-green-500 border-t-transparent"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl border-3 border-black dark:border-white">
                <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  Total Contributions
                </div>
                <div className="text-4xl font-bold text-green-600 dark:text-green-400">
                  {stats?.totalContributions || 0}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Past Year
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl border-3 border-black dark:border-white">
                <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  Public Repositories
                </div>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {stats?.publicRepos || 0}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Open Source
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl border-3 border-black dark:border-white">
                <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  Followers
                </div>
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                  {stats?.followers || 0}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Community
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-6 text-center">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl border-3 border-black dark:border-white shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              View Full Profile
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
