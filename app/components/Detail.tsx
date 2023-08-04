"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ProjectsProps } from "../../types";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import { variantsViewChildrenLi2 } from "../utils/variantsModal";

const Detail = ({ title, gif, images, ...props }: ProjectsProps) => {
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
    <motion.li
      variants={variantsViewChildrenLi2}
      initial="odd"
      whileInView="even"
      className="sli lg:h-[250px] lg:w-[350px] h-auto w-auto"
    >
      <motion.button
        className="relative flex flex-col border-none items-center justify-center w-full h-full rounded-3xl shadow-lg"
        whileHover={{ scale: 1.05 }}
        onClick={onOpen}
      >
        <Image
          className="hidden-image h-full w-full cover border-none rounded-3xl shadow-lg md:hover:blur-[2px] z-0"
          src={images[0]}
          alt={title}
          width={300}
          height={200}
          loading="lazy"
        />
        <Image
          className="hidden-display h-full w-full cover border-none rounded-3xl shadow-lg md:hover:blur-[2px] z-0"
          src={gif}
          alt={title}
          width={300}
          height={200}
          priority={true}
        />
        <div className="stitle">
          <h5>{title}</h5>
        </div>
      </motion.button>
      <AnimatePresence initial={false} onExitComplete={() => null} mode="wait">
        {modal && (
          <Modal
            title={title}
            gif={gif}
            images={images}
            onClose={onClose}
            {...props}
          />
        )}
      </AnimatePresence>
    </motion.li>
  );
};

export default Detail;
