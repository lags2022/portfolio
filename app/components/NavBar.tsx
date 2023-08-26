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
      <ul className="sm:text-dark text-light sm:dark:text-light dark:text-dark flex flex-col sm:flex-row [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:font-semibold justify-center items-start">
        {links.map(({ route, label }) => (
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            key={label}
          >
            <Link href={route} onClick={onClose} scroll={false}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center border-none mx-2 gap-1">
        {/* <Sunny />
        <button
          data-mode={mode}
          className="w-8 h-5 px-1 bg-lightblue dark:bg-darkblue sm:bg-lightblue sm:dark:bg-darkblue  flex items-center justify-start data-[mode=dark]:justify-end rounded-lg p-0"
          onClick={() =>
            mode === "light" ? setMode("dark") : setMode("light")
          }
        >
          <motion.div
            className="w-3 h-3 rounded-full bg-dark dark:bg-light sm:bg-light sm:dark:bg-dark"
            layout
            transition={{
              type: "spring",
              stiffness: 700,
              damping: 30,
            }}
          />
        </button>
        <Moon /> */}
      </div>
    </>
  );
};

export default NavBar;
