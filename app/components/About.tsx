"use client";

import Image from "next/image";
import Skills from "./Skills";
import { variantsView } from "../utils/variantsModal";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="w-full m-auto grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center overflow-hidden"
    >
      <motion.div
        className="pt-8 xs:pt-16 h-full flex-col items-center justify-center"
        variants={variantsView}
        initial="odd"
        custom={{ translateX: "-100%" }}
        whileInView="even"
      >
        <div className="w-40 m-auto sm:w-auto">
          <Image
            className="rounded-2xl my-6 drop-shadow-xl m-auto"
            src="/images/profile/developer-pic-2.webp"
            width={200}
            height={250}
            alt="Biography"
            loading="lazy"
          />
        </div>
        <p className="font-medium text-sm md:text-base text-center px-3 sm:px-6 dark:text-light ">
          My name is{" "}
          <span className="font-bold text-blue-700 dark:text-blue-300">
            Luis Guzman
          </span>
          . I&apos;m a full stack and freelance web developer in Peru. I&apos;m
          passionate about movies, technology and the programming.
          Professionally I&apos;m connected to the industry of web development
          and movil. I&apos;m excited to have the opportunity to contribute my
          skills and passion to your next project. Thank you for visiting me
          portfolio!
        </p>
      </motion.div>
      <Skills />
    </div>
  );
};

export default About;
