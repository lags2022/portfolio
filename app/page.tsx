import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="pt-[72px] w-[90vw] m-auto p-6 max-w-screen-xl scroll-smooth flex flex-col gap-20">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
