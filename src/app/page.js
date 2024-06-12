import ScrollObserver from "@/utils/scroll-observer";
import Hero from "../components/Hero";
import About from "../components/About";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <ScrollObserver>
      <main>
        <Hero />
        <Navbar />
        <section id="main">
          <Main />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </ScrollObserver>
  );
}
