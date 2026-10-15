"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <header className="sticky top-0 z-50 bg-[#0d0d0d]/95 px-5 backdrop-blur-md sm:px-8 lg:px-[5%]">
      <nav className="mx-auto flex min-h-24 max-w-[1600px] items-center justify-between gap-4">
        <Link
          href="#home"
          onClick={() => setActiveLink("Home")}
          aria-label="Go to Home"
          className="group relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#292929] via-[#171717] to-[#080808] shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/60 hover:shadow-[0_0_24px_rgba(56,189,248,0.18)]"
        >
          <span className="absolute inset-0 bg-sky-400/0 transition-colors duration-300 group-hover:bg-sky-400/10" />

          <span className="relative text-4xl font-black italic tracking-tighter text-white transition-all duration-300 group-hover:scale-110 group-hover:text-sky-400">
            K
          </span>
        </Link>

        <div className="hidden items-center rounded-full border border-white/[0.08] bg-[#151515] p-1.5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`whitespace-nowrap rounded-full px-4 py-3 text-sm font-medium transition-all duration-300 xl:px-5 ${
                activeLink === link.name
                  ? "border border-sky-400/30 bg-sky-400/10 text-sky-400 shadow-inner"
                  : "border border-transparent text-white/60 hover:border-sky-400/20 hover:bg-sky-400/10 hover:text-sky-400"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={() => setActiveLink("Contact")}
          className="hidden shrink-0 items-center justify-center rounded-full bg-[#292929] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-sky-400 hover:text-black hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] sm:inline-flex"
        >
          Let's Talk
        </a>

        <div className="dropdown dropdown-end sm:hidden lg:hidden">
          <button
            type="button"
            tabIndex={0}
            aria-label="Open navigation menu"
            className="btn btn-circle border-white/10 bg-[#191919] text-white transition-all duration-300 hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-sky-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <ul
            tabIndex={0}
            className="menu dropdown-content z-50 mt-3 w-56 rounded-2xl border border-white/10 bg-[#171717] p-3 text-white shadow-2xl"
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`transition-all duration-300 hover:bg-sky-400/10 hover:text-sky-400 ${
                    activeLink === link.name
                      ? "bg-sky-400/10 text-sky-400"
                      : "text-white/70"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}

            <li className="mt-2 border-t border-white/10 pt-2">
              <a
                href="#contact"
                onClick={() => setActiveLink("Contact")}
                className="flex justify-center rounded-full bg-[#292929] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-sky-400 hover:text-black"
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-end hidden sm:block lg:hidden">
          <button
            type="button"
            tabIndex={0}
            aria-label="Open navigation menu"
            className="btn btn-circle border-white/10 bg-[#191919] text-white transition-all duration-300 hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-sky-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <ul
            tabIndex={0}
            className="menu dropdown-content z-50 mt-3 w-56 rounded-2xl border border-white/10 bg-[#171717] p-3 text-white shadow-2xl"
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`transition-all duration-300 hover:bg-sky-400/10 hover:text-sky-400 ${
                    activeLink === link.name
                      ? "bg-sky-400/10 text-sky-400"
                      : "text-white/70"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}

            <li className="mt-2 border-t border-white/10 pt-2">
              <a
                href="#contact"
                onClick={() => setActiveLink("Contact")}
                className="flex justify-center rounded-full bg-[#292929] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-sky-400 hover:text-black"
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
