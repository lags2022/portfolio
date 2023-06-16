"use client";

import { useState } from "react";
import Image from "next/image";
import { ProjectsProps } from "../../types";
import { motion } from "framer-motion";
import Modal from "./Modal";

const Detail = ({ title }: ProjectsProps) => {
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
    <li className="lg:h-[400px] lg:w-[400px] w-[300px] h-[300px]">
      <motion.button
        className="flex flex-col items-center justify-center w-full h-full border-2 border-blue-300 bg-red-200 rounded-3xl"
        whileHover={{ scale: 1.05 }}
        onClick={onOpen}
      >
        <Image
          className="object-contain"
          src="/images/details/got.webp"
          alt={title}
          width={516}
          height={290}
          loading="lazy"
        />
        <motion.h5 className="top-0 px-4 py-2 text-lg font-semibold">
          {title}
        </motion.h5>
      </motion.button>
      {modal && <Modal onClose={onClose} title={title} />}
    </li>
  );
};

export default Detail;
