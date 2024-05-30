import Hero from "@/components/hero";
import ScrollObserver from "@/utils/scroll-observer";

export default function Home() {
  return (
    <ScrollObserver>
      <main>
        <Hero />

        <div className="bg-white min-h-screen"></div>
      </main>
    </ScrollObserver>
  );
}
