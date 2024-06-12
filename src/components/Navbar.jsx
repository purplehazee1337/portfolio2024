"use client";
import { useContext } from "react";
import { ScrollContext } from "../utils/scroll-observer";
import useScreenSize from "../utils/useScreenSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLaptopCode, faHouse, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { scrollY } = useContext(ScrollContext);

  return (
    <nav
      className={`fixed transition-all duration-500 bottom-0 left-0 right-0 flex justify-center
      
      ${
        scrollY <= useScreenSize().height
          ? "opacity-0 translate-y-10 -z-20"
          : "opacity-100 translate-y-0 z-50"
      }`}
    >
      <ul className="flex flex-row gap-4 bg-white px-20 py-1 rounded-t-full text-2xl">
        <li>
          <a href="#main">
            <FontAwesomeIcon icon={faHouse} className="hover:text-cyan-800"/>
          </a>
        </li>
        <li>
          <a href="#about">
            <FontAwesomeIcon icon={faUser} className="hover:text-cyan-800"/>
          </a>
        </li>
        <li>
          <a href="#projects">
          <FontAwesomeIcon icon={faLaptopCode} className="hover:text-cyan-800"/>
          </a>
        </li>

        <li>
          <a href="#contact">
            <FontAwesomeIcon icon={faEnvelope} className="hover:text-cyan-800"/>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
