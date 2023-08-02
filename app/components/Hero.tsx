"use client";

import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";
import { motion } from "framer-motion";
import HeroSvg from "./Svgs/HeroSvg";
import clsx from "clsx";
import {
  variantsView,
  showView,
  variantsViewChildrenLi2,
  variantsViewChildrenUl2,
} from "../utils/variantsModal";

type nameSvg = "github" | "linkedin" | "facebook" | "email";

const RenderSvgs = ({ name }: { name: nameSvg }) => {
  const social = {
    github: "https://github.com/lags2022",
    linkedin: "https://www.linkedin.com/in/luisguzmandev",
    facebook:
      "https://www.facebook.com/profile.php?id=100074966380787&mibextid=ZbWKwL",
    email: "mailto:lguzman.58erb@outlook.com",
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
        className={clsx(
          `rounded-sm`,
          (name === "github" || name === "email") && "dark:bg-light"
        )}
        src={`/images/svgs/${name}.svg`}
        alt={name}
        height={20}
        width={20}
      />
    </motion.a>
  );
};

const Hero = () => {
  return (
    <div className="pl-5 pt-6 sm:pt-16 grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full m-auto overflow-hidden">
      <motion.div
        variants={variantsViewChildrenUl2}
        className="row-start-2 md:row-start-1 flex flex-col gap-2"
      >
        <motion.div
          variants={variantsViewChildrenLi2}
          initial="odd"
          whileInView="even"
          className="mb-2 font-bold text-3xl md:text-5xl dark:[&>h2]:text-light"
        >
          <h2>Hi,</h2>
          <h2>I&apos;m Luis,</h2>
          <h2>full stack web developer</h2>
        </motion.div>
        <motion.p
          variants={variantsViewChildrenLi2}
          initial="odd"
          whileInView="even"
          className="font-medium text-sm md:text-base dark:text-light"
        >
          Solving design problems, building smart user interfaces and useful
          interactions, developing web and mobile applications with better
          performance.
        </motion.p>
        <motion.div
          variants={variantsViewChildrenLi2}
          initial="odd"
          whileInView="even"
          className="flex gap-3 md:gap-4 items-center justify-start"
        >
          <motion.button
            className="flex border-none rounded-lg w-fit px-2 py-2 md:py-3 md:px-4 bg-dark text-light items-center justify-center gap-1 dark:text-dark dark:bg-light dark:hover:text-white  hover:bg-blue-700 hover:dark:bg-blue-700"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-xs md:text-sm font-semibold">Resume CV</p>
            <HiOutlineExternalLink className="text-base md:text-xl" />
          </motion.button>
          {/* <div className="flex items-center px-2 gap-x-4"> */}
          <RenderSvgs name="github" />
          <RenderSvgs name="linkedin" />
          <RenderSvgs name="facebook" />
          <RenderSvgs name="email" />
          {/* </div> */}
        </motion.div>
      </motion.div>
      <motion.div
        variants={showView}
        initial="odd"
        animate="even"
        className="row-start-1 md:col-start-2 w-4/6 md:w-5/6 m-auto"
      >
        <HeroSvg />
      </motion.div>
    </div>
  );
};

export default Hero;
