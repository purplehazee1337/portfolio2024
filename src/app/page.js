import ScrollObserver from "@/utils/scroll-observer";
import Hero from "../components/Hero";
import About from "../components/About";
import Main from "../components/Main";
import Project from "../components/Project";

export default function Home() {
  return (
    <ScrollObserver>
      <main>
        <Hero />
        <Main />
        <About />
        <Project />
      </main>
    </ScrollObserver>
  );
}
