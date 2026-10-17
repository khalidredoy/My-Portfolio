"use client";

import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveLink: string;
  githubLink: string;
}

const projectsData: Project[] = [
  {
    title: "FitLog — Workout Library ",
    description:
      "FitLog is a modern workout library and planning app that helps users explore workouts, view detailed exercise information, add workouts to today’s plan, save workouts for later, and track their daily workout progress.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "App Router",
      "REST API",
      "LocalStorage",
    ],
    image: "/images/fitlog.png",
    liveLink: "https://fit-log-workout-library.vercel.app/",
    githubLink: "https://github.com/khalidredoy/Fit-Log",
  },
  {
    title: "বাজার দর (Bazar Dor)",
    description:
      "BazarDor is a responsive web application that helps users explore daily market prices of essential products in Bangladesh. Users can browse products by category, compare current and previous prices, view product details, and manage their accounts.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "Better Auth",
      "MongoDB",
    ],
    image: "/images/bazardor.png",
    liveLink: "https://bazar-dor-bd-bd.vercel.app/",
    githubLink: "https://github.com/khalidredoy/Bazar-Dor",
  },
  {
    title: "Dev Stack",
    description:
      "Dev Stack is an interactive web platform designed to help developers explore, compare, and build their ideal technology stack for their next software projects.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "DaisyUI", "Vite"],
    image: "/images/devstack.png",
    liveLink: "https://dev-stack-dsds.netlify.app/",
    githubLink: "https://github.com/khalidredoy/Dev-Stack",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0d0d0d] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-12"
    >
      <div className="mx-auto w-full max-w-7xl rounded-[32px] border border-white/[0.08] bg-gradient-to-br from-[#202020] to-[#111111] px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-3 text-sm text-white/60 sm:text-base">
            Here are some of the projects I have built recently.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#141414] transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a0a0a] border-b border-white/[0.06] p-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-sky-400">
                  {project.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-white/70 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-lg border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white/70 transition-colors hover:text-white"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-sky-400 px-4 py-2 text-xs font-bold text-black transition-all hover:bg-sky-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
