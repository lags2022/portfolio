"use client";

import Image from "next/image";
import Skills from "./Skills";
import {
  variantsViewChildrenLi2,
  variantsViewChildrenUl2,
} from "../utils/variantsModal";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="w-full m-auto grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center overflow-hidden"
    >
      <motion.div
        className="pt-8 xs:pt-16 h-full flex-col items-center justify-center"
        variants={variantsViewChildrenUl2}
      >
        <motion.div
          variants={variantsViewChildrenLi2}
          initial="odd"
          whileInView="even"
          className="w-40 m-auto sm:w-auto"
        >
          <Image
            className="rounded-2xl my-6 drop-shadow-xl m-auto"
            src="/images/foto_portfolio.webp"
            width={200}
            height={250}
            alt="Biography"
            quality={100}
          />
        </motion.div>
        <motion.div
          variants={variantsViewChildrenUl2}
          className="font-medium text-sm md:text-base text-start px-3 sm:px-6 dark:text-light space-y-4"
        >
          <motion.p
            variants={variantsViewChildrenLi2}
            initial="odd"
            whileInView="even"
          >
            My name is{" "}
            <span className="font-bold text-blue-700 dark:text-blue-300">
              Luis Guzman.{" "}
            </span>
            I&apos;m Full Stack Developer. I&apos;m from Peru.
          </motion.p>
          <motion.p
            variants={variantsViewChildrenLi2}
            initial="odd"
            whileInView="even"
          >
            I&apos;m passionate about movies, technology and the programming.
          </motion.p>
          <motion.p
            variants={variantsViewChildrenLi2}
            initial="odd"
            whileInView="even"
          >
            Professionally I&apos;m connected to the industry of web development
            and movil.
          </motion.p>
          <motion.p
            variants={variantsViewChildrenLi2}
            initial="odd"
            whileInView="even"
          >
            I&apos;m excited to have the opportunity to contribute my skills and
            passion to your next project. Thank you for visiting me portfolio!
          </motion.p>
        </motion.div>
      </motion.div>
      <Skills />
    </div>
  );
};

export default About;
