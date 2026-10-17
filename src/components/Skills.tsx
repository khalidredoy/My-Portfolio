"use client";

import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiVercel,
} from "react-icons/si";

type SkillCategory = "FRONTEND" | "BACKEND" | "DESIGN & TOOLS";

interface Skill {
  name: string;
  subtitle: string;
  category: SkillCategory;
  icon: React.ReactNode;
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategory>("FRONTEND");

  const skillsData: Skill[] = [
    {
      name: "HTML",
      subtitle: "Foundation",
      category: "FRONTEND",
      icon: <FaHtml5 className="text-5xl text-[#E34F26]" />,
    },
    {
      name: "CSS",
      subtitle: "Styling",
      category: "FRONTEND",
      icon: <FaCss3Alt className="text-5xl text-[#1572B6]" />,
    },
    {
      name: "Tailwind",
      subtitle: "CSS Framework",
      category: "FRONTEND",
      icon: <SiTailwindcss className="text-5xl text-[#06B6D4]" />,
    },
    {
      name: "JavaScript",
      subtitle: "Core Lang",
      category: "FRONTEND",
      icon: <FaJsSquare className="text-5xl text-[#F7DF1E] bg-black rounded" />,
    },
    {
      name: "TypeScript",
      subtitle: "Typed Lang",
      category: "FRONTEND",
      icon: (
        <SiTypescript className="text-5xl text-[#3178C6] bg-white rounded" />
      ),
    },
    {
      name: "React",
      subtitle: "UI Library",
      category: "FRONTEND",
      icon: <FaReact className="text-5xl text-[#61DAFB]" />,
    },
    {
      name: "Next.js",
      subtitle: "Framework",
      category: "FRONTEND",
      icon: (
        <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-black border border-white/10 shadow-md">
          <svg
            className="h-8 w-8 text-white"
            viewBox="0 0 180 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M149.508 157.52L69.142 54H54V125.7H66.6666V72.338L136.086 161.05C140.781 160.33 145.28 159.1 149.508 157.52Z"
              fill="url(#paint0_linear)"
            />
            <rect
              x="119.5"
              y="54"
              width="12.6667"
              height="71.7"
              fill="url(#paint1_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="109"
                y1="110"
                x2="145"
                y2="157"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear"
                x1="125.833"
                y1="54"
                x2="125.833"
                y2="125.7"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ),
    },

    {
      name: "Node.js",
      subtitle: "Runtime",
      category: "BACKEND",
      icon: <FaNodeJs className="text-5xl text-[#339933]" />,
    },
    {
      name: "Express",
      subtitle: "Framework",
      category: "BACKEND",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#252525] text-white">
          <SiExpress className="text-2xl" />
        </div>
      ),
    },
    {
      name: "MongoDB",
      subtitle: "Database",
      category: "BACKEND",
      icon: <SiMongodb className="text-5xl text-[#47A248]" />,
    },
    {
      name: "BetterAuth",
      subtitle: "Auth Library",
      category: "BACKEND",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black border border-white/10 p-2 shadow-inner">
          <svg
            className="h-7 w-7 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 5H9V11H3V5ZM15 5H21V11H15V5ZM3 13H9V19H3V13ZM15 13H21V19H15V13ZM9 9H15V15H9V9Z" />
          </svg>
        </div>
      ),
    },

    {
      name: "Figma",
      subtitle: "UI Design",
      category: "DESIGN & TOOLS",
      icon: (
        <svg
          className="h-12 w-12"
          viewBox="0 0 38 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 28.5C19 31.5376 16.5376 34 13.5 34C10.4624 34 8 31.5376 8 28.5C8 25.4624 10.4624 23 13.5 23C16.5376 23 19 25.4624 19 28.5Z"
            fill="#0ACF83"
          />
          <path
            d="M8 47.5C8 50.5376 10.4624 53 13.5 53C16.5376 53 19 50.5376 19 47.5V34H13.5C10.4624 34 8 36.4624 8 39.5V47.5Z"
            fill="#1ABCFE"
          />
          <path
            d="M8 9.5C8 6.46243 10.4624 4 13.5 4H19V17H13.5C10.4624 17 8 14.5376 8 9.5Z"
            fill="#F24E1E"
          />
          <path
            d="M19 4H24.5C27.5376 4 30 6.46243 30 9.5C30 12.5376 27.5376 15 24.5 15H19V4Z"
            fill="#FF7262"
          />
          <path
            d="M30 28.5C30 31.5376 27.5376 34 24.5 34C21.4624 34 19 31.5376 19 28.5C19 25.4624 21.4624 23 24.5 23C27.5376 23 30 25.4624 30 28.5Z"
            fill="#A259FF"
          />
        </svg>
      ),
    },
    {
      name: "Git / GitHub",
      subtitle: "Versioning",
      category: "DESIGN & TOOLS",
      icon: (
        <svg
          className="h-12 w-12 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017C2 16.443 4.935 20.169 8.878 21.488C9.378 21.579 9.563 21.272 9.563 21.009C9.563 20.772 9.555 19.987 9.551 18.944C6.793 19.545 6.208 17.606 6.208 17.606C5.753 16.45 5.094 16.145 5.094 16.145C4.192 15.529 5.162 15.542 5.162 15.542C6.16 15.613 6.685 16.571 6.685 16.571C7.572 18.102 9.011 17.662 9.574 17.411C9.664 16.77 9.922 16.33 10.207 16.085C7.996 15.833 5.672 14.982 5.672 11.159C5.672 10.06 6.062 9.157 6.697 8.448C6.594 8.196 6.243 7.169 6.796 5.779C6.796 5.779 7.632 5.508 9.559 6.805C10.352 6.584 11.2 6.474 12.048 6.47C12.895 6.474 13.744 6.584 14.539 6.805C16.464 5.508 17.298 5.779 17.298 5.779C17.854 7.169 17.502 8.196 17.4 8.448C18.037 9.157 18.425 10.06 18.425 11.159C18.425 14.992 16.097 15.83 13.879 16.077C14.237 16.385 14.557 17.001 14.557 17.935C14.557 19.277 14.545 20.358 14.545 21.009C14.545 21.275 14.733 21.586 15.241 21.486C19.181 20.166 22.114 16.441 22.114 12.017C22.114 6.484 17.633 2 12 2Z"
          />
        </svg>
      ),
    },
    {
      name: "Netlify",
      subtitle: "Hosting",
      category: "DESIGN & TOOLS",
      icon: (
        <svg
          className="h-12 w-12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L3 12L12 22L21 12L12 2Z"
            fill="#20B2AA"
            fillOpacity="0.2"
            stroke="#00C7B7"
            strokeWidth="1.5"
          />
          <path d="M12 2L12 22" stroke="#00C7B7" strokeWidth="1.5" />
          <path d="M3 12L21 12" stroke="#00C7B7" strokeWidth="1.5" />
          <path d="M7 7L17 17" stroke="#00C7B7" strokeWidth="1.2" />
          <path d="M7 17L17 7" stroke="#00C7B7" strokeWidth="1.2" />
          <circle cx="12" cy="7" r="1.2" fill="#00C7B7" />
          <circle cx="12" cy="17" r="1.2" fill="#00C7B7" />
          <circle cx="7" cy="12" r="1.2" fill="#00C7B7" />
          <circle cx="17" cy="12" r="1.2" fill="#00C7B7" />
        </svg>
      ),
    },
    {
      name: "Vercel",
      subtitle: "Deployment",
      category: "DESIGN & TOOLS",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black border border-white/20">
          <SiVercel className="text-2xl text-white" />
        </div>
      ),
    },
    {
      name: "VS Code",
      subtitle: "Dev Tools",
      category: "DESIGN & TOOLS",
      icon: (
        <svg
          className="h-12 w-12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5 2.75L6.5 11.25L3 8.75L2 9.5V14.5L3 15.25L6.5 12.75L17.5 21.25L22 19V5L17.5 2.75ZM19 17.5L9.5 12L19 6.5V17.5Z"
            fill="#007ACC"
          />
        </svg>
      ),
    },
  ];

  const filteredSkills = skillsData.filter(
    (skill) => skill.category === activeTab,
  );

  return (
    <section
      id="skills"
      className="bg-[#0d0d0d] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-12"
    >
      <div className="mx-auto w-full max-w-7xl rounded-[32px] border border-white/[0.08] bg-gradient-to-br from-[#202020] to-[#111111] px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            My Skills & Tools
          </h2>
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {(["FRONTEND", "BACKEND", "DESIGN & TOOLS"] as SkillCategory[]).map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-xl px-6 py-2.5 text-xs font-bold tracking-wider transition-all duration-300 sm:text-sm ${
                  activeTab === tab
                    ? "border border-sky-400/50 bg-sky-400/10 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.15)]"
                    : "border border-white/10 bg-[#171717] text-white/60 hover:border-white/20 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ),
          )}
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center rounded-3xl border border-white/[0.08] bg-[#141414] p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-400/40 hover:bg-[#181818] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>

              <h3 className="text-lg font-bold text-white sm:text-xl">
                {skill.name}
              </h3>

              <p className="mt-1 text-xs font-mono font-medium text-white/40 sm:text-sm">
                {skill.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
