"use client";

import Image from "next/image";
import Link from "next/link";
import { useThemeSwitcher } from "@/app/hooks/useThemeSwitcher";
import { motion } from "framer-motion";
import clsx from "clsx";

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

interface NavBarProps {
  handleMouseEnter?: (evt: React.MouseEvent<HTMLLIElement>) => void;
  handleMouseLeave?: () => void;
  onClose?: () => void;
}

const NavBar = ({
  handleMouseEnter,
  handleMouseLeave,
  onClose,
}: NavBarProps) => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <>
      <ul className="flex flex-col sm:flex-row [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:font-semibold justify-center items-start">
        {links.map(({ route, label }) => (
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            key={label}
          >
            <Link href={route} onClick={onClose}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center border-none mx-2 gap-1">
        <Image
          className={clsx(
            "m-0 p-0 transition-all duration-200 ease-in",
            mode === "dark" && "opacity-20"
          )}
          src={`/images/svgs/moon-filled-to-sunny-filled-loop-transition.svg`}
          alt="moon"
          height={20}
          width={20}
        />
        <button
          data-mode={mode}
          className="w-8 h-5 px-1 bg-gray-400 flex items-center justify-start data-[mode=dark]:justify-end rounded-lg p-0"
          onClick={() =>
            mode === "light" ? setMode("dark") : setMode("light")
          }
        >
          <motion.div
            className="w-3 h-3 rounded-full bg-black"
            layout
            transition={{
              type: "spring",
              stiffness: 700,
              damping: 30,
            }}
          />
        </button>
        <Image
          className={clsx(
            "m-0 p-0 transition-all duration-200 ease-in",
            mode !== "dark" && "opacity-20"
          )}
          src={`/images/svgs/sunny-filled-loop-to-moon-filled-loop-transition.svg`}
          alt="moon"
          height={20}
          width={20}
        />
      </div>
    </>
  );
};

export default NavBar;
