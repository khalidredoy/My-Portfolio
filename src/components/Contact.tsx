"use client";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0d0d0d] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-12"
    >
      <div className="mx-auto w-full max-w-7xl rounded-[32px] border border-white/[0.08] bg-gradient-to-br from-[#202020] to-[#111111] px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-3 text-sm text-white/60 sm:text-base">
            Have a project in mind or want to collaborate? Feel free to reach
            out.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Let’s talk about your next big idea.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                I’m currently open to freelance projects, full-time developer
                roles (remote or on-site), and open-source collaborations.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#141414] p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <p className="text-xs text-white/50">Email Me Directly</p>
                  <a
                    href="mailto:khalidredoy@gmail.com"
                    className="text-base font-semibold text-white hover:text-sky-400 transition-colors"
                  >
                    khridu01@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#141414] p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                  <FaPhoneAlt className="text-lg" />
                </div>
                <div>
                  <p className="text-xs text-white/50">Phone Number</p>
                  <a
                    href="tel:+8801700000000"
                    className="text-base font-semibold text-white hover:text-sky-400 transition-colors"
                  >
                    +880 1705-994408
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#141414] p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <p className="text-xs text-white/50">Location</p>
                  <p className="text-base font-semibold text-white">
                    Lalmonirhat, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold text-white/80">
                Connect with me
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/khalidredoy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#141414] text-white/80 transition-all hover:border-sky-400/50 hover:text-sky-400"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/khalidredoy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#141414] text-white/80 transition-all hover:border-sky-400/50 hover:text-sky-400"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://x.com/iamkhalidredoy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#141414] text-white/80 transition-all hover:border-sky-400/50 hover:text-sky-400"
                >
                  <FaTwitter className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col space-y-4 rounded-3xl border border-white/[0.08] bg-[#141414] p-6 sm:p-8"
          >
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/70">
                Your Name
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-sm text-white focus:border-sky-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/70">
                Your Email
              </label>
              <input
                type="email"
                className="w-full rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-sm text-white focus:border-sky-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/70">
                Your Subject
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-sm text-white focus:border-sky-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/70">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Write your message here..."
                className="w-full rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-sky-400 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-sky-400 py-3.5 text-sm font-bold text-black transition-all hover:bg-sky-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
