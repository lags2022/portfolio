"use client";

import Image from "next/image";
import Animated from "../components/Animated";
import { HiOutlineExternalLink } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full max-w-screen-lg m-auto px-4">
      <Image
        className="hidden md:block m-auto"
        src="/images/profile/developer-pic-1.webp"
        width={569}
        height={569}
        alt="Hero"
        priority={true}
      />
      <div className="flex flex-col gap-2">
        <Animated className="text-5xl font-bold inline-block pb-3">
          Turning vision into reality with code and design.
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
    </div>
  );
}
