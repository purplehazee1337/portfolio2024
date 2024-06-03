"use client";

import Image from "next/image";

const Main = () => {
  return (
    <div className="text-white bg-neutral-950">
      <div className="min-h-screen max-w-7xl gap-10 mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col lg:flex-row text-center lg:text-left justify-center items-center">
        <div>
        <h2 className="leading-tight text-6xl md:text-8xl font-bold">
          Witam!
        </h2>
        <p className="mt-4 md:mt-10 leading-tight text-2xl md:text-4xl tracking-tight font-semibold">
          Mam na imię Wojciech. Mieszkam w Warszawie i w przyszłości chciałbym
          pracować jako programista.
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 mt-10 justify-center items-center">
          <Image
            src="/assets/logos/javascript.png"
            width={100}
            height={100}
            alt="docker"
          />
          <Image
            src="/assets/logos/react.png"
            width={100}
            height={100}
            alt="docker"
          />
          <Image
            src="/assets/logos/nextjs.svg"
            width={100}
            height={100}
            alt="docker"
          />
          <Image
            src="/assets/logos/Tailwind.png"
            width={100}
            height={100}
            alt="docker"
          />
          <Image
            src="/assets/logos/Postgresql.png"
            width={100}
            height={100}
            alt="docker"
          />
          <Image
            src="/assets/logos/vercel.svg"
            width={100}
            height={100}
            alt="docker"
          />
          <Image
            src="/assets/logos/sanity.png"
            width={100}
            height={100}
            alt="docker"
          />
          <Image
            src="/assets/logos/docker.svg"
            width={100}
            height={100}
            alt="docker"
          />
        </div>
        </div>
        <div>
          <Image
            src="/assets/avatar.jpg"
            width={1000}
            height={2000}
            alt="Wojciech Jechowski"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
