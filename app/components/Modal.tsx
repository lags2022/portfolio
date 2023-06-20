import Backdrop from "./Backdrop";
import { ProjectsProps } from "../../types";
import { flip } from "../utils/variantsModal";
import { motion } from "framer-motion";
import { FaWindowClose } from "react-icons/fa";
import Image from "next/image";

interface ModalProps extends ProjectsProps {
  onClose: () => void;
}

const onProject = () => {};

const Modal = ({
  onClose,
  title,
  description,
  tecnologies,
  github,
}: ModalProps) => {
  return (
    <Backdrop onClose={onClose}>
      <motion.div
        variants={flip}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative m-auto h-fit w-fit bg-white rounded-xl flex flex-col gap-2 justify-center items-center p-0"
        onClick={(evt) => evt.stopPropagation()}
      >
        <div className="my-0 flex items-center justify-center m-auto w-[70vw] ">
          <Image
            className="object-contain h-[60vh] w-auto pt-6"
            src="/images/modal/1.webp"
            alt={title}
            width={516}
            height={290}
            loading="lazy"
          />
          <Image
            className="object-contain h-[60vh] w-auto pt-6"
            src="/images/modal/2.jpeg"
            alt={title}
            width={516}
            height={290}
            loading="lazy"
          />
          <Image
            className="object-contain h-[60vh] w-auto pt-6"
            src="/images/modal/3.webp"
            alt={title}
            width={516}
            height={290}
            loading="lazy"
          />
        </div>
        <div className="w-[800px] p-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p>{description}</p>
          <p>{tecnologies}</p>
        </div>
        <motion.button
          className="absolute right-3 top-3"
          onClick={onClose}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaWindowClose size={20} />
        </motion.button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
