"use client";

import { Suspense, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "../components/models/Model";
import { OrbitControls } from "@react-three/drei";
import Image from "next/image";

const Project = () => {
  const adjustForScreenSize = () => {
    let screenScale = [5.5, 5.5, 5.5]; // Default scale for visibility
    let screenPosition = [0, 0, 0]; // Default position for visibility
    let rotation = [0, Math.PI - Math.PI / 8 + 0.1, 0]; // Default rotation

    return [screenScale, screenPosition, rotation];
  };

  const [modelScale, modelPosition, modelRotation] = adjustForScreenSize();

  return (
    <section className="bg-neutral-950 text-white relative">
    <Image 
          className="absolute z-20 top-1/2 left-5 2xl:left-36 cursor-pointer hover:opacity-60"
          src="/assets/icons/left-arrow.svg"
          width={100 / 3}
          height={100 / 3}
          alt="scroll-left"
        />
    <Image
          className="absolute z-20 top-1/2 right-5 2xl:right-36 cursor-pointer hover:opacity-60"
          src="/assets/icons/right-arrow.svg"
          width={100 / 3}
          height={100 / 3}
          alt="scroll-right"
        />
      <div className="min-h-screen max-w-7xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col lg:flex-row justify-center items-center lg:gap-10">
        <div className="leading-tight">
          <h3 className="font-bold text-4xl md:text-6xl">Nazwa projektu.</h3>
          <p className="font-semibold text-lg md:text-xl tracking-tight mt-4 md:mt-10">
            Opis projektu Tego dnia wszystko było jakieś dziwne. Idąć z psem
            wieczorem nad jezioro nie myślałam sobie, że spotka mnie coś, co na
            zawsze zmieni moje spostrzeżenie o otaczajacym mnie świecie. Nie raz
            ogladalam filmy o kosmitach, nawet uwielbiałam ksiażkę, którą zna
            każdy niemal dzieciak, a opowiada ona o przyjaznym kosmicie, który
            dostał się przypadkiem na trzecią planetę od słońca - Ziemię.
            Spacerujac z psem zobaczyłam nagle jasny punkt na niebie, im dłużej
            się w niego przypatrywałam, tym stawał się większy i jaśniejszy.
            Pociągnęłam szybko psa, aby móc bezpiecznie schować się za pbliskimi
            drzewami, gdyż byłam nieco przestraszona i nie wiedział, z czym mam
            do czynienia. Bezpieczeństwo bylo dla mnie w tym momencie na wagę
            złota.
          </p>
        </div>

        <div style={{ position: "relative", "max-width": 620, height: 740}}>
          <Canvas
            className="bg-transparent cursor-pointer"
            camera={{ position: [0, 0, 5] }} // Positioned to center the model
          >
            <Suspense fallback={null}>
              <directionalLight position={[1, 1, 1]} intensity={2} />
              <directionalLight position={[-1, 1, -1]} intensity={2} />
              <ambientLight intensity={0.5} />

              <Model
                position={modelPosition}
                scale={modelScale}
                rotation={modelRotation}
              />

              <OrbitControls
                minDistance={1} // Allow closer zoom
                maxDistance={10} // Allow further zoom
                minPolarAngle={Math.PI / 2 - 0.1}
                maxPolarAngle={Math.PI / 2 + 0.1}
                target={[0, 0, 0]} // Center of the canvas
                enabled={true}
                autoRotate={false}
                enableZoom={false}
                enablePan={false}
                autoRotateSpeed={1.5}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Project;
