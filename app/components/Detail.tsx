"use client";

import { useState } from "react";
import Image from "next/image";
import { ProjectsProps } from "../../types";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";

const Detail = ({ title, ...props }: ProjectsProps) => {
  const [modal, setModal] = useState(false);
  const onClose = () => {
    setModal(false);
    document.body.classList.remove("open-modal");
  };
  const onOpen = () => {
    setModal(true);
    document.body.classList.add("open-modal");
  };
  return (
    <li className="sli lg:h-[250px] lg:w-[350px] xs:w-[300px] xs:h-[200px] h-auto w-auto">
      <motion.button
        className="relative flex flex-col items-center justify-center w-full h-full bg-red-200 rounded-3xl shadow-lg"
        whileHover={{ scale: 1.05 }}
        onClick={onOpen}
      >
        {/* <div className="absolute top-0 left-0 w-full h-full bg-transparent hover:bg-black/50 pointer-events-none " /> */}
        <Image
          className="h-full w-full cover rounded-3xl shadow-lg md:hover:blur-[1.5px] z-0"
          src="/images/details/got.webp"
          alt={title}
          width={516}
          height={290}
          loading="lazy"
        />
        <div className="stitle">
          <h5>{title}</h5>
        </div>
      </motion.button>
      <AnimatePresence initial={false} onExitComplete={() => null} mode="wait">
        {modal && <Modal onClose={onClose} title={title} {...props} />}
      </AnimatePresence>
    </li>
  );
};

export default Detail;
