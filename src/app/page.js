import ScrollObserver from "@/utils/scroll-observer";
import Hero from "@/components/hero";
import About from '../components/About'
import Main from '../components/Main'

export default function Home() {
  return (
    <ScrollObserver>
      <main>
        <Hero />
        <Main/>
        <About/>
        <div className="bg-zinc-900 min-h-screen"></div>
      </main>
    </ScrollObserver>
  );
}
