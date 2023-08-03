import Backdrop from "./Backdrop";
import { ProjectsProps } from "../../types";
import { flip } from "../utils/variantsModal";
import { motion } from "framer-motion";
import { FaWindowClose } from "react-icons/fa";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaAngleRight } from "react-icons/fa";

interface ModalProps extends ProjectsProps {
  onClose: () => void;
}

const onProject = () => {};

const Modal = ({
  onClose,
  title,
  description,
  tecnologies,
  images,
  github,
  link,
  imageFrontPage,
}: ModalProps) => {
  return (
    <Backdrop onClose={onClose}>
      <motion.div
        variants={flip}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="mx-3 m-auto h-auto max-h-screen w-[90vw] sm:w-[calc(100vw-100px)] max-w-3xl bg-dark dark:bg-light rounded-xl flex flex-col gap-2 justify-between items-center p-0"
        onClick={(evt) => evt.stopPropagation()}
      >
        <Carousel
          className="flex items-center justify-center mx-auto my-0 w-full overflow-hidden p-0 rounded-t-xl"
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          interval={5000}
        >
          {images.map((imgurl, i) => (
            <Image
              key={i}
              className="object-contain"
              src={imgurl}
              alt={title}
              width={1300}
              height={860}
              loading="lazy"
            />
          ))}
        </Carousel>
        <div className="px-6 pb-6 space-y-2 text-light dark:text-dark">
          <div className="flex flex-col xs:flex-row items-center justify-between ">
            <div className="flex items-center justify-center gap-x-2">
              <h2 className="text-base sm:text-lg md:text-2xl font-bold">
                {title}
              </h2>
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="bg-light rounded-sm"
              >
                <Image
                  src={`/images/svgs/github.svg`}
                  alt={title}
                  height={20}
                  width={20}
                />
              </motion.a>
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="anchor1 text-sm md:text-base "
            >
              Visit the app <FaAngleRight className="aright" size={12} />
            </a>
          </div>
          <p className="text-sm md:text-base font-medium">{description}</p>
          <p className="text-sm md:text-base font-medium">
            <span className="font-semibold">Built with:</span> {tecnologies}
          </p>
        </div>
        <motion.button
          className="absolute right-5 top-5 text-white z-50"
          onClick={onClose}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaWindowClose />
        </motion.button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
