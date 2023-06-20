"use client";

import Image from "next/image";
import Link from "next/link";

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
      <Image
        className="m-auto sm:mx-4"
        src={`/images/svgs/moon-filled-to-sunny-filled-loop-transition.svg`}
        alt="moon"
        height={20}
        width={20}
      />
    </>
  );
};

export default NavBar;
