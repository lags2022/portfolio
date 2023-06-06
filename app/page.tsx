"use client";

import Animated from "./components/Animated";
import { HiOutlineExternalLink } from "react-icons/hi";
import { motion } from "framer-motion";
import HeroSvg from "./components/HeroSvg";

export default function Home() {
  return (
    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 items-center justify-center w-full max-w-screen-lg m-auto px-4">
      <div className="flex flex-col gap-2">
        <Animated className="text-5xl font-bold inline-block pb-3">
          Full Stack Web Developer
        </Animated>
        <p className="font-medium">
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects
          showcasing my expertise in React.js and web development.
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
      <div className="w-4/6 m-auto py-2">
        <HeroSvg />
      </div>
    </div>
  );
}
