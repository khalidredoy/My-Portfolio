import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-96px)] items-center justify-center bg-[#0d0d0d] px-5 py-10 text-white sm:px-8 lg:px-12"
    >
      {/* Main Hero Card */}
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 rounded-[32px] border border-white/[0.08] bg-gradient-to-br from-[#202020] to-[#111111] p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-16">
        {/* Left Side: Personal Information */}
        <div className="order-2 space-y-4 lg:order-1">
          <p className="text-lg font-semibold sm:text-xl">
            <span className="text-purple-500">Frontend</span>{" "}
            <span className="text-sky-400">Developer</span>
          </p>

          <h1 className="whitespace-nowrap text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Khalid Redoy
          </h1>

          <h2 className="text-xl font-semibold text-sky-100/70 sm:text-2xl">
            Aspiring Full-Stack Developer
          </h2>

          <p className="max-w-lg text-base leading-relaxed text-sky-100/70 sm:text-lg">
            Building modern, responsive websites and learning backend
            development, databases, and the MERN stack.
          </p>
        </div>

        {/* Right Side: Your Photo */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative h-[250px] w-full max-w-[300px] overflow-hidden rounded-tl-[48px] rounded-br-[48px] bg-[#292929] sm:h-[300px] sm:max-w-[340px] lg:h-[380px] lg:max-w-[340px]">
            <Image
              src="/logo.png"
              alt="Khalid Redoy"
              fill
              priority
              sizes="(max-width: 640px) 340px, (max-width: 1024px) 380px, 400px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
