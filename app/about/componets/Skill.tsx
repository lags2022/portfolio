"use client";

import { motion } from "framer-motion";

interface SkillProps {
  name: string;
  x: string;
  y: string;
}

const Skill = ({ name, x, y }: SkillProps) => {
  return (
    <motion.div
      className="absolute rounded-full bg-dark text-light px-3 py-3 font-semibold cursor-default text-lg shadow-dark"
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y }}
      transition={{ duration: 1.0 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

export default Skill;
