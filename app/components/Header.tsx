"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLaptopCode } from "react-icons/fa";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const links = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "#about",
    label: "About",
  },
  {
    route: "#projects",
    label: "Projects",
  },
  {
    route: "#contact",
    label: "Contact",
  },
];

type nameSvg = "github" | "linkedin" | "facebook";

const RenderSvgs = ({ name }: { name: nameSvg }) => {
  const social = {
    github: "https://github.com/lags2022",
    linkedin: "https://www.linkedin.com/in/luisguzmandev",
    facebook:
      "https://www.facebook.com/profile.php?id=100074966380787&mibextid=ZbWKwL",
  };

  return (
    <motion.a
      href={social[name]}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
    >
      <Image
        src={`/images/svgs/${name}.svg`}
        alt={name}
        height={20}
        width={20}
      />
    </motion.a>
  );
};

const Header: React.FC = () => {
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
            <FaLaptopCode className="text-blue-600" size={40} />
          </motion.div>
          <h3 className="px-2 text-blue-700 font-bold text-2xl">Lgdev</h3>
        </Link>
        <nav className="flex items-center">
          <ul className="flex [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:font-semibold">
            {links.map(({ route, label }) => (
              <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                key={label}
              >
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center px-2 gap-x-4">
            <RenderSvgs name="github" />
            <RenderSvgs name="linkedin" />
            <RenderSvgs name="facebook" />
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
