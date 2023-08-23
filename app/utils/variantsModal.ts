export const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export const flip = {
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const variantsView = {
  odd: ({ translateX }: any) => ({
    opacity: 0,
    translateX,
    filter: "blur(5px)",
  }),
  even: {
    opacity: 1,
    translateX: 0,
    filter: "blur(0)",
    transition: {
      duration: 0.75,
    },
  },
};

export const showView = {
  odd: {
    opacity: 0,
    filter: "blur(5px)",
  },
  even: {
    opacity: 1,
    filter: "blur(0)",
    transition: {
      duration: 0.5,
    },
  },
};

export const variantsSkillsParent = {
  odd: {
    opacity: 0,
  },
  even: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export const variantsSkillsChildren = {
  odd: {
    opacity: 0,
    scale: 0,
  },
  even: {
    opacity: 1,
    scale: 1,
  },
};

export const variantsViewChildrenUl = {
  odd: {
    opacity: 0,
    translateX: "100%",
    filter: "blur(5px)",
  },
  even: {
    opacity: 1,
    translateX: 0,
    filter: "blur(0)",
    transition: {
      when: "beforeChildren",
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export const variantsViewChildrenLi = {
  odd: {
    opacity: 0,
    translateX: "100%",
    filter: "blur(5px)",
  },
  even: {
    opacity: 1,
    translateX: 0,
    filter: "blur(0)",
  },
};

export const variantsViewChildrenUl2 = {
  odd: {
    scale: 0,
    opacity: 0,
  },
  even: {
    scale: 1,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export const variantsViewChildrenLi2 = {
  odd: {
    scale: 0,
    opacity: 0,
  },
  even: {
    scale: 1,
    opacity: 1,
  },
};

// export const variantsViewChildren = {
//   odd: {
//     opacity: 0,
//     translateY: "100%",
//     filter: "blur(5px)",
//   },
//   even: ({ delay }: any) => ({
//     opacity: 1,
//     translateY: 0,
//     filter: "blur(0)",
//     transition: {
//       delay,
//       duration: 1.5,
//     },
//   }),
// };
