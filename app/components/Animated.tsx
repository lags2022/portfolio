"use client";

import { motion } from "framer-motion";

interface AnimatedProps {
  children: React.ReactNode;
  className?: string;
}

const motionWords = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.08,
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
      {children}
    </motion.h1>
  );
};

export default Animated;
