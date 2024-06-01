"use client";

import Image from "next/image";
import React, {
  useRef,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { ScrollContext } from "../utils/scroll-observer";

const Hero = () => {
  const refContainer = useRef(null);
  const { scrollY } = useContext(ScrollContext);
  const [imgLoaded, setsImgLoaded] = useState(false);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleImgLoaded = useCallback(() => {
    setsImgLoaded(true);
  }, []);

  return (
    <div
      ref={refContainer}
      className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10"
      style={{
        transform: `translateY(-${progress * 20}vh)`
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/assets/vid5.mp4" type='video/mp4; codecs="avc1"' />
      </video>
      <div className="p-12 transition-all duration-1000 font-bold z-10 text-white text-right flex-1 flex flex-col items-right justify-center drop-shadow-[0_5px_3px_rgba(0,0,0,0.5)]">
        <h1 className="text-4xl xl:text-5xl">
          Wojciech Jechowski
        </h1>
        <h2 className="text-2xl xl:text-3xl tracking-tight">
          Fullstack developer
        </h2>
      </div>
      <div
        className={`flex-grow-0 z-10 pb-10 md:pb-20 transition-all duration-1000 ${
          imgLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
        }`}
      >
        <Image
          src="/assets/arrow-down.svg"
          width={100 / 3}
          height={100 / 3}
          alt="scroll-down"
          onLoad={handleImgLoaded}
        />
      </div>
    </div>
  );
}

export default Hero;
