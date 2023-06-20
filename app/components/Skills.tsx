"use client";

import { motion } from "framer-motion";
import Css from "./Svgs/Css";
import Figma from "./Svgs/Figma";
import Git from "./Svgs/Git";
import Graphql from "./Svgs/Graphql";
import Html from "./Svgs/Html";
import Javascript from "./Svgs/Javascript";
import MongoDB from "./Svgs/MongoDB";
import Next from "./Svgs/Next";
import Node from "./Svgs/Node";
import React from "./Svgs/React";
import ReactNative from "./Svgs/ReactNative";
import Redux from "./Svgs/Redux";
import Tailwind from "./Svgs/Tailwind";
import Typescript from "./Svgs/Typescript";

const Skills = () => {
  return (
    <div className="sm:pt-12 flex flex-col">
      <h2 className="font-bold text-center text-xl md:text-2xl my-2 sm:my-6">
        Skills
      </h2>
      <ul className="bg-slate-200 py-4 px-2 h-full flex flex-wrap items-center justify-center [&>li>svg]:w-12 [&>li>svg]:h-12 sm:[&>li>svg]:w-16 sm:[&>li>svg]:h-16 [&>li>p]:font-bold [&>li>p]:text-xs sm:[&>li>p]:text-sm [&>li>p]:text-center [&>li>svg]:m-auto gap-6 [&>li>p]:mb-1 rounded-2xl">
        <motion.li whileHover={{ scale: 1.1 }}>
          <p>Javascript</p>
          <Javascript />
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <p>React</p>
          <React />
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <p>NextJS</p>
          <Next />
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <p>Typescript</p>
          <Typescript />
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <p>Node</p>
          <Node />
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <p>Tailwind</p>
          <Tailwind />
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <p>React Native</p>
          <ReactNative />
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <p>CSS3</p>
          <Css />
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <p>HTML5</p>
          <Html />
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <p>MongoDB</p>
          <MongoDB />
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <p>Redux</p>
          <Redux />
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <p>Graphql</p>
          <Graphql />
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <p>Git</p>
          <Git />
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <p>Figma</p>
          <Figma />
        </motion.li>
      </ul>
    </div>
  );
};

export default Skills;
