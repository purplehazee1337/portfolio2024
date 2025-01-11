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

          <div className="mt-6 flex flex-row text-lg min-w-screen justify-center lg:justify-normal flex-wrap">
            <a
              className="bg-white text-black py-3 px-6 mr-5 my-1 flex flex-row justify-center items-center rounded-md font-bold hover:opacity-50 cursor-pointer"
              href="/assets/cv.pdf"
              download="CV - Wojciech Jechowski"
            >
              <Image
                src="/assets/logos/file.svg"
                width={100 / 5}
                height={100 / 5}
                alt="scroll-down"
                className="mr-2"
              />
              Resume
            </a>
            <a
              className="bg-white text-black py-3 px-6 mr-5 my-1 flex flex-row justify-center items-center rounded-md font-bold hover:opacity-50 cursor-pointer"
              href="https://www.linkedin.com/in/wojciech-jechowski-2183a8248/"
              
            >
              <Image
                src="/assets/logos/linkedin.svg"
                width={100 / 4}
                height={100 / 4}
                alt="scroll-down"
                className="mr-2"
              />
              Linkedin
            </a>
            <a
              className="bg-white text-black py-3 px-6 mr-5 my-1 flex flex-row justify-center items-center rounded-md font-bold hover:opacity-50 cursor-pointer"
              href="https://github.com/purplehazee1337"
              
            >
              <Image
                src="/assets/logos/github2.svg"
                width={100 / 4}
                height={100 / 4}
                alt="scroll-down"
                className="mr-2"
              />
              Github
            </a>
            
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
