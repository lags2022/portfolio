"use client";

import { HiOutlineExternalLink } from "react-icons/hi";
import { motion } from "framer-motion";
import HeroSvg from "./Svgs/HeroSvg";

const Hero = () => {
  return (
    <div className="h-[90vh] grid gap-2 grid-cols-1 md:grid-cols-2 items-center justify-center w-full m-auto">
      <div className="flex flex-col gap-2">
        <div className="mb-2 font-bold text-5xl">
          <h2>Hi,</h2>
          <h2>I'm Luis,</h2>
          <h2>full stack web developer</h2>
        </div>
        <p className="font-medium text-sm md:text-base">
          Solving design problems, building smart user interfaces and useful
          interactions, developing web and mobile applications with better
          performance.
        </p>

        <motion.button
          className="flex border-2 rounded-lg w-fit py-3 px-4 bg-dark text-light items-center justify-center gap-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.0 }}
        >
          <p className="text-sm font-semibold">Resume CV</p>
          <HiOutlineExternalLink size={20} />
        </motion.button>
      </div>
      <div className="w-5/6 m-auto">
        <HeroSvg />
      </div>
    </div>
  );
};

export default Hero;
