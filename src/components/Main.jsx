"use client";

import Image from "next/image";

const Main = () => {
  return (
    <div className="text-white bg-neutral-950 polka">
      <div className="appearIn min-h-screen max-w-7xl gap-10 mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col lg:flex-row text-center lg:text-left justify-center items-center">
        <div>
        <h2 className="leading-tight text-6xl md:text-8xl font-bold">
          Witam!
        </h2>
        <p className="mt-4 md:mt-10 leading-tight text-2xl md:text-4xl tracking-tight font-semibold">
          Mam na imię Wojciech. Mieszkam w Warszawie i w przyszłości chciałbym
          pracować jako programista.
        </p>
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
