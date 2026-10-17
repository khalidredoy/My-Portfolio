"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#0d0d0d] px-5 py-6 text-white sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-center text-center">
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} All rights reserved by{" "}
          <span className="font-semibold text-sky-400">Khalid Redoy</span>
        </p>
      </div>
    </footer>
  );
}
