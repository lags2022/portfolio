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
import PostgreSQL from "./Svgs/PostgreSQL";
import {
  variantsSkillsChildren,
  variantsSkillsParent,
} from "../utils/variantsModal";

const Skills = () => {
  const skillsArray = [
    { name: "JavaScript", component: <Javascript /> },
    { name: "TypeScript", component: <Typescript /> },
    { name: "React", component: <React /> },
    { name: "NodeJs", component: <Node /> },
    { name: "ReactNative", component: <ReactNative /> },
    { name: "TailwindCss", component: <Tailwind /> },
    { name: "NextJs", component: <Next /> },
    { name: "CSS3", component: <Css /> },
    { name: "HTML5", component: <Html /> },
    { name: "PostgreSQL", component: <PostgreSQL /> },
    { name: "Redux", component: <Redux /> },
    { name: "Graphql", component: <Graphql /> },
    { name: "Git", component: <Git /> },
    { name: "MongoDB", component: <MongoDB /> },
    // { name: "Figma", component: <Figma /> },
  ];

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-center text-xl my-0 md:text-2xl dark:text-light">
        Skills
      </h2>
      <motion.ul
        variants={variantsSkillsParent}
        initial="odd"
        animate="even"
        className="dark:bg-dark py-4 px-2 h-full flex flex-wrap items-center justify-center [&>li>svg]:w-12 [&>li>svg]:h-12 sm:[&>li>svg]:w-16 sm:[&>li>svg]:h-16 [&>li>svg]:m-auto gap-6 "
      >
        {skillsArray.map(({ name, component }) => (
          <motion.li key={name} variants={variantsSkillsChildren}>
            <p className="text-sm text-center md:text-base font-bold mb-1 dark:text-light">
              {name}
            </p>
            {component}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Skills;
