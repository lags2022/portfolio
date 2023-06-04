"use client";

import { motion } from "framer-motion";

interface AnimatedProps {
  children: string;
  className?: string;
}

const motionWords = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const motionWord = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const Animated: React.FC<AnimatedProps> = ({ children, className }) => {
  return (
    <motion.h1
      className={className}
      variants={motionWords}
      initial="initial"
      animate="animate"
    >
      {children?.split(" ").map((word, i) => (
        <motion.span className="inline-block" key={i} variants={motionWord}>
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default Animated;
