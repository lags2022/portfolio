"use client";

import Link from "next/link";
import { FaLaptopCode, FaBars } from "react-icons/fa";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import NavBar from "./NavBar";
import ModalNavBar from "./ModalNavBar";
import clsx from "clsx";

const Header: React.FC = () => {
  const [show, setshow] = useState(false);
  const { scrollYProgress } = useScroll();
  const menu = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (evt: React.MouseEvent<HTMLLIElement>) => {
    const target = evt.target as Element;
    const { left, top, width, height } = target.getBoundingClientRect();

    if (menu.current) {
      menu.current.style.setProperty("--left", `${left}px`);
      menu.current.style.setProperty("--top", `${top}px`);
      menu.current.style.setProperty("--width", `${width}px`);
      menu.current.style.setProperty("--height", `${height}px`);
      menu.current.style.opacity = "1";
      menu.current.style.visibility = "visible";
    }
  };

  const handleMouseLeave = () => {
    if (menu.current) {
      menu.current.style.opacity = "0";
      menu.current.style.visibility = "hidden";
    }
  };

  return (
    <header className="py-4 fixed top-0 w-screen bg-light/80 backdrop-blur-md backdrop-saturate-200 z-20 transition-all duration-300 ease-in">
      <motion.div
        className="bg-gray-600 fixed left-0 right-0 bottom-0 h-1.5 origin-[0%]"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="flex items-center justify-between w-[90vw] max-w-screen-2xl m-auto">
        <Link href="/" className="flex items-center">
          <motion.div whileHover={{ y: -2 }}>
            <FaLaptopCode className="text-blue-600 text-2xl sm:text-3xl" />
          </motion.div>
          <h3 className="px-2 text-blue-700 font-bold text-lg sm:text-2xl">
            Lgdev
          </h3>
        </Link>
        <nav className="flex items-center ">
          <button
            className="sm:hidden flex flex-col justify-center items-center w-8 h-8"
            onClick={() => setshow(!show)}
          >
            <FaBars size={20} />
          </button>
          <AnimatePresence
            initial={false}
            mode="sync"
            onExitComplete={() => null}
          >
            {show && (
              <ModalNavBar onClose={() => setshow(false)}>
                <NavBar onClose={() => setshow(false)} />
              </ModalNavBar>
            )}
          </AnimatePresence>
          <div className="hidden sm:flex">
            <NavBar
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          </div>
        </nav>
      </div>
      <div
        ref={menu}
        className={`
            absolute bg-black/5 backdrop-blur-lg rounded 
            translate-x-[var(--left)] translate-y-[var(--top)]
            left-0 top-0
            w-[var(--width)] h-[var(--height)]
            transition-all duration-500
            ease-in-out opacity-0 -z-10
          `}
      />
    </header>
  );
};

export default Header;
