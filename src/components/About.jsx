"use client";

import React, {
  useRef,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { ScrollContext } from "../utils/scroll-observer";

const opacityForBlock = (sectionProgress, blockNo) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const About = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef(null);

  let numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const precentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, precentY * numOfPages));
  }

  return (
    <div ref={refContainer} className="bg-neutral-950 text-white">
      <div className="min-h-screen max-w-6xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl tracking-tight font-semibold">
        <div className="leading-tight">
          <div style={{ opacity: opacityForBlock(progress, 0) }}>
            Jestem absolwentem technikum graficzno-poligraficznego i&nbsp;aktualnie
            studiuje na&nbsp;<span className="text-red-400">akademii&nbsp;WIT</span> w&nbsp;Warszawie na&nbsp;kierunku informatyka.
          </div>
          <div style={{ opacity: opacityForBlock(progress, 1) }}>
            Interesuje się projektowaniem stron internetowych jak i&nbsp;ich
            tworzeniem od <span className="text-blue-400">2022&nbsp;roku</span>. 
          </div>
          <div style={{ opacity: opacityForBlock(progress, 2) }}>
            Na tą chwile rozwijam się w&nbsp;zakresie języka programowania <span className="text-yellow-400">JavaScript </span>
            i&nbsp;technologii mu&nbsp;bliskich obejmujących frontend jak i&nbsp;backend.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
