import ScrollObserver from "@/utils/scroll-observer";
import Hero from "../components/Hero";
import About from "../components/About";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <ScrollObserver>
      <main>
        <Hero />
        <Main />
        <About />
        <Projects />
        <Contact />
      </main>
    </ScrollObserver>
  );
}
