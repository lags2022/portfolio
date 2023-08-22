import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="pt-3 sm:pt-16 md:pt-32 gap-6 flex flex-col md:flex-row items-start justify-start w-full m-auto">
      <Image
        className="w-[200px] object-contain rounded-full drop-shadow-lg m-auto"
        src="/images/portfolio.webp"
        height={200}
        width={200}
        alt="Biography"
        quality={100}
      />
      <div className="flex flex-1 flex-col gap-2">
        <div className="mb-2 font-bold text-2xl md:text-4xl flex flex-col gap-2">
          <h2 className="dark:text-light">I&apos;m Luis Angel</h2>
          <h2 className="text-lightBlue dark:text-darkBlue">
            Full Stack Developer
          </h2>
          <p className="font-medium text-sm md:text-base dark:text-light">
            Solving design problems, building smart user interfaces and useful
            interactions, developing web and mobile applications with better
            performance.
          </p>
        </div>
        <div className="flex gap-3 md:gap-4 items-center justify-start">
          <a
            href="https://drive.google.com/file/d/1gK13BnD7LfI7xM8BTGnafow36wb2Tcto/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex border-none rounded-full w-fit px-3 py-2 bg-dark text-light items-center justify-center gap-1 dark:text-dark dark:bg-light dark:hover:text-white  hover:bg-blue-700 hover:dark:bg-blue-700"
          >
            <p className="text-xs md:text-sm font-semibold">Resume CV</p>
            <HiOutlineExternalLink className="text-base md:text-xl" />
          </a>
          <a
            href="https://github.com/lags2022"
            target="_blank"
            rel="noopener noreferrer"
            className="herosvg group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="25" className="svgpath" />
              <path
                className="fill-light group-hover:fill-gray-200"
                d="M30.4 40h-8v-4c-5.5 1.2-7-3-7-3-1-2-2-3-2-3-2-1.2 0-1 0-1 2 0 3 2 3 2 1.8 3 4.9 2.5 6 2 0-1 .4-2.5 1-3-4.4-.5-8-3-8-8s1-6 2-7c-.2-.5-1-2.3 0-5 0 0 2 0 4 3 1-1 4-1 5-1s4 0 5 1c2-3 4-3 4-3 1.1 2.7.2 4.5 0 5 1 1 2 2 2 7s-3.6 7.5-8 8c.6.5 1 2.2 1 3v7z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/devluisgs/"
            target="_blank"
            rel="noopener noreferrer"
            className="herosvg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
              <g fill="none" fill-rule="evenodd">
                <path
                  className="svgpath"
                  d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36Z"
                />
                <path
                  fill="#FFF"
                  d="M59 57h-9.04V41.602c0-4.222-1.605-6.581-4.946-6.581-3.635 0-5.535 2.455-5.535 6.58V57h-8.712V27.667h8.712v3.95s2.62-4.847 8.845-4.847C54.546 26.77 59 30.57 59 38.428V57ZM20.373 23.826c-2.968 0-5.373-2.424-5.373-5.413C15 15.423 17.405 13 20.373 13c2.967 0 5.37 2.424 5.37 5.413 0 2.989-2.403 5.413-5.37 5.413ZM15.873 57h9.086V27.667h-9.085V57Z"
                />
              </g>
            </svg>
          </a>
          <a
            href="https://twitter.com/LuisGuz06559954"
            target="_blank"
            rel="noopener noreferrer"
            className="herosvg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="126.444 2.281 589 589"
            >
              <circle cx="420.944" cy="296.781" r="294.5" fill="#2563EB" />
              <path
                fill="#fff"
                d="M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
