import Backdrop from "./Backdrop";
import { dropIn } from "../utils/variantsModal";
import { motion } from "framer-motion";
import { FaWindowClose } from "react-icons/fa";

interface ModalNavBarProps {
  children: React.ReactNode;
  onClose: () => void;
}

const ModalNavBar = ({ onClose, children }: ModalNavBarProps) => {
  return (
    <Backdrop onClose={onClose}>
      <motion.div
        className="bg-white relative rounded-2xl flex flex-col gap-2 w-fit m-auto px-16 pt-8 pb-5"
        onClick={(evt) => evt.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
        <button className="absolute right-3 top-3" onClick={onClose}>
          <FaWindowClose size={15} />
        </button>
      </motion.div>
    </Backdrop>
  );
};

export default ModalNavBar;
