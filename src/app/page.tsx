import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}