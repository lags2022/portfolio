"use client";

import Link from "next/link";
import { FaLaptopCode, FaBars } from "react-icons/fa";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "./NavBar";
import ModalNavBar from "./ModalNavBar";

const Header: React.FC = () => {
  const [show, setshow] = useState(false);
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
    <header className="py-4 w-[90vw] xl:max-w-7xl m-auto">
      <div className="relative flex items-center justify-between m-auto">
        <Link href="/" className="flex items-center">
          <motion.div whileHover={{ y: -2 }}>
            <FaLaptopCode className="text-lightblue dark:text-darkblue text-2xl sm:text-3xl" />
          </motion.div>
          <h3 className="px-2 text-lightblue dark:text-darkblue font-bold text-lg sm:text-2xl">
            Lgdev
          </h3>
        </Link>
        <nav className="flex items-center ">
          <button
            className="sm:hidden flex flex-col justify-center items-center w-8 h-8"
            onClick={() => setshow(!show)}
          >
            <FaBars size={20} className="text-lightblue dark:text-lightblue" />
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
            absolute
            bg-lightblue/75 dark:bg-darkhover backdrop-blur-lg rounded 
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
