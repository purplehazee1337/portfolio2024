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
      className="h-screen flex flex-col items-center justify-center sticky top-0 -z-10"
      style={{
        transform: `translateY(-${progress * 20}vh)`,
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/poster.png"
        className="absolute w-full h-full object-cover"
      >
        <source src="/assets/video/hero.webm" type="video/webm" />
        <source
          src="/assets/video/hero.mp4"
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
        />
        <p>Ten format nie jest obsługiwany w Twojej przeglądarce</p>
      </video>
      <div className="flex flex-1 items-center break-all leading-none">
        <h1 className="text-7xl sm:text-10xl  p-10 transition-all duration-1000 font-black mix-blend-difference z-10 text-white text-right">
          WOJCIECH
          <br />
          JECHOWSKI
          <p className="text-2xl lg:text-4xl transition-all duration-1000 font-black mix-blend-difference z-10 text-white text-right">
            {/* PORTFOLIO */}
          </p>
        </h1>
      </div>
      <div
        className={`flex-grow-0 z-10 pb-20 transition-all duration-1000 ${
          imgLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
        }`}
      >
        <Image
          src="/assets/icons/arrow-down.svg"
          width={100 / 2}
          height={100 / 2}
          alt="scroll-down"
          onLoad={handleImgLoaded}
          className="animate-bounce"
        />
      </div>
    </div>
  );
};

export default Hero;
