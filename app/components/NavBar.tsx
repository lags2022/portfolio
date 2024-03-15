import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

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
      <ul className="sm:text-dark text-light sm:dark:text-light dark:text-dark flex flex-col sm:flex-row [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:font-semibold justify-center items-start">
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
      <div className="flex items-center justify-center">
        <ThemeSwitch />
      </div>
    </>
  );
};

export default NavBar;
