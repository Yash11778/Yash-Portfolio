"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { ExternalLink } from "lucide-react";

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
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (userResponse.ok) {
          const userData = await userResponse.json();
          setStats({
            totalContributions: 0,
            publicRepos: userData.public_repos,
            followers: userData.followers,
          });
        }
      } catch {
        // silently fail — calendar still shows
      } finally {
        setLoading(false);
      }
    };
    fetchGitHubStats();
  }, [username]);

  const statCards = [
    { label: "Public Repos", value: stats?.publicRepos ?? "—", color: "text-blue-600 dark:text-blue-400", bg: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20" },
    { label: "Followers", value: stats?.followers ?? "—", color: "text-violet-600 dark:text-violet-400", bg: "from-violet-50 to-violet-100 dark:from-violet-900/20 dark:to-violet-800/20" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden bg-white dark:bg-[#111]"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 py-5 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-gray-700 dark:text-gray-300 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
          <div>
            <p className="text-sm font-bold text-gray-900 dark:text-white">GitHub Activity</p>
            <p className="text-xs text-gray-400 mt-0.5">@{username}</p>
          </div>
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors group"
        >
          View profile <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      <div className="p-4 sm:p-6">
        {/* Stat pills */}
        {!loading && stats && (
          <div className="grid grid-cols-2 gap-3 mb-6">
            {statCards.map((s) => (
              <div key={s.label} className={`p-4 bg-gradient-to-br ${s.bg} rounded-xl border border-gray-100 dark:border-gray-800`}>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">{s.label}</p>
                <p className={`text-3xl font-black ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
        )}

        {/* Contribution calendar */}
        <div className="w-full overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] p-4">
          <GitHubCalendar
            username={username}
            colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
            blockSize={12}
            blockMargin={4}
            fontSize={12}
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
