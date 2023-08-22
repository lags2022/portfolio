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
  variantsSkillsChildrens,
  variantsSkillsParents,
} from "../utils/variantsModal";

const Skills = () => {
  const skillsRender = {
    JavaScript: <Javascript />,
    TypeScript: <Typescript />,
    React: <React />,
    NodeJs: <Node />,
    ReactNative: <ReactNative />,
    TailwindCss: <Tailwind />,
    NextJs: <Next />,
    CSS3: <Css />,
    HTML5: <Html />,
    PostgreSQL: <PostgreSQL />,
    Redux: <Redux />,
    Graphql: <Graphql />,
    Git: <Git />,
    MongoDB: <MongoDB />,
    Figma: <Figma />,
  };

  return (
    <div className="sm:pt-12 flex flex-col">
      <h2 className="font-bold text-center text-xl my-0 md:text-2xl dark:text-light">
        Skills
      </h2>
      <motion.ul
        variants={variantsSkillsParents}
        initial="odd"
        animate="even"
        className="dark:bg-dark py-4 px-2 h-full flex flex-wrap items-center justify-center [&>li>svg]:w-12 [&>li>svg]:h-12 sm:[&>li>svg]:w-16 sm:[&>li>svg]:h-16 [&>li>p]:font-bold [&>li>p]:text-xs sm:[&>li>p]:text-sm [&>li>p]:text-center [&>li>svg]:m-auto gap-6 [&>li>p]:mb-1 dark:[&>li>p]:text-light"
      >
        {Object.entries(skillsRender).map((el) => (
          <motion.li
            key={el[0]}
            whileHover={{ scale: 1.1 }}
            variants={variantsSkillsChildrens}
          >
            <p>{el[0]}</p>
            {el[1]}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Skills;
