export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0d0d0d] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-12"
    >
      <div className="mx-auto w-full max-w-7xl rounded-[32px] border border-white/[0.08] bg-gradient-to-br from-[#202020] to-[#111111] px-6 pb-10 pt-0 sm:px-10 sm:pb-12 lg:px-12">
        <div className="mb-5 flex h-[90px] w-8 flex-col items-center">
          <div className="h-12 w-[2px] bg-gradient-to-b from-transparent to-sky-400" />
          <svg
            viewBox="0 0 40 40"
            className="h-10 w-10 text-sky-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M20 0 C20 12 26 20 40 20 C26 20 20 28 20 40 C20 28 14 20 0 20 C14 20 20 12 20 0Z" />
          </svg>
        </div>

        <h2 className="mb-6 text-2xl font-bold text-white sm:text-3xl">
          About Me
        </h2>

        <div className="space-y-4 text-sm font-normal leading-7 text-white/70 sm:text-base sm:leading-8">
          <p>
            Hi, I'm Khalid Redoy, a passionate Frontend Developer who loves
            turning ideas into modern, responsive, and user-friendly websites. I
            enjoy building clean interfaces and creating smooth user experiences
            using modern web technologies.
          </p>

          <p>
            I'm continuously improving my skills in React, Next.js, and
            JavaScript while expanding my knowledge of backend development,
            databases, and the MERN stack. I love learning new technologies,
            solving problems, and building projects that help me grow as a
            developer.
          </p>

          <p>
            My goal is to become a skilled Full-Stack Developer and create
            meaningful web applications that make a difference.
          </p>
        </div>
      </div>
    </section>
  );
}
