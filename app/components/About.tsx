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
      <div className="pt-10 xs:pt-24 h-full flex flex-col gap-4 items-start justify-start font-medium">
        <p>
          My name is{" "}
          <span className="font-bold text-darkBlue">Luis Guzman. </span>
          I&apos;m Full Stack Developer. I&apos;m from Peru.
        </p>
        <p>I&apos;m passionate about movies, technology and the programming.</p>
        <p>
          Professionally I&apos;m connected to the industry of web development
          and movil.
        </p>
        <p>
          I&apos;m excited to have the opportunity to contribute my skills and
          passion to your next project. Thank you for visiting me portfolio!
        </p>
      </div>
      <Skills />
    </div>
  );
};

export default About;
