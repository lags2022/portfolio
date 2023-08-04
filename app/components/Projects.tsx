"use client";

import { projects } from "../utils/project";
import Detail from "./Detail";
import { motion } from "framer-motion";
import { variantsViewChildrenUl2 } from "../utils/variantsModal";

const Projects = () => {
  return (
    <div id="projects" className="w-full flex flex-col gap-4">
      <motion.h2
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="pt-16 xs:pt-20 text-center font-bold text-xl md:text-3xl dark:text-light"
      >
        Projects
      </motion.h2>
      <motion.ul
        variants={variantsViewChildrenUl2}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center justify-center m-auto"
      >
        {projects.map(({ id, title, gif, ...props }) => (
          <Detail key={id} title={title} gif={gif} {...props} />
        ))}
      </motion.ul>
    </div>
  );
};

export default Projects;
