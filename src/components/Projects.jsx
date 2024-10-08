"use client";

import { Suspense, useState, useCallback, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./models/Model";
import { OrbitControls } from "@react-three/drei";
import Image from "next/image";
import Project from "./Project";
import projectData from "../../public/assets/projectData";
import useScreenSize from "../utils/useScreenSize";
import Loader from "../components/Loader";

const Projects = () => {
  const screenSize = useScreenSize();

  const adjustForScreenSize = () => {
    let screenScale = [5.5, 5.5, 5.5]; // Default scale for visibility
    let screenPosition = [0, 0, 0]; // Default position for visibility
    let rotation = [0, Math.PI - Math.PI / 8 + 0.1, 0]; // Default rotation

    return [screenScale, screenPosition, rotation];
  };

  const [modelScale, modelPosition, modelRotation] = adjustForScreenSize();

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-neutral-950 text-white relative polka">
      <Image
        className="absolute z-20 top-1/2 left-5 2xl:left-36 cursor-pointer hover:opacity-60"
        src="/assets/icons/left-arrow.svg"
        width={100 / 3}
        height={100 / 3}
        alt="scroll-left"
        onClick={handlePreviousProject}
      />
      <Image
        className="absolute z-20 top-1/2 right-5 2xl:right-36 cursor-pointer hover:opacity-60"
        src="/assets/icons/right-arrow.svg"
        width={100 / 3}
        height={100 / 3}
        alt="scroll-right"
        onClick={handleNextProject}
      />
      <div className="min-h-screen max-w-7xl mx-auto px-10 lg:px-20 py-auto md:pb-20 flex flex-col lg:flex-row justify-center items-center lg:gap-10">
        <Project
          name={projectData[currentProjectIndex].name}
          description={projectData[currentProjectIndex].description}
          url={projectData[currentProjectIndex].url}
          github={projectData[currentProjectIndex].github}
          stack={projectData[currentProjectIndex].stack}
        />

        <div style={{ position: "relative", maxWidth: 620, height: 740 }}>
          <Canvas
            className={`bg-transparent cursor-pointer slideInR z-10 hover-target`}
            camera={{ position: [0, 0, 5] }} // Positioned to center the model
          >
            <Suspense fallback={<Loader />}>
              <directionalLight position={[1, 1, 1]} intensity={2} />
              <directionalLight position={[-1, 1, -1]} intensity={2} />
              <ambientLight intensity={0.5} />
              <Model
                position={modelPosition}
                scale={modelScale}
                rotation={modelRotation}
                video={projectData[currentProjectIndex].video}
              />
              {screenSize.width > 768 ? (
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
              ) : null}
            </Suspense>
          </Canvas>
          <div className="absolute top-1/2 left-1/2 bg-white target"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
