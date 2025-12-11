"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Hackronyx Website",
    description: `Hackronyx is a modern web application built with cutting-edge technologies like Next.js and Tailwind CSS. This project showcases responsive design, interactive features, and seamless user experience with smooth animations. Built with performance in mind and deployed on Vercel for optimal speed and reliability. Features include real-world problem-solving capabilities, industry standard practices, and networking opportunities for professionals.`,
    link: "https://github.com/Yash11778/HacKronyX",
    liveUrl: "https://hackronyx-beta.vercel.app/",
    images: [
      "/assets/projects-screenshots/HacKronyX/1.png",
      "/assets/projects-screenshots/HacKronyX/2.png",
      "/assets/projects-screenshots/HacKronyX/3.png",
    ],
  },
  {
    id: 2,
    name: "fintech-ai-assistant",
    description: `A real-time stock price monitoring service powered by web scraping and AI. 
            This Fintech AI Assistant tracks live stock prices, provides market insights, and 
            delivers intelligent financial analysis. Built with Python for backend processing, 
            utilizing Pandas for data manipulation, BeautifulSoup4/Requests for web scraping, 
            and Streamlit for an interactive frontend dashboard.`,
    link: "https://github.com/Yash11778/Fintech-x-Pathway",
    liveUrl: "https://fintech-x-pathway-aw5nsnt5ynswsfcqrhfpub.streamlit.app/",
    images: [
      "/assets/projects-screenshots/AI Fintech/1.png",
      "/assets/projects-screenshots/AI Fintech/2.png",
      "/assets/projects-screenshots/AI Fintech/3.png",
      "/assets/projects-screenshots/AI Fintech/5.png"
    ],
  },
  {
    id: 3,
    name: "Portfolio",
    description: `Welcome to my digital playground, where creativity meets code in the
            dopest way possible.`,
    link: "https://github.com/Yash11778/3D-interactive-portfolio",
    liveUrl: "https://www.yashdharme.com/",
    images: [
      "/assets/projects-screenshots/myportfolio/landing.png"
    ],
  },
  {
    id: 4,
    name: "PayFi - Decentralized Tipping Platform",
    description: `A decentralized tipping application built with Next.js and smart contracts. PayFi uses 
            Hardhat for Ethereum/blockchain development with a main TipJar.sol contract that handles 
            cryptocurrency tips. The project includes both frontend components (Next.js with Tailwind CSS) 
            and backend services for interacting with the blockchain, with deployment scripts for various networks.`,
    link: "https://github.com/Yash11778/Tip-Jar",
    liveUrl: "https://payfi-seven.vercel.app/",
    images: [
      "/assets/projects-screenshots/payfi/payfi 1.png",
      "/assets/projects-screenshots/payfi/payfi 2.png",
      "/assets/projects-screenshots/payfi/payfi 3.png",

    ],
  },
];

function Page() {
  return (
    <main className="min-h-screen bg-white dark:bg-black py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-4 text-black dark:text-white">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my work showcasing modern web development, blockchain, and AI projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-black border-4 border-black dark:border-white rounded-3xl overflow-hidden shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
                {/* Image Slider */}
                <div className="h-[300px] bg-gray-100 dark:bg-gray-900 border-b-4 border-black dark:border-white">
                  <Splide
                    options={{
                      type: "loop",
                      interval: 4000,
                      autoplay: true,
                      speed: 1000,
                      perMove: 1,
                      rewind: true,
                      arrows: false,
                      pagination: true,
                    }}
                    aria-label={`Screenshots of ${project.name}`}
                  >
                    {project.images.map((image, imgIndex) => (
                      <SplideSlide key={imgIndex}>
                        <div className="relative w-full h-[300px]">
                          <Image
                            src={image}
                            alt={`${project.name} screenshot ${imgIndex + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </SplideSlide>
                    ))}
                  </Splide>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3 text-black dark:text-white">
                    {project.name}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-3 bg-neo-yellow text-black font-bold rounded-xl border-3 border-black shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all duration-150 flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Link>
                    )}
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.liveUrl ? 'flex-1' : 'w-full'} px-4 py-3 bg-black dark:bg-white text-white dark:text-black font-bold rounded-xl border-3 border-black dark:border-white shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all duration-150 flex items-center justify-center gap-2`}
                    >
                      <Github className="w-4 h-4" />
                      {project.liveUrl ? 'Code' : 'View Project'}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-black text-black dark:text-white font-bold rounded-2xl border-4 border-black dark:border-white shadow-neo-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

export default Page;
